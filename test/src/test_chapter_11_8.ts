
import Recorder from "./Recorder";

const recorder = new Recorder();

const chapter_11_8_proto = Proto.new("chapter_11_8_proto", "test");

const fields=new LuaTable<number,ProtoField>();
const protofield_none=ProtoField.none("abbr_none");
fields.set(1,protofield_none);
const protofield_bytes=ProtoField.bytes("abbr_bytes");
fields.set(2,protofield_bytes);
const protofield_uint8=ProtoField.uint8("abbr_bytes");
fields.set(3,protofield_uint8);
chapter_11_8_proto.fields=fields;

const experts=new LuaTable<number,ProtoExpert>();
const protoexpert=ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.COMMENT);
experts.set(1,protoexpert);

chapter_11_8_proto.experts=experts;



function test_chapter_11_8_1(this: void) {
  recorder.tryPcall("ByteArray.new()", () => {
    const bytearray=ByteArray.new();
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("ByteArray.new(hexbytes)", () => {
    const bytearray=ByteArray.new("a1 b2 c3 d4");
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("ByteArray.new(hexbytes,separator)", () => {
    const bytearray=ByteArray.new("a1-b2-c3-d4","-");
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });

  // bytearray:__concat(first, second)
  recorder.tryPcall("ByteArray.__concat(first, second)", () => {
    const bytearray=ByteArray.__concat(ByteArray.new("a1 b2"),ByteArray.new("c3 d4"));
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("bytearray:__eq(rhs)", () => {
    const result=ByteArray.new("a1 b2") == ByteArray.new("c3 d4");
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("bytearray:prepend(rhs)", () => {
    const bytearray=ByteArray.new("a1 b2");
    bytearray.prepend(ByteArray.new("c3 d4"));
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("bytearray:append(rhs)", () => {
    const bytearray=ByteArray.new("a1 b2");
    bytearray.append(ByteArray.new("c3 d4"));
    if(type(bytearray)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("bytearray:set_size(size)", () => {
    const bytearray=ByteArray.new("a1 b2");
    bytearray.set_size(4);
  });
  recorder.tryPcall("bytearray:set_index(index,value)", () => {
    const bytearray=ByteArray.new("a1 b2");
    bytearray.set_index(1,255);
  });
  recorder.tryPcall("bytearray:get_index(index)", () => {
    const bytearray=ByteArray.new("a1 b2");
    const result=bytearray.get_index(1);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("bytearray:len()", () => {
    const bytearray=ByteArray.new("a1 b2");
    const result=bytearray.len();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("bytearray:subset(offset,length)", () => {
    const bytearray=ByteArray.new("a1 b2 c3 d4");
    const result=bytearray.subset(1,2);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("bytearray:base64_decode()", () => {
    // YWJj(59 57 4a 6a) -> abc
    const bytearray=ByteArray.new("59 57 4a 6a");
    const result=bytearray.base64_decode();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("bytearray:raw()", () => {
    // abc(61 62 63)
    const bytearray=ByteArray.new("61 62 63");
    const result=bytearray.raw();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:raw(offset)", () => {
    // abc(61 62 63)
    const bytearray=ByteArray.new("61 62 63");
    const result=bytearray.raw(1);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:raw(nil,length)", () => {
    // abc(61 62 63)
    const bytearray=ByteArray.new("61 62 63");
    const result=bytearray.raw(undefined,2);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:tohex()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const result=bytearray.tohex();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:tohex(lowercase)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const result=bytearray.tohex(true);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:tohex(nil,separator)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const result=bytearray.tohex(undefined,"-");
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:__tostring()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const result=tostring(bytearray);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("bytearray:tvb(name)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const result=bytearray.tvb("name");
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
}
function test_chapter_11_8_2(this: void) {

  recorder.tryPcall("tvb:__tostring()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tostring(tvb);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvb:reported_len()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.reported_len();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvb:captured_len()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.captured_len();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvb:len()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.len();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvb:reported_length_remaining()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.reported_length_remaining();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvb:bytes()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.bytes();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:bytes(offset)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.bytes(1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:bytes(nil,length)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.bytes(undefined,1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:offset()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.offset();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvb:_call()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:_call()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:_call(offset)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb(1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:_call(nil,length)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb(undefined,2);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:range()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.range();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:range(offset)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.range(1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:range(nil,length)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.range(undefined,2);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvb:raw()", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.raw();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvb:raw(offset)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.raw(1);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvb:raw(nil,length)", () => {
    const bytearray=ByteArray.new("01 02 03");
    const tvb=bytearray.tvb("name");
    const result=tvb.raw(undefined,2);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvb:__eq()", () => {
    
    const bytearray1=ByteArray.new("a1 b2");
    const tvb1=bytearray1.tvb("name1");
    const bytearray2=ByteArray.new("c3 d4");
    const tvb2=bytearray2.tvb("name2");
    const result=tvb1==tvb2;
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });

}
function test_chapter_11_8_3(this: void) {

  recorder.tryPcall("tvbrange:tvb()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.tvb();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:uint()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.uint();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:le_uint()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_uint();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:uint64()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.uint64();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:le_uint64()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_uint64();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:int()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.int();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:le_int()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_int();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:int64()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.int64();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:le_int64()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_int64();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:float()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.float();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:le_float()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_float();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:ipv4()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.ipv4();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:le_ipv4()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_ipv4();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:ipv6()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 a1 b2 c3 d4 a1 b2 c3 d4 a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.ipv6();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:ether()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4 e5 f6").tvb("name").range();
    const result=tvbrange.ether();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:nstime()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const [result1,result2]=tvbrange.nstime();
    if(type(result1)!="userdata"){
      throw "not userdata";
    }
    if(type(result2)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:nstime(encoding)", () => {
    // 2014-07-04
    const tvbrange=ByteArray.new("32 30 31 34 2d 30 37 2d 30 34").tvb("name").range();
    const [result1,result2]=tvbrange.nstime(ENC_ISO_8601_DATE);
    if(type(result1)!="userdata"){
      throw "not userdata";
    }
    if(type(result2)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:nstime(encoding) null", () => {
    // 2014-07-04
    const tvbrange=ByteArray.new("32 30 31 34 2d 30 37 2d 30 34").tvb("name").range();
    // fail
    const [result1,result2]=tvbrange.nstime(ENC_ISO_8601_TIME);
    if(type(result1)!="nil"){
      throw "not nil";
    }
    if(type(result2)!="nil"){
      throw "not nil";
    }
  });
  recorder.tryPcall("tvbrange:le_nstime()", () => {
    const tvbrange=ByteArray.new("a1 b2 c3 d4").tvb("name").range();
    const result=tvbrange.le_nstime();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:string()", () => {
    const tvbrange=ByteArray.new("30 31 33").tvb("name").range();
    const result=tvbrange.string();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:string(encoding)", () => {
    const tvbrange=ByteArray.new("30 31 33").tvb("name").range();
    const result=tvbrange.string(ENC_UTF_8);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:ustring()", () => {
    const tvbrange=ByteArray.new("00 31 00 32 00 33").tvb("name").range();
    const result=tvbrange.ustring();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:le_ustring()", () => {
    const tvbrange=ByteArray.new("31 00 32 00 33 00").tvb("name").range();
    const result=tvbrange.le_ustring();
    if(type(result)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("tvbrange:stringz()", () => {
    const tvbrange=ByteArray.new("30 31 33 00").tvb("name").range();
    const result=tvbrange.stringz();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:stringz(encoding)", () => {
    const tvbrange=ByteArray.new("30 31 33 00").tvb("name").range();
    const result=tvbrange.stringz(ENC_UTF_8);
    if(type(result)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("tvbrange:strsize()", () => {
    const tvbrange=ByteArray.new("30 31 33 00").tvb("name").range();
    const result=tvbrange.strsize();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("tvbrange:strsize(encoding)", () => {
    const tvbrange=ByteArray.new("30 31 33 00").tvb("name").range();
    const result=tvbrange.strsize(ENC_UTF_8);
    if(type(result)!="number"){
      throw "not number";
    }
  });

  recorder.tryPcall("tvbrange:ustringz()", () => {
    const tvbrange=ByteArray.new("00 31 00 32 00 33 00 00").tvb("name").range();
    const result=tvbrange.ustringz();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:le_ustring()", () => {
    const tvbrange=ByteArray.new("31 00 32 00 33 00 00 00").tvb("name").range();
    const result=tvbrange.le_ustringz();
    if(type(result)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("tvbrange:bytes()", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.bytes();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:bytes(encoding)", () => {
    const tvbrange=ByteArray.new("31 32 33 34").tvb("name").range();
    const result=tvbrange.bytes(ENC_STR_HEX);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("tvbrange:range()", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.range();
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:range(offset)", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.range(1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:range(nil,length)", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.range(undefined,2);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("tvbrange:uncompress()", () => {
    // cat ./123.txt | gzip -c > ./123.gz
    const tvbrange=ByteArray.new("1F 8B 08 00 01 DD D2 62 00 03 33 34 32 06 00 D2 63 48 88 03 00 00 00").tvb("name").range();
    const result=tvbrange.uncompress("new name");
    // console.log(result.string());
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("tvbrange:len()", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.len();
    if(type(result)!="number"){
      throw "not number";
    }
  });

  recorder.tryPcall("tvbrange:raw()", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.raw();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:raw(offset)", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.raw(1);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("tvbrange:raw(nil,2)", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tvbrange.raw(undefined,2);
    if(type(result)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("tvbrange:__eq()", () => {
    const tvbrange1=ByteArray.new("31 32").tvb("name1").range();
    const tvbrange2=ByteArray.new("31 32").tvb("name2").range();
    const result=tvbrange1==tvbrange2;
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });

  recorder.tryPcall("tvbrange:__tostring()", () => {
    const tvbrange=ByteArray.new("31 32 33").tvb("name").range();
    const result=tostring(tvbrange);
    if(type(result)!="string"){
      throw "not string";
    }
  });

}

function test_chapter_11_8(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  console.log("begin test_chapter_11_8");
  test_chapter_11_8_1();
  test_chapter_11_8_2();
  test_chapter_11_8_3();
  console.log("end test_chapter_11_8");
}



chapter_11_8_proto.init = function () {

}

chapter_11_8_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_8(buffer,pinfo,tree);
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_8_proto);


