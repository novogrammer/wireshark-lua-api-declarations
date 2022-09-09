--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_13_1()
    recorder:tryPcall(
        "Int64.decode(string)",
        function()
            local s = string.char(
                1,
                35,
                69,
                103,
                137,
                171,
                205,
                239
            )
            local result = Int64.decode(s)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.decode(string,endian)",
        function()
            local s = string.char(
                1,
                35,
                69,
                103,
                137,
                171,
                205,
                239
            )
            local result = Int64.decode(s, false)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.new()",
        function()
            local result = Int64.new()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.new(value)",
        function()
            local result = Int64.new(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.new(value,highvalue)",
        function()
            local result = Int64.new(1, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.max()",
        function()
            local result = Int64.max()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.min()",
        function()
            local result = Int64.min()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Int64.fromhex(hex)",
        function()
            local result = Int64.fromhex("10")
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:encode()",
        function()
            local int64 = Int64.new()
            local result = int64:encode()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:encode(endian)",
        function()
            local int64 = Int64.new()
            local result = int64:encode(false)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__call()",
        function()
            local int64 = Int64.new()
            local result = int64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:tonumber()",
        function()
            local int64 = Int64.new()
            local result = int64:tonumber()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:tohex()",
        function()
            local int64 = Int64.new()
            local result = int64:tohex()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:tohex(numbytes)",
        function()
            local int64 = Int64.new()
            local result = int64:tohex(8)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:higher()",
        function()
            local int64 = Int64.new()
            local result = int64:higher()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:lower()",
        function()
            local int64 = Int64.new()
            local result = int64:lower()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__tostring()",
        function()
            local int64 = Int64.new()
            local result = tostring(int64)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__unm()",
        function()
            local int64 = Int64.new(1)
            local result = -int64
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__add()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l + int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__sub()",
        function()
            local int64l = Int64.new(2)
            local int64r = Int64.new(1)
            local result = int64l - int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__mul()",
        function()
            local int64l = Int64.new(2)
            local int64r = Int64.new(3)
            local result = int64l * int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__div()",
        function()
            local int64l = Int64.new(8)
            local int64r = Int64.new(4)
            local result = int64l / int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__mod()",
        function()
            local int64l = Int64.new(8)
            local int64r = Int64.new(3)
            local result = int64l % int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__pow()",
        function()
            local int64l = Int64.new(4)
            local int64r = Int64.new(2)
            local result = int64l ^ int64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__eq()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l == int64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__lt()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l < int64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:__le()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l <= int64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:bnot()",
        function()
            local int64 = Int64.new(1)
            local result = int64:bnot()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:band()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l:band(int64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:bor()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l:bor(int64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:bxor()",
        function()
            local int64l = Int64.new(1)
            local int64r = Int64.new(2)
            local result = int64l:bxor(int64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:lshift(numbits)",
        function()
            local int64 = Int64.new(1)
            local result = int64:lshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:rshift(numbits)",
        function()
            local int64 = Int64.new(1)
            local result = int64:rshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:arshift(numbits)",
        function()
            local int64 = Int64.new(1)
            local result = int64:arshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:rol(numbits)",
        function()
            local int64 = Int64.new(1)
            local result = int64:rol(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:ror(numbits)",
        function()
            local int64 = Int64.new(1)
            local result = int64:ror(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "int64:bswap()",
        function()
            local int64 = Int64.new(1)
            local result = int64:bswap()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
end
local function test_chapter_11_13_2()
    recorder:tryPcall(
        "UInt64.decode(string)",
        function()
            local s = string.char(
                1,
                35,
                69,
                103,
                137,
                171,
                205,
                239
            )
            local result = UInt64.decode(s)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.decode(string,endian)",
        function()
            local s = string.char(
                1,
                35,
                69,
                103,
                137,
                171,
                205,
                239
            )
            local result = UInt64.decode(s, false)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.new()",
        function()
            local result = UInt64.new()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.new(value)",
        function()
            local result = UInt64.new(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.new(value,highvalue)",
        function()
            local result = UInt64.new(1, 2)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.max()",
        function()
            local result = UInt64.max()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.min()",
        function()
            local result = UInt64.min()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "UInt64.fromhex(hex)",
        function()
            local result = UInt64.fromhex("10")
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:encode()",
        function()
            local uint64 = UInt64.new()
            local result = uint64:encode()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:encode(endian)",
        function()
            local uint64 = UInt64.new()
            local result = uint64:encode(false)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__call()",
        function()
            local uint64 = UInt64.new()
            local result = uint64()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:tonumber()",
        function()
            local uint64 = UInt64.new()
            local result = uint64:tonumber()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__tostring()",
        function()
            local uint64 = UInt64.new()
            local result = tostring(uint64)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:tohex()",
        function()
            local uint64 = UInt64.new()
            local result = uint64:tohex()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:tohex(numbytes)",
        function()
            local uint64 = UInt64.new()
            local result = uint64:tohex(8)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:higher()",
        function()
            local uint64 = UInt64.new()
            local result = uint64:higher()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:lower()",
        function()
            local uint64 = UInt64.new()
            local result = uint64:lower()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__unm()",
        function()
            local uint64 = UInt64.new(1)
            local result = -uint64
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__add()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l + uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__sub()",
        function()
            local uint64l = UInt64.new(2)
            local uint64r = UInt64.new(1)
            local result = uint64l - uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__mul()",
        function()
            local uint64l = UInt64.new(2)
            local uint64r = UInt64.new(3)
            local result = uint64l * uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__div()",
        function()
            local uint64l = UInt64.new(8)
            local uint64r = UInt64.new(4)
            local result = uint64l / uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__mod()",
        function()
            local uint64l = UInt64.new(8)
            local uint64r = UInt64.new(3)
            local result = uint64l % uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__pow()",
        function()
            local uint64l = UInt64.new(4)
            local uint64r = UInt64.new(2)
            local result = uint64l ^ uint64r
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__eq()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l == uint64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__lt()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l < uint64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:__le()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l <= uint64r
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:bnot()",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:bnot()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:band()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l:band(uint64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:bor()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l:bor(uint64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:bxor()",
        function()
            local uint64l = UInt64.new(1)
            local uint64r = UInt64.new(2)
            local result = uint64l:bxor(uint64r)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:lshift(numbits)",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:lshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:rshift(numbits)",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:rshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:arshift(numbits)",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:arshift(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:rol(numbits)",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:rol(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:ror(numbits)",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:ror(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "uint64:bswap()",
        function()
            local uint64 = UInt64.new(1)
            local result = uint64:bswap()
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
end
local function test_chapter_11_13()
    print("begin test_chapter_11_13")
    test_chapter_11_13_1()
    test_chapter_11_13_2()
    print("end test_chapter_11_13")
end
test_chapter_11_13()
recorder:printResult()
return ____exports
