local ____lualib = require("lualib_bundle")
local __TS__New = ____lualib.__TS__New
local ____exports = {}
local chapter_11_5_proto
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_5_1()
    recorder:tryPcall(
        "Address.ip(hostname)",
        function()
            local address = Address.ip("8.8.8.8")
            if type(address) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Address.ipv6(hostname)",
        function()
            local address = Address.ipv6("::ffff:808:808")
            if type(address) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Address.ether(eth)",
        function()
            local address = Address.ether("AB-CD-EF-01-23-45")
            if type(address) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "Address:__tostring()",
        function()
            local address = Address.ip("8.8.8.8")
            local s = tostring(address)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "Address:__eq()",
        function()
            local addressA = Address.ip("8.8.8.8")
            local addressB = Address.ip("8.8.8.8")
            local addressC = Address.ip("8.8.8.9")
            if addressA == addressB then
            else
                error("failed.", 0)
            end
            if addressA == addressC then
                error("failed.", 0)
            else
            end
        end
    )
    recorder:tryPcall(
        "Address:__le()",
        function()
            local addressA = Address.ip("8.8.8.8")
            local addressB = Address.ip("8.8.8.8")
            local addressC = Address.ip("8.8.8.9")
            if addressA <= addressB then
            else
                error("failed.", 0)
            end
            if addressC <= addressB then
                error("failed.", 0)
            else
            end
        end
    )
    recorder:tryPcall(
        "Address:__lt()",
        function()
            local addressA = Address.ip("8.8.8.8")
            local addressB = Address.ip("8.8.8.8")
            local addressC = Address.ip("8.8.8.9")
            if addressA < addressB then
                error("failed.", 0)
            else
            end
            if addressA < addressC then
            else
                error("failed.", 0)
            end
        end
    )
end
local function test_chapter_11_5_2(pinfo)
    recorder:tryPcall(
        "column:__tostring()",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                local s = tostring(column)
                if type(s) ~= "string" then
                    error("not string", 0)
                end
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:clear()",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:clear()
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:set(text)",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:set("foo")
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:append(text)",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:append("foo")
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:prepend(text)",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:prepend("foo")
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:fence()",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:fence()
            else
                error("string", 0)
            end
        end
    )
    recorder:tryPcall(
        "column:clear_fence()",
        function()
            local columnOrString = pinfo.columns.number
            if type(columnOrString) ~= "string" then
                local column = columnOrString
                column:clear_fence()
            else
                error("string", 0)
            end
        end
    )
