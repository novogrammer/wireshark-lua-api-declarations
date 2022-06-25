--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local field
local function test_chapter_11_2_outside()
    print("begin test_chapter_11_2_outside")
    recorder:tryPcall(
        "Field.new(fieldname)",
        function()
            field = Field.new("http.request")
            if type(field) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    print("end test_chapter_11_2_outside")
end
local function test_chapter_11_2_1()
    recorder:tryPcall(
        "Field.list()",
        function()
            local list = Field.list()
            if type(list) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "field:__call()",
        function()
            local fieldinfo = field()
            if type(fieldinfo) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "field:__tostring()",
        function()
            local s = tostring(field)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "field.name",
        function()
            local name = field.name
            if type(name) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "field.display",
        function()
            local display = field.display
            if type(display) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "field.type",
        function()
            local t = field.type
            if type(t) ~= "number" then
                error("not number", 0)
            end
        end
    )
end
local function test_chapter_11_2_2()
    recorder:tryPcall(
        "fieldinfo:__len()",
        function()
            local fieldinfo = field()
            local length = #fieldinfo
            if type(length) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__unm()",
        function()
            local fieldinfo = field()
            local unm = -fieldinfo
            if type(unm) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__call()",
        function()
            local fieldinfo = field()
            local value = fieldinfo()
            if value == nil then
                error("value is null", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__tostring()",
        function()
            local fieldinfo = field()
            local s = tostring(fieldinfo)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__eq()",
        function()
            local fieldinfo = field()
            local result = fieldinfo == fieldinfo
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__le()",
        function()
            local fieldinfo = field()
            local result = fieldinfo <= fieldinfo
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo:__lt()",
        function()
            local fieldinfo = field()
            local result = fieldinfo < fieldinfo
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.len",
        function()
            local fieldinfo = field()
            local len = fieldinfo.len
            if type(len) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.offset",
        function()
            local fieldinfo = field()
            local offset = fieldinfo.offset
            if type(offset) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.value",
        function()
            local fieldinfo = field()
            local value = fieldinfo.value
            if value == nil then
                error("value is null", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.label",
        function()
            local fieldinfo = field()
            local label = fieldinfo.label
            if type(label) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.display",
        function()
            local fieldinfo = field()
            local display = fieldinfo.display
            if type(display) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.display",
        function()
            local fieldinfo = field()
            local t = fieldinfo.type
            if type(t) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.source",
        function()
            local fieldinfo = field()
            local source = fieldinfo.source
            if type(source) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.range",
        function()
            local fieldinfo = field()
            local range = fieldinfo.range
            if type(range) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.generated",
        function()
            local fieldinfo = field()
            local generated = fieldinfo.generated
            if type(generated) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.hidden",
        function()
            local fieldinfo = field()
            local hidden = fieldinfo.hidden
            if type(hidden) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.is_url",
        function()
            local fieldinfo = field()
            local is_url = fieldinfo.is_url
            if type(is_url) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.little_endian",
        function()
            local fieldinfo = field()
            local little_endian = fieldinfo.little_endian
            if type(little_endian) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.big_endian",
        function()
            local fieldinfo = field()
            local big_endian = fieldinfo.big_endian
            if type(big_endian) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "fieldinfo.name",
        function()
            local fieldinfo = field()
            local name = fieldinfo.name
            if type(name) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_2_3()
    recorder:tryPcall(
        "all_field_infos()",
        function()
            local result = {all_field_infos()}
            if #result == nil then
                error("length is null", 0)
            end
            if type(result[1].display) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_2()
    print("begin test_chapter_11_2")
    test_chapter_11_2_1()
    test_chapter_11_2_2()
    test_chapter_11_2_3()
    print("end test_chapter_11_2")
end
test_chapter_11_2_outside()
local chapter_11_2_proto = Proto.new("chapter_11_2_proto", "test")
chapter_11_2_proto.init = function()
end
chapter_11_2_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_2()
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_2_proto)
return ____exports
