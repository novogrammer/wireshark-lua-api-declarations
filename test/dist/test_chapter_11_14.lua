local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_14_1()
    recorder:tryPcall(
        "Struct.pack(format, value)",
        function()
            do
                local result, pos = Struct.pack("I", 67324752)
                if type(result) ~= "string" then
                    error("not string", 0)
                end
                if type(pos) ~= "nil" then
                    error("not nil", 0)
                end
            end
            do
                local result, pos = Struct.pack("I=I", 67324752, 67324752)
                if type(result) ~= "string" then
                    error("not string", 0)
                end
                if type(pos) ~= "number" then
                    error("not number", 0)
                end
            end
        end
    )
    recorder:tryPcall(
        "Struct.unpack(format, struct)",
        function()
            local packed = Struct.pack("I", 67324752)
            local result = Struct.unpack("I", packed)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.unpack(format, struct, begin)",
        function()
            local packed = Struct.pack("I", 67324752)
            local result = Struct.unpack("I", packed, 1)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.size(format)",
        function()
            local result = Struct.size("I")
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.values(format)",
        function()
            local result = Struct.values("I")
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.tohex(bytestring)",
        function()
            local packed = Struct.pack("I", 67324752)
            local result = Struct.tohex(packed)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.tohex(bytestring,lowercase)",
        function()
            local packed = Struct.pack("I", 67324752)
            local result = Struct.tohex(packed, true)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Struct.tohex(bytestring,nil,separator)",
        function()
            local packed = Struct.pack("I", 67324752)
            local result = Struct.tohex(packed, nil, " ")
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_14()
    print("begin test_chapter_11_14")
    test_chapter_11_14_1()
    print("end test_chapter_11_14")
end
test_chapter_11_14()
recorder:printResult()
return ____exports
