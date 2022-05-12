#!/bin/bash

set -e -u -o pipefail

CURRENT=$(cd $(dirname $0) && pwd)
PARENT=$(cd $(dirname $0)/.. && pwd)
# echo $(pwd)

# tshark -r $PARENT/captures/empty.pcap  -X lua_script:$PARENT/dist/test_chapter_11_1.lua


COMMAND_LIST=(
  "tshark -r $PARENT/captures/http.pcap  -X lua_script:$PARENT/dist/test_chapter_11_1.lua"
)

output_list=()

for command in "${COMMAND_LIST[@]}"; do
  echo "command: $command"
  set +e
  output=`$command`
  result=$?
  set -e
  echo "$output"
  output_list+=("$output")
  if [ $result -ne 0 ]; then
    echo "command failed"
    exit 1
  fi
done

for output in "${output_list[@]}"; do
  set +e
  echo $output | grep "test failed." > /dev/null
  result=$?
  set -e
  if [ $result -eq 0 ]; then
    echo "test-all.sh failed."
    exit 1
  fi
done
