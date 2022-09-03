--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_11_1()
    recorder:tryPcall(
        "wtap_file_type_subtype_description(filetype)",
        function()
            local filetype = wtap_filetypes.JSON
            local result = wtap_file_type_subtype_description(filetype)
            if type(result) ~= "string" then
                error("not string", 0)
            end
            local result2 = wtap_file_type_subtype_description(9999)
            if type(result2) ~= "nil" then
                error("not nil", 0)
            end
        end
    )
    recorder:tryPcall(
        "wtap_file_type_subtype_name(filetype)",
        function()
            local filetype = wtap_filetypes.JSON
            local result = wtap_file_type_subtype_name(filetype)
            if type(result) ~= "string" then
                error("not string", 0)
            end
            local result2 = wtap_file_type_subtype_name(9999)
            if type(result2) ~= "nil" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "wtap_name_to_file_type_subtype(name)",
        function()
            local name = "json"
            local result = wtap_name_to_file_type_subtype(name)
            if type(result) ~= "number" then
                error("not number", 0)
            end
            local result2 = wtap_name_to_file_type_subtype("x")
            if type(result2) ~= "nil" then
                error("not nil", 0)
            end
        end
    )
    recorder:tryPcall(
        "wtap_pcap_file_type_subtype()",
        function()
            local result = wtap_pcap_file_type_subtype()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "wtap_pcap_nsec_file_type_subtype()",
        function()
            local result = wtap_pcap_nsec_file_type_subtype()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "wtap_pcapng_file_type_subtype()",
        function()
            local result = wtap_pcapng_file_type_subtype()
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
end
local function test_chapter_11_11()
    print("begin test_chapter_11_10")
    test_chapter_11_11_1()
    print("end test_chapter_11_10")
end
test_chapter_11_11()
recorder:printResult()
return ____exports
