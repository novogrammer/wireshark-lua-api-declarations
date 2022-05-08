
import Recorder from "./Recorder";


const recorder = new Recorder();

function test_chapter_11_1_1(this: void) {
  recorder.tryPcall("Dumper.new(filename)", () => {
    const dumper = Dumper.new("dummyfile");
    dumper.close();
  });
  recorder.tryPcall("Dumper.new(filename,filetype)", () => {
    const dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP);
    dumper.close();
  });
  recorder.tryPcall("Dumper.new(filename,filetype,encap)", () => {
    const dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP, wtap_encaps.ETHERNET);
    dumper.close();
  });
  recorder.tryPcall("dumper:close()", () => {
    const dumper = Dumper.new("dummyfile");
    dumper.close();
  });
  recorder.tryPcall("dumper:flush()", () => {
    const dumper = Dumper.new("dummyfile");
    dumper.flush();
    dumper.close();
  });
  recorder.tryPcall("dumper:dump()", () => {
    const dumper = Dumper.new("dummyfile");
    dumper.dump(0, PseudoHeader.none(), ByteArray.new("ff fe ff fe"));
    dumper.close();
  });
  recorder.tryPcall("Dumper.new_for_current(filename)", () => {
    const dumper = Dumper.new_for_current("dummyfile");
    dumper.close();
  });
  recorder.tryPcall("Dumper.new_for_current(filename,filetype)", () => {
    const dumper = Dumper.new_for_current("dummyfile", wtap_filetypes.PCAP);
    dumper.close();
  });
}


function test_chapter_11_1(this: void) {
  console.log("begin test_chapter_11_1");
  test_chapter_11_1_1();
  console.log("end test_chapter_11_1");
}

const chapter_11_1_proto = Proto.new("chapter_11_1_proto", "test");
chapter_11_1_proto.init = function () {

}

chapter_11_1_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_1();
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_1_proto);


