

function canCallNoError<Args extends any[], R>(this: void, f: (this: void, ...args: Args) => R, ...args: Args): boolean {
  const result = pcall(f, ...args);
  if (!result[0]) {
    result[1]
  }
  return result[0];
}


interface CalledWithError {
  isNoError: true,
  name: string,
}

interface CalledWithNoError {
  isNoError: false,
  name: string,
  errorMessage: string,
}
type CalledWithErrorOrNoError = CalledWithError | CalledWithNoError;

class Recorder {

  hasCalledNoErrorResultList: CalledWithErrorOrNoError[] = [];
  constructor() {
  }
  tryPcall<Args extends any[], R>(name: string, f: (this: void, ...args: Args) => R, ...args: Args): void {
    const result = pcall(f, ...args);
    if (result[0]) {
      this.hasCalledNoErrorResultList.push({
        isNoError: true,
        name,
      });
    } else {
      this.hasCalledNoErrorResultList.push({
        isNoError: false,
        name,
        errorMessage: result[1],
      });
    }
  }
  printResult() {

    const calledWithErrorList = this.hasCalledNoErrorResultList.filter(({ isNoError }) => !isNoError);
    for (let calledWithErrorOrNoError of this.hasCalledNoErrorResultList) {
      if (!calledWithErrorOrNoError.isNoError) {
        console.log("error detail");
        console.log(`name: "${calledWithErrorOrNoError.name}"`);
        console.log(`errorMessage: "${calledWithErrorOrNoError.errorMessage}"`);
      }

    }

    const totalCount = this.hasCalledNoErrorResultList.length;
    const isNoErrorCount = this.hasCalledNoErrorResultList.filter(({ isNoError }) => isNoError).length;
    console.log(`result ${isNoErrorCount}/${totalCount}`);
  }
}

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
    throw "TODO: tap"
  });
  recorder.tryPcall("Dumper.new_for_current(filename,filetype)", () => {
    throw "TODO: tap"
  });
  // recorder.tryPcall("Dumper.new_for_current(filename)", () => {
  //   const tap = Listener.new();
  //   tap.reset = function (this: void) {
  //     const dumper = Dumper.new_for_current("dummyfile");
  //     dumper.close();
  //   };
  // });
  // recorder.tryPcall("Dumper.new_for_current(filename,filetype)", () => {
  //   const tap = Listener.new();
  //   tap.reset = function (this: void) {
  //     const dumper = Dumper.new_for_current("dummyfile", wtap_filetypes.PCAP);
  //     dumper.close();
  //   };
  // });
}


function test_chapter_11_1(this: void) {
  console.log("begin test_chapter_11_1");
  test_chapter_11_1_1();
  console.log("end test_chapter_11_1");
}


test_chapter_11_1();
recorder.printResult();


