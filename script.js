console.log ("O JavaScript está funcionando!");
const ingredientForm = document.getElementById('ingredient-form');
const ingredientInput = document.getElementById('ingredient-input');
const ingredientList = document.getElementById('ingredient-list2');
const recipeList = document.getElementById('recipe-list')
const fetchRecipesButton = document.getElementById('fetch-recipes-btn')

let ingredients = [];
let selectedIngredients = [];
let recipes = []

/*function renderIngredients () {
   ingredientList.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const li = document.createElement ('li');
        li.textContent = ingredient;
        li.innerHTML += ` <button onclick= "removeIngredient(${index})">Remover</button>`
        ingredientList.appendChild(li);
    });
}*/

function renderIngredients () {
   ingredientList.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const li = document.createElement ('li');
        li.textContent = ingredient;
        li.innerHTML += ` <button onclick= "removeIngredient(${index})">Remover</button>`
        ingredientList.appendChild(li);
    });
}


// Função para adicionar ingrediente
ingredientForm.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log("Formulário enviado!");

    const ingredient = ingredientInput.value.trim();
    console.log(`Ingrediente digitado: ${ingredient}`)

    if (ingredient && !ingredients.includes(ingredient)){
        console.log("Ingrediente válido e ainda não está na lista.")
        
        ingredients.push(ingredient);
        renderIngredients();
        ingredientInput.value = '';
    }
});

// Função para remover ingrediente
function removeIngredient(index){
    ingredients.splice(index, 1);
    renderIngredients();
}

// Função futura para buscar receitas
function fetchRecipes () {
    recipeList.innerHTML = '<p>Buscando receitas...</p>'
    setTimeout(() => {
        recipeList.innerHTML = `<div>
            <h3>Receita 1</h3>
            <p>Ingredientes: ${ingredients.join(',')}</p>
        </div>`;
    }, 1000);
}
 // Selecionar os checkboxes 
 const checkboxes = document.querySelectorAll ('#ingredient-list input[type= "checkbox"]');

 //Limpar o array de ingredientes selecionados 
 selectedIngredients = [];

 //Verifica quais checkboxes estão selecionados e armazena os ingredientes
 checkboxes.forEach((checkbox, index) =>{
    if(checkbox.checked) {
        selectedIngredients.push(checkbox.parentElement.textContent.trim());
    }
 });
 
 if (selectedIngredients.length > 0) {
    recipeList.innerHTML = `<div><h3>Receitas com: ${selectedIngredients.join(',')}</h3></div>`;
 } else {
    recipeList.innerHTML = '<p> Nenhuma receita encontrada. Selecione ingredientes para buscar. </p>';
 }
 console.log (`Ingredientes selecionados: ${selectedIngredients.join(',')}`);

 // Adicionar o evento de clique no botão de buscar receitas
 fetchRecipesButton.addEventListener('click', fetchRecipes);
 
 renderIngredients();

ingredientForm.addEventListener('submit', fetchRecipes);