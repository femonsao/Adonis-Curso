'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponProductSchema extends Schema {
  up() {
    this.create('coupon_product', table => {
      table.increments()
      table.integer('cupon_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()

      table
        .foreing('cupon_id')
        .references('id')
        .inTable('cupons')
        .onDelete('cascate')

      table
        .foreign('product_id')
        .refereces('id')
        .inTable('products')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down() {
    this.drop('coupon_product')
  }
}

module.exports = CouponProductSchema
