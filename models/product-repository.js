const knex = require('../database');

module.exports = {
    
    find: () => {
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    findById: (params) => {
        return knex.select('p.*', 'g.name as group_name').from('product as p').innerJoin('group as g', 'g.id', 'p.group_id').where('p.id', params.id);
    }, 

    create: (params) => {
        return knex.insert(params).into('product');
    },

    update: (params) => {
        
        return knex('product').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('product').del().where('id', params.id);
    }
}