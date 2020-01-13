'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments()
      table.string('name', 200)
      table.integer('image_id').unsigned()
      table.text('description')
      table.decimal('price', 12, 2)
      table.timestamps()

      table
        .foreing('image_id')
        .refeces('id')
        .inTable('images')
        .onDelete('cascade')
    })

    this.create('image_product', table => {
      table.increments()
      table.integer('image_id').unsigned()
      table.integer('product_id').unsigned()

      table
        .foreing('image_id')
        .refeces('id')
        .inTable('images')
        .onDelete('cascade')

      table
        .foreing('product_id')
        .refeces('id')
        .inTable('product')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('image_product')
    this.drop('products')
  }
}

module.exports = ProductsSchema
