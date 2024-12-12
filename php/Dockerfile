ARG PHP_VERSION
FROM ${PHP_VERSION}

ARG TZ

RUN apk --no-cache add tzdata \
    && cp "/usr/share/zoneinfo/$TZ" /etc/localtime \
    && echo "$TZ" > /etc/timezone

# COPY ./php.ini /usr/local/etc/php/php.ini
# COPY ./supervisor.conf /etc/supervisor/conf.d/supervisord.conf

RUN apk add gnu-libiconv libstdc++ --no-cache

RUN apk add zlib-dev icu-dev g++ make autoconf libpng-dev libzip-dev gmp-dev libssh2-dev bzip2-dev

RUN docker-php-ext-configure intl \
    && docker-php-ext-install intl bcmath gd zip bz2 gmp mysqli pdo_mysql

RUN apk add redis

RUN pecl install mongodb-1.9.1 \
    && docker-php-ext-enable mongodb

# ssh2 for lower php 8.0
RUN pecl install ssh2-1.2 \
    && docker-php-ext-enable ssh2

# Install composer and change it's cache home
RUN curl -o /usr/bin/composer https://mirrors.aliyun.com/composer/composer.phar \
    && chmod +x /usr/bin/composer
ENV COMPOSER_HOME=/tmp/composer

RUN composer require iexbase/tron-api

RUN apk add bash shadow supervisor --no-cache

RUN mkdir /opt/webserver && mkdir /opt/weblogs && mkdir /opt/weblogs/supv


WORKDIR /tmp

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf", "-n"]
