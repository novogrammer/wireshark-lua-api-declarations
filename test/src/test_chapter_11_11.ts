import Recorder from "./Recorder";


const recorder = new Recorder();

function test_chapter_11_11_1(this: void) {


  recorder.tryPcall("wtap_file_type_subtype_description(filetype)", () => {
    const filetype=wtap_filetypes.JSON;
    const result=wtap_file_type_subtype_description(filetype);
    if(type(result)!="string"){
      throw "not string";
    }
    const result2=wtap_file_type_subtype_description(9999);
    if(type(result2)!="nil"){
      throw "not nil";
    }
  });
  recorder.tryPcall("wtap_file_type_subtype_name(filetype)", () => {
    const filetype=wtap_filetypes.JSON;
    const result=wtap_file_type_subtype_name(filetype);
    if(type(result)!="string"){
      throw "not string";
    }
    const result2=wtap_file_type_subtype_name(9999);
    if(type(result2)!="nil"){
      throw "not string";
    }
  });
  recorder.tryPcall("wtap_name_to_file_type_subtype(name)", () => {
    const name="json";
    const result=wtap_name_to_file_type_subtype(name);
    if(type(result)!="number"){
      throw "not number";
    }
    const result2=wtap_name_to_file_type_subtype("x");
    if(type(result2)!="nil"){
      throw "not nil";
    }
  });
  recorder.tryPcall("wtap_pcap_file_type_subtype()", () => {
    const result=wtap_pcap_file_type_subtype();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("wtap_pcap_nsec_file_type_subtype()", () => {
    const result=wtap_pcap_nsec_file_type_subtype();
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("wtap_pcapng_file_type_subtype()", () => {
    const result=wtap_pcapng_file_type_subtype();
    if(type(result)!="number"){
      throw "not number";
    }
  });

}

function test_chapter_11_11(this: void) {
  console.log("begin test_chapter_11_11");
  test_chapter_11_11_1();
  console.log("end test_chapter_11_11");
}

test_chapter_11_11();
recorder.printResult();