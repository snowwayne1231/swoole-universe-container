# Require
1. Docker
2. Git


```Shell
git clone [this]
cd source
git clone [AntMan/api_universe_swoole]
cd api_universe_swoole
cp ./env/.env.qa1 .env

```
需要修改 .env 
1. 確認 redis connect to docker container
2. 確認 mongo connect to docker container and cancel the replica_set
3. (2024 12月) 建議測試環境 mysql 34.96.218.9


```Shell
cd ..
docker-compose up -d
```
可以網址輸入 http://127.0.0.1:9001/ 看看是否正確啟動
初始時只啟動 API 與 ADMIN (可見api_universe_swoole/.env)


```Shell
docker exec -it php bash
ps -ef | grep AdminUniverseHttp
netstat -plnt
```
如果有異常可以進入容器看是否啟動


```Shell
sh ./clearn_logs.sh
```
清除logs