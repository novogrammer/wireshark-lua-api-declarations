--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local PATH_TO_DUMMY_DIR = "/tmp/dummydir"
local recorder = __TS__New(Recorder)
local function test_chapter_11_10_1()
    recorder:tryPcall(
        "Dir.make(name)",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/make"
            local result = Dir.make(mydir)
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
            Dir.remove(mydir)
        end
    )
    recorder:tryPcall(
        "Dir.exists(name)",
        function()
            local result = Dir.exists(PATH_TO_DUMMY_DIR)
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.remove(name)",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/remove"
            Dir.make(mydir)
            local result = Dir.remove(mydir)
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.remove_all(name)",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/remove"
            Dir.make(mydir)
            Dir.make(mydir .. "/some")
            local result = Dir.remove_all(mydir)
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.open(pathname)",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/open"
            Dir.make(mydir)
            local result = Dir.open(mydir)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
            Dir.remove_all(mydir)
        end
    )
    recorder:tryPcall(
        "Dir.open(pathname,extension)",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/open"
            Dir.make(mydir)
            local result = Dir.open(mydir, ".txt")
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
            Dir.remove_all(mydir)
        end
    )
    recorder:tryPcall(
        "Dir.personal_config_path()",
        function()
            local result = Dir.personal_config_path()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.personal_config_path(filename)",
        function()
            local result = Dir.personal_config_path("filename")
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.global_config_path()",
        function()
            local result = Dir.global_config_path()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.global_config_path(filename)",
        function()
            local result = Dir.global_config_path("filename")
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.personal_plugins_path()",
        function()
            local result = Dir.personal_plugins_path()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dir.global_plugins_path()",
        function()
            local result = Dir.global_plugins_path()
            if type(result) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "dir:__call()",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/open"
            Dir.make(mydir)
            Dir.make(mydir .. "/some")
            local dir = Dir.open(mydir)
            local result = dir()
            if type(result) ~= "string" then
                error("not string", 0)
            end
            Dir.remove_all(mydir)
        end
    )
    recorder:tryPcall(
        "dir:close()",
        function()
            local mydir = PATH_TO_DUMMY_DIR .. "/open"
            Dir.make(mydir)
            Dir.make(mydir .. "/some")
            local dir = Dir.open(mydir)
            dir:close()
            Dir.remove_all(mydir)
        end
    )
end
local function test_chapter_11_10()
    print("begin test_chapter_11_10")
    test_chapter_11_10_1()
    print("end test_chapter_11_10")
end
Dir.make(PATH_TO_DUMMY_DIR)
test_chapter_11_10()
Dir.remove_all(PATH_TO_DUMMY_DIR)
recorder:printResult()
return ____exports
