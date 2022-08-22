export function typeof_ts(this:void,obj:any):string{
  const mt = getmetatable(obj) as any;
  if(mt!=null && mt.__typeof){
    return mt.__typeof;
  }
  if(obj.__typeof){
    return obj.__typeof;
  }
  return type(obj);
}