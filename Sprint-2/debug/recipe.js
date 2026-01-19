// Predict and explain first...

// inside a template (${recipe.ingredient}) literal doesn't  automatically transform the object nicely.


// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

//I separated the title/serves from the ingredients, because they are different types of data.
// (FOR..OF) Loops through each ingredient individually. Prints each on its own line automatically.Easier to extend later, e.g., formatting or adding extra info.
//Wrap in a function to make it reusable for any recipe.

function printRecipe(recipe){
console.log(`${recipe.title} serves ${recipe.serves}`)
console.log('ingredients:')

for(const ingredient of recipe.ingredients){
  console.log(ingredient)
}
}
const bruschetta = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

printRecipe(bruschetta);
