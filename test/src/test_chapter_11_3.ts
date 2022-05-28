
import Recorder from "./Recorder";

const recorder = new Recorder();


function test_chapter_11_3_1(this: void) {
  recorder.tryPcall("foo", () => {
    throw "todo";
  });

}
function test_chapter_11_3_2(this: void) {
  recorder.tryPcall("foo", () => {
    throw "todo";
  });

}
function test_chapter_11_3_3(this: void) {
  recorder.tryPcall("gui_enabled()", () => {
    const enabled = gui_enabled();
  });
  recorder.tryPcall("foo", () => {
    throw "todo";
  });

}


function test_chapter_11_3(this: void) {
  console.log("begin test_chapter_11_3");
  test_chapter_11_3_1();
  test_chapter_11_3_2();
  test_chapter_11_3_3();
  console.log("end test_chapter_11_3");
}

test_chapter_11_3();
recorder.printResult();
if(gui_enabled()){
  //exit wireshark
  os.exit(0);
}

