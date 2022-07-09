
import Recorder from "./Recorder";

const recorder = new Recorder();

const chapter_11_7_proto = Proto.new("chapter_11_7_proto", "test");

const fields=new LuaTable<number,ProtoField>();
const protofield_none=ProtoField.none("abbr_none");
fields.set(1,protofield_none);
const protofield_bytes=ProtoField.bytes("abbr_bytes");
fields.set(2,protofield_bytes);
const protofield_uint8=ProtoField.uint8("abbr_bytes");
fields.set(3,protofield_uint8);
chapter_11_7_proto.fields=fields;

const experts=new LuaTable<number,ProtoExpert>();
const protoexpert=ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.COMMENT);
experts.set(1,protoexpert);

chapter_11_7_proto.experts=experts;



function test_chapter_11_7_1(this: void,buffer: Tvb,tree:TreeItem) {
  recorder.tryPcall("treeitem:add_packet_field(protofield_none,tvbrange,encoding)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const [subtree,extracted_value,offset]=tree.add_packet_field(protofield_none,tvbrange,ENC_NA);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
    if(type(extracted_value)!="nil"){
      throw "not nil";
    }
    if(type(offset)!="nil"){
      throw "not nil";
    }
  });
  recorder.tryPcall("treeitem:add_packet_field(protofield_bytes,tvbrange,encoding)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const [subtree,extracted_value,offset]=tree.add_packet_field(protofield_bytes,tvbrange,ENC_BIG_ENDIAN);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
    if(type(extracted_value)!="userdata"){
      throw "not userdata";
    }
    if(type(offset)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("treeitem:add_packet_field(protofield_bytes,tvbrange,encoding,label1,label2)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const [subtree,extracted_value,offset]=tree.add_packet_field(protofield_bytes,tvbrange,ENC_BIG_ENDIAN,"label1","label2");
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
    if(type(extracted_value)!="userdata"){
      throw "not userdata";
    }
    if(type(offset)!="number"){
      throw "not number";
    }
  });

  recorder.tryPcall("treeitem:add(protofield)", () => {
    const subtree = tree.add(protofield_none);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add(protofield,tvbrange)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_none,tvbrange);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add(protofield,tvbrange,value)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_uint8,tvbrange,1);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add(protofield,tvbrange,value,label1,label2)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_uint8,tvbrange,1,"label1","label2");
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  
  recorder.tryPcall("treeitem:add_le(protofield)", () => {
    const subtree = tree.add_le(protofield_none);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add_le(protofield,tvbrange)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add_le(protofield_none,tvbrange);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add_le(protofield,tvbrange,value)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add_le(protofield_uint8,tvbrange,1);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add_le(protofield,tvbrange,value,label1,label2)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add_le(protofield_uint8,tvbrange,1,"label1","label2");
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  
  recorder.tryPcall("treeitem:set_text(text)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.set_text("text");
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:append_text(text)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.append_text("text");
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:prepend_text(text)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.prepend_text("text");
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:add_expert_info()", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_expert_info();
    if(subtree!=result){
      throw "not same";
    }
  });
  recorder.tryPcall("treeitem:add_expert_info(group)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_expert_info(expert.group.DEBUG);
    if(subtree!=result){
      throw "not same";
    }
  });
  recorder.tryPcall("treeitem:add_expert_info(nil,severity)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_expert_info(undefined,expert.severity.COMMENT);
    if(subtree!=result){
      throw "not same";
    }
  });
  recorder.tryPcall("treeitem:add_expert_info(nil,nil,text)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_expert_info(undefined,undefined,"text");
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:add_proto_expert_info(expert)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_proto_expert_info(protoexpert);
    if(subtree!=result){
      throw "not same";
    }
  });
  recorder.tryPcall("treeitem:add_proto_expert_info(expert,text)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.add_proto_expert_info(protoexpert,"text");
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:add_tvb_expert_info(expert,tvb)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_none);
    const result = subtree.add_tvb_expert_info(protoexpert,tvbrange);
    if(subtree!=result){
      throw "not same";
    }
  });
  recorder.tryPcall("treeitem:add_tvb_expert_info(expert,tvb,text)", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_none);
    const result = subtree.add_tvb_expert_info(protoexpert,tvbrange,"text");
    if(subtree!=result){
      throw "not same";
    }
  });
  
  recorder.tryPcall("treeitem:set_generated(bool)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.set_generated(true);
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:set_hidden(bool)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.set_hidden(true);
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:set_len(len)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.set_len(1);
    if(subtree!=result){
      throw "not same";
    }
  });

  recorder.tryPcall("treeitem:referenced(protofield)", () => {
    const subtree = tree.add(protofield_none);
    const result = subtree.referenced(protofield_none);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  
  recorder.tryPcall("treeitem:__tostring()", () => {
    const subtree = tree.add(protofield_none);
    const s = tostring(subtree);
    if(type(s)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("treeitem.text", () => {
    const tvbrange=buffer.range(0,buffer.len());
    const subtree = tree.add(protofield_uint8,tvbrange,1,"text");
    const text=subtree.text;
    if(type(text)!="string"){
      throw "not string";
    }
    subtree.text=text;
  });

  recorder.tryPcall("treeitem.visible", () => {
    const subtree = tree.add(protofield_none);
    const visible=subtree.visible;
    if(type(visible)!="boolean"){
      throw "not boolean";
    }
  });

  recorder.tryPcall("treeitem.generated", () => {
    const subtree = tree.add(protofield_none);
    const generated=subtree.generated;
    if(type(generated)!="boolean"){
      throw "not boolean";
    }
    subtree.generated=generated;
  });

  recorder.tryPcall("treeitem.hidden", () => {
    const subtree = tree.add(protofield_none);
    const hidden=subtree.hidden;
    if(type(hidden)!="boolean"){
      throw "not boolean";
    }
    subtree.hidden=hidden;
  });

  recorder.tryPcall("treeitem.len", () => {
    const subtree = tree.add(protofield_none);
    const len=subtree.len;
    if(type(len)!="number"){
      throw "not number";
    }
    subtree.len=len;
  });

}

function test_chapter_11_7(this: void,buffer: Tvb,tree:TreeItem) {
  console.log("begin test_chapter_11_7");
  test_chapter_11_7_1(buffer,tree);
  console.log("end test_chapter_11_7");
}



chapter_11_7_proto.init = function () {

}

chapter_11_7_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_7(buffer,tree);
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_7_proto);


