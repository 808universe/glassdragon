echo "$1"
echo "$2"

sedStr="
  s!%%$1%%!$2!g;
"
echo "$sedStr"
sed -r "$sedStr" docker/Dockerfile > docker/Dockerfile.new
rm docker/Dockerfile
mv docker/Dockerfile.new docker/Dockerfile
