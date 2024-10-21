//console.log('Js page loaded !')

const app = {
    //Propriétées
    btnElements: null,

    //Methodes
    init: function(){
        app.domElements();
        app.addEventListeners();
        app.btnHandler();
    },

    //Recupereation elements HTML
    domElements: function(){ 
        app.btnElements = document.querySelectorAll('.main__nav-bar button');
    },
    
    //Fonction ecouteur d'évennements
    addEventListeners: function(){  // Correction ici
        /*this.btnElements.forEach(button => {
            button.addEventListener("click", this.btnHandler.bind(this));/
        });*/
        app.btnElements.addEventListener('click', btnHandler);
    },
    
    //Btn handler
    btnHandler: function(event){
        event.preventDefault();
    
        app.btnElements.forEach(btn => {
            btn.style.display = 'none';
        })
        /*app.btnElements.classList.remove('main__nav-bar button');*/
        
        /*const clickedButton = event.target;
        if (clickedButton.classList.contains('btn1')) {
            clickedButton.classList.add('class1');
        } else if (clickedButton.id === 'btn2') {
            clickedButton.classList.add('class2');
        } else if (clickedButton.id === 'btn3') {
            clickedButton.classList.add('class3');
        }*/
    },

    
}

app.init();