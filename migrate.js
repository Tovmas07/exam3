import db from './clients/db.mysql.js';

(async () => {
    try {
   await db.query(`
    CREATE TABLE IF NOT EXISTS users3
        (
            id      int    not null auto_increment primary key,
            first_name  VARCHAR (50)     not null,
            last_name  VARCHAR (50)     not null,
            email    VARCHAR (100)     not null,
            password VARCHAR (100)     not null,
            dob   date
         )
       `);
    }catch(err) {
        console.log(err)
    }
})();