end
local function test_chapter_11_5_3(pinfo)
    recorder:tryPcall(
        "columns:__tostring()",
        function()
            local columns = pinfo.columns
            local s = tostring(columns)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "columns:__newindex(column, text)",
        function()
            local columns = pinfo.columns
            columns.info = "foo bar"
        end
    )
    recorder:tryPcall(
        "columns:__index()",
        function()
            local columns = pinfo.columns
            local columnOrString = columns.info
            if type(columnOrString) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
end
local function test_chapter_11_5_4()
    recorder:tryPcall(
        "NSTime.new()",
        function()
            local nstime = NSTime.new()
            if type(nstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "NSTime.new(seconds)",
        function()
            local nstime = NSTime.new(1)
            if type(nstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "NSTime.new(nil,nseconds)",
        function()
            local nstime = NSTime.new(nil, 1)
            if type(nstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__call()",
        function()
            local nstime = NSTime.new()
            local newNstime = nstime()
            if type(newNstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__call(seconds)",
        function()
            local nstime = NSTime.new()
            local newNstime = nstime(1)
            if type(newNstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__call(nil,nseconds)",
        function()
            local nstime = NSTime.new()
            local newNstime = nstime(nil, 1)
            if type(newNstime) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:tonumber()",
        function()
            local nstime = NSTime.new(1)
            local result = tonumber(nstime)
        end
    )
    recorder:tryPcall(
        "nstime:__tostring()",
        function()
            local nstime = NSTime.new()
            local s = tostring(nstime)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__add()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = NSTime.new()
            local nstimeC = nstimeA + nstimeB
            if type(nstimeC) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__sub()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = NSTime.new()
            local nstimeC = nstimeA - nstimeB
            if type(nstimeC) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__unm()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = -nstimeA
            if type(nstimeB) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__eq()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = NSTime.new()
            local nstimeC = NSTime.new(1)
            if nstimeA == nstimeB then
            else
                error("failed.", 0)
            end
            if nstimeA == nstimeC then
                error("failed.", 0)
            else
            end
        end
    )
    recorder:tryPcall(
        "nstime:__le()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = NSTime.new()
            local nstimeC = NSTime.new(1)
            if nstimeA <= nstimeB then
            else
                error("failed.", 0)
            end
            if nstimeB <= nstimeA then
            else
                error("failed.", 0)
            end
            if nstimeA <= nstimeC then
            else
                error("failed.", 0)
            end
            if nstimeC <= nstimeA then
                error("failed.", 0)
            else
            end
        end
    )
    recorder:tryPcall(
        "nstime:__lt()",
        function()
            local nstimeA = NSTime.new()
            local nstimeB = NSTime.new()
            local nstimeC = NSTime.new(1)
            if nstimeA < nstimeB then
                error("failed.", 0)
            else
            end
            if nstimeB < nstimeA then
                error("failed.", 0)
            else
            end
            if nstimeA < nstimeC then
            else
                error("failed.", 0)
            end
            if nstimeC < nstimeA then
                error("failed.", 0)
            else
            end
        end
    )
    recorder:tryPcall(
        "nstime:__lt()",
        function()
            local nstime = NSTime.new()
            local secs = nstime.secs
            if type(secs) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "nstime:__lt()",
        function()
            local nstime = NSTime.new()
            local nsecs = nstime.nsecs
            if type(nsecs) ~= "number" then
                error("not number", 0)
            end
        end
    )
end
local function test_chapter_11_5_5(pinfo)
    recorder:tryPcall(
        "pinfo.visited",
        function()
            local visited = pinfo.visited
            if type(visited) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.number",
        function()
            local number = pinfo.number
            if type(number) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.len",
        function()
            local len = pinfo.len
            if type(len) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.caplen",
        function()
            local caplen = pinfo.caplen
            if type(caplen) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.abs_ts",
        function()
            local abs_ts = pinfo.abs_ts
            if type(abs_ts) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.rel_ts",
        function()
            local rel_ts = pinfo.rel_ts
            if type(rel_ts) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.delta_ts",
        function()
            local delta_ts = pinfo.delta_ts
            if type(delta_ts) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.delta_dis_ts",
        function()
            local delta_dis_ts = pinfo.delta_dis_ts
            if type(delta_dis_ts) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.curr_proto",
        function()
            local curr_proto = pinfo.curr_proto
            if type(curr_proto) ~= "string" then
                error("not string", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.can_desegment",
        function()
            local can_desegment = pinfo.can_desegment
            if type(can_desegment) ~= "number" then
                error("not number", 0)
            end
            pinfo.can_desegment = 1
        end
    )
    recorder:tryPcall(
        "pinfo.desegment_len",
        function()
            local desegment_len = pinfo.desegment_len
            if type(desegment_len) ~= "number" then
                error("not number", 0)
            end
            pinfo.desegment_len = 1
        end
    )
    recorder:tryPcall(
        "pinfo.desegment_offset",
        function()
            local desegment_offset = pinfo.desegment_offset
            if type(desegment_offset) ~= "number" then
                error("not number", 0)
            end
            pinfo.desegment_offset = 1
        end
    )
    recorder:tryPcall(
        "pinfo.fragmented",
        function()
            local fragmented = pinfo.fragmented
            if type(fragmented) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.in_error_pkt",
        function()
            local in_error_pkt = pinfo.in_error_pkt
            if type(in_error_pkt) ~= "boolean" then
                error("not boolean", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.match_uint",
        function()
            local match_uint = pinfo.match_uint
            if type(match_uint) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.match_string",
        function()
            local match_string = pinfo.match_string
            if type(match_string) ~= "nil" then
                error("not nil", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.port_type",
        function()
            local port_type = pinfo.port_type
            if type(port_type) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.src_port",
        function()
            local src_port = pinfo.src_port
            if type(src_port) ~= "number" then
                error("not number", 0)
            end
            pinfo.src_port = 1
        end
    )
    recorder:tryPcall(
        "pinfo.dst_port",
        function()
            local dst_port = pinfo.dst_port
            if type(dst_port) ~= "number" then
                error("not number", 0)
            end
            pinfo.dst_port = 1
        end
    )
    recorder:tryPcall(
        "pinfo.dl_src",
        function()
            local dl_src = pinfo.dl_src
            if type(dl_src) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.dl_src = Address.ether("AB-CD-EF-01-23-45")
        end
    )
    recorder:tryPcall(
        "pinfo.dl_dst",
        function()
            local dl_dst = pinfo.dl_dst
            if type(dl_dst) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.dl_dst = Address.ether("AB-CD-EF-01-23-45")
        end
    )
    recorder:tryPcall(
        "pinfo.net_src",
        function()
            local net_src = pinfo.net_src
            if type(net_src) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.net_src = net_src
        end
    )
    recorder:tryPcall(
        "pinfo.net_dst",
        function()
            local net_dst = pinfo.net_dst
            if type(net_dst) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.net_dst = net_dst
        end
    )
    recorder:tryPcall(
        "pinfo.src",
        function()
            local src = pinfo.src
            if type(src) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.src = src
        end
    )
    recorder:tryPcall(
        "pinfo.dst",
        function()
            local dst = pinfo.dst
            if type(dst) ~= "userdata" then
                error("not userdata", 0)
            end
            pinfo.dst = dst
        end
    )
    recorder:tryPcall(
        "pinfo.p2p_dir",
        function()
            local p2p_dir = pinfo.p2p_dir
            if type(p2p_dir) ~= "number" then
                error("not number", 0)
            end
            pinfo.p2p_dir = p2p_dir
        end
    )
    recorder:tryPcall(
        "pinfo.match",
        function()
            local match = pinfo.match
            if type(match) ~= "number" then
                error("not number", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.columns",
        function()
            local columns = pinfo.columns
            if type(columns) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.cols",
        function()
            local cols = pinfo.cols
            if type(cols) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.private",
        function()
            local _private = pinfo.private
            if type(_private) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.hi",
        function()
            local hi = pinfo.hi
            if type(hi) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.lo",
        function()
            local lo = pinfo.lo
            if type(lo) ~= "userdata" then
                error("not userdata", 0)
            end
        end
    )
    recorder:tryPcall(
        "pinfo.conversation",
        function()
            pinfo.conversation = chapter_11_5_proto
        end
    )
end
local function test_chapter_11_5_6(pinfo)
    recorder:tryPcall(
        "privatetable:__tostring()",
        function()
            local privatetable = pinfo.private
            local s = tostring(privatetable)
            if type(s) ~= "string" then
                error("not string", 0)
            end
        end
    )
end
local function test_chapter_11_5(pinfo)
    print("begin test_chapter_11_5")
    test_chapter_11_5_1()
    test_chapter_11_5_2(pinfo)
    test_chapter_11_5_3(pinfo)
    test_chapter_11_5_4()
    test_chapter_11_5_5(pinfo)
    test_chapter_11_5_6(pinfo)
    print("end test_chapter_11_5")
end
chapter_11_5_proto = Proto.new("chapter_11_5_proto", "test")
chapter_11_5_proto.init = function()
end
chapter_11_5_proto.dissector = function(buffer, pinfo, tree)
    test_chapter_11_5(pinfo)
    recorder:printResult()
    return 0
end
register_postdissector(chapter_11_5_proto)
return ____exports
