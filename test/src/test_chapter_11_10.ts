import Recorder from "./Recorder";

const PATH_TO_DUMMY_DIR="/tmp/dummydir";

const recorder = new Recorder();

function test_chapter_11_10_1(this: void) {

  recorder.tryPcall("Dir.make(name)", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/make`;
    const result=Dir.make(mydir);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
    Dir.remove(mydir);
  });
  recorder.tryPcall("Dir.exists(name)", () => {
    const result=Dir.exists(PATH_TO_DUMMY_DIR);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("Dir.remove(name)", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/remove`;
    Dir.make(mydir);
    const result=Dir.remove(mydir);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("Dir.remove_all(name)", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/remove`;
    Dir.make(mydir);
    Dir.make(`${mydir}/some`);
    const result=Dir.remove_all(mydir);
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
  recorder.tryPcall("Dir.open(pathname)", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/open`;
    Dir.make(mydir);
    const result=Dir.open(mydir);
    if(type(result)!="userdata"){
      throw "not userdata";
    }
    Dir.remove_all(mydir);
  });
  recorder.tryPcall("Dir.open(pathname,extension)", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/open`;
    Dir.make(mydir);
    const result=Dir.open(mydir,".txt");
    if(type(result)!="userdata"){
      throw "not userdata";
    }
    Dir.remove_all(mydir);
  });
  recorder.tryPcall("Dir.personal_config_path()", () => {
    const result=Dir.personal_config_path();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Dir.personal_config_path(filename)", () => {
    const result=Dir.personal_config_path("filename");
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Dir.global_config_path()", () => {
    const result=Dir.global_config_path();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Dir.global_config_path(filename)", () => {
    const result=Dir.global_config_path("filename");
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Dir.personal_plugins_path()", () => {
    const result=Dir.personal_plugins_path();
    if(type(result)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("Dir.global_plugins_path()", () => {
    const result=Dir.global_plugins_path();
    if(type(result)!="string"){
      throw "not string";
    }
  });

  recorder.tryPcall("dir:__call()", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/open`;
    Dir.make(mydir);
    Dir.make(`${mydir}/some`);
    const dir=Dir.open(mydir);
    const result=dir();
    if(type(result)!="string"){
      throw "not string";
    }
    Dir.remove_all(mydir);
  });
  recorder.tryPcall("dir:close()", () => {
    const mydir=`${PATH_TO_DUMMY_DIR}/open`;
    Dir.make(mydir);
    Dir.make(`${mydir}/some`);
    const dir=Dir.open(mydir);
    dir.close();
    Dir.remove_all(mydir);
  });
}

function test_chapter_11_10(this: void) {
  console.log("begin test_chapter_11_10");
  test_chapter_11_10_1();
  console.log("end test_chapter_11_10");
}

Dir.make(PATH_TO_DUMMY_DIR);
test_chapter_11_10();
Dir.remove_all(PATH_TO_DUMMY_DIR);
recorder.printResult();