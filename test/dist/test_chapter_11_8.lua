--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local chapter_11_8_proto = Proto.new("chapter_11_8_proto", "test")
local fields = {}
local protofield_none = ProtoField.none("abbr_none")
fields[1] = protofield_none
local protofield_bytes = ProtoField.bytes("abbr_bytes")
fields[2] = protofield_bytes
local protofield_uint8 = ProtoField.uint8("abbr_bytes")
fields[3] = protofield_uint8
chapter_11_8_proto.fields = fields
local experts = {}
local protoexpert = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.COMMENT)
experts[1] = protoexpert
chapter_11_8_proto.experts = experts
local function test_chapter_11_8_1()
    recorder:tryPcall(
        "ByteArray.new()",
        function()
            local bytearray = ByteArray.new()
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "ByteArray.new(hexbytes)",
        function()
            local bytearray = ByteArray.new("a1 b2 c3 d4")
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "ByteArray.new(hexbytes,separator)",
        function()
            local bytearray = ByteArray.new("a1-b2-c3-d4", "-")
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "ByteArray.__concat(first, second)",
        function()
            local bytearray = ByteArray.new("a1 b2") .. ByteArray.new("c3 d4")
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:__eq(rhs)",
        function()
            local result = ByteArray.new("a1 b2") == ByteArray.new("c3 d4")
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:prepend(rhs)",
        function()
            local bytearray = ByteArray.new("a1 b2")
            bytearray:prepend(ByteArray.new("c3 d4"))
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:append(rhs)",
        function()
            local bytearray = ByteArray.new("a1 b2")
            bytearray:append(ByteArray.new("c3 d4"))
            if type(bytearray) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:set_size(size)",
        function()
            local bytearray = ByteArray.new("a1 b2")
            bytearray:set_size(4)
        end
    )
    recorder:tryPcall(
        "bytearray:set_index(index,value)",
        function()
            local bytearray = ByteArray.new("a1 b2")
            bytearray:set_index(1, 255)
        end
    )
    recorder:tryPcall(
        "bytearray:get_index(index)",
        function()
            local bytearray = ByteArray.new("a1 b2")
            local result = bytearray:get_index(1)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:len()",
        function()
            local bytearray = ByteArray.new("a1 b2")
            local result = bytearray:len()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:subset(offset,length)",
        function()
            local bytearray = ByteArray.new("a1 b2 c3 d4")
            local result = bytearray:subset(1, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:base64_decode()",
        function()
            local bytearray = ByteArray.new("59 57 4a 6a")
            local result = bytearray:base64_decode()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:raw()",
        function()
            local bytearray = ByteArray.new("61 62 63")
            local result = bytearray:raw()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:raw(offset)",
        function()
            local bytearray = ByteArray.new("61 62 63")
            local result = bytearray:raw(1)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:raw(nil,length)",
        function()
            local bytearray = ByteArray.new("61 62 63")
            local result = bytearray:raw(nil, 2)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:tohex()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local result = bytearray:tohex()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:tohex(lowercase)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local result = bytearray:tohex(true)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:tohex(nil,separator)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local result = bytearray:tohex(nil, "-")
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:__tostring()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local result = tostring(bytearray)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "bytearray:tvb(name)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local result = bytearray:tvb("name")
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
end
local function test_chapter_11_8_2()
    recorder:tryPcall(
        "tvb:__tostring()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tostring(tvb)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:reported_len()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:reported_len()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:captured_len()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:captured_len()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:len()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:len()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:reported_length_remaining()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:reported_length_remaining()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:bytes()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:bytes()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:bytes(offset)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:bytes(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:bytes(nil,length)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:bytes(nil, 1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:offset()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:offset()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:_call()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:_call()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:_call(offset)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:_call(nil,length)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb(nil, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:range()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:range()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:range(offset)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:range(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:range(nil,length)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:range(nil, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:raw()",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:raw()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:raw(offset)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:raw(1)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:raw(nil,length)",
        function()
            local bytearray = ByteArray.new("01 02 03")
            local tvb = bytearray:tvb("name")
            local result = tvb:raw(nil, 2)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvb:__eq()",
        function()
            local bytearray1 = ByteArray.new("a1 b2")
            local tvb1 = bytearray1:tvb("name1")
            local bytearray2 = ByteArray.new("c3 d4")
            local tvb2 = bytearray2:tvb("name2")
            local result = tvb1 == tvb2
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
end
local function test_chapter_11_8_3()
    recorder:tryPcall(
        "tvbrange:tvb()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:tvb()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:uint()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:uint()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_uint()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_uint()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:uint64()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:uint64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_uint64()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_uint64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:int()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:int()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_int()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_int()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:int64()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:int64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_int64()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_int64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:float()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:float()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_float()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_float()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:ipv4()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:ipv4()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_ipv4()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_ipv4()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:ipv6()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4 a1 b2 c3 d4 a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:ipv6()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:ether()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4 e5 f6"):tvb("name"):range()
            local result = tvbrange:ether()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:nstime()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result1, result2 = tvbrange:nstime()
            if type(result1) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(result2) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:nstime(encoding)",
        function()
            local tvbrange = ByteArray.new("32 30 31 34 2d 30 37 2d 30 34"):tvb("name"):range()
            local result1, result2 = tvbrange:nstime(ENC_ISO_8601_DATE)
            if type(result1) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(result2) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:nstime(encoding) null",
        function()
            local tvbrange = ByteArray.new("32 30 31 34 2d 30 37 2d 30 34"):tvb("name"):range()
            local result1, result2 = tvbrange:nstime(ENC_ISO_8601_TIME)
            if type(result1) ~= "nil" then
                error("not nil", 0)
            end
            if type(result2) ~= "nil" then
                error("not nil", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_nstime()",
        function()
            local tvbrange = ByteArray.new("a1 b2 c3 d4"):tvb("name"):range()
            local result = tvbrange:le_nstime()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:string()",
        function()
            local tvbrange = ByteArray.new("30 31 33"):tvb("name"):range()
            local result = tvbrange:string()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:string(encoding)",
        function()
            local tvbrange = ByteArray.new("30 31 33"):tvb("name"):range()
            local result = tvbrange:string(ENC_UTF_8)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:ustring()",
        function()
            local tvbrange = ByteArray.new("00 31 00 32 00 33"):tvb("name"):range()
            local result = tvbrange:ustring()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_ustring()",
        function()
            local tvbrange = ByteArray.new("31 00 32 00 33 00"):tvb("name"):range()
            local result = tvbrange:le_ustring()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:stringz()",
        function()
            local tvbrange = ByteArray.new("30 31 33 00"):tvb("name"):range()
            local result = tvbrange:stringz()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:stringz(encoding)",
        function()
            local tvbrange = ByteArray.new("30 31 33 00"):tvb("name"):range()
            local result = tvbrange:stringz(ENC_UTF_8)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:strsize()",
        function()
            local tvbrange = ByteArray.new("30 31 33 00"):tvb("name"):range()
            local result = tvbrange:strsize()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:strsize(encoding)",
        function()
            local tvbrange = ByteArray.new("30 31 33 00"):tvb("name"):range()
            local result = tvbrange:strsize(ENC_UTF_8)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:ustringz()",
        function()
            local tvbrange = ByteArray.new("00 31 00 32 00 33 00 00"):tvb("name"):range()
            local result = tvbrange:ustringz()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:le_ustring()",
        function()
            local tvbrange = ByteArray.new("31 00 32 00 33 00 00 00"):tvb("name"):range()
            local result = tvbrange:le_ustringz()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:bytes()",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:bytes()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:bytes(encoding)",
        function()
            local tvbrange = ByteArray.new("31 32 33 34"):tvb("name"):range()
            local result = tvbrange:bytes(ENC_STR_HEX)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:range()",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:range()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:range(offset)",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:range(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:range(nil,length)",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:range(nil, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:uncompress()",
        function()
            local tvbrange = ByteArray.new("1F 8B 08 00 01 DD D2 62 00 03 33 34 32 06 00 D2 63 48 88 03 00 00 00"):tvb("name"):range()
            local result = tvbrange:uncompress("new name")
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:len()",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:len()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:raw()",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:raw()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:raw(offset)",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:raw(1)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:raw(nil,2)",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tvbrange:raw(nil, 2)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:__eq()",
        function()
            local tvbrange1 = ByteArray.new("31 32"):tvb("name1"):range()
            local tvbrange2 = ByteArray.new("31 32"):tvb("name2"):range()
            local result = tvbrange1 == tvbrange2
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "tvbrange:__tostring()",
        function()
            local tvbrange = ByteArray.new("31 32 33"):tvb("name"):range()
            local result = tostring(tvbrange)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_8(buffer, pinfo, tree)
    print("begin test_chapter_11_8")
    test_chapter_11_8_1()
    test_chapter_11_8_2()
    test_chapter_11_8_3()
    print("end test_chapter_11_8")
end
chapter_11_8_proto.init = function()
end
chapter_11_8_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_8(buffer, pinfo, tree)
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_8_proto)
return ____exports
