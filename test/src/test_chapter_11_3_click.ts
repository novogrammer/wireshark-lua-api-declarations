
import Recorder from "./Recorder";

const recorder = new Recorder();


function test_chapter_11_3_3_click(this: void) {
  recorder.tryPcall("gui_enabled()", () => {
    const enabled = gui_enabled();
  });
  
  if(!gui_enabled()){
    console.log("Skip GUI test, because of gui is disabled.");
    return;
  }

  recorder.tryPcall("open_capture_file(filename,filter)", () => {
    open_capture_file("./test/captures/http.pcap","");
  });
  recorder.tryPcall("get_color_filter_slot(row)", () => {
    get_color_filter_slot(1);
  });  
  recorder.tryPcall("set_color_filter_slot(row,text)", () => {
    set_color_filter_slot(1,"tcp.port");
  });  
  recorder.tryPcall("reload_lua_plugins()", () => {
    reload_lua_plugins();
  });



}


function test_chapter_11_3_click(this: void) {
  console.log("begin test_chapter_11_3_click");
  test_chapter_11_3_3_click();
  console.log("end test_chapter_11_3_click");
}


if(gui_enabled()){
  const textWindow = TextWindow.new();
  let isCalled=false;
  const myCallback=()=>{
    if(isCalled){
      return;
    }
    isCalled=true;
    test_chapter_11_3_click();
    textWindow.close();
    recorder.printResult();
    //exit wireshark
    os.exit(0);
  }
  textWindow.add_button("click to continue test",myCallback);
  textWindow.set_atclose(myCallback);
  }else{
  console.log("Skip GUI test, because of gui is disabled.");
}



