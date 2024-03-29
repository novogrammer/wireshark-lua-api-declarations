#!/bin/bash

set -e -u -o pipefail

CURRENT=$(cd $(dirname $0) && pwd)
PARENT=$(cd $(dirname $0)/.. && pwd)
# echo $(pwd)

# tshark -r $PARENT/captures/empty.pcap  -X lua_script:$PARENT/dist/test_chapter_11_1.lua

echo "---"
tshark --version
echo "---"
wireshark --version
echo "---"

XVFB_RUN=
if command -v xvfb-run &> /dev/null; then
  XVFB_RUN=xvfb-run
fi
# try "--log-level=noisy"
COMMAND_LIST=(
  # tshark
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_init.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_1.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_2.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_3.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_4.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_5.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_6.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_7.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_8.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_9.lua -r $PARENT/captures/file_read.txt -w $PARENT/captures/file_write.txt -F name-write"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_10.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_11.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_12.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_13.lua"
  "tshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_14.lua"
  # wireshark
  "$XVFB_RUN wireshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_3.lua"
  # need click by hand
  # "$XVFB_RUN wireshark -r $PARENT/captures/http.pcap -X lua_script:$PARENT/dist/test_chapter_11_3_click.lua"
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
