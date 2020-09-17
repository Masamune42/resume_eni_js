const Vehicule = require('./Vehicule');

class Avion extends Vehicule{
    constructor() {
        super(5);
    }

    move() {
        console.log('BRRR');
    }
}

module.exports = Avion;