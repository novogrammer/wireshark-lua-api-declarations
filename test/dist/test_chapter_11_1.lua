--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
function __TS__New(target, ...)
    local instance = setmetatable({}, target.prototype)
    instance:____constructor(...)
    return instance
end

local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_1_1()
    recorder:tryPcall(
        "Dumper.new(filename)",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype)",
        function()
            local dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype,encap)",
        function()
            local dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP, wtap_encaps.ETHERNET)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:close()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:flush()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:flush()
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:dump()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:dump(
                0,
                PseudoHeader.none(),
                ByteArray.new("ff fe ff fe")
            )
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new_for_current(filename)",
        function()
            local dumper = Dumper.new_for_current("dummyfile")
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new_for_current(filename,filetype)",
        function()
            local dumper = Dumper.new_for_current("dummyfile", wtap_filetypes.PCAP)
            dumper:close()
        end
    )
end
local function test_chapter_11_1()
    print("begin test_chapter_11_1")
    test_chapter_11_1_1()
    print("end test_chapter_11_1")
end
local chapter_11_1_proto = Proto.new("chapter_11_1_proto", "test")
chapter_11_1_proto.init = function(self)
end
chapter_11_1_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_1()
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_1_proto)
return ____exports
