local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_4_1()
    recorder:tryPcall(
        "Listener.new()",
        function()
            local listener = Listener.new()
            if type(listener) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Listener.new(tap)",
        function()
            local listener = Listener.new("http")
            if type(listener) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Listener.new(nil,filter)",
        function()
            local listener = Listener.new(nil, "")
            if type(listener) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Listener.new(nil,nil,allfields)",
        function()
            local listener = Listener.new(nil, nil, true)
            if type(listener) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Listener.list()",
        function()
            local list = Listener.list()
            if type(list) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "listener:remove",
        function()
            local listener = Listener.new()
            listener:remove()
        end
    )
    recorder:tryPcall(
        "listener:__tostring",
        function()
            local listener = Listener.new()
            tostring(listener)
        end
    )
    recorder:tryPcall(
        "listener:packet",
        function()
            local listener = Listener.new()
            listener.packet = function(pinfo, tvb, tapinfo)
                print("hello listener:packet!")
                print("pinfo.src: " .. tostring(pinfo.src))
                print("tvb.len(): " .. tostring(tvb:len()))
                print("tapinfo: " .. tostring(tapinfo == nil and "null" or pairs(tapinfo)))
            end
        end
    )
    recorder:tryPcall(
        "listener:draw",
        function()
            local listener = Listener.new()
            listener.draw = function()
                print("hello listener:draw!")
            end
        end
    )
    recorder:tryPcall(
        "listener:reset",
        function()
            local listener = Listener.new()
            listener.reset = function()
                print("hello listener:reset!")
            end
        end
    )
end
local function test_chapter_11_4()
    print("begin test_chapter_11_4")
    test_chapter_11_4_1()
    print("end test_chapter_11_4")
end
local chapter_11_4_proto = Proto.new("chapter_11_4_proto", "test")
chapter_11_4_proto.init = function()
end
chapter_11_4_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_4()
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_4_proto)
return ____exports
