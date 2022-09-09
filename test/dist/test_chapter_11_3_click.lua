local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_3_3_click()
    recorder:tryPcall(
        "gui_enabled()",
        function()
            local enabled = gui_enabled()
        end
    )
    if not gui_enabled() then
        print("Skip GUI test, because of gui is disabled.")
        return
    end
    recorder:tryPcall(
        "open_capture_file(filename,filter)",
        function()
            local result = open_capture_file("./test/captures/http.pcap", "")
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "get_color_filter_slot(row)",
        function()
            set_color_filter_slot(1, "tcp.port")
            local s = get_color_filter_slot(1)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "set_color_filter_slot(row,text)",
        function()
            set_color_filter_slot(1, "tcp.port")
        end
    )
    recorder:tryPcall(
        "redissect_packets()",
        function()
            redissect_packets()
        end
    )
    recorder:tryPcall(
        "reload_lua_plugins()",
        function()
            reload_lua_plugins()
        end
    )
end
local function test_chapter_11_3_click()
    print("begin test_chapter_11_3_click")
    test_chapter_11_3_3_click()
    print("end test_chapter_11_3_click")
end
if gui_enabled() then
    local textWindow = TextWindow.new()
    local isCalled = false
    local function myCallback()
        if isCalled then
            return
        end
        isCalled = true
        test_chapter_11_3_click()
        textWindow:close()
        recorder:printResult()
        os.exit(0)
    end
    textWindow:add_button("click to continue test", myCallback)
    textWindow:set_atclose(myCallback)
else
    print("Skip GUI test, because of gui is disabled.")
end
return ____exports
