const inputFoodName = (foodName) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((response) => response.json())
    .then((data) => displayMealItem(data.meals));
};

document.getElementById("search-button").addEventListener("click", () => {
  const inputMealName = document.getElementById("input-food").value;
  inputFoodName(inputMealName);
});

const displayMealItem = (mealInfo) => {
  const recipeBox = document.getElementById("recipe-box");
  console.log(mealInfo);
  if (mealInfo) {
     mealInfo.forEach( foodElement => {
          const mealItemBox = document.createElement('div');
          mealItemBox.className = "mealTitle";
          const foodInfo = `
            <div onclick="displayDetails('${food.idMeal}')">
            <img src= "${foodElement.strMealThumb}" />
            <h3 class="food-name">${foodElement.strMeal}</h3>
            </div>
          `;
          // const foodInfo =`
          // <img src= "${foodElement.strMealThumb}" />
          // <h3 class="food-name">${foodElement.strMeal}</h3>
          // `
          mealItemBox.innerHTML = foodInfo;
          recipeBox.appendChild(mealItemBox);
         }); 
  }
  else {
       recipeBox.innerHTML = `<h1 class="no-food">Opps!there is no food item list by searching</h1>`;
  }

};

const displayDetails = mealId => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
      .then(res => res.json())
      .then(data => {
          renderFoodInfo(data.meals[0]);
      });
};

const renderFoodInfo = food => {
      const foodDivDetails = document.getElementById('food-details');
      foodDivDetails.innerHTML = `
      <img src="${food.strMealThumb}" alt="">
      
      `
}

