// 'use strict'

// /** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
// const Model = use('Model')

// class Contact extends Model {
// }

// module.exports = Contact

'use strict'
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Contact extends Model {
    user() {
        return this.belongsTo('App/Models/User');
    }
}
module.exports = Contact
