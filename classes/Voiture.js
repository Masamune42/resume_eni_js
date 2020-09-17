const Vehicule = require('./Vehicule');

class Voiture extends Vehicule {
    constructor() {
        super(4);
    }

    move() {
        console.log('VROUM');
    }
}


module.exports = Voiture;