document.addEventListener('DOMContentLoaded', () => {
    const foodContainer = document.getElementById('foodContainer');

    const foods = [
        {
            picUrl: "bread.jpg",
            foodCategory: "breakfast",
            name: "Bread Pancakes",
            price: 15.99,
            description: "I'm baby milkshake wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed."
        },
        {
            picUrl: "Chips.jpg",
            foodCategory: "dinner",
            name: "Dinner Chips",
            price: 13.99,
            description: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats."
        },
        {
            picUrl: "ugali.jpg",
            foodCategory: "lunch",
            name: "Ugali Vegetables",
            price: 6.99,
            description: "Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
        },
        {
            picUrl: "Rice.jpg",
            foodCategory: "dinner",
            name: "Rice Chicken Delight",
            price: 20.99,
            description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch prism austin milkshake truffaut."
        },
    ];

    const allButton = document.getElementById("all");
    const breakfastButton = document.getElementById("breakfast");
    const lunchButton = document.getElementById("lunch");
    const dinnerButton = document.getElementById("dinner");

    function renderFoods (filteredFoods) {
        let htmlContent = '';
        filteredFoods.forEach(food => {
            htmlContent += `
                <div class="box">
                    <img id="foodImage" src="${food.picUrl}" width="210vh" style="border: 3px solid rgb(228, 145, 2); border-radius: 8px; height: 22vh;">
                </div>
                <div class="box" style="margin-left: 3vh;">
                    <b><p id="name">${food.name}</p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                    <span style="color: rgb(228, 145, 2);" id="price">${food.price}</span></b>
                    <hr width="260vh" style="border: 1.5px dotted rgb(151, 148, 148); position: absolute; border-radius: 3px; margin-top: 5px;">
                    <p id="description">${food.description}</p>
                </div>`;
        });
        foodContainer.innerHTML = htmlContent;
    };

    allButton.addEventListener('click', () => {
        renderFoods(foods);
    });

    breakfastButton.addEventListener('click', () => {
        const breakfastFoods = foods.filter(food => food.foodCategory.toLowerCase() === "breakfast");
        renderFoods(breakfastFoods);
    });

    lunchButton.addEventListener('click', () => {
        const lunchFoods = foods.filter(food => food.foodCategory.toLowerCase() === "lunch");
        renderFoods(lunchFoods);
    });

    dinnerButton.addEventListener('click', () => {
        const dinnerFoods = foods.filter(food => food.foodCategory.toLowerCase() === "dinner");
        renderFoods(dinnerFoods);
    });

    // Initially load all foods
    renderFoods(foods);
});
