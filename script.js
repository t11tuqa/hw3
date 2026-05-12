const pizzaContainer = document.getElementById("pizza-container");


async function getRecipes(){

    try{

        // Fetch Data From API
        const response = await fetch("https://dummyjson.com/recipes");

        const data = await response.json();


        // Get First 8 Recipes
        const recipes = data.recipes.slice(0,8);


        // Loop Through Recipes
        recipes.forEach(recipe => {

            // Create Card
            const card = document.createElement("div");

            card.classList.add("card");


            // Card Content
            card.innerHTML = `

                <img src="${recipe.image}" alt="${recipe.name}">

                <div class="card-content">

                    <h3>${recipe.name}</h3>

                    <p>
                        Preparation Time: ${recipe.prepTimeMinutes} Minutes
                    </p>

                    <p class="ingredients">
                        <strong>Ingredients:</strong><br>
                        ${recipe.ingredients.slice(0,5).join(", ")}
                    </p>

                    <span class="tag">
                        ⭐ ${recipe.rating}
                    </span>

                </div>

            `;


            // Add Card To Page
            pizzaContainer.appendChild(card);

        });

    }

    catch(error){

        pizzaContainer.innerHTML = `
            <h2>Failed To Load Recipes</h2>
        `;

        console.log(error);

    }

}


// Run Function
getRecipes();