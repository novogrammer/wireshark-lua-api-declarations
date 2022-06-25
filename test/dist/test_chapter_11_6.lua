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
        end
    )
    recorder:tryPcall(
        "Dissector.list()",
        function()
            local list = Dissector.list()
        end
    )
    recorder:tryPcall(
        "dissector:__tostring()",
        function()
            local dissector = Dissector.get("http")
            tostring(dissector)
        end
    )
end
local function test_chapter_11_6_2()
    recorder:tryPcall(
        "DissectorTable.new(tablename)",
        function()
            DissectorTable.new("tablename01")
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,uiname)",
        function()
            DissectorTable.new("tablename02", "bar")
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,type)",
        function()
            DissectorTable.new("tablename03", nil, ftypes.UINT8)
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,nil,base)",
        function()
            DissectorTable.new("tablename04", nil, nil, base.NONE)
        end
    )
    recorder:tryPcall(
        "DissectorTable.new(tablename,nil,nil,nil,proto)",
        function()
            local chapter_11_6_2_proto01 = Proto.new("chapter_11_6_2_proto01", "chapter_11_6_2_proto01")
            DissectorTable.new(
                "tablename05",
                nil,
                nil,
                nil,
                chapter_11_6_2_proto01
            )
        end
    )
    recorder:tryPcall(
        "DissectorTable.list()",
        function()
            DissectorTable.list()
        end
    )
    recorder:tryPcall(
        "DissectorTable.heuristic_list()",
        function()
            DissectorTable.heuristic_list()
        end
    )
    recorder:tryPcall(
        "DissectorTable.get(tablename)",
        function()
            DissectorTable.get("tablename01")
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
            dissectortable:get_dissector(1)
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
            tostring(dissectortable)
        end
    )
end
local function test_chapter_11_6_3()
    recorder:tryPcall(
        "Pref.bool(label,default,descr)",
        function()
            Pref.bool("label", true, "descr")
        end
    )
    recorder:tryPcall(
        "Pref.uint(label,default,descr)",
        function()
            Pref.uint("label", 1, "descr")
        end
    )
    recorder:tryPcall(
        "Pref.string(label,default,descr)",
        function()
            Pref.string("label", "a", "descr")
        end
    )
    recorder:tryPcall(
        "Pref.enum(label,default,descr)",
        function()
            local A = 1
            local B = 1
            local myEnum = {{0, "A", A}, {1, "B", B}}
            Pref.enum(
                "label",
                A,
                "descr",
                myEnum,
                true
            )
        end
    )
    recorder:tryPcall(
        "Pref.range(label,default,descr,max)",
        function()
            Pref.range("label", "1-2", "descr", 2)
        end
    )
    recorder:tryPcall(
        "Pref.statictext(label,descr)",
        function()
            Pref.statictext("label", "descr")
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
            local ____ = prefs.a
        end
    )
end
local function test_chapter_11_6_5()
    recorder:tryPcall(
        "Proto.new(name,desc)",
        function()
            local chapter_11_6_5_proto01 = Proto.new("chapter_11_6_5_proto01", "chapter_11_6_5_proto01")
        end
    )
    recorder:tryPcall(
        "proto:__call(name,desc)",
        function()
            local chapter_11_6_5_proto02 = Proto.new("chapter_11_6_5_proto02", "chapter_11_6_5_proto02")
            local chapter_11_6_5_proto03 = chapter_11_6_5_proto02("chapter_11_6_5_proto03", "chapter_11_6_5_proto03")
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
        end
    )
    recorder:tryPcall(
        "proto.description",
        function()
            local chapter_11_6_5_proto09 = Proto.new("chapter_11_6_5_proto09", "chapter_11_6_5_proto09")
            local description = chapter_11_6_5_proto09.description
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
        end
    )
end
local function test_chapter_11_6_6()
    recorder:tryPcall(
        "ProtoExpert.new(abbr,text,group,severity)",
        function()
            ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.NOTE)
        end
    )
    recorder:tryPcall(
        "protoexpert:__tostring()",
        function()
            local e = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.NOTE)
            tostring(e)
        end
    )
