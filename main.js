document.addEventListener('DOMContentLoaded', () => {
    const foodContainer = document.getElementById('foodContainer');
    
    const foods = [
        {
            picUrl: "bread.jpg",
            foodCategory: "breakFast",
            name: "Bread Pancakes",
            price: 15.99,
            description: "I' m baby milkshk wolf bitters live-edge blue boottle, hammock freegan copper mug whatever cold-pressed."
        },
        {
            picUrl: "Chips.jpg",
            foodCategory: "dinner",
            name: "Dinner Chips",
            price: 13.99,
            description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujanga helvetica man braid jianbing. marfa thundercats."
        },
        {
            picUrl: "ugali.jpg",
            name: "Ugali Vegetables",
            foodCategory: "lunch",
            price: 6.99,
            description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
        },
        {
            picUrl: "Rice.jpg",
            name: "Rice Chicken Delight",
            foodCategory: "dinner",
            price: 20.99,
            description: "Shabby chic keffyeh neutra snackwave pork belly shoreditch prism austin milkshk truffaut."
        },
    ]

    let allButton = document.getElementById("all")
    let breakFastButton = document.getElementById("breakfast")
    let lunch = document.getElementById("lunch")
    let dinner = document.getElementById("dinner")

    let htmlContent = "";


    allButton.addEventListener('click', function() {
        if(allButton.innerHTML == "all"){
            foods.map((foods) => {
                return {
                    ...foods
                }
            }) 
        }

        foods.forEach(function(food) {
            htmlContent += `<div class="box">
                            <img id="foodImage" src="${food.picUrl}" width="210vh" style="border: 3px solid rgb(228, 145, 2);
                            border-radius: 8px; height: 22vh;">
                        </div>
                        <div class="box" style="margin-left: 3vh;">
                            <b> <p id="name">${food.name}</p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
                            <span style="color: rgb(228, 145, 2);" id="price"> ${food.price}</span></b>
                            <hr width="260vh" style="border: 1.5px dotted rgb(151, 148, 148); position: absolute; border-radius: 3px;
                            margin-top: 5px;">
                            <p id="descprition">${food.description}</p>
                        </div>`
        })
        foodContainer.innerHTML = htmlContent;
    });

    breakFastButton.addEventListener('click', function() {
        if(breakFastButton.innerHTML == "breakfast"){
            foods.filter(food => food.foodCategory == "breakfast").forEach(function(food) {
                htmlContent += `<div class="box">
                                <img id="foodImage" src="${food.picUrl}" width="210vh" style="border: 3px solid rgb(228, 145, 2);
                                border-radius: 8px; height: 22vh;">
                            </div>
                            <div class="box" style="margin-left: 3vh;">
                                <b> <p id="name">${food.name}</p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
                                <span style="color: rgb(228, 145, 2);" id="price"> ${food.price}</span></b>
                                <hr width="260vh" style="border: 1.5px dotted rgb(151, 148, 148); position: absolute; border-radius: 3px;
                                margin-top: 5px;">
                                <p id="descprition">${food.description}</p>
                            </div>`
            })
        }
        
        foodContainer.innerHTML = htmlContent;
    });

    lunch.addEventListener('click', function() {
        if(lunch.innerHTML == "lunch"){
            foods.filter((food) => food.foodCategory == "lunch") 
        }
        foods.forEach(function(food) {
            htmlContent += `<div class="box">
                            <img id="foodImage" src="${food.picUrl}" width="210vh" style="border: 3px solid rgb(228, 145, 2);
                            border-radius: 8px; height: 22vh;">
                        </div>
                        <div class="box" style="margin-left: 3vh;">
                            <b> <p id="name">${food.name}</p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
                            <span style="color: rgb(228, 145, 2);" id="price"> ${food.price}</span></b>
                            <hr width="260vh" style="border: 1.5px dotted rgb(151, 148, 148); position: absolute; border-radius: 3px;
                            margin-top: 5px;">
                            <p id="descprition">${food.description}</p>
                        </div>`
        })
        foodContainer.innerHTML = htmlContent;
    });

    dinner.addEventListener('click', function() {
        if(dinner.innerHTML == "dinner"){
            foods.filter((food) => food.foodCategory == "dinner") 
        }
        foods.forEach(function(food) {
            htmlContent += `<div class="box">
                            <img id="foodImage" src="${food.picUrl}" width="210vh" style="border: 3px solid rgb(228, 145, 2);
                            border-radius: 8px; height: 22vh;">
                        </div>
                        <div class="box" style="margin-left: 3vh;">
                            <b> <p id="name">${food.name}</p>&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; 
                            <span style="color: rgb(228, 145, 2);" id="price"> ${food.price}</span></b>
                            <hr width="260vh" style="border: 1.5px dotted rgb(151, 148, 148); position: absolute; border-radius: 3px;
                            margin-top: 5px;">
                            <p id="descprition">${food.description}</p>
                        </div>`
        })
        foodContainer.innerHTML = htmlContent;
    });

});
