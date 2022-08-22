
import Recorder from "./Recorder";

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


  function test_chapter_11_9_1(this: void,capture:CaptureInfo) {
    recorder.tryPcall("todo", () => {
      throw "todo";
    });
  
  }
  function test_chapter_11_9_2(this: void,capture:CaptureInfoConst) {
    recorder.tryPcall("todo", () => {
      throw "todo";
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