
import Recorder from "./Recorder";
import { typeof_ts } from "./utils";

const DUMMYFILE_PATH = "/tmp/dummyfile";

const recorder = new Recorder();






function test_init(this: void) {
  console.log("begin test_init");
  recorder.tryPcall("file_exists(name)", () => {
    if(file_exists(DUMMYFILE_PATH)){
      throw "already exists";
    }
    const dumper = Dumper.new(DUMMYFILE_PATH);
    dumper.close();
    if(!file_exists(DUMMYFILE_PATH)){
      throw "not exists";
    }
    os.remove(DUMMYFILE_PATH)
    if(file_exists(DUMMYFILE_PATH)){
      throw "not deleted";
    }
  });

  recorder.tryPcall("typeof_ts(obj)", () => {
    if(typeof_ts("a")!="string"){
      throw "not string";
    }
    const uint64=UInt64.new();
    if(typeof_ts(uint64)!="UInt64"){
      throw "not UInt64";
    }
  });
  

  console.log("end test_init");
}

const init_proto = Proto.new("init_proto", "test");
init_proto.init = function () {

}

init_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_init();
  recorder.printResult();
  return 0;
}

register_postdissector(init_proto);


