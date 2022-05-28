--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_3_1()
    recorder:tryPcall(
        "foo",
        function()
            error("todo", 0)
        end
    )
end
local function test_chapter_11_3_2()
    recorder:tryPcall(
        "foo",
        function()
            error("todo", 0)
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
    recorder:tryPcall(
        "foo",
        function()
            error("todo", 0)
        end
    )
end
local function test_chapter_11_3()
    print("begin test_chapter_11_3")
    test_chapter_11_3_1()
    test_chapter_11_3_2()
    test_chapter_11_3_3()
    print("end test_chapter_11_3")
end
test_chapter_11_3()
recorder:printResult()
if gui_enabled() then
    os.exit(0)
end
return ____exports
