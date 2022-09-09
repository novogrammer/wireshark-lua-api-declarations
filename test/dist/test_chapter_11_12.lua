local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_12_1()
    recorder:tryPcall(
        "get_version()",
        function()
            local result = get_version()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "set_plugin_info(table)",
        function()
            local ____table = {}
            ____table.version = "1.0.1"
            set_plugin_info(____table)
            ____table.description = "my description"
            ____table.author = "Yusuke Kawamoto"
            ____table.repository = "https://github.com/novogrammer/wireshark-lua-api-declarations"
            set_plugin_info(____table)
        end
    )
    recorder:tryPcall(
        "format_date(timestamp)",
        function()
            local timestamp = 0
            local result = format_date(timestamp)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "format_time(timestamp)",
        function()
            local timestamp = 0
            local result = format_time(timestamp)
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "get_preference(preference)",
        function()
            do
                local result = get_preference("")
                if type(result) ~= "nil" then
                    error("not nil", 0)
                end
            end
            do
                local result = get_preference("http.tls.port")
                if type(result) ~= "string" then
                    error("not string", 0)
                end
            end
            do
                local result = get_preference("gui.fileopen.preview")
                if type(result) ~= "number" then
                    error("not number", 0)
                end
            end
            do
                local result = get_preference("gui.ask_unsaved")
                if type(result) ~= "boolean" then
                    error("not boolean", 0)
                end
            end
        end
    )
    recorder:tryPcall(
        "set_preference(preference,value)",
        function()
            do
                local result = set_preference("http.tls.port", "1")
                if result ~= true then
                    error("not true", 0)
                end
            end
            do
                local result = set_preference("http.tls.port", "443")
                if result ~= true then
                    error("not true", 0)
                end
            end
            do
                local result = set_preference("http.tls.port", "443")
                if result ~= false then
                    error("not false", 0)
                end
            end
            do
                local result = set_preference("foo", "bar")
                if type(result) ~= "nil" then
                    error("not nil", 0)
                end
            end
        end
    )
    recorder:tryPcall(
        "reset_preference(preference)",
        function()
            do
                local result = reset_preference("http.tls.port")
                if result ~= true then
                    error("not true", 0)
                end
            end
            do
                local result = reset_preference("foo")
                if type(result) ~= "nil" then
                    error("not nil", 0)
                end
            end
        end
    )
    recorder:tryPcall(
        "apply_preferences()",
        function()
            apply_preferences()
        end
    )
    recorder:tryPcall(
        "report_failure(text)",
        function()
            report_failure("test report_failure")
        end
    )
    recorder:tryPcall(
        "loadfile(filename)",
        function()
            local loaded_chunk = loadfile("./test/dist/dummy_lua.lua")
            if type(loaded_chunk) == "nil" then
                error("nil", 0)
            end
            if loaded_chunk then
                loaded_chunk()
            end
        end
    )
    recorder:tryPcall(
        "dofile(filename)",
        function()
            dofile("./test/dist/dummy_lua.lua")
        end
    )
    recorder:tryPcall(
        "register_stat_cmd_arg(argument)",
        function()
            register_stat_cmd_arg("foo")
        end
    )
    recorder:tryPcall(
        "register_stat_cmd_arg(argument,action)",
        function()
            register_stat_cmd_arg(
                "foo",
                function()
                    print("action")
                end
            )
        end
    )
end
local function test_chapter_11_12()
    print("begin test_chapter_11_12")
    test_chapter_11_12_1()
    print("end test_chapter_11_12")
end
test_chapter_11_12()
recorder:printResult()
return ____exports
