console.log("O JavaScript está funcionando!");
const ingredientForm = document.getElementById('ingredient-form');
const ingredientInput = document.getElementById('ingredient-input');
const ingredientList = document.getElementById('ingredient-list2');
const ingredientListBaixo = document.getElementById('ingredient-list');
const recipeList = document.getElementById('recipe-list')
const fetchRecipesButton = document.getElementById('fetch-recipes-btn')

const recipes = [
    { name: "Macarrão com Frango", ingredients: ["Macarrão", "Frango"] },
    { name: "Arroz com Feijão", ingredients: ["Arroz", "Feijão"] },
    { name: "Omelete", ingredients: ["Ovos"] },
    { name: "Frango Grelhado", ingredients: ["Frango"] },
    { name: "Arroz de Forno", ingredients: ["Arroz", "Frango"] }
];

let ingredients = [];
let selectedIngredients = [];

// Função para renderizar a lista de ingredientes
function renderIngredients() {
    ingredientList.innerHTML = '';
    ingredients.forEach((ingredient, index) => {
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        li.textContent = ingredient;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function(){
            removeIngredient(index);
        }
        li.appendChild(removeButton);

        ingredientList.appendChild(li);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;

        li.appendChild(checkbox);
        li.innerHTML += ` <button onclick= "removeIngredient(${index})">Remover</button>`
        
        li2.innerHTML += `${ingredient}<input type="checkbox" name="${ingredient}" id="${ingredient}">`;

        /*li2.innerHTML += `${li.textContent}<input type="checkbox" name="${ingredient}" id="${ingredient}">`;
        ingredientListBaixo.appendChild(li2);*/
        //ingredientListBaixo.appendChild(li);
    });
}



// Função para adicionar ingrediente
ingredientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const ingredient = ingredientInput.value.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
        ingredients.push(ingredient);
        renderIngredients();
        ingredientInput.value = '';
    }
});

// Função para remover ingrediente
function removeIngredient(index) {
    ingredients.splice(index, 1);
    renderIngredients();
}

function getSelectedIngredients() {
    selectedIngredients = [];
    const checkboxes = document.querySelectorAll('#ingredient-list input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedIngredients.push(checkbox.parentElement.textContent.trim());
        }
    });
    console.log(`Ingredientes selecionados: ${selectedIngredients.join(', ')}`);
}
function fetchRecipes() {
    recipeList.innerHTML = '<p>Buscando receitas...</p>';
    setTimeout(() => {
        if (selectedIngredients.length > 0) {
            const filteredRecipes = recipes.filter(recipe =>
                selectedIngredients.some(ingredient => recipe.ingredients.includes(ingredient))
            );

            if (filteredRecipes.length > 0) {
                recipeList.innerHTML = filteredRecipes.map(recipe =>
                    `<div>
                        <h3>${recipe.name}</h3>
                        <p>Ingredientes: ${recipe.ingredients.join(', ')}</p>
                    </div>`
                ).join('');
            } else {
                recipeList.innerHTML = '<p>Nenhuma receita encontrada com os ingredientes selecionados.</p>';
            }
        } else {
            recipeList.innerHTML = '<p>Selecione ingredientes para buscar receitas.</p>';
        }
    }, 1000);
}

fetchRecipesButton.addEventListener('click', () => {
    getSelectedIngredients();
    fetchRecipes();
});

// Chama a função para renderizar a lista de ingredientes ao iniciar
renderIngredients();



