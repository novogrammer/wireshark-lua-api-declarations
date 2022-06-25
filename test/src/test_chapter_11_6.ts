
import Recorder from "./Recorder";

const recorder = new Recorder();

function test_chapter_11_6_1(this: void) {

  recorder.tryPcall("Dissector.get(name)", () => {
    const dissector=Dissector.get("http");
    if(type(dissector)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Dissector.list()", () => {
    const list=Dissector.list();
    if(type(list)!="table"){
      throw "not table";
    }
  });
  recorder.tryPcall("dissector:__tostring()", () => {
    const dissector=Dissector.get("http");
    const s=tostring(dissector);
    if(type(s)!="string"){
      throw "not string";
    }
  });

}
function test_chapter_11_6_2(this: void) {

  recorder.tryPcall("DissectorTable.new(tablename)", () => {
    const dissectortable=DissectorTable.new("tablename01");
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("DissectorTable.new(tablename,uiname)", () => {
    const dissectortable=DissectorTable.new("tablename02","bar");
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,type)", () => {
    const dissectortable=DissectorTable.new("tablename03",undefined,ftypes.UINT8);
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,nil,base)", () => {
    const dissectortable=DissectorTable.new("tablename04",undefined,undefined,base.NONE);
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,nil,nil,proto)", () => {
    const chapter_11_6_2_proto01 = Proto.new("chapter_11_6_2_proto01", "chapter_11_6_2_proto01");
    const dissectortable=DissectorTable.new("tablename05",undefined,undefined,undefined,chapter_11_6_2_proto01);
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("DissectorTable.list()", () => {
    const list=DissectorTable.list();
    if(type(list)!="table"){
      throw "not table";
    }
  });
  recorder.tryPcall("DissectorTable.heuristic_list()", () => {
    const list=DissectorTable.heuristic_list();
    if(type(list)!="table"){
      throw "not table";
    }
  });
  recorder.tryPcall("DissectorTable.get(tablename)", () => {
    // tablename01 is created before
    const dissectortable=DissectorTable.get("tablename01");
    if(type(dissectortable)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("dissectortable:add(pattern,dissector)", () => {
    const dissector=Dissector.get("http");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.add(1,dissector);
    dissectortable.add("1-2",dissector);
  });
  recorder.tryPcall("dissectortable:set(pattern,dissector)", () => {
    const dissector=Dissector.get("http");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.set(1,dissector);
    dissectortable.set("1-2",dissector);
  });
  recorder.tryPcall("dissectortable:remove(pattern,dissector)", () => {
    const dissector=Dissector.get("http");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.remove(1,dissector);
    dissectortable.remove("1-2",dissector);
  });
  recorder.tryPcall("dissectortable:remove_all(dissector)", () => {
    const dissector=Dissector.get("http");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.remove_all(dissector);
  });
  recorder.tryPcall("dissectortable:get_dissector(pattern)", () => {
    const dissector=Dissector.get("http");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.remove_all(dissector);
    dissectortable.add(1,dissector);
    const result=dissectortable.get_dissector(1);
    if(type(result)!="userdata"){
      throw "not userdata";
    }

  });
  recorder.tryPcall("dissectortable:add_for_decode_as(proto)", () => {
    const chapter_11_6_2_proto02 = Proto.new("chapter_11_6_2_proto02", "chapter_11_6_2_proto02");
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    dissectortable.add_for_decode_as(chapter_11_6_2_proto02);
  });
  recorder.tryPcall("dissectortable:add_for_decode_as(proto)", () => {
    const dissectortable=DissectorTable.get("tablename01");
    if(dissectortable==null){
      throw "dissectortable is null";
    }
    const s=tostring(dissectortable);
    if(type(s)!="string"){
      throw "not string";
    }
  });

}
function test_chapter_11_6_3(this: void) {
  
  recorder.tryPcall("Pref.bool(label,default,descr)", () => {
    const pref=Pref.bool("label",true,"descr");
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Pref.uint(label,default,descr)", () => {
    const pref=Pref.uint("label",1,"descr");
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Pref.string(label,default,descr)", () => {
    const pref=Pref.string("label","a","descr");
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("Pref.enum(label,default,descr)", () => {
    const A=1;
    const B=1;
    const myEnum:Enum=[
      [0,"A",A],
      [1,"B",B],
    ];
    const pref=Pref.enum("label",A,"descr",myEnum,true);
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Pref.range(label,default,descr,max)", () => {
    const pref=Pref.range("label","1-2","descr",2);
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("Pref.statictext(label,descr)", () => {
    const pref=Pref.statictext("label","descr");
    if(type(pref)!="userdata"){
      throw "not userdata";
    }
  });

}
function test_chapter_11_6_4(this: void) {

  recorder.tryPcall("prefs:__newindex(name,pref)", () => {
    const chapter_11_6_4_proto01 = Proto.new("chapter_11_6_4_proto01", "chapter_11_6_4_proto01");
    const prefs=chapter_11_6_4_proto01.prefs;
    const pref=Pref.bool("label",true,"descr");
    prefs.set("a",pref);
  });
  recorder.tryPcall("prefs:__index(name)", () => {
    const chapter_11_6_4_proto02 = Proto.new("chapter_11_6_4_proto02", "chapter_11_6_4_proto02");
    const prefs=chapter_11_6_4_proto02.prefs;
    const pref=Pref.bool("label",true,"descr");
    prefs.set("a",pref);
    const result=prefs.get("a");
    if(type(result)!="boolean"){
      throw "not boolean";
    }
  });
}
function test_chapter_11_6_5(this: void) {

  recorder.tryPcall("Proto.new(name,desc)", () => {
    const chapter_11_6_5_proto01 = Proto.new("chapter_11_6_5_proto01", "chapter_11_6_5_proto01");
    if(type(chapter_11_6_5_proto01)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("proto:__call(name,desc)", () => {
    const chapter_11_6_5_proto02 = Proto.new("chapter_11_6_5_proto02", "chapter_11_6_5_proto02");
    const chapter_11_6_5_proto03=chapter_11_6_5_proto02("chapter_11_6_5_proto03","chapter_11_6_5_proto03");
    if(type(chapter_11_6_5_proto03)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("proto:register_heuristic(listname,func)", () => {
    const chapter_11_6_5_proto04 = Proto.new("chapter_11_6_5_proto04", "chapter_11_6_5_proto04");
    const h:HeuristicDissectorFunction=function(this:void,buffer:Tvb,pinfo:Pinfo,tree:TreeItem){
      return true;
    }
    chapter_11_6_5_proto04.register_heuristic("tcp",h);
  });

  recorder.tryPcall("proto.dissector", () => {
    const chapter_11_6_5_proto05 = Proto.new("chapter_11_6_5_proto05", "chapter_11_6_5_proto05");
    const d:DissectorFunction=function(this:void,buffer:Tvb,pinfo:Pinfo,tree:TreeItem){
      return 1;
    }
    chapter_11_6_5_proto05.dissector=d;
    const d2=chapter_11_6_5_proto05.dissector;
    if(type(d2)!="userdata"){
      throw "not userdata";
    }
  });
  recorder.tryPcall("proto.prefs_changed", () => {
    const chapter_11_6_5_proto06 = Proto.new("chapter_11_6_5_proto06", "chapter_11_6_5_proto06");
    chapter_11_6_5_proto06.prefs_changed=function(this:void){
    };
  });
  recorder.tryPcall("proto.init", () => {
    const chapter_11_6_5_proto07 = Proto.new("chapter_11_6_5_proto07", "chapter_11_6_5_proto07");
    chapter_11_6_5_proto07.init=function(this:void){
    };
  });
  recorder.tryPcall("proto.name", () => {
    const chapter_11_6_5_proto08 = Proto.new("chapter_11_6_5_proto08", "chapter_11_6_5_proto08");
    const name=chapter_11_6_5_proto08["name"];
    if(type(name)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("proto.description", () => {
    const chapter_11_6_5_proto09 = Proto.new("chapter_11_6_5_proto09", "chapter_11_6_5_proto09");
    const description=chapter_11_6_5_proto09.description;
    if(type(description)!="string"){
      throw "not string";
    }
  });
  recorder.tryPcall("proto.fields", () => {
    const chapter_11_6_5_proto10 = Proto.new("chapter_11_6_5_proto10", "chapter_11_6_5_proto10");
    const fields=new LuaTable<number,ProtoField>();
    fields.set(1,ProtoField.int8("abbr"));
    chapter_11_6_5_proto10.fields=fields;
    const fields2=chapter_11_6_5_proto10.fields;
    if(type(fields2)!="table"){
      throw "not table";
    }
  });
  recorder.tryPcall("proto.experts", () => {
    const chapter_11_6_5_proto11 = Proto.new("chapter_11_6_5_proto11", "chapter_11_6_5_proto11");
    const e=new LuaTable<number,ProtoExpert>();
    e.set(1,ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE));
    chapter_11_6_5_proto11.experts=e;
    const e2=chapter_11_6_5_proto11.experts;
    if(type(e2)!="table"){
      throw "not table";
    }

  });
}
function test_chapter_11_6_6(this: void) {
  recorder.tryPcall("ProtoExpert.new(abbr,text,group,severity)", () => {
    const protoexpert=ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE);
    if(type(protoexpert)!="userdata"){
      throw "not userdata";
    }
  });

  recorder.tryPcall("protoexpert:__tostring()", () => {
    const e=ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE);
    const s=tostring(e);
    if(type(s)!="string"){
      throw "not string";
    }
  });

}

function test_chapter_11_6_7(this: void) {
  {
    recorder.tryPcall("ProtoField.new(name,abbr,type)", () => {
      const protofield=ProtoField.new("name","abbr",ftypes.INT8);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.new("name","abbr",ftypes.BOOLEAN,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,base)", () => {
      const protofield=ProtoField.new("name","abbr",ftypes.INT8,undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,nil,mask)", () => {
      const protofield=ProtoField.new("name","abbr",ftypes.INT8,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,nil,nil,descr)", () => {
      const protofield=ProtoField.new("name","abbr",ftypes.INT8,undefined,undefined,undefined,"descr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.char(abbr)", () => {
      const protofield=ProtoField.char("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.char(abbr,name)", () => {
      const protofield=ProtoField.char("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,base)", () => {
      const protofield=ProtoField.char("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.char("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.char("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.char("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.uint8(abbr)", () => {
      const protofield=ProtoField.uint8("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint8(abbr,name)", () => {
      const protofield=ProtoField.uint8("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,base)", () => {
      const protofield=ProtoField.uint8("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.uint8("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.uint8("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.uint8("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.uint16(abbr)", () => {
      const protofield=ProtoField.uint16("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint16(abbr,name)", () => {
      const protofield=ProtoField.uint16("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,base)", () => {
      const protofield=ProtoField.uint16("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.uint16("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.uint16("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.uint16("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.uint24(abbr)", () => {
      const protofield=ProtoField.uint24("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint24(abbr,name)", () => {
      const protofield=ProtoField.uint24("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,base)", () => {
      const protofield=ProtoField.uint24("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.uint24("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.uint24("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.uint24("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.uint32(abbr)", () => {
      const protofield=ProtoField.uint32("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint32(abbr,name)", () => {
      const protofield=ProtoField.uint32("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,base)", () => {
      const protofield=ProtoField.uint32("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.uint32("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.uint32("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.uint32("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.uint64(abbr)", () => {
      const protofield=ProtoField.uint64("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint64(abbr,name)", () => {
      const protofield=ProtoField.uint64("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,base)", () => {
      const protofield=ProtoField.uint64("abbr",undefined,base.HEX);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.uint64("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.uint64("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.uint64("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.int8(abbr)", () => {
      const protofield=ProtoField.int8("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int8(abbr,name)", () => {
      const protofield=ProtoField.int8("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,base)", () => {
      const protofield=ProtoField.int8("abbr",undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.int8("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.int8("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.int8("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.int16(abbr)", () => {
      const protofield=ProtoField.int16("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int16(abbr,name)", () => {
      const protofield=ProtoField.int16("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,base)", () => {
      const protofield=ProtoField.int16("abbr",undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.int16("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.int16("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.int16("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.int24(abbr)", () => {
      const protofield=ProtoField.int24("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int24(abbr,name)", () => {
      const protofield=ProtoField.int24("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,base)", () => {
      const protofield=ProtoField.int24("abbr",undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.int24("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.int24("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.int24("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.int32(abbr)", () => {
      const protofield=ProtoField.int32("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int32(abbr,name)", () => {
      const protofield=ProtoField.int32("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,base)", () => {
      const protofield=ProtoField.int32("abbr",undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.int32("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.int32("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.int32("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.int64(abbr)", () => {
      const protofield=ProtoField.int64("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int64(abbr,name)", () => {
      const protofield=ProtoField.int64("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,base)", () => {
      const protofield=ProtoField.int64("abbr",undefined,base.DEC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.int64("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.int64("abbr",undefined,undefined,undefined,0xff);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.int64("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.framenum(abbr)", () => {
      const protofield=ProtoField.framenum("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.framenum(abbr,name)", () => {
      const protofield=ProtoField.framenum("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,base)", () => {
      const protofield=ProtoField.framenum("abbr",undefined,base.NONE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,frametype)", () => {
      const protofield=ProtoField.framenum("abbr",undefined,undefined,frametype.NONE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.framenum("abbr",undefined,undefined,undefined,0);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.framenum("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.bool(abbr)", () => {
      const protofield=ProtoField.bool("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bool(abbr,name)", () => {
      const protofield=ProtoField.bool("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,display)", () => {
      const protofield=ProtoField.bool("abbr",undefined,base.NONE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.bool("abbr",undefined,undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,nil,mask)", () => {
      const protofield=ProtoField.bool("abbr",undefined,undefined,undefined,0);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,nil,nil,desc)", () => {
      const protofield=ProtoField.bool("abbr",undefined,undefined,undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.absolute_time(abbr)", () => {
      const protofield=ProtoField.absolute_time("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,name)", () => {
      const protofield=ProtoField.absolute_time("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,nil,base)", () => {
      const protofield=ProtoField.absolute_time("abbr",undefined,base.UTC);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.absolute_time("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });

  }
  {
    recorder.tryPcall("ProtoField.relative_time(abbr)", () => {
      const protofield=ProtoField.relative_time("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.relative_time(abbr,name)", () => {
      const protofield=ProtoField.relative_time("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.relative_time(abbr,nil,desc)", () => {
      const protofield=ProtoField.relative_time("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.float(abbr)", () => {
      const protofield=ProtoField.float("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.float(abbr,name)", () => {
      const protofield=ProtoField.float("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.float(abbr,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.float("abbr",undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.float(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.float("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.double(abbr)", () => {
      const protofield=ProtoField.double("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.double(abbr,name)", () => {
      const protofield=ProtoField.double("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.double(abbr,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      const protofield=ProtoField.double("abbr",undefined,valuestring);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.double(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.double("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.string(abbr)", () => {
      const protofield=ProtoField.string("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.string(abbr,name)", () => {
      const protofield=ProtoField.string("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.string(abbr,nil,display)", () => {
      const protofield=ProtoField.string("abbr",undefined,base.UNICODE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.string(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.string("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.stringz(abbr)", () => {
      const protofield=ProtoField.stringz("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.stringz(abbr,name)", () => {
      const protofield=ProtoField.stringz("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.stringz(abbr,nil,display)", () => {
      const protofield=ProtoField.stringz("abbr",undefined,base.UNICODE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.stringz(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.stringz("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.bytes(abbr)", () => {
      const protofield=ProtoField.bytes("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bytes(abbr,name)", () => {
      const protofield=ProtoField.bytes("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bytes(abbr,nil,display)", () => {
      const protofield=ProtoField.bytes("abbr",undefined,base.SPACE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.bytes(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.bytes("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.ubytes(abbr)", () => {
      const protofield=ProtoField.ubytes("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,name)", () => {
      const protofield=ProtoField.ubytes("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,nil,display)", () => {
      const protofield=ProtoField.ubytes("abbr",undefined,base.SPACE);
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,nil,nil,desc)", () => {
      const protofield=ProtoField.ubytes("abbr",undefined,undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.none(abbr)", () => {
      const protofield=ProtoField.none("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.none(abbr,name)", () => {
      const protofield=ProtoField.none("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.none(abbr,nil,desc)", () => {
      const protofield=ProtoField.none("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.ipv4(abbr)", () => {
      const protofield=ProtoField.ipv4("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ipv4(abbr,name)", () => {
      const protofield=ProtoField.ipv4("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ipv4(abbr,nil,desc)", () => {
      const protofield=ProtoField.ipv4("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.ipv6(abbr)", () => {
      const protofield=ProtoField.ipv6("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ipv6(abbr,name)", () => {
      const protofield=ProtoField.ipv6("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ipv6(abbr,nil,desc)", () => {
      const protofield=ProtoField.ipv6("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.ether(abbr)", () => {
      const protofield=ProtoField.ether("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ether(abbr,name)", () => {
      const protofield=ProtoField.ether("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.ether(abbr,nil,desc)", () => {
      const protofield=ProtoField.ether("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.guid(abbr)", () => {
      const protofield=ProtoField.guid("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.guid(abbr,name)", () => {
      const protofield=ProtoField.guid("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.guid(abbr,nil,desc)", () => {
      const protofield=ProtoField.guid("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.oid(abbr)", () => {
      const protofield=ProtoField.oid("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.oid(abbr,name)", () => {
      const protofield=ProtoField.oid("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.oid(abbr,nil,desc)", () => {
      const protofield=ProtoField.oid("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.protocol(abbr)", () => {
      const protofield=ProtoField.protocol("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.protocol(abbr,name)", () => {
      const protofield=ProtoField.protocol("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.protocol(abbr,nil,desc)", () => {
      const protofield=ProtoField.protocol("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.rel_oid(abbr)", () => {
      const protofield=ProtoField.rel_oid("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.rel_oid(abbr,name)", () => {
      const protofield=ProtoField.rel_oid("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.rel_oid(abbr,nil,desc)", () => {
      const protofield=ProtoField.rel_oid("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.systemid(abbr)", () => {
      const protofield=ProtoField.systemid("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.systemid(abbr,name)", () => {
      const protofield=ProtoField.systemid("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.systemid(abbr,nil,desc)", () => {
      const protofield=ProtoField.systemid("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.eui64(abbr)", () => {
      const protofield=ProtoField.eui64("abbr");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.eui64(abbr,name)", () => {
      const protofield=ProtoField.eui64("abbr","name");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
    recorder.tryPcall("ProtoField.eui64(abbr,nil,desc)", () => {
      const protofield=ProtoField.eui64("abbr",undefined,"desc");
      if(type(protofield)!="userdata"){
        throw "not userdata";
      }
    });
  }
  {
    recorder.tryPcall("ProtoField.eui64(abbr)", () => {
      const protofield=ProtoField.none("abbr");
      const s=tostring(protofield);
      if(type(s)!="string"){
        throw "not string";
      }
    });
  }

}

function test_chapter_11_6_8(this: void) {

  recorder.tryPcall("register_postdissector(proto)", () => {
    const chapter_11_6_8_proto01 = Proto.new("chapter_11_6_8_proto01", "chapter_11_6_8_proto01");
    register_postdissector(chapter_11_6_8_proto01);
  });
  recorder.tryPcall("register_postdissector(proto,allfields)", () => {
    const chapter_11_6_8_proto02 = Proto.new("chapter_11_6_8_proto02", "chapter_11_6_8_proto02");
    register_postdissector(chapter_11_6_8_proto02,true);
  });
}


function test_chapter_11_6(this: void) {
  console.log("begin test_chapter_11_6");
  test_chapter_11_6_1();
  test_chapter_11_6_2();
  test_chapter_11_6_3();
  test_chapter_11_6_4();
  test_chapter_11_6_5();
  test_chapter_11_6_6();
  test_chapter_11_6_7();
  test_chapter_11_6_8();
  console.log("end test_chapter_11_6");
}

test_chapter_11_6();

function test_chapter_11_6_1_dissector(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  recorder.tryPcall("dissector:call(tvb, pinfo, tree)", () => {
    const dissector=Dissector.get("http");
    const result=dissector.call(buffer,pinfo,tree);
    if(type(result)!="number"){
      throw "not number";
    }
  });
  recorder.tryPcall("dissector:__call(tvb, pinfo, tree)", () => {
    const dissector=Dissector.get("http");
    const result=dissector(buffer,pinfo,tree);
    if(type(result)!="number"){
      throw "not number";
    }
  });
}

function test_chapter_11_6_2_dissector(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  recorder.tryPcall("DissectorTable.try_heuristics(listname,tvb,pinfo,tree)", () => {
    DissectorTable.try_heuristics("http",buffer,pinfo,tree);
  });
  recorder.tryPcall("dissectortable:try(pattern,tvb,pinfo,tree)", () => {
    const dissectortable01=DissectorTable.new("tablename_dissector01",undefined,ftypes.UINT8);
    const result01=dissectortable01.try(1,buffer,pinfo,tree);
    if(type(result01)!="number"){
      throw "not number";
    }

    const dissectortable02=DissectorTable.new("tablename_dissector02",undefined,ftypes.STRING);
    const result02=dissectortable02.try("1",buffer,pinfo,tree);
    if(type(result02)!="number"){
      throw "not number";
    }
  });

}
function test_chapter_11_6_8_dissector(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  recorder.tryPcall("dissect_tcp_pdus(tvb,tree,min_header_size,get_len_func,dissect_func)", () => {
    pinfo.can_desegment=1;
    const get_len_func=function(this: void, tvb: Tvb, pinfo: Pinfo, offset: int){
      return 0;
    };
    const dissect_func=function(this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem){
      return 0;
    };
    dissect_tcp_pdus(buffer,tree,0,get_len_func,dissect_func);
  });
  recorder.tryPcall("dissect_tcp_pdus(tvb,tree,min_header_size,get_len_func,dissect_func,desegment)", () => {
    pinfo.can_desegment=1;
    const get_len_func=function(this: void, tvb: Tvb, pinfo: Pinfo, offset: int){
      return 0;
    };
    const dissect_func=function(this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem){
      return 0;
    };
    dissect_tcp_pdus(buffer,tree,0,get_len_func,dissect_func,true);
  });

}

function test_chapter_11_6_dissector(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  console.log("begin test_chapter_11_6_dissector");
  test_chapter_11_6_1_dissector(buffer,pinfo,tree);
  test_chapter_11_6_2_dissector(buffer,pinfo,tree);
  test_chapter_11_6_8_dissector(buffer,pinfo,tree);
  console.log("end test_chapter_11_6_dissector");
}



const chapter_11_6_proto = Proto.new("chapter_11_6_proto", "test");
chapter_11_6_proto.init = function () {

}

chapter_11_6_proto.dissector = function (this: void, buffer: Tvb, pinfo: Pinfo, tree: TreeItem): number {
  test_chapter_11_6_dissector(buffer,pinfo,tree);
  recorder.printResult();
  return 0;
}

register_postdissector(chapter_11_6_proto);