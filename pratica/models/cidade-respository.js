const knex = require('../database');

module.exports = {
    find: () => {
        return knex.select().from('cidade');
    },
    findById: (params) => {
        return knex.select().from('cidade').where('id', params.id);
    }, 
    create: (params) => {
        return knex.insert(params).into('cidade');
    },
    update: (params) => {
        return knex('cidade').update(params).where('id', params.id);
    },
    delete: (params) => {
        return knex('cidade').del().where('id', params.id);
    }
}