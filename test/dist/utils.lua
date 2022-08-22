--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.typeof_ts(obj)
    local mt = getmetatable(obj)
    if mt ~= nil and mt.__typeof then
        return mt.__typeof
    end
    if obj.__typeof then
        return obj.__typeof
    end
    return type(obj)
end
return ____exports
