# Wireshark's Lua API TypeScript Declarations

see [Lua in Wireshark](https://wiki.wireshark.org/Lua/) and [Chapter 11. Wireshark’s Lua API Reference Manual](https://www.wireshark.org/docs/wsdg_html_chunked/wsluarm_modules.html)

Based on Wireshark 3.6.2

[![Test](https://github.com/novogrammer/wireshark-lua-api-declarations/actions/workflows/test.yml/badge.svg)](https://github.com/novogrammer/wireshark-lua-api-declarations/actions/workflows/test.yml)

Now Testing...

## Limitation

`typeof(obj)` is broken because of TypeScript's reserved word.

```
// declare function typeof(this:void,obj:any):string;
declare function typeof__is__broken(this:void,obj:any):string;
```

## Example
https://github.com/novogrammer/wireshark-socketio-post-dissector
