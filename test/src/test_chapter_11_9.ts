
import Recorder from "./Recorder";
import { typeof_ts } from "./utils";

const recorder = new Recorder();








function test_chapter_11_9(this: void){
  console.log("begin test_chapter_11_9");

  const fileHandlerReadCountTable=new LuaTable<string,number>();
  fileHandlerReadCountTable.set("read_open",0);
  fileHandlerReadCountTable.set("read",0);
  fileHandlerReadCountTable.set("seek_read",0);
  fileHandlerReadCountTable.set("read_close",0);
  fileHandlerReadCountTable.set("seq_read_close",0);

  function countReadEvent(eventName:string){
    const count=fileHandlerReadCountTable.get(eventName);
    fileHandlerReadCountTable.set(eventName,count + 1);
  }

  const fileHandlerWriteCountTable=new LuaTable<string,number>();
  fileHandlerWriteCountTable.set("write_open",0);
  fileHandlerWriteCountTable.set("can_write_encap",0);
  fileHandlerWriteCountTable.set("can_write_encap",0);
  fileHandlerWriteCountTable.set("write",0);
  fileHandlerWriteCountTable.set("write_close",0);
  function countWriteEvent(eventName:string){
    const count=fileHandlerWriteCountTable.get(eventName);
    fileHandlerWriteCountTable.set(eventName,count + 1);
  }


  function test_chapter_11_9_1(this: void,captureinfo:CaptureInfo) {

    if(true){
      console.log("captureinfo:__tostring() SKIPPED");
    }else{
      recorder.tryPcall("captureinfo:__tostring()", () => {
        const result=tostring(captureinfo);
        if(type(result)!="string"){
          throw "not string";
        }
      });
    }
    recorder.tryPcall("captureinfo.encap", () => {
      const result=captureinfo.encap;
      if(type(result)!="number"){
        throw "not number";
      }
      captureinfo.encap=result;
    });
    recorder.tryPcall("captureinfo.time_precision", () => {
      const result=captureinfo.time_precision;
      if(type(result)!="number"){
        throw "not number";
      }
      captureinfo.time_precision=result;
    });
    recorder.tryPcall("captureinfo.snapshot_length", () => {
      const result=captureinfo.snapshot_length;
      if(type(result)!="number"){
        throw "not number";
      }
      captureinfo.snapshot_length=result;
    });
    if(true){
      console.log("captureinfo.comment SKIPPED");
    }else{
      recorder.tryPcall("captureinfo.comment", () => {
        const result=captureinfo.comment;
        // why CaptureInfo ?
        // console.log(`typeof_ts(result): ${typeof_ts(result)}`);

        if(type(result)!="nil"){
          throw "not nil";
        }
        captureinfo.comment="abc";
        const result2=captureinfo.comment;
        if(type(result2)!="string"){
          throw "not string";
        }
        captureinfo.comment=null;
  
      });
    }
    if(true){
      console.log("captureinfo.hardware SKIPPED");
    }else{
      recorder.tryPcall("captureinfo.hardware", () => {
        const result=captureinfo.hardware;
  
        // why CaptureInfo ?
        // console.log(`typeof_ts(result): ${typeof_ts(result)}`);
        if(type(result)!="nil"){
          throw "not nil";
        }
        captureinfo.hardware="abc";
        const result2=captureinfo.hardware;
        if(type(result2)!="string"){
          throw "not string";
        }
        captureinfo.hardware=null;
      });
    }
    if(true){
      console.log("captureinfo.os SKIPPED");
    }else{
      recorder.tryPcall("captureinfo.os", () => {
        const result=captureinfo.os;
  
        // why CaptureInfo ?
        // console.log(`typeof_ts(result): ${typeof_ts(result)}`);
        if(type(result)!="nil"){
          throw "not nil";
        }
        captureinfo.os="abc";
        const result2=captureinfo.os;
        if(type(result2)!="string"){
          throw "not string";
        }
        captureinfo.os=null;
      });
    }
    if(true){
      console.log("captureinfo.user_app SKIPPED");
    }else{
      recorder.tryPcall("captureinfo.user_app", () => {
        const result=captureinfo.user_app;
  
        // why CaptureInfo ?
        // console.log(`typeof_ts(result): ${typeof_ts(result)}`);
        if(type(result)!="nil"){
          throw "not nil";
        }
        captureinfo.user_app="abc";
        const result2=captureinfo.user_app;
        if(type(result2)!="string"){
          throw "not string";
        }
        captureinfo.user_app=null;
      });
    }
    if(true){
      console.log("captureinfo.hosts SKIPPED");
    }else{
      recorder.tryPcall("captureinfo.hosts", () => {
        const ipv4_addresse=new LuaTable<string,string>();
        ipv4_addresse.set("addr","\x01\x02\x03\x04");
        ipv4_addresse.set("name","foo.com");
        const ipv4_addresses=new LuaTable<number,LuaTable<string,string>>();
        ipv4_addresses.set(1,ipv4_addresse);
        const hosts=new LuaTable<string,LuaTable<number,LuaTable<string,string>>>();
        hosts.set("ipv4_addresses",ipv4_addresses);
        // raise usage error
        captureinfo.hosts=hosts;
      });
    }

    recorder.tryPcall("captureinfo.private_table", () => {
      const result=captureinfo.private_table;
      if(type(result)!="nil"){
        throw "not nil";
      }
      const t=new LuaTable();
      t.set("a","b");
      captureinfo.private_table=t;
      const result2=captureinfo.private_table;
      if(type(result2)!="table"){
        throw "not table";
      }
      captureinfo.private_table=null;
    });
  
  }


  function test_chapter_11_9_2(this: void,captureinfo:CaptureInfoConst) {

    if(false){
      console.log("captureinfoconst:__tostring() SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst:__tostring()", () => {
        const result=tostring(captureinfo);
        if(type(result)!="string"){
          throw "not string";
        }
      });
    }
    recorder.tryPcall("captureinfoconst.type", () => {
      const result=captureinfo.type;
      if(type(result)!="number"){
        throw "not number";
      }
    });
    recorder.tryPcall("captureinfoconst.snapshot_length", () => {
      const result=captureinfo.snapshot_length;
      if(type(result)!="number"){
        throw "not number";
      }
    });
    recorder.tryPcall("captureinfoconst.encap", () => {
      const result=captureinfo.encap;
      if(type(result)!="number"){
        throw "not number";
      }
    });

    if(true){
      console.log("captureinfoconst.comment SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst.comment", () => {
        // why raise error?
        const result=captureinfo.comment;
        if(type(result)!="nil"){
          throw "not nil";
        }
        captureinfo.comment="abc";
        const result2=captureinfo.comment;
        if(type(result2)!="string"){
          throw "not string";
        }
        captureinfo.comment=null;
      });
    }
    if(true){
      console.log("captureinfoconst.hardware SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst.hardware", () => {
        // why raise error?
        const result=captureinfo.hardware;
        if(type(result)!="nil"){
          throw "not nil";
        }
      });
    }
    if(true){
      console.log("captureinfoconst.os SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst.os", () => {
        // why raise error?
        const result=captureinfo.os;
        if(type(result)!="nil"){
          throw "not nil";
        }
      });
    }
    if(true){
      console.log("captureinfoconst.user_app SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst.user_app", () => {
        // why raise error?
        const result=captureinfo.user_app;
        if(type(result)!="nil"){
          throw "not nil";
        }
      });
    }
    if(false){
      console.log("captureinfoconst.hosts SKIPPED");
    }else{
      recorder.tryPcall("captureinfoconst.hosts", () => {
        const result=captureinfo.hosts;
        if(type(result)!="table"){
          throw "not table";
        }
      });
    }

    recorder.tryPcall("captureinfoconst.private_table", () => {
      const result=captureinfo.private_table;
      if(type(result)!="nil"){
        throw "not nil";
      }
      const t=new LuaTable();
      t.set("a","b");
      captureinfo.private_table=t;
      const result2=captureinfo.private_table;
      if(type(result2)!="table"){
        throw "not table";
      }
      captureinfo.private_table=null;
    });

  
  }
  function test_chapter_11_9_3(this: void,file:File) {
    recorder.tryPcall("file:read()", () => {
      const [position]=file.seek();
      const [line]=file.read(3);
      if(line!="abc"){
        throw "not abc";
      }
      if(position!=null){
        file.seek("set",position);
      }
    });
    recorder.tryPcall("file:seek()", () => {
      const [position]=file.seek();
      if(position!=0){
        throw "not 0";
      }
      file.read(3);
      const [position2]=file.seek();
      if(position2!=3){
        throw "not 3";
      }

      if(position!=null){
        file.seek("set",position);
      }
    });
    
    recorder.tryPcall("file:lines()", () => {
      const [position]=file.seek();
      const lines=file.lines();
      if(type(lines)!="function"){
        throw "not function";
      }
      // for(let line of lines){
      //   console.log(`line: ${line}`);
      //   if(type(line)!="string"){
      //     throw "not string";
      //   }
      // }
      if(position!=null){
        file.seek("set",position);
      }
    });
    recorder.tryPcall("file:write()", () => {
      const [position]=file.seek();
      file.write("");
      if(position!=null){
        file.seek("set",position);
      }
    });
    recorder.tryPcall("file:__tostring()", () => {
      const result=tostring(file);
      if(type(result)!="string"){
        throw "not string";
      }
    });
    recorder.tryPcall("file.compressed", () => {
      const result=file.compressed;
      if(type(result)!="boolean"){
        throw "not boolean";
      }
    });
  
  }
  function test_chapter_11_9_4(this: void) {

    recorder.tryPcall("FileHandler.new(description, name, internal_description, type)", () => {
      if(type(filehandler_read)!="userdata"){
        throw "not userdata";
      }
      if(type(filehandler_write)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("filehandler:__tostring()", () => {
      const result=tostring(filehandler_read);
      if(type(result)!="string"){
        throw "not string";
      }
    });
    recorder.tryPcall("filehandler.read_open", () => {
      const count=fileHandlerReadCountTable.get("read_open");
      if(count!=1){
        throw `read_open count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.read", () => {
      const count=fileHandlerReadCountTable.get("read");
      if(count!=2){
        throw `read count: ${count}`;
      }
    });
    if(true){
      console.log("filehandler.seek_read SKIPPED");
    }else{
      recorder.tryPcall("filehandler.seek_read", () => {
        const count=fileHandlerReadCountTable.get("seek_read");
        if(count!=1){
          throw `seek_read count: ${count}`;
        }
      });
    }
    recorder.tryPcall("filehandler.read_close", () => {
      const count=fileHandlerReadCountTable.get("read_close");
      if(count!=1){
        throw `read_close count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.seq_read_close", () => {
      const count=fileHandlerReadCountTable.get("seq_read_close");
      if(count!=1){
        throw `seq_read_close count: ${count}`;
      }
    });
    
    recorder.tryPcall("filehandler.can_write_encap", () => {
      const count=fileHandlerWriteCountTable.get("can_write_encap");
      if(count!=1){
        throw `can_write_encap count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.write_open", () => {
      const count=fileHandlerWriteCountTable.get("write_open");
      if(count!=1){
        throw `write_open count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.write", () => {
      const count=fileHandlerWriteCountTable.get("write");
      if(count!=1){
        throw `write count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.write_close", () => {
      const count=fileHandlerWriteCountTable.get("write_close");
      if(count!=1){
        throw `write_close count: ${count}`;
      }
    });
    recorder.tryPcall("filehandler.type", () => {
      if(type(filehandler_read.type)!="number"){
        throw "not number";
      }
    });
    recorder.tryPcall("filehandler.extensions", () => {
      const result=filehandler_read.extensions;
      if(type(result)!="string"){
        throw "not string";
      }
      filehandler_read.extensions=result;
    });
    recorder.tryPcall("filehandler.writing_must_seek", () => {
      const result=filehandler_read.writing_must_seek;
      if(type(result)!="boolean"){
        throw "not boolean";
      }
      filehandler_read.writing_must_seek=result;
    });
    recorder.tryPcall("filehandler.writes_name_resolution", () => {
      const result=filehandler_read.writes_name_resolution;
      if(type(result)!="boolean"){
        throw "not boolean";
      }
      filehandler_read.writes_name_resolution=result;
    });
    recorder.tryPcall("filehandler.supported_comment_types", () => {
      const result=filehandler_read.supported_comment_types;
      if(type(result)!="number"){
        throw "not number";
      }
      filehandler_read.supported_comment_types=result;
    });
  
  }
  function test_chapter_11_9_5(this: void,frame:FrameInfo) {
    recorder.tryPcall("todo", () => {
      throw "todo";
    });
  
  }
  function test_chapter_11_9_6(this: void,frame:FrameInfoConst) {
    recorder.tryPcall("todo", () => {
      throw "todo";
    });
  
  }
  function test_chapter_11_9_7(this: void) {
    recorder.tryPcall("register_filehandler(filehandler)", () => {
      // already callled.
      if(type(filetype_number_read)!="number"){
        throw "not number";
      }
      if(type(filetype_number_write)!="number"){
        throw "not number";
      }
    });
    recorder.tryPcall("deregister_filehandler(filehandler)", () => {
      // already callled.
    });
  
  }



  let closeCount=0;
  
  function onClose(){
    closeCount+=1;
    if(closeCount==2){
      
      test_chapter_11_9_4();
      test_chapter_11_9_7();


      console.log("end test_chapter_11_9");
      recorder.printResult();
    }
  }
  
  const filehandler_read=FileHandler.new("description","name-read","internal_description","r");

  filehandler_read.read_open=function(this: void,file:File,capture:CaptureInfo){
    console.log("filehandler_read.read_open");
    countReadEvent("read_open");
    test_chapter_11_9_3(file);
    test_chapter_11_9_1(capture);
  

    return true;
  }
  
  filehandler_read.read=function(this: void,file:File,capture:CaptureInfo,frame:FrameInfo){
    console.log("filehandler_read.read");
    countReadEvent("read");
    const [position]=file.seek();
    console.log(`position: ${position}`);
    if(position==0){
      const [line]=file.read(3);
      console.log(`line: ${line}`);
      frame.rec_type=wtap_rec_types.PACKET;
      test_chapter_11_9_5(frame);
      return 3;
    }

    return false;
  }
  
  filehandler_read.seek_read=function(this: void,file:File,capture:CaptureInfo,frame:FrameInfo,offset:number){
    file.seek("set",offset);
    console.log("filehandler_read.seek_read");
    countReadEvent("seek_read");
    return false;
  }
  
  filehandler_read.read_close=function(this: void,file:File,capture:CaptureInfo){
    console.log("filehandler_read.read_close");
    countReadEvent("read_close");
    onClose();
    return true;
  }
  filehandler_read.seq_read_close=function(this: void,file:File,capture:CaptureInfo){
    console.log("filehandler_read.seq_read_close");
    countReadEvent("seq_read_close");
    return true;
  }
  
  filehandler_read.extensions="txt";
  
  const filetype_number_to_deregister=register_filehandler(filehandler_read);
  deregister_filehandler(filehandler_read);

  const filetype_number_read=register_filehandler(filehandler_read);
  
  const filehandler_write=FileHandler.new("description","name-write","internal_description","w");
  
  filehandler_write.write_open=function(this: void,file:File,capture:CaptureInfoConst){
    console.log("filehandler_write.write_open");
    countWriteEvent("write_open");
    file.write("write_open\n");
    test_chapter_11_9_2(capture);
    return true;
  }
  
  filehandler_write.can_write_encap=function(this: void,encap: wtap_encaps){
    console.log("filehandler_write.can_write_encap");
    countWriteEvent("can_write_encap");
    return true;
  }
  
  
  filehandler_write.write=function(this: void,file:File,capture:CaptureInfoConst,frame: FrameInfoConst){
    console.log("filehandler_write.write");
    countWriteEvent("write");
    file.write("write\n");
    test_chapter_11_9_6(frame);
    return true;
  }
  
  
  filehandler_write.write_close=function(this: void,file:File,capture:CaptureInfoConst){
    console.log("filehandler_write.write_close");
    countWriteEvent("write_close");
    file.write("write_close\n");
    onClose();
    return true;
  }
  
  filehandler_write.extensions="txt";
  
  const filetype_number_write=register_filehandler(filehandler_write);
  
  
  
  

  
}



test_chapter_11_9();