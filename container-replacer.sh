echo "$1"
echo "$2"

sedStr="
  s!%%$1%%!$2!g;
"
echo "$sedStr"
sed -r "$sedStr" .gitlab-ci.yml > .gitlab-ci.yml.new
rm .gitlab-ci.yml
mv .gitlab-ci.yml.new .gitlab-ci.yml
