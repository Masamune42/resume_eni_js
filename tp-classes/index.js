// On récupère la div#app
const appDiv = document.getElementById('app');

// On crée un bouton avec comme paramètre un objet qui contient les paramètres du constructeur
const button = new Button({
  parent: appDiv,
  buttonText: 'ButtonText',
  type: 'primary',
});

// On crée une fonction
const onACliqueSurUnBouton = (event, buttonText) => {
  console.log('Le bouton a été cliqué')
  if (event.ctrlKey) {
    console.log('Celui qui a cliqué à maintenu la touche CTRL en cliquant');
  }
  console.log(event, buttonText);
};

// On passe la fonction dans la fonction de classe pour l'effectuer au clic
button.onClick(onACliqueSurUnBouton);
// EQUIVALENT :
/* 
onClick(callback) {
  this._input.addEventListener('click', (event) => {
    // On a passé cette fonction callback en paramètre et on l'utilise
    (event, buttonText) => {
      console.log('Le bouton a été cliqué')
      if (event.ctrlKey) {
        console.log('Celui qui a cliqué à maintenu la touche CTRL en cliquant');
      }
      console.log(event, buttonText);
    }
  });
} 
*/

// On peut utiliser la fonction de propriété autant de fois que l'on veut
button.onClick((event, buttonText) => {
  console.log('Deuxième listener sur le même bouton')
});

// On appelle la fonction addEventListener en propriété du bouton
button.addEventListener('dblclick', (event) => {
  console.log('Double click sur le bouton');
});

// On crée un 2e bouton avec comme paramètre un objet qui contient les paramètres du constructeur
const button2 = new Button({
  buttonText: 'Deuxième bouton',
  parent: appDiv,
  type: 'error',
});
button2.onClick(onACliqueSurUnBouton);

// On change le texte du bouton
button2.setText('Button erreur');