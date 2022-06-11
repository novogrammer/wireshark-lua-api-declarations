--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function sleep(self, n)
    os.execute("sleep " .. tostring(tonumber(n)))
end
local function test_chapter_11_3_1()
    if not gui_enabled() then
        print("Skip GUI test, because of gui is disabled.")
        return
    end
    recorder:tryPcall(
        "ProgDlg.new()",
        function()
            local progDlg = ProgDlg.new()
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "ProgDlg.new(title)",
        function()
            local progDlg = ProgDlg.new("title")
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "ProgDlg.new(nil,task)",
        function()
            local progDlg = ProgDlg.new(nil, "task")
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "progdlg:update(progress)",
        function()
            local progDlg = ProgDlg.new()
            progDlg:update(1)
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "progdlg:update(progress,task)",
        function()
            local progDlg = ProgDlg.new()
            progDlg:update(1, "task")
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "progdlg:stopped()",
        function()
            local progDlg = ProgDlg.new()
            progDlg:stopped()
            progDlg:close()
        end
    )
    recorder:tryPcall(
        "progdlg:close()",
        function()
            local progDlg = ProgDlg.new()
            progDlg:close()
        end
    )
end
local function test_chapter_11_3_2()
    if not gui_enabled() then
        print("Skip GUI test, because of gui is disabled.")
        return
    end
    recorder:tryPcall(
        "TextWindow.new()",
        function()
            local textWindow = TextWindow.new()
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "TextWindow.new(title)",
        function()
            local textWindow = TextWindow.new("title")
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:set_atclose(action)",
        function()
            local textWindow = TextWindow.new()
            local isCalled = false
            textWindow:set_atclose(function()
                isCalled = true
            end)
            if isCalled then
                error("called.", 0)
            end
            textWindow:close()
            if not isCalled then
                error("not called.", 0)
            end
        end
    )
    recorder:tryPcall(
        "textwindow:set(text)",
        function()
            local textWindow = TextWindow.new()
            textWindow:set("set")
            if textWindow:get_text() ~= "set" then
                error("set failed.", 0)
            end
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:append(text)",
        function()
            local textWindow = TextWindow.new()
            textWindow:set("set")
            textWindow:append("append")
            if textWindow:get_text() ~= "setappend" then
                error("append failed.", 0)
            end
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:clear(text)",
        function()
            local textWindow = TextWindow.new()
            textWindow:set("set")
            textWindow:clear()
            if textWindow:get_text() ~= "" then
                error("clear failed.", 0)
            end
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:prepend(text)",
        function()
            local textWindow = TextWindow.new()
            textWindow:set("set")
            textWindow:prepend("prepend")
            if textWindow:get_text() ~= "prependset" then
                error("prepend failed.", 0)
            end
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:set_editable()",
        function()
            local textWindow = TextWindow.new()
            textWindow:set_editable()
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:set_editable(editable)",
        function()
            local textWindow = TextWindow.new()
            textWindow:set_editable(true)
            textWindow:close()
        end
    )
    recorder:tryPcall(
        "textwindow:add_button(label,function)",
        function()
            local textWindow = TextWindow.new()
            textWindow:add_button(
                "foo",
                function()
                end
            )
            textWindow:close()
        end
    )
end
local function test_chapter_11_3_3()
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
        "register_menu(name,action)",
        function()
            register_menu(
                "foo",
                function()
                end
            )
        end
    )
    recorder:tryPcall(
        "register_menu(name,action,group)",
        function()
            register_menu(
                "foo",
                function()
                end,
                MENU_ANALYZE_UNSORTED
            )
        end
    )
    recorder:tryPcall(
        "new_dialog(title,action,a)",
        function()
            new_dialog(
                "title",
                function(____, a)
                end,
                "a"
            )
        end
    )
    recorder:tryPcall(
        "new_dialog(title,action,a,b)",
        function()
            new_dialog(
                "title",
                function(____, a, b)
                end,
                "a",
                "b"
            )
        end
    )
    recorder:tryPcall(
        "retap_packets()",
        function()
            retap_packets()
        end
    )
    recorder:tryPcall(
        "copy_to_clipboard()",
        function()
            copy_to_clipboard("hello")
        end
    )
    recorder:tryPcall(
        "get_filter()",
        function()
            get_filter()
        end
    )
    recorder:tryPcall(
        "set_filter(filter)",
        function()
            set_filter("tcp.port eq 80")
        end
    )
    recorder:tryPcall(
        "apply_filter()",
        function()
            apply_filter()
        end
    )
    recorder:tryPcall(
        "reload()",
        function()
            reload()
        end
    )
    recorder:tryPcall(
        "reload_packets()",
        function()
            reload_packets()
        end
    )
    recorder:tryPcall(
        "browser_open_url(url)",
        function()
            browser_open_url("https://example.com/browser_open_url")
        end
    )
    recorder:tryPcall(
        "browser_open_data_file(filename)",
        function()
            browser_open_data_file("invalidfilename")
        end
    )
    print("Skip some test, run test_chapter_11_3_click by your hand.")
end
local function test_chapter_11_3()
    print("begin test_chapter_11_3")
    test_chapter_11_3_1()
    test_chapter_11_3_2()
    test_chapter_11_3_3()
    print("end test_chapter_11_3")
end
test_chapter_11_3()
local chapter_11_3_proto = Proto.new("chapter_11_3_proto", "test")
chapter_11_3_proto.init = function(self)
    recorder:printResult()
    if gui_enabled() then
        os.exit(0)
    end
end
chapter_11_3_proto.dissector = function(buffer, pinfo, tree)
    return 0
end
register_postdissector(chapter_11_3_proto)
return ____exports
