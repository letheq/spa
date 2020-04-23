const dateFormat = require('dateformat');

let msgs = new Array();
let nicks = new Array();

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.messages = msgs;
        obj.nicknames = nicks;
    } else if (req.pathname.endsWith("/add")) {
        msgs.push();
        nicks.push();
        let obj = {};
        obj.message = req.parameters.msg;
        obj.nickname = req.parameters.nick;
        obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
        msgs.push(obj);
        nicks.push(obj);
    }
}