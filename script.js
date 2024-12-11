const ingredientForm = document.getElementById('ingredient-form');
const ingredientInput = document.getElementById('ingredient-input');
const ingredientList = document.getElementById('ingredient-list');

let ingredients = []

function renderIngredients () {
    ingredientList.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const li = document.createElement ('li');
        li.textContent = ingredient;
        li.innerHTML += ` <button onclick= "removeIngredient(${index})">Remover</button>`
    }
)
}