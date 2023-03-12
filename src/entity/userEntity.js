class UserEntity {

  /**
    * User entity constructor
    * @param {Number} id
    * @param {String} name
    * @param {String} surname
    * @param {String} age
    * @returns {UserEntity}
    */
  constructor(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}

module.exports = UserEntity;