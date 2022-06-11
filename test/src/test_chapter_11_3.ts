
import Recorder from "./Recorder";

const recorder = new Recorder();

function sleep(n:number):void{
  os.execute(`sleep ${tonumber(n)}`)
}

function test_chapter_11_3_1(this: void) {
  if(!gui_enabled()){
    console.log("Skip GUI test, because of gui is disabled.");
    return;
  }
  recorder.tryPcall("ProgDlg.new()", () => {
    const progDlg = ProgDlg.new();
    progDlg.close();
  });
  recorder.tryPcall("ProgDlg.new(title)", () => {
    const progDlg = ProgDlg.new("title");
    progDlg.close();
  });
  recorder.tryPcall("ProgDlg.new(nil,task)", () => {
    const progDlg = ProgDlg.new(undefined,"task");
    progDlg.close();
  });
  recorder.tryPcall("progdlg:update(progress)", () => {
    const progDlg = ProgDlg.new();
    progDlg.update(1);
    progDlg.close();
  });
  recorder.tryPcall("progdlg:update(progress,task)", () => {
    const progDlg = ProgDlg.new();
    progDlg.update(1,"task");
    progDlg.close();
  });
  recorder.tryPcall("progdlg:stopped()", () => {
    const progDlg = ProgDlg.new();
    progDlg.stopped();
    progDlg.close();
  });
  recorder.tryPcall("progdlg:close()", () => {
    const progDlg = ProgDlg.new();
    progDlg.close();
  });

}
function test_chapter_11_3_2(this: void) {
  if(!gui_enabled()){
    console.log("Skip GUI test, because of gui is disabled.");
    return;
  }
  recorder.tryPcall("TextWindow.new()", () => {
    const textWindow = TextWindow.new();
    textWindow.close();
  });
  recorder.tryPcall("TextWindow.new(title)", () => {
    const textWindow = TextWindow.new("title");
    textWindow.close();
  });
  recorder.tryPcall("textwindow:set_atclose(action)", () => {
    const textWindow = TextWindow.new();
    let isCalled=false;
    textWindow.set_atclose(()=>{
      isCalled=true;
    })
    if(isCalled){
      throw "called.";
    }
    textWindow.close();
    if(!isCalled){
      throw "not called.";
    }
  });
  recorder.tryPcall("textwindow:set(text)", () => {
    const textWindow = TextWindow.new();
    textWindow.set("set");
    if(textWindow.get_text()!="set"){
      throw "set failed.";
    }
    textWindow.close();
  });
  recorder.tryPcall("textwindow:append(text)", () => {
    const textWindow = TextWindow.new();
    textWindow.set("set");
    textWindow.append("append");
    if(textWindow.get_text()!="setappend"){
      throw "append failed.";
    }
    textWindow.close();
  });
  recorder.tryPcall("textwindow:clear(text)", () => {
    const textWindow = TextWindow.new();
    textWindow.set("set");
    textWindow.clear();
    if(textWindow.get_text()!=""){
      throw "clear failed.";
    }
    textWindow.close();
  });
  recorder.tryPcall("textwindow:prepend(text)", () => {
    const textWindow = TextWindow.new();
    textWindow.set("set");
    textWindow.prepend("prepend");
    if(textWindow.get_text()!="prependset"){
      throw "prepend failed.";
    }
    textWindow.close();
  });
  recorder.tryPcall("textwindow:set_editable()", () => {
    const textWindow = TextWindow.new();
    textWindow.set_editable();
    textWindow.close();
  });
  recorder.tryPcall("textwindow:set_editable(editable)", () => {
    const textWindow = TextWindow.new();
    textWindow.set_editable(true);
    textWindow.close();
  });
  recorder.tryPcall("textwindow:add_button(label,function)", () => {
    const textWindow = TextWindow.new();
    textWindow.add_button("foo",()=>{
    })
    textWindow.close();
  });

}
function test_chapter_11_3_3(this: void) {
  recorder.tryPcall("gui_enabled()", () => {
    const enabled = gui_enabled();
  });
  
  if(!gui_enabled()){
    console.log("Skip GUI test, because of gui is disabled.");
    return;
  }
  recorder.tryPcall("register_menu(name,action)", () => {
    register_menu("foo",()=>{
    })
  });
  recorder.tryPcall("register_menu(name,action,group)", () => {
    register_menu("foo",()=>{
    },MENU_ANALYZE_UNSORTED);
  });
  recorder.tryPcall("new_dialog(title,action,a)", () => {
    new_dialog("title",(a)=>{
    },"a");
  });
  recorder.tryPcall("new_dialog(title,action,a,b)", () => {
    new_dialog("title",(a,b)=>{
    },"a","b");
  });
  recorder.tryPcall("retap_packets()", () => {
    retap_packets();
  });
  recorder.tryPcall("copy_to_clipboard()", () => {
    copy_to_clipboard("hello");
  });
  recorder.tryPcall("get_filter()", () => {
    get_filter();
  });  
  recorder.tryPcall("set_filter(filter)", () => {
    set_filter("tcp.port eq 80")
  });  
  recorder.tryPcall("apply_filter()", () => {
    apply_filter();
  });  
  recorder.tryPcall("reload()", () => {
    // deprecated
    reload();
  });
  recorder.tryPcall("reload_packets()", () => {
    reload_packets();
  });
  recorder.tryPcall("browser_open_url(url)", () => {
    browser_open_url("https://example.com/browser_open_url");
  });
  recorder.tryPcall("browser_open_data_file(filename)", () => {
    browser_open_data_file("invalidfilename");
  });

  console.log("Skip some test, run test_chapter_11_3_click by your hand.");

}


function test_chapter_11_3(this: void) {
  console.log("begin test_chapter_11_3");
  test_chapter_11_3_1();
  test_chapter_11_3_2();
  test_chapter_11_3_3();
  console.log("end test_chapter_11_3");
}

test_chapter_11_3();


const chapter_11_3_proto = Proto.new("chapter_11_3_proto", "test");
chapter_11_3_proto.init = function () {
  recorder.printResult();
  if(gui_enabled()){
    //exit wireshark
    os.exit(0);
  }  
}

chapter_11_3_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  return 0;
}

register_postdissector(chapter_11_3_proto);



