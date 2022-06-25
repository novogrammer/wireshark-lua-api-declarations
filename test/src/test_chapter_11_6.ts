
import Recorder from "./Recorder";

const recorder = new Recorder();

function test_chapter_11_6_1(this: void) {

  recorder.tryPcall("Dissector.get(name)", () => {
    const dissector=Dissector.get("http");
  });
  recorder.tryPcall("Dissector.list()", () => {
    const list=Dissector.list();
  });
  recorder.tryPcall("dissector:__tostring()", () => {
    const dissector=Dissector.get("http");
    tostring(dissector);
  });

}
function test_chapter_11_6_2(this: void) {

  recorder.tryPcall("DissectorTable.new(tablename)", () => {
    DissectorTable.new("tablename01");
  });
  recorder.tryPcall("DissectorTable.new(tablename,uiname)", () => {
    DissectorTable.new("tablename02","bar");
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,type)", () => {
    DissectorTable.new("tablename03",undefined,ftypes.UINT8);
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,nil,base)", () => {
    DissectorTable.new("tablename04",undefined,undefined,base.NONE);
  });
  recorder.tryPcall("DissectorTable.new(tablename,nil,nil,nil,proto)", () => {
    const chapter_11_6_2_proto01 = Proto.new("chapter_11_6_2_proto01", "chapter_11_6_2_proto01");
    DissectorTable.new("tablename05",undefined,undefined,undefined,chapter_11_6_2_proto01);
  });

  recorder.tryPcall("DissectorTable.list()", () => {
    DissectorTable.list();
  });
  recorder.tryPcall("DissectorTable.heuristic_list()", () => {
    DissectorTable.heuristic_list();
  });
  recorder.tryPcall("DissectorTable.get(tablename)", () => {
    // tablename01 is created before
    DissectorTable.get("tablename01");
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
    dissectortable.get_dissector(1);

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
    tostring(dissectortable);
  });

}
function test_chapter_11_6_3(this: void) {
  
  recorder.tryPcall("Pref.bool(label,default,descr)", () => {
    Pref.bool("label",true,"descr");
  });
  recorder.tryPcall("Pref.uint(label,default,descr)", () => {
    Pref.uint("label",1,"descr");
  });
  recorder.tryPcall("Pref.string(label,default,descr)", () => {
    Pref.string("label","a","descr");
  });

  recorder.tryPcall("Pref.enum(label,default,descr)", () => {
    const A=1;
    const B=1;
    const myEnum:Enum=[
      [0,"A",A],
      [1,"B",B],
    ];
    Pref.enum("label",A,"descr",myEnum,true);
  });
  recorder.tryPcall("Pref.range(label,default,descr,max)", () => {
    Pref.range("label","1-2","descr",2);
  });
  recorder.tryPcall("Pref.statictext(label,descr)", () => {
    Pref.statictext("label","descr");
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
    prefs.get("a");
  });
}
function test_chapter_11_6_5(this: void) {

  recorder.tryPcall("Proto.new(name,desc)", () => {
    const chapter_11_6_5_proto01 = Proto.new("chapter_11_6_5_proto01", "chapter_11_6_5_proto01");
  });
  recorder.tryPcall("proto:__call(name,desc)", () => {
    const chapter_11_6_5_proto02 = Proto.new("chapter_11_6_5_proto02", "chapter_11_6_5_proto02");
    const chapter_11_6_5_proto03=chapter_11_6_5_proto02("chapter_11_6_5_proto03","chapter_11_6_5_proto03");
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
  });
  recorder.tryPcall("proto.description", () => {
    const chapter_11_6_5_proto09 = Proto.new("chapter_11_6_5_proto09", "chapter_11_6_5_proto09");
    const description=chapter_11_6_5_proto09.description;
  });
  recorder.tryPcall("proto.fields", () => {
    const chapter_11_6_5_proto10 = Proto.new("chapter_11_6_5_proto10", "chapter_11_6_5_proto10");
    const fields=new LuaTable<number,ProtoField>();
    fields.set(1,ProtoField.int8("abbr"));
    chapter_11_6_5_proto10.fields=fields;
    const fields2=chapter_11_6_5_proto10.fields;
  });
  recorder.tryPcall("proto.experts", () => {
    const chapter_11_6_5_proto11 = Proto.new("chapter_11_6_5_proto11", "chapter_11_6_5_proto11");
    const e=new LuaTable<number,ProtoExpert>();
    e.set(1,ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE));
    chapter_11_6_5_proto11.experts=e;
    const e2=chapter_11_6_5_proto11.experts;

  });
}
function test_chapter_11_6_6(this: void) {
  recorder.tryPcall("ProtoExpert.new(abbr,text,group,severity)", () => {
    ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE);
  });

  recorder.tryPcall("protoexpert:__tostring()", () => {
    const e=ProtoExpert.new("abbr","text",expert.group.DEBUG,expert.severity.NOTE);
    tostring(e);
  });

}

