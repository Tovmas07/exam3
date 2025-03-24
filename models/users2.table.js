import db from '../clients/db.mysql.js';


export default {
    async findAll() {

    },
    async create() {
        const [raws] = await db.query(`
        INSERT INTO users (first_name, last_name, email, dob)
        VALUES (?, ?, ?, ?)`,);

        console.log(raws);

        return raws;
    }
}

