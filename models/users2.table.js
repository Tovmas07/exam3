import db from '../clients/db.mysql.js';


// export default {
//     async findById (id) {
//     const rows = await db.query(`SELECT * FROM users WHERE id = ?`);
//     },
//     async create() {
//         const [raws] = await db.query(`
//             INSERT INTO users (first_name, last_name, email, dob)
//             VALUES (?, ?, ?, ?, ?)
//         `,[first_name , last_name, email, dob, password]);
//
//         console.log(raws);
//
//         return raws;
//     }


export default {
    async findAll() {

    },
    async create() {
        const [raws] = await db.query(`
        INSERT INTO users (first_name, last_name, email, dob)
        VALUES (?, ?, ?, ?, ?)
        `,[first_name , last_name, email, dob, password]);

        console.log(raws);

        return raws;
    }
}