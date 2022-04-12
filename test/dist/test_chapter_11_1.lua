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

function __TS__New(target, ...)
    local instance = setmetatable({}, target.prototype)
    instance:____constructor(...)
    return instance
end

function canCallNoError(f, ...)
    local result = {pcall(f, ...)}
    if not result[1] then
        local ____ = result[2]
    end
    return result[1]
end
Recorder = __TS__Class()
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
recorder = __TS__New(Recorder)
function test_chapter_11_1_1()
    recorder:tryPcall(
        "Dumper.new(filename)",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype)",
        function()
            local dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new(filename,filetype,encap)",
        function()
            local dumper = Dumper.new("dummyfile", wtap_filetypes.PCAP, wtap_encaps.ETHERNET)
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:close()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:flush()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:flush()
            dumper:close()
        end
    )
    recorder:tryPcall(
        "dumper:dump()",
        function()
            local dumper = Dumper.new("dummyfile")
            dumper:dump(
                0,
                PseudoHeader.none(),
                ByteArray.new("ff fe ff fe")
            )
            dumper:close()
        end
    )
    recorder:tryPcall(
        "Dumper.new_for_current(filename)",
        function()
            error("TODO: tap", 0)
        end
    )
    recorder:tryPcall(
        "Dumper.new_for_current(filename,filetype)",
        function()
            error("TODO: tap", 0)
        end
    )
end
function test_chapter_11_1()
    print("begin test_chapter_11_1")
    test_chapter_11_1_1()
    print("end test_chapter_11_1")
end
test_chapter_11_1()
recorder:printResult()
