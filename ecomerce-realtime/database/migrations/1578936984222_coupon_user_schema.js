'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
  up() {
    this.create('coupon_user', table => {
      table.increments()
      table.integer('cupon_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()

      table
        .foreing('cupon_id')
        .references('id')
        .inTable('cupons')
        .onDelete('cascate')

      table
        .foreign('user_id')
        .refereces('id')
        .inTable('users')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('coupon_user')
  }
}

module.exports = CouponUserSchema
