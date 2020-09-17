const Vehicule = require('./Vehicule');
const Voiture = require('./Voiture');
const Avion = require('./Avion');


try {
const vehicule = new Vehicule();
const voiture = new Voiture();
const avion = new Avion();

console.log(vehicule);
console.log(voiture);
console.log(avion);


voiture.move();
avion.move();

    vehicule.move();

} catch (err) {
    console.error(err);
}