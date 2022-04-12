#!/bin/bash

CURRENT=$(cd $(dirname $0) && pwd)
PARENT=$(cd $(dirname $0)/.. && pwd)
# echo $(pwd)

tshark -c 0 -X lua_script:$PARENT/dist/test_chapter_11_1.lua
