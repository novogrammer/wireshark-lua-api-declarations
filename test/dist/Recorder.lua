--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
-- Lua Library inline imports
function __TS__Class(self)
    local c = {prototype = {}}
    c.prototype.__index = c.prototype
    c.prototype.constructor = c
    return c
end

function __TS__ArrayPush(arr, ...)
    local items = {...}
    for ____, item in ipairs(items) do
        arr[#arr + 1] = item
    end
    return #arr
end

function __TS__ArrayFilter(arr, callbackfn)
    local result = {}
    do
        local i = 0
        while i < #arr do
            if callbackfn(_G, arr[i + 1], i, arr) then
                result[#result + 1] = arr[i + 1]
            end
            i = i + 1
        end
    end
    return result
end

local ____exports = {}
local function canCallNoError(f, ...)
    local result = {pcall(f, ...)}
    if not result[1] then
        local ____ = result[2]
    end
    return result[1]
end
____exports.default = __TS__Class()
local Recorder = ____exports.default
Recorder.name = "Recorder"
function Recorder.prototype.____constructor(self)
    self.hasCalledNoErrorResultList = {}
end
function Recorder.prototype.tryPcall(self, name, f, ...)
    local result = {pcall(f, ...)}
    if result[1] then
        __TS__ArrayPush(self.hasCalledNoErrorResultList, {isNoError = true, name = name})
    else
        __TS__ArrayPush(self.hasCalledNoErrorResultList, {isNoError = false, name = name, errorMessage = result[2]})
    end
end
function Recorder.prototype.printResult(self)
    local calledWithErrorList = __TS__ArrayFilter(
        self.hasCalledNoErrorResultList,
        function(____, ____bindingPattern0)
            local isNoError
            isNoError = ____bindingPattern0.isNoError
            return not isNoError
        end
    )
    for ____, calledWithErrorOrNoError in ipairs(self.hasCalledNoErrorResultList) do
        if not calledWithErrorOrNoError.isNoError then
            print("error detail")
            print(("name: \"" .. calledWithErrorOrNoError.name) .. "\"")
            print(("errorMessage: \"" .. calledWithErrorOrNoError.errorMessage) .. "\"")
        end
    end
    local totalCount = #self.hasCalledNoErrorResultList
    local isNoErrorCount = #__TS__ArrayFilter(
        self.hasCalledNoErrorResultList,
        function(____, ____bindingPattern0)
            local isNoError
            isNoError = ____bindingPattern0.isNoError
            return isNoError
        end
    )
    print((("result " .. tostring(isNoErrorCount)) .. "/") .. tostring(totalCount))
end
____exports.default = Recorder
return ____exports
