var mysql = require('mysql');

var con = mysql.createConnection({
    host: "db4free.net",
    user: "mutualride_",
    database: "mutual_ride",
    password: "@mutualride",
  });
  
  con.connect(function(err) {
    if(err){
      console.log(err);
    }else{
      console.log("Connected!");
    }
  });

//   con.query(`insert into Rider (id, Name, Status, Adress) values (2,'Adeel', 0, 'Street # 5') `,function(err,result){
//     if(err) console.log('err',err)
//     else console.log(result);
// });

  con.query(`SELECT * FROM Rider`, function (err, result) {
    if (err) console.log('Connection result error ' + err);
    else console.log('result==>', result);
});

