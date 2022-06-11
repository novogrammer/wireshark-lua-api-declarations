
import Recorder from "./Recorder";

const recorder = new Recorder();

function test_chapter_11_4_1(this: void) {
  recorder.tryPcall("Listener.new()", () => {
    const listener=Listener.new();
  });
  recorder.tryPcall("Listener.new(tap)", () => {
    const listener=Listener.new("http");
  });
  recorder.tryPcall("Listener.new(nil,filter)", () => {
    const listener=Listener.new(undefined,"");
  });
  recorder.tryPcall("Listener.new(nil,nil,allfields)", () => {
    const listener=Listener.new(undefined,undefined,true);
  });
  recorder.tryPcall("Listener.list()", () => {
    const list=Listener.list();
    // for(let [_,tapname] of pairs(list)){
    //   console.log(_,tapname);
    // }
  });
  recorder.tryPcall("listener:remove", () => {
    const listener=Listener.new();
    listener.remove();
  });
  recorder.tryPcall("listener:__tostring", () => {
    const listener=Listener.new();
    tostring(listener);
  });
  recorder.tryPcall("listener:packet", () => {
    const listener=Listener.new();
    listener.packet=(pinfo:Pinfo,tvb:Tvb,tapinfo:LuaTable | null)=>{
      console.log("hello listener:packet!");
      console.log(`pinfo.src: ${pinfo.src}`);
      console.log(`tvb.len(): ${tvb.len()}`);
      console.log(`tapinfo: ${tapinfo==null?"null":pairs(tapinfo)}`);
    };
  });
  recorder.tryPcall("listener:draw", () => {
    const listener=Listener.new();
    listener.draw=()=>{
      console.log("hello listener:draw!");
    }
  });
  recorder.tryPcall("listener:reset", () => {
    const listener=Listener.new();
    listener.reset=()=>{
      console.log("hello listener:reset!");
    }
  });
}


function test_chapter_11_4(this: void) {
  console.log("begin test_chapter_11_4");
  test_chapter_11_4_1();
  console.log("end test_chapter_11_4");
}



const chapter_11_2_proto = Proto.new("chapter_11_2_proto", "test");
chapter_11_2_proto.init = function () {

}

chapter_11_2_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_4();
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_2_proto);


