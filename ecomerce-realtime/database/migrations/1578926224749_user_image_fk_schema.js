'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up() {
    this.table('users', table => {
      table
        .foreing('image_id')
        .refences('Id')
        .inTable('images')
        .onDelete('cascade')
    })
  }

  down() {
    this.table('users', table => {
      table.dropForeign('image_id')
    })
  }
}

module.exports = UserImageFkSchema
