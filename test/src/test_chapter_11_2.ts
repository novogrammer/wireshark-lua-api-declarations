
import Recorder from "./Recorder";

const recorder = new Recorder();


let field:Field;

function test_chapter_11_2_outside(this:void){
  console.log("begin test_chapter_11_2_outside");

  recorder.tryPcall("Field.new(fieldname)", () => {
    field = Field.new("http.request");
    if(type(field)!="userdata"){
      throw 'not userdata';
    }
  });
  console.log("end test_chapter_11_2_outside");
}

function test_chapter_11_2_1(this: void) {
  recorder.tryPcall("Field.list()", () => {
    const list = Field.list();
    if(type(list)!="table"){
      throw 'not table';
    }
  });
  recorder.tryPcall("field:__call()", () => {
    const [fieldinfo] = field();
    if(type(fieldinfo)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("field:__tostring()", () => {
    const s = tostring(field);
    if(type(s)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("field.name", () => {
    // bug?
    // const  name = field.name;
    const  name = field["name"];
    if(type(name)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("field.display", () => {
    const display = field.display;
    if(type(display)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("field.type", () => {
    const t = field.type;
    if(type(t)!="number"){
      throw 'not number';
    }
  });

}
function test_chapter_11_2_2(this: void) {
  recorder.tryPcall("fieldinfo:__len()", () => {
    const [fieldinfo] = field();
    const length=fieldinfo.__len();
    if(type(length)!="number"){
      throw 'not number';
    }
  });
  recorder.tryPcall("fieldinfo:__unm()", () => {
    const [fieldinfo] = field();
    const unm=fieldinfo.__unm();
    if(type(unm)!="number"){
      throw 'not number';
    }
  });
  recorder.tryPcall("fieldinfo:__call()", () => {
    const [fieldinfo] = field();
    const value=fieldinfo();
    if(value==null){
      throw "value is null";
    }
  });
  recorder.tryPcall("fieldinfo:__tostring()", () => {
    const [fieldinfo] = field();
    const s=tostring(fieldinfo);
    if(type(s)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("fieldinfo:__eq()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo == fieldinfo;
    if(type(result)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo:__le()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo <= fieldinfo;
    if(type(result)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo:__lt()", () => {
    const [fieldinfo] = field();
    const result = fieldinfo < fieldinfo;
    if(type(result)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.len", () => {
    const [fieldinfo] = field();
    const len = fieldinfo.len;
    if(type(len)!="number"){
      throw 'not number';
    }
  });
  recorder.tryPcall("fieldinfo.offset", () => {
    const [fieldinfo] = field();
    const offset = fieldinfo.offset;
    if(type(offset)!="number"){
      throw 'not number';
    }
  });
  recorder.tryPcall("fieldinfo.value", () => {
    const [fieldinfo] = field();
    const value = fieldinfo.value;
    if(value==null){
      throw "value is null";
    }
  });
  recorder.tryPcall("fieldinfo.label", () => {
    const [fieldinfo] = field();
    const label = fieldinfo.label;
    if(type(label)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("fieldinfo.display", () => {
    const [fieldinfo] = field();
    const display = fieldinfo.display;
    if(type(display)!="string"){
      throw 'not string';
    }
  });
  recorder.tryPcall("fieldinfo.display", () => {
    const [fieldinfo] = field();
    const t = fieldinfo.type;
    if(type(t)!="number"){
      throw 'not number';
    }
  });
  recorder.tryPcall("fieldinfo.source", () => {
    const [fieldinfo] = field();
    const source = fieldinfo.source;
    if(type(source)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("fieldinfo.range", () => {
    const [fieldinfo] = field();
    const range = fieldinfo.range;
    if(type(range)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("fieldinfo.generated", () => {
    const [fieldinfo] = field();
    const generated = fieldinfo.generated;
    if(type(generated)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.hidden", () => {
    const [fieldinfo] = field();
    const hidden = fieldinfo.hidden;
    if(type(hidden)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.is_url", () => {
    const [fieldinfo] = field();
    const is_url = fieldinfo.is_url;
    if(type(is_url)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.little_endian", () => {
    const [fieldinfo] = field();
    const little_endian = fieldinfo.little_endian;
    if(type(little_endian)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.big_endian", () => {
    const [fieldinfo] = field();
    const big_endian = fieldinfo.big_endian;
    if(type(big_endian)!="boolean"){
      throw 'not boolean';
    }
  });
  recorder.tryPcall("fieldinfo.name", () => {
    const [fieldinfo] = field();
    // bug?
    // const name = fieldinfo.name;
    const name = fieldinfo["name"];
    if(type(name)!="string"){
      throw 'not string';
    }
  });

}
function test_chapter_11_2_3(this: void) {
  recorder.tryPcall("all_field_infos()", () => {
    const result = all_field_infos();
    if(result.length==null){
      throw "length is null";
    }
    if(type(result[0].display)!="string"){
      throw 'not string';
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


