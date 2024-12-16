console.log ("O JavaScript está funcionando!");
const ingredientForm = document.getElementById('ingredient-form');
const ingredientInput = document.getElementById('ingredient-input');
const ingredientList = document.getElementById('ingredient-list2');
const recipeList = document.getElementById('recipe-list')

let ingredients = ["macarrão", "queijo", "frango"];

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

ingredientForm.addEventListener('submit', fetchRecipes);