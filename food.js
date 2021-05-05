const inputFoodName = (foodName) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((response) => response.json())
    .then((data) => displayMealItem(data));
};

document.getElementById("search-button").addEventListener("click", () => {
  const inputMealName = document.getElementById("input-food").value;
  inputFoodName(inputMealName);
});

const displayMealItem = (mealInfo) => {
  const recipeBox = document.getElementById("recipe-box");
  const foodDetail = mealInfo.meals;
//   console.log(foodDetail);
  if (foodDetail) {
     foodDetail.forEach( foodElement => {
          const mealItemBox = document.createElement('div');
          mealItemBox.className = "mealTitle";
          const mealTitle = `
                 <img src= "${foodElement.strMealThumb}" />
                 <h3 class="food-name">${foodElement.strMeal}</h3>
          `;
          mealItemBox.innerHTML = mealTitle;
          recipeBox.appendChild(mealItemBox);
          mealItemBox.addEventListener('click', getMealRecipe);
         }); 
  }
  else {
       recipeBox.innerHTML = `<h1 class="no-food">Opps!there is no food item list by searching</h1>`;
  }

};

const getMealRecipe = (e) => {
     e.preventDefault();
}


