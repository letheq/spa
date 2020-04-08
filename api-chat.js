const dateFormat = require('dateformat');

let msgs = new Array();

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.messages = msgs;
    } else if (req.pathname.endsWith("/add")) {
        msgs.push("test");
        let obj = {};
        obj.message = req.parameters.msg; //text zpravy z parametru msg
        obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
        msgs.push(obj);
    }
}