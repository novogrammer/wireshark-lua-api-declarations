--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local chapter_11_7_proto = Proto.new("chapter_11_7_proto", "test")
local fields = {}
local protofield_none = ProtoField.none("abbr_none")
fields[1] = protofield_none
local protofield_bytes = ProtoField.bytes("abbr_bytes")
fields[2] = protofield_bytes
chapter_11_7_proto.fields = fields
local function test_chapter_11_7_1(buffer, tree)
    recorder:tryPcall(
        "treeitem:add_packet_field(protofield_none,tvbrange,encoding)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree, extracted_value, offset = tree:add_packet_field(protofield_none, tvbrange, ENC_NA)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(extracted_value) ~= "nil" then
                error("not nil", 0)
            end
            if type(offset) ~= "nil" then
                error("not nil", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_packet_field(protofield_bytes,tvbrange,encoding)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree, extracted_value, offset = tree:add_packet_field(protofield_bytes, tvbrange, ENC_BIG_ENDIAN)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(extracted_value) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(offset) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_packet_field(protofield_bytes,tvbrange,encoding,label1,label2)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree, extracted_value, offset = tree:add_packet_field(
                protofield_bytes,
                tvbrange,
                ENC_BIG_ENDIAN,
                "label1",
                "label2"
            )
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(extracted_value) ~= "userdata" then
                error("not userdata", 0)
            end
            if type(offset) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add()",
        function()
            local subtree = tree:add()
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add(protofield)",
        function()
            local subtree = tree:add(protofield_none)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "todo",
        function()
            error("todo", 0)
        end
    )
end
local function test_chapter_11_7(buffer, tree)
    print("begin test_chapter_11_7")
    test_chapter_11_7_1(buffer, tree)
    print("end test_chapter_11_7")
end
chapter_11_7_proto.init = function()
end
chapter_11_7_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_7(buffer, tree)
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_7_proto)
return ____exports
