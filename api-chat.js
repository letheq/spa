const dateFormat = require('dateformat');
const fs = require('fs');
let nicks = [];
let msgs = [];
const MSGS_FILE = "chat.json"

if (fs.existsSync(MSGS_FILE)){
    msgs = JSON.parse(fs.readFileSync(MSGS_FILE));
    }

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.messages = msgs;
        obj.nicknames = nicks;
    } else if (req.pathname.endsWith("/add")) {
        let obj = {};
        obj.message = req.parameters.msg;
        obj.nickname = req.parameters.nick;
        obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
        msgs.push(obj);
        nicks.push(obj);
        fs.writeFileSync(MSGS_FILE, JSON.stringify(msgs,null,2));
}
