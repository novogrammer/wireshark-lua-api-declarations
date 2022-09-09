local ____lualib = require("lualib_bundle")
local __TS__Class = ____lualib.__TS__Class
local __TS__ArrayFilter = ____lualib.__TS__ArrayFilter
local ____exports = {}
local function canCallNoError(f, ...)
    local result = {pcall(f, ...)}
    if not result[1] then
        local ____ = result[2]
    end
    return result[1]
end
local function style(____, ...)
    local styles = {...}
    return ("[" .. table.concat(styles, ";")) .. "m"
end
local STYLE_RESET = "0"
local STYLE_RED = "31"
local STYLE_GREEN = "32"
local STYLE_BOLD = "1"
____exports.default = __TS__Class()
local Recorder = ____exports.default
Recorder.name = "Recorder"
function Recorder.prototype.____constructor(self)
    self.hasCalledNoErrorResultList = {}
end
function Recorder.prototype.tryPcall(self, name, f, ...)
    local result = {pcall(f, ...)}
    if result[1] then
        local ____self_hasCalledNoErrorResultList_0 = self.hasCalledNoErrorResultList
        ____self_hasCalledNoErrorResultList_0[#____self_hasCalledNoErrorResultList_0 + 1] = {isNoError = true, name = name}
    else
        local ____self_hasCalledNoErrorResultList_1 = self.hasCalledNoErrorResultList
        ____self_hasCalledNoErrorResultList_1[#____self_hasCalledNoErrorResultList_1 + 1] = {isNoError = false, name = name, errorMessage = result[2]}
    end
end
function Recorder.prototype.printWithErrorStyle(self, text)
    print((style(nil, STYLE_RED, STYLE_BOLD) .. text) .. style(nil, STYLE_RESET))
end
function Recorder.prototype.printWithOkStyle(self, text)
    print((style(nil, STYLE_GREEN, STYLE_BOLD) .. text) .. style(nil, STYLE_RESET))
end
function Recorder.prototype.printFailed(self)
    self:printWithErrorStyle("*** test failed. ***")
end
function Recorder.prototype.printResult(self)
    for ____, calledWithErrorOrNoError in ipairs(self.hasCalledNoErrorResultList) do
        if not calledWithErrorOrNoError.isNoError then
            self:printWithErrorStyle("error detail")
            self:printWithErrorStyle(("name: \"" .. calledWithErrorOrNoError.name) .. "\"")
            self:printWithErrorStyle(("errorMessage: \"" .. calledWithErrorOrNoError.errorMessage) .. "\"")
            self:printWithErrorStyle("error detail")
            self:printFailed()
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
    if isNoErrorCount == totalCount then
        self:printWithOkStyle(((("*** result " .. tostring(isNoErrorCount)) .. "/") .. tostring(totalCount)) .. " ***")
    else
        self:printWithErrorStyle(((("*** result " .. tostring(isNoErrorCount)) .. "/") .. tostring(totalCount)) .. " ***")
    end
end
____exports.default = Recorder
return ____exports
