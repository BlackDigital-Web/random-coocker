console.log('App JS loaded !');

const app = {
    //propriétés
    navBtnElements: null,
    navElement: null,
    foodListElement: null,
    testRecipeElement: null,
    randomRecipeElement: null,
    crossBtnElements:null,
    ingredients: {
        fruits: ['Mangue', 'Ananas', 'Papaye', 'Orange', 'Citron', 'Pamplemousse', 'Fraise', 'Framboise', 'Myrtille'],
        legumes: ['Carotte', 'Betterave', 'Navet', 'Laitue', 'Épinard', 'Chou frisé', 'Brocoli', 'Chou-fleur', 'Chou'],
        condiments: ['Poivre', 'Cumin', 'Curcuma', 'Basilic', 'Persil', 'Coriandre', 'Ketchup', 'Moutarde', 'Mayonnaise'],
        produitsLaitiers: ['Lait de vache', 'Lait de chèvre', 'Lait d’amande', 'Cheddar', 'Brie', 'Mozzarella', 'Yaourt nature', 'Yaourt grec', 'Yaourt aux fruits'],
        proteines: ["Poulet", "Boeuf", "Porc", "Tofu", "Lentilles", "Oeufs", "Poisson", "Haricots", "Pois chiches", "Yaourt grec"],

    },
    foodListContent:null,
    content: null,
    foodPickerContent: null,
    fruits: [],
    legumes: [],
    condiments:[],
    produitsLaitiers:[],
    recipeContent: null,

    //Méthodes
    init: function(){
        app.domElements();
        app.addEventListeners();
        app.navBtnHandler();
        app.crossBtnHandler();
        app.pickerHandler();
    },

    domElements: function(){
        //recuperer les bouttons et les classes
        app.navBtnElements = document.querySelectorAll('.main__nav-btn');
        console.log(`J'ai récupéré btnElements`)
        app.navElement = document.querySelector('.main__nav-bar');
        app.foodListElement = document.querySelector('.food-list');
        app.testRecipeElement = document.querySelector('.test-recipe');
        app.randomRecipeElement = document.querySelector('.random-recipe');
        app.crossBtnElements = document.querySelectorAll('.cross-off');
        app.foodListContent = document.querySelector('.food-list-content');
        app.foodListContent.innerHTML = this.fillFoodList();
        app.foodPickerContent = document.querySelector('.food-picker__p');
        app.foodPickerContent.innerHTML = this.fillFoodList();
        app.recipeContent = document.querySelector('.recipe-content')
        
    },

    addEventListeners: function(){
        app.navBtnElements.forEach(navBtn =>{
            navBtn.addEventListener('click', app.navBtnHandler);
            console.log('Boutons écoutés !');
        });

        app.crossBtnElements.forEach(crossBtn =>{
            crossBtn.addEventListener('click', app.crossBtnHandler);
            console.log('Boutons cross écoutés !');
        });

        app.foodPickerContent.forEach(ingredient =>{
            ingredient.addEventListener('click', app.pickerHandler)
        })
    },

    //callback function
    navBtnHandler: function(event){
        event.preventDefault();
        app.navElement.classList.add('nav--hidden');

        const btnTarget = event.target 
        //console.log(btnTarget)

        if(btnTarget.id === 'btn1'){
            app.foodListElement.classList.remove('food-list--hidden')
        }else if(btnTarget.id === 'btn2'){
            app.testRecipeElement.classList.remove('test-recipe--hidden')
        }else{
            app.randomRecipeElement.classList.remove('random-recipe--hidden')
        }
    },

    crossBtnHandler: function(event){
        event.preventDefault();

        app.foodListElement.classList.add('food-list--hidden');
        //console.log(event.target)
        app.testRecipeElement.classList.add('test-recipe--hidden');
        app.randomRecipeElement.classList.add('random-recipe--hidden');

        app.navElement.classList.remove('nav--hidden');
    },

    fillFoodList: function(){
        let result = app.foodListContent.innerHTML;

        app.fruits = app.ingredients.fruits;
        app.legumes = app.ingredients.legumes;
        app.condiments = app.ingredients.condiments;
        app.produitsLaitiers = app.ingredients.produitsLaitiers;
        app.proteines = app.ingredients.proteines;


        for(const ingredient in app.ingredients){
            result = `Fruits : </br> </br> ${app.fruits.join(' , ')}</br> </br> </br>` 
            //console.log(result)
            result += `Legumes : </br> </br> ${app.legumes.join(' , ')} </br> </br> </br>`
            result += `Condiments : </br> </br> ${app.condiments.join(' , ')} </br> </br> </br>`
            result += `Produits laitiers : </br> </br> ${app.produitsLaitiers.join(' , ')} </br> </br> </br>`
            result += `Proteines : </br> </br> ${app.proteines.join(' , ')} </br> </br> </br>`
        }
        return result
    },

    pickerHandler: function(event){
        event.preventDefault();
        //diviser la chaine
        let split1 = app.fruits.split(',')
        console.log(`Split1 = ${split1}`)

        split1.forEach(word =>{
            let span = document.createElement("span");
            span.textContent = word + "";

            // Ajouter un gestionnaire d'événements
            span.addEventListener("click", function() {
                alert("Vous avez cliqué sur le mot : " + word);
            });

            // Ajouter le span au conteneur
            app.recipeContent.appendChild(span);
        })

        //voir sur quel div appliquer le transfère de span
    }
}

app.init();


