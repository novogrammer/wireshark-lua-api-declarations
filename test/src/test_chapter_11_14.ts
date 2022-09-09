import Recorder from "./Recorder";


const recorder = new Recorder();

function test_chapter_11_14_1(this: void) {

  recorder.tryPcall("Struct.pack(format, value)", () => {
    {
      const [result,pos] = Struct.pack("I", 67324752);
      if(type(result)!="string"){
        throw "not string";
      }
      if(type(pos)!="nil"){
        throw "not nil";
      }
    }
    {
      const [result,pos] = Struct.pack("I=I", 67324752, 67324752);
      if(type(result)!="string"){
        throw "not string";
      }
      if(type(pos)!="number"){
        throw "not number";
      }
    }
  });
  recorder.tryPcall("Struct.unpack(format, struct)", () => {
    const [packed] = Struct.pack("I", 67324752);

    const [result]=Struct.unpack("I",packed);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("Struct.unpack(format, struct, begin)", () => {
    const [packed] = Struct.pack("I", 67324752);

    const [result]=Struct.unpack("I",packed,1);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("Struct.size(format)", () => {
    const result = Struct.size("I");
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("Struct.values(format)", () => {
    const result = Struct.values("I");
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("Struct.tohex(bytestring)", () => {
    const [packed] = Struct.pack("I", 67324752);
    const result = Struct.tohex(packed);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Struct.tohex(bytestring,lowercase)", () => {
    const [packed] = Struct.pack("I", 67324752);
    const result = Struct.tohex(packed,true);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Struct.tohex(bytestring,nil,separator)", () => {
    const [packed] = Struct.pack("I", 67324752);
    const result = Struct.tohex(packed,undefined," ");
    if(type(result)!="string"){
      throw "not string";
    }
  });

}

function test_chapter_11_14(this: void) {
  console.log("begin test_chapter_11_14");
  test_chapter_11_14_1();
  console.log("end test_chapter_11_14");
}

test_chapter_11_14();
recorder.printResult();