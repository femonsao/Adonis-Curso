'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponOrderSchema extends Schema {
  up() {
    this.create('cupon_order', table => {
      table.increments()
      table.integer('cupon_id').unsigned()
      table.integer('order_id').unsigned()
      table.decimal('discont', 12, 2).defaultTo(0, 0)
      table.timestamps()

      table
        .foreing('cupon_id')
        .references('id')
        .inTable('cupons')
        .onDelete('cascate')

      table
        .foreing('order_id')
        .references('id')
        .inTable('order')
        .onDelete('cascate')
    })
  }

  down() {
    this.drop('cupon_order')
  }
}

module.exports = CuponOrderSchema
