
import Recorder from "./Recorder";

const recorder = new Recorder();

function test_chapter_11_5_1(this: void) {
  
  recorder.tryPcall("Address.ip(hostname)", () => {
    const address = Address.ip("8.8.8.8");
    if(type(address)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Address.ipv6(hostname)", () => {
    const address = Address.ipv6("::ffff:808:808");
    if(type(address)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Address.ether(eth)", () => {
    const address = Address.ether("AB-CD-EF-01-23-45");
    if(type(address)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Address:__tostring()", () => {
    const address = Address.ip("8.8.8.8");
    const s=tostring(address);
    if(type(s)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Address:__eq()", () => {
    const addressA = Address.ip("8.8.8.8");
    const addressB = Address.ip("8.8.8.8");
    const addressC = Address.ip("8.8.8.9");
    if(addressA==addressB){
      // OK
    }else{
      throw "failed.";
    }
    if(addressA==addressC){
      throw "failed.";
    }else{
      // OK
    }
  });
  recorder.tryPcall("Address:__le()", () => {
    const addressA = Address.ip("8.8.8.8");
    const addressB = Address.ip("8.8.8.8");
    const addressC = Address.ip("8.8.8.9");
    if(addressA<=addressB){
      // OK
    }else{
      throw "failed.";
    }
    if(addressC<=addressB){
      throw "failed.";
    }else{
      // OK
    }
  });
  recorder.tryPcall("Address:__lt()", () => {
    const addressA = Address.ip("8.8.8.8");
    const addressB = Address.ip("8.8.8.8");
    const addressC = Address.ip("8.8.8.9");
    if(addressA<addressB){
      throw "failed.";
    }else{
      // OK
    }
    if(addressA<addressC){
      // OK
    }else{
      throw "failed.";
    }
  });

}
function test_chapter_11_5_2(this: void,pinfo:Pinfo) {
  recorder.tryPcall("column:__tostring()", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      const s=tostring(column);
      if(type(s)!="string"){
        throw "not string";
      }
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:clear()", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.clear();
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:set(text)", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.set("foo");
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:append(text)", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.append("foo");
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:prepend(text)", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.prepend("foo");
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:fence()", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.fence();
    }else{
      throw "string";
    }
  });
  recorder.tryPcall("column:clear_fence()", () => {
    const columnOrString = pinfo.columns.get("number");
    if(type(columnOrString)!="string"){
      const column=columnOrString as Column;
      column.clear_fence();
    }else{
      throw "string";
    }
  });
  

}
function test_chapter_11_5_3(this: void,pinfo:Pinfo) {
  recorder.tryPcall("columns:__tostring()", () => {
    const columns = pinfo.columns;
    const s=tostring(columns);
    if(type(s)!="string"){
      throw "not string";
    }
});
  recorder.tryPcall("columns:__newindex(column, text)", () => {
    const columns = pinfo.columns;
    columns.set("info","foo bar");
  });
  recorder.tryPcall("columns:__index()", () => {
    const columns = pinfo.columns;
    const columnOrString=columns.get("info");
    if(type(columnOrString)!="userdata"){
      throw "not userdata";
    }
  });

}
function test_chapter_11_5_4(this: void) {
  recorder.tryPcall("NSTime.new()", () => {
    const nstime=NSTime.new();
    if(type(nstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("NSTime.new(seconds)", () => {
    const nstime=NSTime.new(1);
    if(type(nstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("NSTime.new(nil,nseconds)", () => {
    const nstime=NSTime.new(undefined,1);
    if(type(nstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__call()", () => {
    const nstime=NSTime.new();
    const newNstime = nstime();
    if(type(newNstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__call(seconds)", () => {
    const nstime=NSTime.new();
    const newNstime = nstime(1);
    if(type(newNstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__call(nil,nseconds)", () => {
    const nstime=NSTime.new();
    const newNstime = nstime(undefined,1);
    if(type(newNstime)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:tonumber()", () => {
    const nstime=NSTime.new(1);
    // it returns nil
    const result=tonumber(nstime);
    // if(type(result)!="number"){
    //   throw "not number";
    // }
  });
  recorder.tryPcall("nstime:__tostring()", () => {
    const nstime=NSTime.new();
    const s=tostring(nstime);
    if(type(s)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("nstime:__add()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=NSTime.new();
    const nstimeC=nstimeA.__add(nstimeB);
    if(type(nstimeC)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__sub()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=NSTime.new();
    const nstimeC=nstimeA.__sub(nstimeB);
    if(type(nstimeC)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__unm()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=nstimeA.__unm();
    if(type(nstimeB)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("nstime:__eq()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=NSTime.new();
    const nstimeC=NSTime.new(1);
    if(nstimeA==nstimeB){
      // OK
    }else{
      throw "failed.";
    }
    if(nstimeA==nstimeC){
      throw "failed.";
    }else{
      // OK
    }
  });
  recorder.tryPcall("nstime:__le()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=NSTime.new();
    const nstimeC=NSTime.new(1);
    if(nstimeA<=nstimeB){
      // OK
    }else{
      throw "failed.";
    }
    if(nstimeB<=nstimeA){
      // OK
    }else{
      throw "failed.";
    }
    if(nstimeA<=nstimeC){
      // OK
    }else{
      throw "failed.";
    }
    if(nstimeC<=nstimeA){
      throw "failed.";
    }else{
      // OK
    }
  });
  recorder.tryPcall("nstime:__lt()", () => {
    const nstimeA=NSTime.new();
    const nstimeB=NSTime.new();
    const nstimeC=NSTime.new(1);
    if(nstimeA<nstimeB){
      throw "failed.";
    }else{
      // OK
    }
    if(nstimeB<nstimeA){
      throw "failed.";
    }else{
      // OK
    }
    if(nstimeA<nstimeC){
      // OK
    }else{
      throw "failed.";
    }
    if(nstimeC<nstimeA){
      throw "failed.";
    }else{
      // OK
    }
  });
  recorder.tryPcall("nstime:__lt()", () => {
    const nstime=NSTime.new();
    const secs = nstime.secs;
    if(type(secs)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("nstime:__lt()", () => {
    const nstime=NSTime.new();
    const nsecs = nstime.nsecs;
    if(type(nsecs)!="number"){
      throw "not number";
    }
  });

}
function test_chapter_11_5_5(this: void,pinfo:Pinfo) {
  recorder.tryPcall("pinfo.visited", () => {
    const visited=pinfo.visited;
    if(type(visited)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("pinfo.number", () => {
    const number=pinfo.number;
    if(type(number)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.len", () => {
    const len=pinfo.len;
    if(type(len)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.caplen", () => {
    const caplen=pinfo.caplen;
    if(type(caplen)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.abs_ts", () => {
    const abs_ts=pinfo.abs_ts;
    if(type(abs_ts)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.rel_ts", () => {
    const rel_ts=pinfo.rel_ts;
    if(type(rel_ts)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.delta_ts", () => {
    const delta_ts=pinfo.delta_ts;
    if(type(delta_ts)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.delta_dis_ts", () => {
    const delta_dis_ts=pinfo.delta_dis_ts;
    if(type(delta_dis_ts)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.curr_proto", () => {
    const curr_proto=pinfo.curr_proto;
    if(type(curr_proto)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("pinfo.can_desegment", () => {
    const can_desegment=pinfo.can_desegment;
    if(type(can_desegment)!="number"){
      throw "not number";
    }
    pinfo.can_desegment=1;
  });
  recorder.tryPcall("pinfo.desegment_len", () => {
    const desegment_len=pinfo.desegment_len;
    if(type(desegment_len)!="number"){
      throw "not number";
    }
    pinfo.desegment_len=1;
  });
  recorder.tryPcall("pinfo.desegment_offset", () => {
    const desegment_offset=pinfo.desegment_offset;
    if(type(desegment_offset)!="number"){
      throw "not number";
    }
    pinfo.desegment_offset=1;
  });
  recorder.tryPcall("pinfo.fragmented", () => {
    const fragmented=pinfo.fragmented;
    if(type(fragmented)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("pinfo.in_error_pkt", () => {
    const in_error_pkt=pinfo.in_error_pkt;
    if(type(in_error_pkt)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("pinfo.match_uint", () => {
    const match_uint=pinfo.match_uint;
    if(type(match_uint)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.match_string", () => {
    const match_string=pinfo.match_string;
    if(type(match_string)!="nil"){
      throw "not nil";
    }
  });
  recorder.tryPcall("pinfo.port_type", () => {
    const port_type=pinfo.port_type;
    if(type(port_type)!="number"){
      throw "not number";
    }
    // bug on docs?
    // pinfo.port_type=port_type;
  });
  recorder.tryPcall("pinfo.src_port", () => {
    const src_port=pinfo.src_port;
    if(type(src_port)!="number"){
      throw "not number";
    }
    pinfo.src_port=1;
  });
  recorder.tryPcall("pinfo.dst_port", () => {
    const dst_port=pinfo.dst_port;
    if(type(dst_port)!="number"){
      throw "not number";
    }
    pinfo.dst_port=1;
  });
  recorder.tryPcall("pinfo.dl_src", () => {
    const dl_src=pinfo.dl_src;
    if(type(dl_src)!="userdata"){
      throw "not userdata";
    }
    pinfo.dl_src=Address.ether("AB-CD-EF-01-23-45");
  });
  recorder.tryPcall("pinfo.dl_dst", () => {
    const dl_dst=pinfo.dl_dst;
    if(type(dl_dst)!="userdata"){
      throw "not userdata";
    }
    pinfo.dl_dst=Address.ether("AB-CD-EF-01-23-45");
    
  });
  recorder.tryPcall("pinfo.net_src", () => {
    const net_src=pinfo.net_src;
    if(type(net_src)!="userdata"){
      throw "not userdata";
    }
    pinfo.net_src=net_src;
  });
  recorder.tryPcall("pinfo.net_dst", () => {
    const net_dst=pinfo.net_dst;
    if(type(net_dst)!="userdata"){
      throw "not userdata";
    }
    pinfo.net_dst=net_dst;
  });
  recorder.tryPcall("pinfo.src", () => {
    const src=pinfo.src;
    if(type(src)!="userdata"){
      throw "not userdata";
    }
    pinfo.src=src;
  });
  recorder.tryPcall("pinfo.dst", () => {
    const dst=pinfo.dst;
    if(type(dst)!="userdata"){
      throw "not userdata";
    }
    pinfo.dst=dst;
  });
  recorder.tryPcall("pinfo.p2p_dir", () => {
    const p2p_dir=pinfo.p2p_dir;
    if(type(p2p_dir)!="number"){
      throw "not number";
    }
    pinfo.p2p_dir=p2p_dir;
  });
  recorder.tryPcall("pinfo.match", () => {
    const match=pinfo.match;
    if(type(match)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("pinfo.columns", () => {
    const columns=pinfo.columns;
    if(type(columns)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("pinfo.cols", () => {
    const cols=pinfo.cols;
    if(type(cols)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("pinfo.private", () => {
    const _private=pinfo.private;
    if(type(_private)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("pinfo.hi", () => {
    const hi=pinfo.hi;
    if(type(hi)!="userdata"){
      throw "not userdata";
    }
    // bug on docs?
    // pinfo.hi=hi;
  });
  recorder.tryPcall("pinfo.lo", () => {
    const lo=pinfo.lo;
    if(type(lo)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("pinfo.conversation", () => {
    pinfo.conversation=chapter_11_5_proto;
  });
}
function test_chapter_11_5_6(this: void,pinfo:Pinfo) {
  recorder.tryPcall("privatetable:__tostring()", () => {
    const privatetable=pinfo.private;
    const s=tostring(privatetable);
    if(type(s)!="string"){
      throw "not string";
    }
  });

}


function test_chapter_11_5(this: void,pinfo:Pinfo) {
  console.log("begin test_chapter_11_5");
  test_chapter_11_5_1();
  test_chapter_11_5_2(pinfo);
  test_chapter_11_5_3(pinfo);
  test_chapter_11_5_4();
  test_chapter_11_5_5(pinfo);
  test_chapter_11_5_6(pinfo);
  console.log("end test_chapter_11_5");
}



const chapter_11_5_proto = Proto.new("chapter_11_5_proto", "test");
chapter_11_5_proto.init = function () {

}

chapter_11_5_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_5(pinfo);
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_5_proto);


