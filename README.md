# Wireshark's Lua API TypeScript Declarations

see [Lua in Wireshark](https://wiki.wireshark.org/Lua/) and [Chapter 11. Wireshark’s Lua API Reference Manual](https://www.wireshark.org/docs/wsdg_html_chunked/wsluarm_modules.html)

Based on Wireshark 3.6.2

[![Test](https://github.com/novogrammer/wireshark-lua-api-declarations/actions/workflows/test.yml/badge.svg)](https://github.com/novogrammer/wireshark-lua-api-declarations/actions/workflows/test.yml)

Now Testing...

## Limitation

### typeof(obj)
`typeof(obj)` is broken because of TypeScript's reserved word.

However, You can make equivalent function in TypeScript.


init.lua in wireshark
```
function typeof(obj)
    local mt = getmetatable(obj)
    return mt and mt.__typeof or obj.__typeof or type(obj)
end
```

your.ts
```
function typeof_ts(this:void,obj:any):string{
  const mt = getmetatable(obj) as any;
  if(mt!=null && mt.__typeof){
    return mt.__typeof;
  }
  if(obj.__typeof){
    return obj.__typeof;
  }
  return type(obj);
}
```

## Example
https://github.com/novogrammer/wireshark-socketio-post-dissector
