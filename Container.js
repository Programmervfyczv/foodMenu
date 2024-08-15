document.addEventListener('DOMContentLoaded', () => {

    const food = [
        {
            picUrl: "bread.jpg",
            name: "Bread Pancakes",
            price: 15.99,
            description: "I' m baby milkshk wolf bitters live-edge blue boottle, hammock freegan copper mug whatever cold-pressed."
        },
        {
            picUrl: "Chips.jpg",
            name: "Dinner Chips",
            price: 13.99,
            description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujanga helvetica man braid jianbing. marfa thundercats."
        },
        {
            picUrl: "ugali.jpg",
            name: "Ugali Vegetables",
            price: 6.99,
            description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
        },
        {
            picUrl: "Rice.jpg",
            name: "Rice Chicken Delight",
            price: 20.99,
            description: "Shabby chic keffyeh neutra snackwave pork belly shoreditch prism austin milkshk truffaut."
        },
    ]

    const categoryButtons = document.querySelectorAll('.category-btn');
    const items = document.querySelectorAll('.item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

         
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

        
            items.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                }
                // if (category === 'breakfast' || item.getAttribute('data-category') === category) {
                //     item.textContent = 'block';
                // }
                 else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
