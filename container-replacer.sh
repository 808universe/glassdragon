echo "$1"
echo "$2"

sedStr="
  s+$1+$2+g
"
echo "$sedStr"
sed -r "$sedStr" server/kubernetes/deployment.yaml > server/kubernetes/deployment.yaml.new
rm server/kubernetes/deployment.yaml
mv server/kubernetes/deployment.yaml.new server/kubernetes/deployment.yaml
