// boucles

/* fonctions */
// Fonctions fléchées
const lambdaAutoReturn = (a, b) => a * b;

/* Callback */
// On passe en paramètre 3 paramètre avec le 3e qui est une fonction
const doAdd = (a, b, callback) => {
    const result = a + b;
    // Si il n'y a pas de fonction callback, retourne le résultat
    if (!callback) return result;
    // Sinon, exécute le callback après
    callback(result);
};

// Exemple d'utilisation
const res2 = doAdd(1, 2, (result) => {
    console.log(result);
});

/* Collections */
// Déclaration d'un tableau d'objets
const users = [
    { nom: 'Dupont', prenom: 'Jean', active: true },
    { nom: 'Duponne', prenom: 'Jeanne', active: true },
    { nom: 'Jackson', prenom: 'Mickael', active: false },
    { nom: 'Halliday', prenom: 'Jhonny', active: false },
    { nom: 'Hendrix', prenom: 'Jimmy', active: false }
];

// Filtre
// On filtre users avec une fonction qui récupère chaque user et qui ne récupère que ceux qui sont actifs
const activeUsers = users.filter(user => user.active);

// Map
// Renvoie un tableau avec pour chaque case la valeur de retour de la fonction
const listUsers4 = users.map((user) => `${user.prenom} ${user.nom}`);
// Avec Destructuring
const listUsers5 = users.map(({ nom, prenom }) => `${prenom} ${nom}`);

/* Destructuring */
const user = {
    nom: 'Dupont', prenom: 'Jean', active: true,
};

// On associe chaque valeur de user à une constante (mêmes noms que les propriétés, peu importe l'ordre)
const { nom, prenom, active } = user;
console.log('nom: ', nom);
console.log('prenom: ', prenom);
console.log('active: ', active);

// Même chose avec une fonction (mêmes noms de propriétés, peu importe l'ordre)
const maFonctionAvecDestructuring = ({ nom, prenom, active }) => {
    console.log('nom: ', nom);
    console.log('prenom: ', prenom);
    console.log('active: ', active);
};

// Avec tableau, chaque constante aura la valeur correspondante du tableau
// entre1 = 1, entre2 = 2, entre3 = 3
const tableau = [1, 2, 3];
const [entre1, entre2, entre3] = tableau;

// addEventListener avec fonction anonyme
// AVANT : avec fonction classique, utilisation de this
// this = l'élément
textinput.addEventListener('keydown', function () {
    console.log(this.value);
})

// APRES : avec fonction fléchée, utilisation de event.target
// this = window
textinput.addEventListener('keydown', (event) => {
    console.log(event.target.value);
})

