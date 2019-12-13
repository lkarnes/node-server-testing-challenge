const db = require('../data/dbConfig');

module.exports = {
    add,
    remove
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return db('users').where({id}).first();
}

async function remove(name) {
    return db('users').where({name}).del();
}