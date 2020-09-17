class Button {
  constructor(params) {
    // params doit être un objet
    if (typeof params !== 'object') {
      throw new Error('Params is mandatory')
    }
    /*
      La ligne ci-dessous est équivalente à :
      const parent = params.parent;
      const buttonText = params.buttonText...
    */
    const { parent, buttonText, type } = params;

    // Tests des paramètres en entrée
    if (!parent) {
      throw new Error('Parent is mandatory');
    }
    if (!(parent instanceof HTMLElement)) {
      throw new Error('Parent must me an HTMLDivElement');
    }
    if (!buttonText || buttonText.trim() === '') {
      throw new Error('Button text is mandatory');
    }
    if (typeof buttonText !== 'string') {
      throw new Error('Button text must be a string');
    }

    // Création d'un input de type button avec buttonText en value
    this._input = document.createElement('input');
    this._input.setAttribute('type', 'button');
    this._input.setAttribute('value', buttonText);

    // définition de la classe myButton + type
    const className = 'myButton ' + type;
    this._input.setAttribute('class', className);
    // On ajoute le bouton dans parent
    parent.appendChild(this._input);

    // On définie buttonText propre au bouton
    this.buttonText = buttonText;
  }

  // Fonction onClick avec un callback en paramètre
  onClick(callback) {
    // On ajoute un EventListener click sur le bouton
    this._input.addEventListener('click', (event) => {
      // Au click, on effectue le callback avec en param : l'event et le texte du bouton (propre à l'élément)
      callback(event, this.buttonText);
    });
  }

  // Pour ajouter un event Listener classique sur l'élément par la suite, on est obligé de rappeler addEventListener dans la classe
  addEventListener(eventType, callback) {
    this._input.addEventListener(eventType, callback)
  }

  // Change la value du bouton (= texte affiché pour le bouton)
  setText(newText) {
    this._input.setAttribute('value', newText);
  }
}