function test_chapter_11_6_7(this: void) {
  {
    recorder.tryPcall("ProtoField.new(name,abbr,type)", () => {
      ProtoField.new("name","abbr",ftypes.INT8);
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.new("name","abbr",ftypes.BOOLEAN,valuestring);
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,base)", () => {
      ProtoField.new("name","abbr",ftypes.INT8,undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,nil,mask)", () => {
      ProtoField.new("name","abbr",ftypes.INT8,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.new(name,abbr,type,nil,nil,nil,descr)", () => {
      ProtoField.new("name","abbr",ftypes.INT8,undefined,undefined,undefined,"descr");
    });
  }
  {
    recorder.tryPcall("ProtoField.char(abbr)", () => {
      ProtoField.char("abbr");
    });
    recorder.tryPcall("ProtoField.char(abbr,name)", () => {
      ProtoField.char("abbr","name");
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,base)", () => {
      ProtoField.char("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.char("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,nil,mask)", () => {
      ProtoField.char("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.char(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.char("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.uint8(abbr)", () => {
      ProtoField.uint8("abbr");
    });
    recorder.tryPcall("ProtoField.uint8(abbr,name)", () => {
      ProtoField.uint8("abbr","name");
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,base)", () => {
      ProtoField.uint8("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.uint8("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,nil,mask)", () => {
      ProtoField.uint8("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.uint8(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.uint8("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.uint16(abbr)", () => {
      ProtoField.uint16("abbr");
    });
    recorder.tryPcall("ProtoField.uint16(abbr,name)", () => {
      ProtoField.uint16("abbr","name");
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,base)", () => {
      ProtoField.uint16("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.uint16("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,nil,mask)", () => {
      ProtoField.uint16("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.uint16(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.uint16("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.uint24(abbr)", () => {
      ProtoField.uint24("abbr");
    });
    recorder.tryPcall("ProtoField.uint24(abbr,name)", () => {
      ProtoField.uint24("abbr","name");
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,base)", () => {
      ProtoField.uint24("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.uint24("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,nil,mask)", () => {
      ProtoField.uint24("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.uint24(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.uint24("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.uint32(abbr)", () => {
      ProtoField.uint32("abbr");
    });
    recorder.tryPcall("ProtoField.uint32(abbr,name)", () => {
      ProtoField.uint32("abbr","name");
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,base)", () => {
      ProtoField.uint32("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.uint32("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,nil,mask)", () => {
      ProtoField.uint32("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.uint32(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.uint32("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.uint64(abbr)", () => {
      ProtoField.uint64("abbr");
    });
    recorder.tryPcall("ProtoField.uint64(abbr,name)", () => {
      ProtoField.uint64("abbr","name");
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,base)", () => {
      ProtoField.uint64("abbr",undefined,base.HEX);
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.uint64("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,nil,mask)", () => {
      ProtoField.uint64("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.uint64(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.uint64("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.int8(abbr)", () => {
      ProtoField.int8("abbr");
    });
    recorder.tryPcall("ProtoField.int8(abbr,name)", () => {
      ProtoField.int8("abbr","name");
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,base)", () => {
      ProtoField.int8("abbr",undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.int8("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,nil,mask)", () => {
      ProtoField.int8("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.int8(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.int8("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.int16(abbr)", () => {
      ProtoField.int16("abbr");
    });
    recorder.tryPcall("ProtoField.int16(abbr,name)", () => {
      ProtoField.int16("abbr","name");
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,base)", () => {
      ProtoField.int16("abbr",undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.int16("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,nil,mask)", () => {
      ProtoField.int16("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.int16(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.int16("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.int24(abbr)", () => {
      ProtoField.int24("abbr");
    });
    recorder.tryPcall("ProtoField.int24(abbr,name)", () => {
      ProtoField.int24("abbr","name");
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,base)", () => {
      ProtoField.int24("abbr",undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.int24("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,nil,mask)", () => {
      ProtoField.int24("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.int24(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.int24("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.int32(abbr)", () => {
      ProtoField.int32("abbr");
    });
    recorder.tryPcall("ProtoField.int32(abbr,name)", () => {
      ProtoField.int32("abbr","name");
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,base)", () => {
      ProtoField.int32("abbr",undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.int32("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,nil,mask)", () => {
      ProtoField.int32("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.int32(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.int32("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.int64(abbr)", () => {
      ProtoField.int64("abbr");
    });
    recorder.tryPcall("ProtoField.int64(abbr,name)", () => {
      ProtoField.int64("abbr","name");
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,base)", () => {
      ProtoField.int64("abbr",undefined,base.DEC);
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.int64("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,nil,mask)", () => {
      ProtoField.int64("abbr",undefined,undefined,undefined,0xff);
    });
    recorder.tryPcall("ProtoField.int64(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.int64("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.framenum(abbr)", () => {
      ProtoField.framenum("abbr");
    });
    recorder.tryPcall("ProtoField.framenum(abbr,name)", () => {
      ProtoField.framenum("abbr","name");
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,base)", () => {
      ProtoField.framenum("abbr",undefined,base.NONE);
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,frametype)", () => {
      ProtoField.framenum("abbr",undefined,undefined,frametype.NONE);
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,nil,mask)", () => {
      ProtoField.framenum("abbr",undefined,undefined,undefined,0);
    });
    recorder.tryPcall("ProtoField.framenum(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.framenum("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.bool(abbr)", () => {
      ProtoField.bool("abbr");
    });
    recorder.tryPcall("ProtoField.bool(abbr,name)", () => {
      ProtoField.bool("abbr","name");
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,display)", () => {
      ProtoField.bool("abbr",undefined,base.NONE);
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.bool("abbr",undefined,undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,nil,mask)", () => {
      ProtoField.bool("abbr",undefined,undefined,undefined,0);
    });
    recorder.tryPcall("ProtoField.bool(abbr,nil,nil,nil,nil,desc)", () => {
      ProtoField.bool("abbr",undefined,undefined,undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.absolute_time(abbr)", () => {
      ProtoField.absolute_time("abbr");
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,name)", () => {
      ProtoField.absolute_time("abbr","name");
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,nil,base)", () => {
      ProtoField.absolute_time("abbr",undefined,base.UTC);
    });
    recorder.tryPcall("ProtoField.absolute_time(abbr,nil,nil,desc)", () => {
      ProtoField.absolute_time("abbr",undefined,undefined,"desc");
    });

  }
  {
    recorder.tryPcall("ProtoField.relative_time(abbr)", () => {
      ProtoField.relative_time("abbr");
    });
    recorder.tryPcall("ProtoField.relative_time(abbr,name)", () => {
      ProtoField.relative_time("abbr","name");
    });
    recorder.tryPcall("ProtoField.relative_time(abbr,nil,desc)", () => {
      ProtoField.relative_time("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.float(abbr)", () => {
      ProtoField.float("abbr");
    });
    recorder.tryPcall("ProtoField.float(abbr,name)", () => {
      ProtoField.float("abbr","name");
    });
    recorder.tryPcall("ProtoField.float(abbr,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.float("abbr",undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.float(abbr,nil,nil,desc)", () => {
      ProtoField.float("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.double(abbr)", () => {
      ProtoField.double("abbr");
    });
    recorder.tryPcall("ProtoField.double(abbr,name)", () => {
      ProtoField.double("abbr","name");
    });
    recorder.tryPcall("ProtoField.double(abbr,nil,valuestring)", () => {
      const valuestring=new LuaTable<number,any>();
      valuestring.set(1,"a");
      valuestring.set(2,"b");
      ProtoField.double("abbr",undefined,valuestring);
    });
    recorder.tryPcall("ProtoField.double(abbr,nil,nil,desc)", () => {
      ProtoField.double("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.string(abbr)", () => {
      ProtoField.string("abbr");
    });
    recorder.tryPcall("ProtoField.string(abbr,name)", () => {
      ProtoField.string("abbr","name");
    });
    recorder.tryPcall("ProtoField.string(abbr,nil,display)", () => {
      ProtoField.string("abbr",undefined,base.UNICODE);
    });
    recorder.tryPcall("ProtoField.string(abbr,nil,nil,desc)", () => {
      ProtoField.string("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.stringz(abbr)", () => {
      ProtoField.stringz("abbr");
    });
    recorder.tryPcall("ProtoField.stringz(abbr,name)", () => {
      ProtoField.stringz("abbr","name");
    });
    recorder.tryPcall("ProtoField.stringz(abbr,nil,display)", () => {
      ProtoField.stringz("abbr",undefined,base.UNICODE);
    });
    recorder.tryPcall("ProtoField.stringz(abbr,nil,nil,desc)", () => {
      ProtoField.stringz("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.bytes(abbr)", () => {
      ProtoField.bytes("abbr");
    });
    recorder.tryPcall("ProtoField.bytes(abbr,name)", () => {
      ProtoField.bytes("abbr","name");
    });
    recorder.tryPcall("ProtoField.bytes(abbr,nil,display)", () => {
      ProtoField.bytes("abbr",undefined,base.SPACE);
    });
    recorder.tryPcall("ProtoField.bytes(abbr,nil,nil,desc)", () => {
      ProtoField.bytes("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.ubytes(abbr)", () => {
      ProtoField.ubytes("abbr");
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,name)", () => {
      ProtoField.ubytes("abbr","name");
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,nil,display)", () => {
      ProtoField.ubytes("abbr",undefined,base.SPACE);
    });
    recorder.tryPcall("ProtoField.ubytes(abbr,nil,nil,desc)", () => {
      ProtoField.ubytes("abbr",undefined,undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.none(abbr)", () => {
      ProtoField.none("abbr");
    });
    recorder.tryPcall("ProtoField.none(abbr,name)", () => {
      ProtoField.none("abbr","name");
    });
    recorder.tryPcall("ProtoField.none(abbr,nil,desc)", () => {
      ProtoField.none("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.ipv4(abbr)", () => {
      ProtoField.ipv4("abbr");
    });
    recorder.tryPcall("ProtoField.ipv4(abbr,name)", () => {
      ProtoField.ipv4("abbr","name");
    });
    recorder.tryPcall("ProtoField.ipv4(abbr,nil,desc)", () => {
      ProtoField.ipv4("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.ipv6(abbr)", () => {
      ProtoField.ipv6("abbr");
    });
    recorder.tryPcall("ProtoField.ipv6(abbr,name)", () => {
      ProtoField.ipv6("abbr","name");
    });
    recorder.tryPcall("ProtoField.ipv6(abbr,nil,desc)", () => {
      ProtoField.ipv6("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.ether(abbr)", () => {
      ProtoField.ether("abbr");
    });
    recorder.tryPcall("ProtoField.ether(abbr,name)", () => {
      ProtoField.ether("abbr","name");
    });
    recorder.tryPcall("ProtoField.ether(abbr,nil,desc)", () => {
      ProtoField.ether("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.guid(abbr)", () => {
      ProtoField.guid("abbr");
    });
    recorder.tryPcall("ProtoField.guid(abbr,name)", () => {
      ProtoField.guid("abbr","name");
    });
    recorder.tryPcall("ProtoField.guid(abbr,nil,desc)", () => {
      ProtoField.guid("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.oid(abbr)", () => {
      ProtoField.oid("abbr");
    });
    recorder.tryPcall("ProtoField.oid(abbr,name)", () => {
      ProtoField.oid("abbr","name");
    });
    recorder.tryPcall("ProtoField.oid(abbr,nil,desc)", () => {
      ProtoField.oid("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.protocol(abbr)", () => {
      ProtoField.protocol("abbr");
    });
    recorder.tryPcall("ProtoField.protocol(abbr,name)", () => {
      ProtoField.protocol("abbr","name");
    });
    recorder.tryPcall("ProtoField.protocol(abbr,nil,desc)", () => {
      ProtoField.protocol("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.rel_oid(abbr)", () => {
      ProtoField.rel_oid("abbr");
    });
    recorder.tryPcall("ProtoField.rel_oid(abbr,name)", () => {
      ProtoField.rel_oid("abbr","name");
    });
    recorder.tryPcall("ProtoField.rel_oid(abbr,nil,desc)", () => {
      ProtoField.rel_oid("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.systemid(abbr)", () => {
      ProtoField.systemid("abbr");
    });
    recorder.tryPcall("ProtoField.systemid(abbr,name)", () => {
      ProtoField.systemid("abbr","name");
    });
    recorder.tryPcall("ProtoField.systemid(abbr,nil,desc)", () => {
      ProtoField.systemid("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.eui64(abbr)", () => {
      ProtoField.eui64("abbr");
    });
    recorder.tryPcall("ProtoField.eui64(abbr,name)", () => {
      ProtoField.eui64("abbr","name");
    });
    recorder.tryPcall("ProtoField.eui64(abbr,nil,desc)", () => {
      ProtoField.eui64("abbr",undefined,"desc");
    });
  }
  {
    recorder.tryPcall("ProtoField.eui64(abbr)", () => {
      const protofield=ProtoField.none("abbr");
      tostring(protofield);
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
    dissector.call(buffer,pinfo,tree);
  });
  recorder.tryPcall("dissector:__call(tvb, pinfo, tree)", () => {
    const dissector=Dissector.get("http");
    dissector(buffer,pinfo,tree);
  });
}

function test_chapter_11_6_2_dissector(this: void,buffer: Tvb, pinfo: Pinfo, tree: TreeItem) {
  recorder.tryPcall("DissectorTable.try_heuristics(listname,tvb,pinfo,tree)", () => {
    DissectorTable.try_heuristics("http",buffer,pinfo,tree);
  });
  recorder.tryPcall("dissectortable:try(pattern,tvb,pinfo,tree)", () => {
    const dissectortable01=DissectorTable.new("tablename_dissector01",undefined,ftypes.UINT8);
    dissectortable01.try(1,buffer,pinfo,tree);
    const dissectortable02=DissectorTable.new("tablename_dissector02",undefined,ftypes.STRING);
    dissectortable02.try("1",buffer,pinfo,tree);
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