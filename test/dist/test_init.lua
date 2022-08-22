--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local ____utils = require("utils")
local typeof_ts = ____utils.typeof_ts
local DUMMYFILE_PATH = "/tmp/dummyfile"
local recorder = __TS__New(Recorder)
local function test_init()
    print("begin test_init")
    recorder:tryPcall(
        "file_exists(name)",
        function()
            if file_exists(DUMMYFILE_PATH) then
                error("already exists", 0)
            end
            local dumper = Dumper.new(DUMMYFILE_PATH)
            dumper:close()
            if not file_exists(DUMMYFILE_PATH) then
                error("not exists", 0)
            end
            os.remove(DUMMYFILE_PATH)
            if file_exists(DUMMYFILE_PATH) then
                error("not deleted", 0)
            end
        end
    )
    recorder:tryPcall(
        "typeof_ts(obj)",
        function()
            if typeof_ts("a") ~= "string" then
                error("not string", 0)
            end
            local uint64 = UInt64.new()
            if typeof_ts(uint64) ~= "UInt64" then
                error("not UInt64", 0)
            end
        end
    )
    print("end test_init")
end
local init_proto = Proto.new("init_proto", "test")
init_proto.init = function()
end
init_proto.dissector = function(buffer, pinfo, tree)
    test_init()
    recorder:printResult()
    return 0
end
register_postdissector(init_proto)
return ____exports
