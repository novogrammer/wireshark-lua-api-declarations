--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Recorder = require("Recorder")
local Recorder = ____Recorder.default
local recorder = __TS__New(Recorder)
local function test_chapter_11_9()
    local filehandler_read, filetype_number_read, filehandler_write, filetype_number_write
    print("begin test_chapter_11_9")
    local fileHandlerReadCountTable = {}
    fileHandlerReadCountTable.read_open = 0
    fileHandlerReadCountTable.read = 0
    fileHandlerReadCountTable.seek_read = 0
    fileHandlerReadCountTable.read_close = 0
    fileHandlerReadCountTable.seq_read_close = 0
    local function countReadEvent(self, eventName)
        local count = fileHandlerReadCountTable[eventName]
        fileHandlerReadCountTable[eventName] = count + 1
    end
    local fileHandlerWriteCountTable = {}
    fileHandlerWriteCountTable.write_open = 0
    fileHandlerWriteCountTable.can_write_encap = 0
    fileHandlerWriteCountTable.can_write_encap = 0
    fileHandlerWriteCountTable.write = 0
    fileHandlerWriteCountTable.write_close = 0
    local function countWriteEvent(self, eventName)
        local count = fileHandlerWriteCountTable[eventName]
        fileHandlerWriteCountTable[eventName] = count + 1
    end
    local function test_chapter_11_9_1(capture)
        recorder:tryPcall(
            "todo",
            function()
                error("todo", 0)
            end
        )
    end
    local function test_chapter_11_9_2(capture)
        recorder:tryPcall(
            "todo",
            function()
                error("todo", 0)
            end
        )
    end
    local function test_chapter_11_9_3(file)
        recorder:tryPcall(
            "file:read()",
            function()
                local position = file:seek()
                local line = file:read(3)
                if line ~= "abc" then
                    error("not abc", 0)
                end
                if position ~= nil then
                    file:seek("set", position)
                end
            end
        )
        recorder:tryPcall(
            "file:seek()",
            function()
                local position = file:seek()
                if position ~= 0 then
                    error("not 0", 0)
                end
                file:read(3)
                local position2 = file:seek()
                if position2 ~= 3 then
                    error("not 3", 0)
                end
                if position ~= nil then
                    file:seek("set", position)
                end
            end
        )
        recorder:tryPcall(
            "file:lines()",
            function()
                local position = file:seek()
                local lines = file:lines()
                if type(lines) ~= "function" then
                    error("not function", 0)
                end
                if position ~= nil then
                    file:seek("set", position)
                end
            end
        )
        recorder:tryPcall(
            "file:write()",
            function()
                local position = file:seek()
                file:write("")
                if position ~= nil then
                    file:seek("set", position)
                end
            end
        )
        recorder:tryPcall(
            "file:__tostring()",
            function()
                local result = tostring(file)
                if type(result) ~= "string" then
                    error("not string", 0)
                end
            end
        )
        recorder:tryPcall(
            "file.compressed",
            function()
                local result = file.compressed
                if type(result) ~= "boolean" then
                    error("not boolean", 0)
                end
            end
        )
    end
    local function test_chapter_11_9_4()
        recorder:tryPcall(
            "FileHandler.new(description, name, internal_description, type)",
            function()
                if type(filehandler_read) ~= "userdata" then
                    error("not userdata", 0)
                end
                if type(filehandler_write) ~= "userdata" then
                    error("not userdata", 0)
                end
            end
        )
        recorder:tryPcall(
            "filehandler:__tostring()",
            function()
                local result = tostring(filehandler_read)
                if type(result) ~= "string" then
                    error("not string", 0)
                end
            end
        )
        recorder:tryPcall(
            "filehandler.read_open",
            function()
                local count = fileHandlerReadCountTable.read_open
                if count ~= 1 then
                    error(
                        "read_open count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.read",
            function()
                local count = fileHandlerReadCountTable.read
                if count ~= 2 then
                    error(
                        "read count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        if true then
            print("filehandler.seek_read SKIPPED")
        else
            recorder:tryPcall(
                "filehandler.seek_read",
                function()
                    local count = fileHandlerReadCountTable.seek_read
                    if count ~= 1 then
                        error(
                            "seek_read count: " .. tostring(count),
                            0
                        )
                    end
                end
            )
        end
        recorder:tryPcall(
            "filehandler.read_close",
            function()
                local count = fileHandlerReadCountTable.read_close
                if count ~= 1 then
                    error(
                        "read_close count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.seq_read_close",
            function()
                local count = fileHandlerReadCountTable.seq_read_close
                if count ~= 1 then
                    error(
                        "seq_read_close count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.can_write_encap",
            function()
                local count = fileHandlerWriteCountTable.can_write_encap
                if count ~= 1 then
                    error(
                        "can_write_encap count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.write_open",
            function()
                local count = fileHandlerWriteCountTable.write_open
                if count ~= 1 then
                    error(
                        "write_open count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.write",
            function()
                local count = fileHandlerWriteCountTable.write
                if count ~= 1 then
                    error(
                        "write count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.write_close",
            function()
                local count = fileHandlerWriteCountTable.write_close
                if count ~= 1 then
                    error(
                        "write_close count: " .. tostring(count),
                        0
                    )
                end
            end
        )
        recorder:tryPcall(
            "filehandler.type",
            function()
                if type(filehandler_read.type) ~= "number" then
                    error("not number", 0)
                end
            end
        )
        recorder:tryPcall(
            "filehandler.extensions",
            function()
                local result = filehandler_read.extensions
                if type(result) ~= "string" then
                    error("not string", 0)
                end
                filehandler_read.extensions = result
            end
        )
        recorder:tryPcall(
            "filehandler.writing_must_seek",
            function()
                local result = filehandler_read.writing_must_seek
                if type(result) ~= "boolean" then
                    error("not boolean", 0)
                end
                filehandler_read.writing_must_seek = result
            end
        )
        recorder:tryPcall(
            "filehandler.writes_name_resolution",
            function()
                local result = filehandler_read.writes_name_resolution
                if type(result) ~= "boolean" then
                    error("not boolean", 0)
                end
                filehandler_read.writes_name_resolution = result
            end
        )
        recorder:tryPcall(
            "filehandler.supported_comment_types",
            function()
                local result = filehandler_read.supported_comment_types
                if type(result) ~= "number" then
                    error("not number", 0)
                end
                filehandler_read.supported_comment_types = result
            end
        )
    end
    local function test_chapter_11_9_5(frame)
        recorder:tryPcall(
            "todo",
            function()
                error("todo", 0)
            end
        )
    end
    local function test_chapter_11_9_6(frame)
        recorder:tryPcall(
            "todo",
            function()
                error("todo", 0)
            end
        )
    end
    local function test_chapter_11_9_7()
        recorder:tryPcall(
            "register_filehandler(filehandler)",
            function()
                if type(filetype_number_read) ~= "number" then
                    error("not number", 0)
                end
                if type(filetype_number_write) ~= "number" then
                    error("not number", 0)
                end
            end
        )
        recorder:tryPcall(
            "deregister_filehandler(filehandler)",
            function()
            end
        )
    end
    local closeCount = 0
    local function onClose(self)
        closeCount = closeCount + 1
        if closeCount == 2 then
            test_chapter_11_9_4()
            test_chapter_11_9_7()
            print("end test_chapter_11_9")
            recorder:printResult()
        end
    end
    filehandler_read = FileHandler.new("description", "name-read", "internal_description", "r")
    filehandler_read.read_open = function(file, capture)
        print("filehandler_read.read_open")
        countReadEvent(nil, "read_open")
        test_chapter_11_9_3(file)
        test_chapter_11_9_1(capture)
        return true
    end
    filehandler_read.read = function(file, capture, frame)
        print("filehandler_read.read")
        countReadEvent(nil, "read")
        local position = file:seek()
        print("position: " .. tostring(position))
        if position == 0 then
            local line = file:read(3)
            print("line: " .. tostring(line))
            frame.rec_type = wtap_rec_types.PACKET
            test_chapter_11_9_5(frame)
            return 3
        end
        return false
    end
    filehandler_read.seek_read = function(file, capture, frame, offset)
        file:seek("set", offset)
        print("filehandler_read.seek_read")
        countReadEvent(nil, "seek_read")
        return false
    end
    filehandler_read.read_close = function(file, capture)
        print("filehandler_read.read_close")
        countReadEvent(nil, "read_close")
        onClose(nil)
        return true
    end
    filehandler_read.seq_read_close = function(file, capture)
        print("filehandler_read.seq_read_close")
        countReadEvent(nil, "seq_read_close")
        return true
    end
    filehandler_read.extensions = "txt"
    local filetype_number_to_deregister = register_filehandler(filehandler_read)
    deregister_filehandler(filehandler_read)
    filetype_number_read = register_filehandler(filehandler_read)
    filehandler_write = FileHandler.new("description", "name-write", "internal_description", "w")
    filehandler_write.write_open = function(file, capture)
        print("filehandler_write.write_open")
        countWriteEvent(nil, "write_open")
        file:write("write_open\n")
        test_chapter_11_9_2(capture)
        return true
    end
    filehandler_write.can_write_encap = function(encap)
        print("filehandler_write.can_write_encap")
        countWriteEvent(nil, "can_write_encap")
        return true
    end
    filehandler_write.write = function(file, capture, frame)
        print("filehandler_write.write")
        countWriteEvent(nil, "write")
        file:write("write\n")
        test_chapter_11_9_6(frame)
        return true
    end
    filehandler_write.write_close = function(file, capture)
        print("filehandler_write.write_close")
        countWriteEvent(nil, "write_close")
        file:write("write_close\n")
        onClose(nil)
        return true
    end
    filehandler_write.extensions = "txt"
    filetype_number_write = register_filehandler(filehandler_write)
end
test_chapter_11_9()
return ____exports
