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
local protofield_uint8 = ProtoField.uint8("abbr_bytes")
fields[3] = protofield_uint8
chapter_11_7_proto.fields = fields
local experts = {}
local protoexpert = ProtoExpert.new("abbr", "text", expert.group.DEBUG, expert.severity.COMMENT)
experts[1] = protoexpert
chapter_11_7_proto.experts = experts
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
        "treeitem:add(protofield)",
        function()
            local subtree = tree:add(protofield_none)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add(protofield,tvbrange)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(protofield_none, tvbrange)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add(protofield,tvbrange,value)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(protofield_uint8, tvbrange, 1)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add(protofield,tvbrange,value,label1,label2)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(
                protofield_uint8,
                tvbrange,
                1,
                "label1",
                "label2"
            )
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_le(protofield)",
        function()
            local subtree = tree:add_le(protofield_none)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_le(protofield,tvbrange)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add_le(protofield_none, tvbrange)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_le(protofield,tvbrange,value)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add_le(protofield_uint8, tvbrange, 1)
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_le(protofield,tvbrange,value,label1,label2)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add_le(
                protofield_uint8,
                tvbrange,
                1,
                "label1",
                "label2"
            )
            if type(subtree) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:set_text(text)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:set_text("text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:append_text(text)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:append_text("text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:prepend_text(text)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:prepend_text("text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_expert_info()",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_expert_info()
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_expert_info(group)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_expert_info(expert.group.DEBUG)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_expert_info(nil,severity)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_expert_info(nil, expert.severity.COMMENT)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_expert_info(nil,nil,text)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_expert_info(nil, nil, "text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_proto_expert_info(expert)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_proto_expert_info(protoexpert)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_proto_expert_info(expert,text)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:add_proto_expert_info(protoexpert, "text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_tvb_expert_info(expert,tvb)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(protofield_none)
            local result = subtree:add_tvb_expert_info(protoexpert, tvbrange)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:add_tvb_expert_info(expert,tvb,text)",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(protofield_none)
            local result = subtree:add_tvb_expert_info(protoexpert, tvbrange, "text")
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:set_generated(bool)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:set_generated(true)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:set_hidden(bool)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:set_hidden(true)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:set_len(len)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:set_len(1)
            if subtree ~= result then
                error("not same", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:referenced(protofield)",
        function()
            local subtree = tree:add(protofield_none)
            local result = subtree:referenced(protofield_none)
            if type(result) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem:__tostring()",
        function()
            local subtree = tree:add(protofield_none)
            local s = tostring(subtree)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem.text",
        function()
            local tvbrange = buffer:range(
                0,
                buffer:len()
            )
            local subtree = tree:add(protofield_uint8, tvbrange, 1, "text")
            local text = subtree.text
            if type(text) ~= "string" then
                error("not string", 0)
            end
            subtree.text = text
        end
    )
    recorder:tryPcall(
        "treeitem.visible",
        function()
            local subtree = tree:add(protofield_none)
            local visible = subtree.visible
            if type(visible) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "treeitem.generated",
        function()
            local subtree = tree:add(protofield_none)
            local generated = subtree.generated
            if type(generated) ~= "boolean" then
                error("not boolean", 0)
            end
            subtree.generated = generated
        end
    )
    recorder:tryPcall(
        "treeitem.hidden",
        function()
            local subtree = tree:add(protofield_none)
            local hidden = subtree.hidden
            if type(hidden) ~= "boolean" then
                error("not boolean", 0)
            end
            subtree.hidden = hidden
        end
    )
    recorder:tryPcall(
        "treeitem.len",
        function()
            local subtree = tree:add(protofield_none)
            local len = subtree.len
            if type(len) ~= "number" then
                error("not number", 0)
            end
            subtree.len = len
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
