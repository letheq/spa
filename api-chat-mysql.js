const dateFormat = require('dateformat');
const mysql = require("mysql");
exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {


//vytvoreni pripojeni na databazi
        con = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "vertrigo",
            database: "pokusy"
        });

//pripojeni na databazi
        con.connect();
        con.query(`SELECT * FROM zpravy`,
            function(err, rows){
                if (err) {
                    console.error(err);
                } else {
                    //zpracovani vysledku SQL dotazu
                    console.log(rows);
                    obj.messages = rows;
                    res.end(JSON.stringify(obj));
                        //ukonceni pripojeni na databazi
                        con.end();
                    }
                }
                );

 } else if (req.pathname.endsWith("/add")) {
      //  let obj = {};
      //  obj.message = req.parameters.msg;
      //  obj.nickname = req.parameters.nick;
      //  obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
      //  msgs.push(obj);
      //  nicks.push(obj);

}
    const mysql = require("mysql");


    };



