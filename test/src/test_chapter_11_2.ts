
import Recorder from "./Recorder";

const recorder = new Recorder();


let field:Field;

function test_chapter_11_2_outside(this:void){
  console.log("begin test_chapter_11_2_outside");

  recorder.tryPcall("Field.new(fieldname)", () => {
    field = Field.new("http.request");
  });
  console.log("end test_chapter_11_2_outside");
}

function test_chapter_11_2_1(this: void) {
  recorder.tryPcall("Field.list()", () => {
    const list = Field.list();
  });
  recorder.tryPcall("field:__call()", () => {
    const [fieldinfo] = field();
  });
  recorder.tryPcall("field:__tostring()", () => {
    const s = field.toString();
  });
  recorder.tryPcall("field.name", () => {
    // bug?
    // const  name = field.name;
    const  name = field["name"];
    if(name==null){
      throw "name is null";
    }
  });
  recorder.tryPcall("field.display", () => {
    const display = field.display;
    if(display==null){
      throw "display is null";
    }
  });
  recorder.tryPcall("field.type", () => {
    const type = field.type;
    if(type==null){
      throw "type is null";
    }
  });

}
function test_chapter_11_2_2(this: void) {
  recorder.tryPcall("fieldinfo:__len()", () => {
    const [fieldinfo] = field();
    const length=fieldinfo.__len();
  });
  recorder.tryPcall("fieldinfo:__unm()", () => {
    const [fieldinfo] = field();
    const unm=fieldinfo.__unm();
  });
  recorder.tryPcall("fieldinfo:__call()", () => {
    const [fieldinfo] = field();
    const value=fieldinfo();
  });
  recorder.tryPcall("fieldinfo:__tostring()", () => {
    const [fieldinfo] = field();
    const s=fieldinfo.toString();
  });
  recorder.tryPcall("fieldinfo:__eq()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo == fieldinfo;
  });
  recorder.tryPcall("fieldinfo:__le()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo <= fieldinfo;
  });
  recorder.tryPcall("fieldinfo:__lt()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo < fieldinfo;
  });
  recorder.tryPcall("fieldinfo.len", () => {
    const [fieldinfo] = field();
    const len = fieldinfo.len;
  });
  recorder.tryPcall("fieldinfo.offset", () => {
    const [fieldinfo] = field();
    const offset = fieldinfo.offset;
  });
  recorder.tryPcall("fieldinfo.value", () => {
    const [fieldinfo] = field();
    const value = fieldinfo.value;
  });
  recorder.tryPcall("fieldinfo.label", () => {
    const [fieldinfo] = field();
    const label = fieldinfo.label;
  });
  recorder.tryPcall("fieldinfo.display", () => {
    const [fieldinfo] = field();
    const display = fieldinfo.display;
  });
  recorder.tryPcall("fieldinfo.display", () => {
    const [fieldinfo] = field();
    const type = fieldinfo.type;
  });
  recorder.tryPcall("fieldinfo.source", () => {
    const [fieldinfo] = field();
    const source = fieldinfo.source;
  });
  recorder.tryPcall("fieldinfo.range", () => {
    const [fieldinfo] = field();
    const range = fieldinfo.range;
  });
  recorder.tryPcall("fieldinfo.generated", () => {
    const [fieldinfo] = field();
    const generated = fieldinfo.generated;
  });
  recorder.tryPcall("fieldinfo.hidden", () => {
    const [fieldinfo] = field();
    const hidden = fieldinfo.hidden;
  });
  recorder.tryPcall("fieldinfo.is_url", () => {
    const [fieldinfo] = field();
    const is_url = fieldinfo.is_url;
  });
  recorder.tryPcall("fieldinfo.little_endian", () => {
    const [fieldinfo] = field();
    const little_endian = fieldinfo.little_endian;
  });
  recorder.tryPcall("fieldinfo.big_endian", () => {
    const [fieldinfo] = field();
    const big_endian = fieldinfo.big_endian;
  });
  recorder.tryPcall("fieldinfo.name", () => {
    const [fieldinfo] = field();
    // bug?
    // const name = fieldinfo.name;
    const name = fieldinfo["name"];
  });

}
function test_chapter_11_2_3(this: void) {
  recorder.tryPcall("all_field_infos()", () => {
    const result = all_field_infos();
    if(result.length==null){
      throw "length is null";
    }
    if(result[0].display==null){
      throw "display is null";
    }
  });

}


function test_chapter_11_2(this: void) {
  console.log("begin test_chapter_11_2");
  test_chapter_11_2_1();
  test_chapter_11_2_2();
  test_chapter_11_2_3();
  console.log("end test_chapter_11_2");
}

test_chapter_11_2_outside();


const chapter_11_2_proto = Proto.new("chapter_11_2_proto", "test");
chapter_11_2_proto.init = function () {

}

chapter_11_2_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_2();
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_2_proto);


