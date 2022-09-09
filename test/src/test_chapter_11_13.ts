import Recorder from "./Recorder";


const recorder = new Recorder();

function test_chapter_11_13_1(this: void) {
  recorder.tryPcall("Int64.decode(string)", () => {
    const s=String.fromCharCode(0x01,0x23,0x45,0x67,0x89,0xab,0xcd,0xef);
    const result = Int64.decode(s);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.decode(string,endian)", () => {
    const s=String.fromCharCode(0x01,0x23,0x45,0x67,0x89,0xab,0xcd,0xef);
    const result = Int64.decode(s,false);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.new()", () => {
    const result = Int64.new();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.new(value)", () => {
    const result = Int64.new(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.new(value,highvalue)", () => {
    const result = Int64.new(1,2);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.max()", () => {
    const result = Int64.max();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.min()", () => {
    const result = Int64.min();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Int64.fromhex(hex)", () => {
    const result = Int64.fromhex("10");
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:encode()", () => {
    const int64 = Int64.new();
    const result = int64.encode();
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("int64:encode(endian)", () => {
    const int64 = Int64.new();
    const result = int64.encode(false);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("int64:__call()", () => {
    const int64 = Int64.new();
    const result = int64();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:tonumber()", () => {
    const int64 = Int64.new();
    const result = int64.tonumber();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("int64:tohex()", () => {
    const int64 = Int64.new();
    const result = int64.tohex();
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("int64:tohex(numbytes)", () => {
    const int64 = Int64.new();
    const result = int64.tohex(8);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("int64:higher()", () => {
    const int64 = Int64.new();
    const result = int64.higher();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("int64:lower()", () => {
    const int64 = Int64.new();
    const result = int64.lower();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("int64:__tostring()", () => {
    const int64 = Int64.new();
    const result = tostring(int64);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("int64:__unm()", () => {
    const int64 = Int64.new(1);
    const result = -int64;
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__add()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l.__add(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__sub()", () => {
    const int64l = Int64.new(2);
    const int64r = Int64.new(1);
    const result = int64l.__sub(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__mul()", () => {
    const int64l = Int64.new(2);
    const int64r = Int64.new(3);
    const result = int64l.__mul(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__div()", () => {
    const int64l = Int64.new(8);
    const int64r = Int64.new(4);
    const result = int64l.__div(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__mod()", () => {
    const int64l = Int64.new(8);
    const int64r = Int64.new(3);
    const result = int64l.__mod(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__pow()", () => {
    const int64l = Int64.new(4);
    const int64r = Int64.new(2);
    const result = int64l.__pow(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:__eq()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l == int64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("int64:__lt()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l < int64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("int64:__le()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l <= int64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("int64:bnot()", () => {
    const int64 = Int64.new(1);
    const result = int64.bnot();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:band()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l.band(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:bor()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l.bor(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:bxor()", () => {
    const int64l = Int64.new(1);
    const int64r = Int64.new(2);
    const result = int64l.bxor(int64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:lshift(numbits)", () => {
    const int64 = Int64.new(1);
    const result = int64.lshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:rshift(numbits)", () => {
    const int64 = Int64.new(1);
    const result = int64.rshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:arshift(numbits)", () => {
    const int64 = Int64.new(1);
    const result = int64.arshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:rol(numbits)", () => {
    const int64 = Int64.new(1);
    const result = int64.rol(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:ror(numbits)", () => {
    const int64 = Int64.new(1);
    const result = int64.ror(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("int64:bswap()", () => {
    const int64 = Int64.new(1);
    const result = int64.bswap();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
}
function test_chapter_11_13_2(this: void) {
  recorder.tryPcall("UInt64.decode(string)", () => {
    const s=String.fromCharCode(0x01,0x23,0x45,0x67,0x89,0xab,0xcd,0xef);
    const result = UInt64.decode(s);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.decode(string,endian)", () => {
    const s=String.fromCharCode(0x01,0x23,0x45,0x67,0x89,0xab,0xcd,0xef);
    const result = UInt64.decode(s,false);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.new()", () => {
    const result = UInt64.new();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.new(value)", () => {
    const result = UInt64.new(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.new(value,highvalue)", () => {
    const result = UInt64.new(1,2);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.max()", () => {
    const result = UInt64.max();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.min()", () => {
    const result = UInt64.min();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("UInt64.fromhex(hex)", () => {
    const result = UInt64.fromhex("10");
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:encode()", () => {
    const uint64 = UInt64.new();
    const result = uint64.encode();
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("uint64:encode(endian)", () => {
    const uint64 = UInt64.new();
    const result = uint64.encode(false);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("uint64:__call()", () => {
    const uint64 = UInt64.new();
    const result = uint64();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:tonumber()", () => {
    const uint64 = UInt64.new();
    const result = uint64.tonumber();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("uint64:__tostring()", () => {
    const uint64 = UInt64.new();
    const result = tostring(uint64);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("uint64:tohex()", () => {
    const uint64 = UInt64.new();
    const result = uint64.tohex();
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("uint64:tohex(numbytes)", () => {
    const uint64 = UInt64.new();
    const result = uint64.tohex(8);
    // console.log(result);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("uint64:higher()", () => {
    const uint64 = UInt64.new();
    const result = uint64.higher();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("uint64:lower()", () => {
    const uint64 = UInt64.new();
    const result = uint64.lower();
    // console.log(result);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("uint64:__unm()", () => {
    const uint64 = UInt64.new(1);
    const result = -uint64;
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__add()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l.__add(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__sub()", () => {
    const uint64l = UInt64.new(2);
    const uint64r = UInt64.new(1);
    const result = uint64l.__sub(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__mul()", () => {
    const uint64l = UInt64.new(2);
    const uint64r = UInt64.new(3);
    const result = uint64l.__mul(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__div()", () => {
    const uint64l = UInt64.new(8);
    const uint64r = UInt64.new(4);
    const result = uint64l.__div(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__mod()", () => {
    const uint64l = UInt64.new(8);
    const uint64r = UInt64.new(3);
    const result = uint64l.__mod(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__pow()", () => {
    const uint64l = UInt64.new(4);
    const uint64r = UInt64.new(2);
    const result = uint64l.__pow(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:__eq()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l == uint64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("uint64:__lt()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l < uint64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("uint64:__le()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l <= uint64r;
    // console.log(result);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("uint64:bnot()", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.bnot();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:band()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l.band(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:bor()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l.bor(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:bxor()", () => {
    const uint64l = UInt64.new(1);
    const uint64r = UInt64.new(2);
    const result = uint64l.bxor(uint64r);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:lshift(numbits)", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.lshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:rshift(numbits)", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.rshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:arshift(numbits)", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.arshift(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:rol(numbits)", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.rol(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:ror(numbits)", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.ror(1);
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("uint64:bswap()", () => {
    const uint64 = UInt64.new(1);
    const result = uint64.bswap();
    // console.log(result);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
  });
}

function test_chapter_11_13(this: void) {
  console.log("begin test_chapter_11_13");
  test_chapter_11_13_1();
  test_chapter_11_13_2();
  console.log("end test_chapter_11_13");
}

test_chapter_11_13();
recorder.printResult();