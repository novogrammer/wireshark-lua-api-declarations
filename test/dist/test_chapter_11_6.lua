--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_6_1()
    recorder:tryPcall(
        "Dissector.get(name)",
        function()
            local dissector = Dissector.get("http")
            if type(dissector) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Dissector.list()",
        function()
            local list = Dissector.list()
            if type(list) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "dissector:__tostring()",
        function()
            local dissector = Dissector.get("http")
            local s = tostring(dissector)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_6_2()
    recorder:tryPcall(
        "DissectorTable.new(tablename)",
        function()
            local dissectortable = DissectorTable.new("tablename01")
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,uiname)",
        function()
            local dissectortable = DissectorTable.new("tablename02", "bar")
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,type)",
        function()
            local dissectortable = DissectorTable.new("tablename03", nil, ftypes.UINT8)
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,nil,base)",
        function()
            local dissectortable = DissectorTable.new("tablename04", nil, nil, base.NONE)
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,nil,nil,proto)",
        function()
            local chapter_11_6_2_proto01 = Proto.new("chapter_11_6_2_proto01", "chapter_11_6_2_proto01")
            local dissectortable = DissectorTable.new(
                "tablename05",
                nil,
                nil,
                nil,
                chapter_11_6_2_proto01
            )
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.list()",
        function()
            local list = DissectorTable.list()
            if type(list) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.heuristic_list()",
        function()
            local list = DissectorTable.heuristic_list()
            if type(list) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "DissectorTable.get(tablename)",
        function()
            local dissectortable = DissectorTable.get("tablename01")
            if type(dissectortable) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "dissectortable:add(pattern,dissector)",
        function()
            local dissector = Dissector.get("http")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:add(1, dissector)
            dissectortable:add("1-2", dissector)
        end
    )
    recorder:tryPcall(
        "dissectortable:set(pattern,dissector)",
        function()
            local dissector = Dissector.get("http")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:set(1, dissector)
            dissectortable:set("1-2", dissector)
        end
    )
    recorder:tryPcall(
        "dissectortable:remove(pattern,dissector)",
        function()
            local dissector = Dissector.get("http")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:remove(1, dissector)
            dissectortable:remove("1-2", dissector)
        end
    )
    recorder:tryPcall(
        "dissectortable:remove_all(dissector)",
        function()
            local dissector = Dissector.get("http")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:remove_all(dissector)
        end
    )
    recorder:tryPcall(
        "dissectortable:get_dissector(pattern)",
        function()
            local dissector = Dissector.get("http")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:remove_all(dissector)
            dissectortable:add(1, dissector)
            local result = dissectortable:get_dissector(1)
            if type(result) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "dissectortable:add_for_decode_as(proto)",
        function()
            local chapter_11_6_2_proto02 = Proto.new("chapter_11_6_2_proto02", "chapter_11_6_2_proto02")
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            dissectortable:add_for_decode_as(chapter_11_6_2_proto02)
        end
    )
    recorder:tryPcall(
        "dissectortable:add_for_decode_as(proto)",
        function()
            local dissectortable = DissectorTable.get("tablename01")
            if dissectortable == nil then
                error("dissectortable is null", 0)
            end
            local s = tostring(dissectortable)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_6_3()
    recorder:tryPcall(
        "Pref.bool(label,default,descr)",
        function()
            local pref = Pref.bool("label", true, "descr")
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Pref.uint(label,default,descr)",
        function()
            local pref = Pref.uint("label", 1, "descr")
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Pref.string(label,default,descr)",
        function()
            local pref = Pref.string("label", "a", "descr")
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Pref.enum(label,default,descr)",
        function()
            local A = 1
            local B = 1
            local myEnum = {{0, "A", A}, {1, "B", B}}
            local pref = Pref.enum(
                "label",
                A,
                "descr",
                myEnum,
                true
            )
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Pref.range(label,default,descr,max)",
        function()
            local pref = Pref.range("label", "1-2", "descr", 2)
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Pref.statictext(label,descr)",
        function()
            local pref = Pref.statictext("label", "descr")
            if type(pref) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
end
local function test_chapter_11_6_4()
    recorder:tryPcall(
        "prefs:__newindex(name,pref)",
        function()
            local chapter_11_6_4_proto01 = Proto.new("chapter_11_6_4_proto01", "chapter_11_6_4_proto01")
            local prefs = chapter_11_6_4_proto01.prefs
            local pref = Pref.bool("label", true, "descr")
            prefs.a = pref
        end
    )
    recorder:tryPcall(
        "prefs:__index(name)",
        function()
            local chapter_11_6_4_proto02 = Proto.new("chapter_11_6_4_proto02", "chapter_11_6_4_proto02")
            local prefs = chapter_11_6_4_proto02.prefs
            local pref = Pref.bool("label", true, "descr")
            prefs.a = pref
            local result = prefs.a
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
end
local function test_chapter_11_6_5()
    recorder:tryPcall(
        "Proto.new(name,desc)",
        function()
            local chapter_11_6_5_proto01 = Proto.new("chapter_11_6_5_proto01", "chapter_11_6_5_proto01")
            if type(chapter_11_6_5_proto01) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto:__call(name,desc)",
        function()
            local chapter_11_6_5_proto02 = Proto.new("chapter_11_6_5_proto02", "chapter_11_6_5_proto02")
            local chapter_11_6_5_proto03 = chapter_11_6_5_proto02("chapter_11_6_5_proto03", "chapter_11_6_5_proto03")
            if type(chapter_11_6_5_proto03) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto:register_heuristic(listname,func)",
        function()
            local chapter_11_6_5_proto04 = Proto.new("chapter_11_6_5_proto04", "chapter_11_6_5_proto04")
            local function h(buffer, pinfo, tree)
                return true
            end
            chapter_11_6_5_proto04:register_heuristic("tcp", h)
        end
    )
    recorder:tryPcall(
        "proto.dissector",
        function()
            local chapter_11_6_5_proto05 = Proto.new("chapter_11_6_5_proto05", "chapter_11_6_5_proto05")
            local function d(buffer, pinfo, tree)
                return 1
            end
            chapter_11_6_5_proto05.dissector = d
            local d2 = chapter_11_6_5_proto05.dissector
            if type(d2) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto.prefs_changed",
        function()
            local chapter_11_6_5_proto06 = Proto.new("chapter_11_6_5_proto06", "chapter_11_6_5_proto06")
            chapter_11_6_5_proto06.prefs_changed = function()
            end
        end
    )
    recorder:tryPcall(
        "proto.init",
        function()
            local chapter_11_6_5_proto07 = Proto.new("chapter_11_6_5_proto07", "chapter_11_6_5_proto07")
            chapter_11_6_5_proto07.init = function()
            end
        end
    )
    recorder:tryPcall(
        "proto.name",
        function()
            local chapter_11_6_5_proto08 = Proto.new("chapter_11_6_5_proto08", "chapter_11_6_5_proto08")
            local name = chapter_11_6_5_proto08.name
            if type(name) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto.description",
        function()
            local chapter_11_6_5_proto09 = Proto.new("chapter_11_6_5_proto09", "chapter_11_6_5_proto09")
            local description = chapter_11_6_5_proto09.description
            if type(description) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto.fields",
        function()
            local chapter_11_6_5_proto10 = Proto.new("chapter_11_6_5_proto10", "chapter_11_6_5_proto10")
            local fields = {}
            fields[1] = ProtoField.int8("abbr")
            chapter_11_6_5_proto10.fields = fields
            local fields2 = chapter_11_6_5_proto10.fields
            if type(fields2) ~= "table" then
                error("not table", 0)
            end
        end
    )
    recorder:tryPcall(
        "proto.experts",
        function()
            local chapter_11_6_5_proto11 = Proto.new("chapter_11_6_5_proto11", "chapter_11_6_5_proto11")
            local e = {}
            e[1] = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.NOTE)
            chapter_11_6_5_proto11.experts = e
            local e2 = chapter_11_6_5_proto11.experts
            if type(e2) ~= "table" then
                error("not table", 0)
            end
        end
    )
end
local function test_chapter_11_6_6()
    recorder:tryPcall(
        "ProtoExpert.new(abbr,text,group,severity)",
        function()
            local protoexpert = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.NOTE)
            if type(protoexpert) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "protoexpert:__tostring()",
        function()
            local e = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.NOTE)
            local s = tostring(e)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_6_7()
    do
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type)",
            function()
                local protofield = ProtoField.new("name", "abbr", ftypes.INT8)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.new("name", "abbr", ftypes.BOOLEAN, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,base)",
            function()
                local protofield = ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    base.DEC
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,nil,mask)",
            function()
                local protofield = ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,nil,nil,descr)",
            function()
                local protofield = ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    nil,
                    nil,
                    "descr"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.char(abbr)",
            function()
                local protofield = ProtoField.char("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,name)",
            function()
                local protofield = ProtoField.char("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,base)",
            function()
                local protofield = ProtoField.char("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.char("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.char(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.char(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint8(abbr)",
            function()
                local protofield = ProtoField.uint8("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,name)",
            function()
                local protofield = ProtoField.uint8("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,base)",
            function()
                local protofield = ProtoField.uint8("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.uint8("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.uint8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.uint8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint16(abbr)",
            function()
                local protofield = ProtoField.uint16("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,name)",
            function()
                local protofield = ProtoField.uint16("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,base)",
            function()
                local protofield = ProtoField.uint16("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.uint16("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.uint16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.uint16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint24(abbr)",
            function()
                local protofield = ProtoField.uint24("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,name)",
            function()
                local protofield = ProtoField.uint24("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,base)",
            function()
                local protofield = ProtoField.uint24("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.uint24("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.uint24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.uint24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint32(abbr)",
            function()
                local protofield = ProtoField.uint32("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,name)",
            function()
                local protofield = ProtoField.uint32("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,base)",
            function()
                local protofield = ProtoField.uint32("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.uint32("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.uint32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.uint32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint64(abbr)",
            function()
                local protofield = ProtoField.uint64("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,name)",
            function()
                local protofield = ProtoField.uint64("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,base)",
            function()
                local protofield = ProtoField.uint64("abbr", nil, base.HEX)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.uint64("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.uint64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.uint64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int8(abbr)",
            function()
                local protofield = ProtoField.int8("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,name)",
            function()
                local protofield = ProtoField.int8("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,base)",
            function()
                local protofield = ProtoField.int8("abbr", nil, base.DEC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.int8("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.int8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.int8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int16(abbr)",
            function()
                local protofield = ProtoField.int16("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,name)",
            function()
                local protofield = ProtoField.int16("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,base)",
            function()
                local protofield = ProtoField.int16("abbr", nil, base.DEC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.int16("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.int16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.int16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int24(abbr)",
            function()
                local protofield = ProtoField.int24("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,name)",
            function()
                local protofield = ProtoField.int24("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,base)",
            function()
                local protofield = ProtoField.int24("abbr", nil, base.DEC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.int24("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.int24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.int24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int32(abbr)",
            function()
                local protofield = ProtoField.int32("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,name)",
            function()
                local protofield = ProtoField.int32("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,base)",
            function()
                local protofield = ProtoField.int32("abbr", nil, base.DEC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.int32("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.int32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.int32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int64(abbr)",
            function()
                local protofield = ProtoField.int64("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,name)",
            function()
                local protofield = ProtoField.int64("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,base)",
            function()
                local protofield = ProtoField.int64("abbr", nil, base.DEC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.int64("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.int64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.int64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.framenum(abbr)",
            function()
                local protofield = ProtoField.framenum("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,name)",
            function()
                local protofield = ProtoField.framenum("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,base)",
            function()
                local protofield = ProtoField.framenum("abbr", nil, base.NONE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,frametype)",
            function()
                local protofield = ProtoField.framenum("abbr", nil, nil, frametype.NONE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.framenum(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    0
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.framenum(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.bool(abbr)",
            function()
                local protofield = ProtoField.bool("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,name)",
            function()
                local protofield = ProtoField.bool("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,display)",
            function()
                local protofield = ProtoField.bool("abbr", nil, base.NONE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.bool("abbr", nil, nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,nil,mask)",
            function()
                local protofield = ProtoField.bool(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    0
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,nil,nil,desc)",
            function()
                local protofield = ProtoField.bool(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr)",
            function()
                local protofield = ProtoField.absolute_time("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,name)",
            function()
                local protofield = ProtoField.absolute_time("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,nil,base)",
            function()
                local protofield = ProtoField.absolute_time("abbr", nil, base.UTC)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.absolute_time("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.relative_time(abbr)",
            function()
                local protofield = ProtoField.relative_time("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.relative_time(abbr,name)",
            function()
                local protofield = ProtoField.relative_time("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.relative_time(abbr,nil,desc)",
            function()
                local protofield = ProtoField.relative_time("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.float(abbr)",
            function()
                local protofield = ProtoField.float("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,name)",
            function()
                local protofield = ProtoField.float("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.float("abbr", nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.float("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.double(abbr)",
            function()
                local protofield = ProtoField.double("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,name)",
            function()
                local protofield = ProtoField.double("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                local protofield = ProtoField.double("abbr", nil, valuestring)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.double("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.string(abbr)",
            function()
                local protofield = ProtoField.string("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,name)",
            function()
                local protofield = ProtoField.string("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,nil,display)",
            function()
                local protofield = ProtoField.string("abbr", nil, base.UNICODE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.string("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.stringz(abbr)",
            function()
                local protofield = ProtoField.stringz("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,name)",
            function()
                local protofield = ProtoField.stringz("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,nil,display)",
            function()
                local protofield = ProtoField.stringz("abbr", nil, base.UNICODE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.stringz("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.bytes(abbr)",
            function()
                local protofield = ProtoField.bytes("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,name)",
            function()
                local protofield = ProtoField.bytes("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,nil,display)",
            function()
                local protofield = ProtoField.bytes("abbr", nil, base.SPACE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.bytes("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ubytes(abbr)",
            function()
                local protofield = ProtoField.ubytes("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,name)",
            function()
                local protofield = ProtoField.ubytes("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,nil,display)",
            function()
                local protofield = ProtoField.ubytes("abbr", nil, base.SPACE)
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,nil,nil,desc)",
            function()
                local protofield = ProtoField.ubytes("abbr", nil, nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.none(abbr)",
            function()
                local protofield = ProtoField.none("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.none(abbr,name)",
            function()
                local protofield = ProtoField.none("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.none(abbr,nil,desc)",
            function()
                local protofield = ProtoField.none("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ipv4(abbr)",
            function()
                local protofield = ProtoField.ipv4("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv4(abbr,name)",
            function()
                local protofield = ProtoField.ipv4("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv4(abbr,nil,desc)",
            function()
                local protofield = ProtoField.ipv4("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ipv6(abbr)",
            function()
                local protofield = ProtoField.ipv6("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv6(abbr,name)",
            function()
                local protofield = ProtoField.ipv6("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv6(abbr,nil,desc)",
            function()
                local protofield = ProtoField.ipv6("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ether(abbr)",
            function()
                local protofield = ProtoField.ether("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ether(abbr,name)",
            function()
                local protofield = ProtoField.ether("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.ether(abbr,nil,desc)",
            function()
                local protofield = ProtoField.ether("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.guid(abbr)",
            function()
                local protofield = ProtoField.guid("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.guid(abbr,name)",
            function()
                local protofield = ProtoField.guid("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.guid(abbr,nil,desc)",
            function()
                local protofield = ProtoField.guid("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.oid(abbr)",
            function()
                local protofield = ProtoField.oid("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.oid(abbr,name)",
            function()
                local protofield = ProtoField.oid("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.oid(abbr,nil,desc)",
            function()
                local protofield = ProtoField.oid("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.protocol(abbr)",
            function()
                local protofield = ProtoField.protocol("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.protocol(abbr,name)",
            function()
                local protofield = ProtoField.protocol("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.protocol(abbr,nil,desc)",
            function()
                local protofield = ProtoField.protocol("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr)",
            function()
                local protofield = ProtoField.rel_oid("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr,name)",
            function()
                local protofield = ProtoField.rel_oid("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr,nil,desc)",
            function()
                local protofield = ProtoField.rel_oid("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.systemid(abbr)",
            function()
                local protofield = ProtoField.systemid("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.systemid(abbr,name)",
            function()
                local protofield = ProtoField.systemid("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.systemid(abbr,nil,desc)",
            function()
                local protofield = ProtoField.systemid("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.eui64(abbr)",
            function()
                local protofield = ProtoField.eui64("abbr")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.eui64(abbr,name)",
            function()
                local protofield = ProtoField.eui64("abbr", "name")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "ProtoField.eui64(abbr,nil,desc)",
            function()
                local protofield = ProtoField.eui64("abbr", nil, "desc")
                if type(protofield) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.eui64(abbr)",
            function()
                local protofield = ProtoField.none("abbr")
                local s = tostring(protofield)
                if type(s) ~= "string" then
                    error("not string", 0)
                end
            end
        )
    end
end
local function test_chapter_11_6_8()
    recorder:tryPcall(
        "register_postdissector(proto)",
        function()
            local chapter_11_6_8_proto01 = Proto.new("chapter_11_6_8_proto01", "chapter_11_6_8_proto01")
            register_postdissector(chapter_11_6_8_proto01)
        end
    )
    recorder:tryPcall(
        "register_postdissector(proto,allfields)",
        function()
            local chapter_11_6_8_proto02 = Proto.new("chapter_11_6_8_proto02", "chapter_11_6_8_proto02")
            register_postdissector(chapter_11_6_8_proto02, true)
        end
    )
end
local function test_chapter_11_6()
    print("begin test_chapter_11_6")
    test_chapter_11_6_1()
    test_chapter_11_6_2()
    test_chapter_11_6_3()
    test_chapter_11_6_4()
    test_chapter_11_6_5()
    test_chapter_11_6_6()
    test_chapter_11_6_7()
    test_chapter_11_6_8()
    print("end test_chapter_11_6")
end
test_chapter_11_6()
local function test_chapter_11_6_1_dissector(buffer, pinfo, tree)
    recorder:tryPcall(
        "dissector:call(tvb, pinfo, tree)",
        function()
            local dissector = Dissector.get("http")
            local result = dissector:call(buffer, pinfo, tree)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "dissector:__call(tvb, pinfo, tree)",
        function()
            local dissector = Dissector.get("http")
            local result = dissector(buffer, pinfo, tree)
            if type(result) ~= "number" then
                error("not number", 0)
            end
        end
    )
end
local function test_chapter_11_6_2_dissector(buffer, pinfo, tree)
    recorder:tryPcall(
        "DissectorTable.try_heuristics(listname,tvb,pinfo,tree)",
        function()
            DissectorTable.try_heuristics("http", buffer, pinfo, tree)
        end
    )
    recorder:tryPcall(
        "dissectortable:try(pattern,tvb,pinfo,tree)",
        function()
            local dissectortable01 = DissectorTable.new("tablename_dissector01", nil, ftypes.UINT8)
            local result01 = dissectortable01:try(1, buffer, pinfo, tree)
            if type(result01) ~= "number" then
                error("not number", 0)
            end
            local dissectortable02 = DissectorTable.new("tablename_dissector02", nil, ftypes.STRING)
            local result02 = dissectortable02:try("1", buffer, pinfo, tree)
            if type(result02) ~= "number" then
                error("not number", 0)
            end
        end
    )
end
local function test_chapter_11_6_8_dissector(buffer, pinfo, tree)
    recorder:tryPcall(
        "dissect_tcp_pdus(tvb,tree,min_header_size,get_len_func,dissect_func)",
        function()
            pinfo.can_desegment = 1
            local function get_len_func(tvb, pinfo, offset)
                return 0
            end
            local function dissect_func(buffer, pinfo, tree)
                return 0
            end
            dissect_tcp_pdus(
                buffer,
                tree,
                0,
                get_len_func,
                dissect_func
            )
        end
    )
    recorder:tryPcall(
        "dissect_tcp_pdus(tvb,tree,min_header_size,get_len_func,dissect_func,desegment)",
        function()
            pinfo.can_desegment = 1
            local function get_len_func(tvb, pinfo, offset)
                return 0
            end
            local function dissect_func(buffer, pinfo, tree)
                return 0
            end
            dissect_tcp_pdus(
                buffer,
                tree,
                0,
                get_len_func,
                dissect_func,
                true
            )
        end
    )
end
local function test_chapter_11_6_dissector(buffer, pinfo, tree)
    print("begin test_chapter_11_6_dissector")
    test_chapter_11_6_1_dissector(buffer, pinfo, tree)
    test_chapter_11_6_2_dissector(buffer, pinfo, tree)
    test_chapter_11_6_8_dissector(buffer, pinfo, tree)
    print("end test_chapter_11_6_dissector")
end
local chapter_11_6_proto = Proto.new("chapter_11_6_proto", "test")
chapter_11_6_proto.init = function()
end
chapter_11_6_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_6_dissector(buffer, pinfo, tree)
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_6_proto)
return ____exports
