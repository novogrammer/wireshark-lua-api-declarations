
import Recorder from "./Recorder";

const DUMMYFILE_PATH = "/tmp/dummyfile";

const recorder = new Recorder();

function test_chapter_11_1_1(this: void) {
  recorder.tryPcall("Dumper.new(filename)", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH);
    if(type(dumper)!="userdata"){
      throw 'not userdata';
    }
    dumper.close();
  });
  recorder.tryPcall("Dumper.new(filename,filetype)", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH, wtap_filetypes.PCAP);
    dumper.close();
  });
  recorder.tryPcall("Dumper.new(filename,filetype,encap)", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH, wtap_filetypes.PCAP, wtap_encaps.ETHERNET);
    dumper.close();
  });
  recorder.tryPcall("dumper:close()", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH);
    dumper.close();
  });
  recorder.tryPcall("dumper:flush()", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH);
    dumper.flush();
    dumper.close();
  });
  recorder.tryPcall("dumper:dump()", () => {
    const dumper = Dumper.new(DUMMYFILE_PATH);
    dumper.dump(0, PseudoHeader.none(), ByteArray.new("ff fe ff fe"));
    dumper.close();
  });
  recorder.tryPcall("Dumper.new_for_current(filename)", () => {
    const dumper = Dumper.new_for_current(DUMMYFILE_PATH);
    dumper.close();
  });
  recorder.tryPcall("Dumper.new_for_current(filename,filetype)", () => {
    const dumper = Dumper.new_for_current(DUMMYFILE_PATH, wtap_filetypes.PCAP);
    dumper.close();
  });
}
function test_chapter_11_1_2(this: void) {
  recorder.tryPcall("PseudoHeader.none()", () => {
    const pseudoHeader = PseudoHeader.none();
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.eth(fcslen)", () => {
    const pseudoHeader = PseudoHeader.eth(1000);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.eth()", () => {
    const pseudoHeader = PseudoHeader.eth();
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm()", () => {
    const pseudoHeader = PseudoHeader.atm();
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(aal)", () => {
    const pseudoHeader = PseudoHeader.atm(1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,vpi)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,nil,vci)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,nil,nil,channel)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,nil,nil,nil,cells)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,undefined,undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,nil,nil,nil,nil,aal5u2u)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,undefined,undefined,undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.atm(nil,nil,nil,nil,nil,nil,aal5len)", () => {
    const pseudoHeader = PseudoHeader.atm(undefined,undefined,undefined,undefined,undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.mtp2()", () => {
    const pseudoHeader = PseudoHeader.mtp2();
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.mtp2(nil,annexa)", () => {
    const pseudoHeader = PseudoHeader.mtp2(undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });
  recorder.tryPcall("PseudoHeader.mtp2(nil,nil,linknum)", () => {
    const pseudoHeader = PseudoHeader.mtp2(undefined,undefined,1);
    if(type(pseudoHeader)!="userdata"){
      throw 'not userdata';
    }
  });

}


function test_chapter_11_1(this: void) {
  console.log("begin test_chapter_11_1");
  test_chapter_11_1_1();
  test_chapter_11_1_2();
  console.log("end test_chapter_11_1");
}

const chapter_11_1_proto = Proto.new("chapter_11_1_proto", "test");
chapter_11_1_proto.init = function () {

}

chapter_11_1_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_1();
  recorder.printResult();
  os.remove(DUMMYFILE_PATH)
  return 0;
}

register_postdissector(chapter_11_1_proto);


