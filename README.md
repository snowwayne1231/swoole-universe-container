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
```env
redis_host = redis-server
redis_port = 6379
redis_pwd = [password]
```
2. 確認 mongo connect to docker container and cancel the replica_set
```env
mongodb_type = DB
mongodb_url = mongo:27017
mongodb_username = [user]
mongodb_password = [password]
mongodb_database = [db]
# replica_set = rs0
```
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
可清除logs



前端位置 127.0.0.1/skin013
後台位置 127.0.0.1/admin_client