import Recorder from "./Recorder";


const recorder = new Recorder();

function test_chapter_11_12_1(this: void) {

  recorder.tryPcall("get_version()", () => {
    const result = get_version();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("set_plugin_info(table)", () => {
    const table = new LuaTable<string,string>();
    table.set("version","1.0.1");
    set_plugin_info(table);
    table.set("description","my description");
    table.set("author","Yusuke Kawamoto");
    table.set("repository","https://github.com/novogrammer/wireshark-lua-api-declarations");
    set_plugin_info(table);
  });
  recorder.tryPcall("format_date(timestamp)", () => {
    const timestamp = 0;
    const result = format_date(timestamp);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("format_time(timestamp)", () => {
    const timestamp = 0;
    const result = format_time(timestamp);
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("get_preference(preference)", () => {
    {
      const result = get_preference("");
      if(type(result)!="nil"){
        throw "not nil";
      }
    }
    {
      const result = get_preference("http.tls.port");
      if(type(result)!="string"){
        throw "not string";
      }
    }
    {
      const result = get_preference("gui.fileopen.preview");
      if(type(result)!="number"){
        throw "not number";
      }
    }
    {
      const result = get_preference("gui.ask_unsaved");
      if(type(result)!="boolean"){
        throw "not boolean";
      }
    }
  });
  recorder.tryPcall("set_preference(preference,value)", () => {
    {
      const result=set_preference("http.tls.port","1");
      if(result!=true){
        throw "not true";
      }
    }
    {
      const result=set_preference("http.tls.port","443");
      if(result!=true){
        throw "not true";
      }
    }
    {
      const result=set_preference("http.tls.port","443");
      if(result!=false){
        throw "not false";
      }
    }
    {
      const result=set_preference("foo","bar");
      if(type(result)!="nil"){
        throw "not nil";
      }
    }

  });
  recorder.tryPcall("reset_preference(preference)", () => {
    {
      const result=reset_preference("http.tls.port");
      if(result!=true){
        throw "not true";
      }
  
    }
    {
      const result=reset_preference("foo");
      if(type(result)!="nil"){
        throw "not nil";
      }
    }
  });
  recorder.tryPcall("apply_preferences()", () => {
    apply_preferences();
  });
  recorder.tryPcall("report_failure(text)", () => {
    report_failure("test report_failure");
  });
  recorder.tryPcall("loadfile(filename)", () => {
    const [loaded_chunk]=loadfile("./test/dist/dummy_lua.lua");
    if(type(loaded_chunk)=="nil"){
      throw "nil";
    }
    if(loaded_chunk){
      loaded_chunk();
    }
  });
  recorder.tryPcall("dofile(filename)", () => {
    dofile("./test/dist/dummy_lua.lua");
  });
  recorder.tryPcall("register_stat_cmd_arg(argument)", () => {
    register_stat_cmd_arg("foo");
  });
  recorder.tryPcall("register_stat_cmd_arg(argument,action)", () => {
    register_stat_cmd_arg("foo",()=>{
      console.log("action");
    });
  });

}

function test_chapter_11_12(this: void) {
  console.log("begin test_chapter_11_12");
  test_chapter_11_12_1();
  console.log("end test_chapter_11_12");
}

test_chapter_11_12();
recorder.printResult();