end
local function test_chapter_11_6_7()
    do
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type)",
            function()
                ProtoField.new("name", "abbr", ftypes.INT8)
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.new("name", "abbr", ftypes.BOOLEAN, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,base)",
            function()
                ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    base.DEC
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,nil,mask)",
            function()
                ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.new(name,abbr,type,nil,nil,nil,descr)",
            function()
                ProtoField.new(
                    "name",
                    "abbr",
                    ftypes.INT8,
                    nil,
                    nil,
                    nil,
                    "descr"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.char(abbr)",
            function()
                ProtoField.char("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,name)",
            function()
                ProtoField.char("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,base)",
            function()
                ProtoField.char("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.char("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.char(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.char(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.char(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint8(abbr)",
            function()
                ProtoField.uint8("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,name)",
            function()
                ProtoField.uint8("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,base)",
            function()
                ProtoField.uint8("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.uint8("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.uint8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.uint8(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.uint8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint16(abbr)",
            function()
                ProtoField.uint16("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,name)",
            function()
                ProtoField.uint16("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,base)",
            function()
                ProtoField.uint16("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.uint16("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.uint16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.uint16(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.uint16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint24(abbr)",
            function()
                ProtoField.uint24("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,name)",
            function()
                ProtoField.uint24("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,base)",
            function()
                ProtoField.uint24("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.uint24("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.uint24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.uint24(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.uint24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint32(abbr)",
            function()
                ProtoField.uint32("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,name)",
            function()
                ProtoField.uint32("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,base)",
            function()
                ProtoField.uint32("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.uint32("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.uint32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.uint32(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.uint32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.uint64(abbr)",
            function()
                ProtoField.uint64("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,name)",
            function()
                ProtoField.uint64("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,base)",
            function()
                ProtoField.uint64("abbr", nil, base.HEX)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.uint64("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.uint64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.uint64(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.uint64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int8(abbr)",
            function()
                ProtoField.int8("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,name)",
            function()
                ProtoField.int8("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,base)",
            function()
                ProtoField.int8("abbr", nil, base.DEC)
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.int8("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.int8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.int8(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.int8(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int16(abbr)",
            function()
                ProtoField.int16("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,name)",
            function()
                ProtoField.int16("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,base)",
            function()
                ProtoField.int16("abbr", nil, base.DEC)
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.int16("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.int16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.int16(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.int16(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int24(abbr)",
            function()
                ProtoField.int24("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,name)",
            function()
                ProtoField.int24("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,base)",
            function()
                ProtoField.int24("abbr", nil, base.DEC)
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.int24("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.int24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.int24(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.int24(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int32(abbr)",
            function()
                ProtoField.int32("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,name)",
            function()
                ProtoField.int32("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,base)",
            function()
                ProtoField.int32("abbr", nil, base.DEC)
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.int32("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.int32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.int32(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.int32(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.int64(abbr)",
            function()
                ProtoField.int64("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,name)",
            function()
                ProtoField.int64("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,base)",
            function()
                ProtoField.int64("abbr", nil, base.DEC)
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.int64("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.int64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    255
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.int64(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.int64(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.framenum(abbr)",
            function()
                ProtoField.framenum("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,name)",
            function()
                ProtoField.framenum("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,base)",
            function()
                ProtoField.framenum("abbr", nil, base.NONE)
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,frametype)",
            function()
                ProtoField.framenum("abbr", nil, nil, frametype.NONE)
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.framenum(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    0
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.framenum(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.framenum(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.bool(abbr)",
            function()
                ProtoField.bool("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,name)",
            function()
                ProtoField.bool("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,display)",
            function()
                ProtoField.bool("abbr", nil, base.NONE)
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.bool("abbr", nil, nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,nil,mask)",
            function()
                ProtoField.bool(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    0
                )
            end
        )
        recorder:tryPcall(
            "ProtoField.bool(abbr,nil,nil,nil,nil,desc)",
            function()
                ProtoField.bool(
                    "abbr",
                    nil,
                    nil,
                    nil,
                    nil,
                    "desc"
                )
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr)",
            function()
                ProtoField.absolute_time("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,name)",
            function()
                ProtoField.absolute_time("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,nil,base)",
            function()
                ProtoField.absolute_time("abbr", nil, base.UTC)
            end
        )
        recorder:tryPcall(
            "ProtoField.absolute_time(abbr,nil,nil,desc)",
            function()
                ProtoField.absolute_time("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.relative_time(abbr)",
            function()
                ProtoField.relative_time("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.relative_time(abbr,name)",
            function()
                ProtoField.relative_time("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.relative_time(abbr,nil,desc)",
            function()
                ProtoField.relative_time("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.float(abbr)",
            function()
                ProtoField.float("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,name)",
            function()
                ProtoField.float("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.float("abbr", nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.float(abbr,nil,nil,desc)",
            function()
                ProtoField.float("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.double(abbr)",
            function()
                ProtoField.double("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,name)",
            function()
                ProtoField.double("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,nil,valuestring)",
            function()
                local valuestring = {}
                valuestring[1] = "a"
                valuestring[2] = "b"
                ProtoField.double("abbr", nil, valuestring)
            end
        )
        recorder:tryPcall(
            "ProtoField.double(abbr,nil,nil,desc)",
            function()
                ProtoField.double("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.string(abbr)",
            function()
                ProtoField.string("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,name)",
            function()
                ProtoField.string("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,nil,display)",
            function()
                ProtoField.string("abbr", nil, base.UNICODE)
            end
        )
        recorder:tryPcall(
            "ProtoField.string(abbr,nil,nil,desc)",
            function()
                ProtoField.string("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.stringz(abbr)",
            function()
                ProtoField.stringz("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,name)",
            function()
                ProtoField.stringz("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,nil,display)",
            function()
                ProtoField.stringz("abbr", nil, base.UNICODE)
            end
        )
        recorder:tryPcall(
            "ProtoField.stringz(abbr,nil,nil,desc)",
            function()
                ProtoField.stringz("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.bytes(abbr)",
            function()
                ProtoField.bytes("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,name)",
            function()
                ProtoField.bytes("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,nil,display)",
            function()
                ProtoField.bytes("abbr", nil, base.SPACE)
            end
        )
        recorder:tryPcall(
            "ProtoField.bytes(abbr,nil,nil,desc)",
            function()
                ProtoField.bytes("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ubytes(abbr)",
            function()
                ProtoField.ubytes("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,name)",
            function()
                ProtoField.ubytes("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,nil,display)",
            function()
                ProtoField.ubytes("abbr", nil, base.SPACE)
            end
        )
        recorder:tryPcall(
            "ProtoField.ubytes(abbr,nil,nil,desc)",
            function()
                ProtoField.ubytes("abbr", nil, nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.none(abbr)",
            function()
                ProtoField.none("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.none(abbr,name)",
            function()
                ProtoField.none("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.none(abbr,nil,desc)",
            function()
                ProtoField.none("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ipv4(abbr)",
            function()
                ProtoField.ipv4("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv4(abbr,name)",
            function()
                ProtoField.ipv4("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv4(abbr,nil,desc)",
            function()
                ProtoField.ipv4("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ipv6(abbr)",
            function()
                ProtoField.ipv6("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv6(abbr,name)",
            function()
                ProtoField.ipv6("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.ipv6(abbr,nil,desc)",
            function()
                ProtoField.ipv6("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.ether(abbr)",
            function()
                ProtoField.ether("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.ether(abbr,name)",
            function()
                ProtoField.ether("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.ether(abbr,nil,desc)",
            function()
                ProtoField.ether("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.guid(abbr)",
            function()
                ProtoField.guid("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.guid(abbr,name)",
            function()
                ProtoField.guid("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.guid(abbr,nil,desc)",
            function()
                ProtoField.guid("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.oid(abbr)",
            function()
                ProtoField.oid("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.oid(abbr,name)",
            function()
                ProtoField.oid("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.oid(abbr,nil,desc)",
            function()
                ProtoField.oid("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.protocol(abbr)",
            function()
                ProtoField.protocol("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.protocol(abbr,name)",
            function()
                ProtoField.protocol("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.protocol(abbr,nil,desc)",
            function()
                ProtoField.protocol("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr)",
            function()
                ProtoField.rel_oid("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr,name)",
            function()
                ProtoField.rel_oid("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.rel_oid(abbr,nil,desc)",
            function()
                ProtoField.rel_oid("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.systemid(abbr)",
            function()
                ProtoField.systemid("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.systemid(abbr,name)",
            function()
                ProtoField.systemid("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.systemid(abbr,nil,desc)",
            function()
                ProtoField.systemid("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.eui64(abbr)",
            function()
                ProtoField.eui64("abbr")
            end
        )
        recorder:tryPcall(
            "ProtoField.eui64(abbr,name)",
            function()
                ProtoField.eui64("abbr", "name")
            end
        )
        recorder:tryPcall(
            "ProtoField.eui64(abbr,nil,desc)",
            function()
                ProtoField.eui64("abbr", nil, "desc")
            end
        )
    end
    do
        recorder:tryPcall(
            "ProtoField.eui64(abbr)",
            function()
                local protofield = ProtoField.none("abbr")
                tostring(protofield)
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
            dissector:call(buffer, pinfo, tree)
        end
    )
    recorder:tryPcall(
        "dissector:__call(tvb, pinfo, tree)",
        function()
            local dissector = Dissector.get("http")
            dissector(buffer, pinfo, tree)
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
            dissectortable01:try(1, buffer, pinfo, tree)
            local dissectortable02 = DissectorTable.new("tablename_dissector02", nil, ftypes.STRING)
            dissectortable02:try("1", buffer, pinfo, tree)
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
