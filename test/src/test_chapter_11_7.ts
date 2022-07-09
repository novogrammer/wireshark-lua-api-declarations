
import Recorder from "./Recorder";

const recorder = new Recorder();

const chapter_11_7_proto = Proto.new("chapter_11_7_proto", "test");

const fields=new LuaTable<number,ProtoField>();
const protofield_none=ProtoField.none("abbr_none");
fields.set(1,protofield_none);
const protofield_bytes=ProtoField.bytes("abbr_bytes");
fields.set(2,protofield_bytes);
chapter_11_7_proto.fields=fields;


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

  recorder.tryPcall("treeitem:add()", () => {
    const subtree = tree.add();
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("treeitem:add(protofield)", () => {
    const subtree = tree.add(protofield_none);
    if(type(subtree)!="userdata"){
      throw "not userdata";
    }
  });
  // recorder.tryPcall("treeitem:add(nil,tvbrange)", () => {
  //   const tvbrange=buffer.range(0,buffer.len());
  //   const subtree = tree.add(undefined,tvbrange);
  //   if(type(subtree)!="userdata"){
  //     throw "not userdata";
  //   }
  // });

  recorder.tryPcall("todo", () => {
    throw "todo";
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


