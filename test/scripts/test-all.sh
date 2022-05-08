#!/bin/bash

CURRENT=$(cd $(dirname $0) && pwd)
PARENT=$(cd $(dirname $0)/.. && pwd)
# echo $(pwd)

# tshark -r $PARENT/captures/empty.pcap  -X lua_script:$PARENT/dist/test_chapter_11_1.lua

tshark -r $PARENT/captures/http.pcap  -X lua_script:$PARENT/dist/test_chapter_11_1.lua
