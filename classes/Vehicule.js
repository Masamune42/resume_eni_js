class VehiculeError extends Error {
    toString() {
        return 'Une erreur est survenue';
    }
}

class Vehicule {
    constructor(nbWheels) {
        this.wheels = nbWheels;
    }

    move() {
        throw new VehiculeError();
    }
}

module.exports = Vehicule;