echo "$1"
echo "$2"

sedStr="
  s!%%$1%%!$2!g;
"
echo "$sedStr"
sed -r "$sedStr" server/Dockerfile > server/Dockerfile.new
rm server/Dockerfile
mv server/Dockerfile.new server/Dockerfile
