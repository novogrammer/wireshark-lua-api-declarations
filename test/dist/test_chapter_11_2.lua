--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local DUMMYFILE_PATH = "/tmp/dummyfile"
local recorder = __TS__New(Recorder)
local field
local function test_chapter_11_2_outside()
    print("begin test_chapter_11_2_outside")
    recorder:tryPcall(
        "Field.new(fieldname)",
        function()
            field = Field.new("http.request")
        end
    )
    print("end test_chapter_11_2_outside")
end
local function test_chapter_11_2_1()
    recorder:tryPcall(
        "Field.list()",
        function()
            local list = Field.list()
        end
    )
    recorder:tryPcall(
        "field:__call()",
        function()
            local fieldinfo = field()
        end
    )
    recorder:tryPcall(
        "field:__tostring()",
        function()
            local s = tostring(field)
        end
    )
    recorder:tryPcall(
        "field.name",
        function()
            local name = field.name
            if name == nil then
                error("name is null", 0)
            end
        end
    )
    recorder:tryPcall(
        "field.display",
        function()
            local display = field.display
            if display == nil then
                error("display is null", 0)
            end
        end
    )
    recorder:tryPcall(
        "field.type",
        function()
            local ____type = field.type
            if ____type == nil then
                error("type is null", 0)
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
        end
    )
    recorder:tryPcall(
        "fieldinfo:__unm()",
        function()
            local fieldinfo = field()
            local unm = -fieldinfo
        end
    )
    recorder:tryPcall(
        "fieldinfo:__call()",
        function()
            local fieldinfo = field()
            local value = fieldinfo()
        end
    )
    recorder:tryPcall(
        "fieldinfo:__tostring()",
        function()
            local fieldinfo = field()
            local s = tostring(fieldinfo)
        end
    )
    recorder:tryPcall(
        "fieldinfo:__eq()",
        function()
            local fieldinfo = field()
            local result = fieldinfo == fieldinfo
        end
    )
    recorder:tryPcall(
        "fieldinfo:__le()",
        function()
            local fieldinfo = field()
            local result = fieldinfo <= fieldinfo
        end
    )
    recorder:tryPcall(
        "fieldinfo:__lt()",
        function()
            local fieldinfo = field()
            local result = fieldinfo < fieldinfo
        end
    )
    recorder:tryPcall(
        "fieldinfo.len",
        function()
            local fieldinfo = field()
            local len = fieldinfo.len
        end
    )
    recorder:tryPcall(
        "fieldinfo.offset",
        function()
            local fieldinfo = field()
            local offset = fieldinfo.offset
        end
    )
    recorder:tryPcall(
        "fieldinfo.value",
        function()
            local fieldinfo = field()
            local value = fieldinfo.value
        end
    )
    recorder:tryPcall(
        "fieldinfo.label",
        function()
            local fieldinfo = field()
            local label = fieldinfo.label
        end
    )
    recorder:tryPcall(
        "fieldinfo.display",
        function()
            local fieldinfo = field()
            local display = fieldinfo.display
        end
    )
    recorder:tryPcall(
        "fieldinfo.display",
        function()
            local fieldinfo = field()
            local ____type = fieldinfo.type
        end
    )
    recorder:tryPcall(
        "fieldinfo.source",
        function()
            local fieldinfo = field()
            local source = fieldinfo.source
        end
    )
    recorder:tryPcall(
        "fieldinfo.range",
        function()
            local fieldinfo = field()
            local range = fieldinfo.range
        end
    )
    recorder:tryPcall(
        "fieldinfo.generated",
        function()
            local fieldinfo = field()
            local generated = fieldinfo.generated
        end
    )
    recorder:tryPcall(
        "fieldinfo.hidden",
        function()
            local fieldinfo = field()
            local hidden = fieldinfo.hidden
        end
    )
    recorder:tryPcall(
        "fieldinfo.is_url",
        function()
            local fieldinfo = field()
            local is_url = fieldinfo.is_url
        end
    )
    recorder:tryPcall(
        "fieldinfo.little_endian",
        function()
            local fieldinfo = field()
            local little_endian = fieldinfo.little_endian
        end
    )
    recorder:tryPcall(
        "fieldinfo.big_endian",
        function()
            local fieldinfo = field()
            local big_endian = fieldinfo.big_endian
        end
    )
    recorder:tryPcall(
        "fieldinfo.name",
        function()
            local fieldinfo = field()
            local name = fieldinfo.name
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
            if result[1].display == nil then
                error("display is null", 0)
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
chapter_11_2_proto.init = function(self)
end
chapter_11_2_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_2()
    recorder:printResult()
    os.remove(DUMMYFILE_PATH)
    return 0
end
register_postdissector(chapter_11_2_proto)
return ____exports
