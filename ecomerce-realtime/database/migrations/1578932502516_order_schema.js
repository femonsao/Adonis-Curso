'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', table => {
      table.increments()
      table.decimal('total', 12, 2).unsigned()
      table.enu('status', [
        'peding',
        'cancelled',
        'shipped',
        'paid',
        'finished'
      ])
      table.timestamps()

      table
        .foreign('user_id')
        .refereces('id')
        .inTable('users')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
