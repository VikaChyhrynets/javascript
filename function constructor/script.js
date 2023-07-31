'use strict'
function User(name) {
    // this {}; (неявно)
    // добавляет свойство к this
    this.name = name;
    this.isAdmin = false;
    // return this (неявно)
}

let user = {
    name: 'Vika',
    isAdmin: false
};