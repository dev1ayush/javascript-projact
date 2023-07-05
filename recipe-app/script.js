
getRandomMeal();

async function getRandomMeal(){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
     
    const randomMealData = await res.json();
    const randomMeal = randomMealData.meals[0];
    const mealId = randomMeal.idMeal;
    console.log(mealId);
    loadMeal(randomMeal);
    favBtnFun(mealId);
}


function loadMeal(meals) {

    const meal = document.createElement('div');
    meal.classList.add('food_of_the_day');

    document.getElementById('search_container').appendChild(meal)

    meal.innerHTML = `

    <h3>food of the day</h3>
    <img src="${meals.strMealThumb}" alt="">
    <p id="mealname">${meals.strMeal}</p>
    <i id="fav_btn" class="fa-regular fa-heart"></i>
    `
    document.getElementById('container').appendChild(meal);

    getMealById(meals);
}

async function getMealById() {
}

async function getMealBySearch(term) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    const resData = await res.json();
    const mealsList = resData.meals;
    if (mealsList != null) {
        loadSearchMeal(mealsList);
    } else {
        displayError();
    };
}


function loadSearchMeal(meals) {

    meals.forEach(meal => {
        const mealBox = document.createElement('div');
        mealBox.classList.add('search_result')
        mealBox.innerHTML = `

        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>${meal.strMeal}</p>
        
        `;
        document.getElementById('search_container').appendChild(mealBox);
   });
}

// function for display error on search
function displayError () {
    const mealNotFound = document.getElementById('h3');
    mealNotFound.innerHTML = "no result found :("
};

// event listners
// search button event
document.getElementById('search_btn').addEventListener('click', () => {
    const mealName = document.getElementById('search').value;
    if ( /[a-zA-Z]/.test(mealName) ) {
        getMealBySearch(mealName);
        document.getElementById('search_container').style.display = "block"
    } else return false;
 
});

//enter button event
document.getElementById('search').addEventListener('keypress', (e) => {
    
    if (e.code === 'Enter') {
        const mealName = document.getElementById('search').value;
        if (/[a-zA-Z]/.test(mealName)) {
            getMealBySearch(mealName);
            document.getElementById('search_container').style.display = "block"
        } else return false;
    } else return false;
});

//close button
document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('search_container').style.display = "none"; 
    // removing error message
    document.getElementById('h3').innerHTML = "";
    // romoving search result
    const searchResult = document.querySelectorAll('.search_result');
    searchResult.forEach(result => {
        result.remove();
    });
});

function favBtnFun(id) {
    const favBtn = document.querySelector('.fa-heart');
    favBtn.addEventListener('click', () => {
        favBtn.classList.toggle('fa-solid');
        // console.log(typeof favBtn.classList)
    });

}
    

