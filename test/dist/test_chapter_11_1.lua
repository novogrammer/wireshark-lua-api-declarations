--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local DUMMYFILE_PATH = "/tmp/dummyfile"
local recorder = __TS__New(Recorder)
local function test_chapter_11_1_1()
    recorder:tryPcall(
        "Dumper.new(filename)",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype)",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH, wtap_filetypes.PCAP)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype,encap)",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH, wtap_filetypes.PCAP, wtap_encaps.ETHERNET)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:close()",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:flush()",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH)
            dumper:flush()
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:dump()",
        function()
            local dumper = Dumper.new(DUMMYFILE_PATH)
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
            local dumper = Dumper.new_for_current(DUMMYFILE_PATH)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new_for_current(filename,filetype)",
        function()
            local dumper = Dumper.new_for_current(DUMMYFILE_PATH, wtap_filetypes.PCAP)
            dumper:close()
        end
    )
end
local function test_chapter_11_1_2()
    recorder:tryPcall(
        "PseudoHeader.none()",
        function()
            local pseudoHeader = PseudoHeader.none()
        end
    )
    recorder:tryPcall(
        "PseudoHeader.eth(fcslen)",
        function()
            local pseudoHeader = PseudoHeader.eth(1000)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.eth()",
        function()
            local pseudoHeader = PseudoHeader.eth()
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm()",
        function()
            local pseudoHeader = PseudoHeader.atm()
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(aal)",
        function()
            local pseudoHeader = PseudoHeader.atm(1)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,vpi)",
        function()
            local pseudoHeader = PseudoHeader.atm(nil, 1)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,nil,vci)",
        function()
            local pseudoHeader = PseudoHeader.atm(nil, nil, 1)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,nil,nil,channel)",
        function()
            local pseudoHeader = PseudoHeader.atm(nil, nil, nil, 1)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,nil,nil,nil,cells)",
        function()
            local pseudoHeader = PseudoHeader.atm(
                nil,
                nil,
                nil,
                nil,
                1
            )
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,nil,nil,nil,nil,aal5u2u)",
        function()
            local pseudoHeader = PseudoHeader.atm(
                nil,
                nil,
                nil,
                nil,
                nil,
                1
            )
        end
    )
    recorder:tryPcall(
        "PseudoHeader.atm(nil,nil,nil,nil,nil,nil,aal5len)",
        function()
            local pseudoHeader = PseudoHeader.atm(
                nil,
                nil,
                nil,
                nil,
                nil,
                nil,
                1
            )
        end
    )
    recorder:tryPcall(
        "PseudoHeader.mtp2()",
        function()
            local pseudoHeader = PseudoHeader.mtp2()
        end
    )
    recorder:tryPcall(
        "PseudoHeader.mtp2(nil,annexa)",
        function()
            local pseudoHeader = PseudoHeader.mtp2(nil, 1)
        end
    )
    recorder:tryPcall(
        "PseudoHeader.mtp2(nil,nil,linknum)",
        function()
            local pseudoHeader = PseudoHeader.mtp2(nil, nil, 1)
        end
    )
end
local function test_chapter_11_1()
    print("begin test_chapter_11_1")
    test_chapter_11_1_1()
    test_chapter_11_1_2()
    print("end test_chapter_11_1")
end
local chapter_11_1_proto = Proto.new("chapter_11_1_proto", "test")
chapter_11_1_proto.init = function()
end
chapter_11_1_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_1()
    recorder:printResult()
    os.remove(DUMMYFILE_PATH)
    return 0
end
register_postdissector(chapter_11_1_proto)
return ____exports
