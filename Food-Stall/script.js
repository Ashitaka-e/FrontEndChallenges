const pizzaMenu = document.querySelector('.pizza_menu');
const burgerMenu = document.querySelector('.burger_menu');
const tacosMenu = document.querySelector('.tacos_menu');
const pizzaContainer = document.querySelector('.pizza_container');
const burgerContainer = document.querySelector('.burger_container');
const tacosContainer = document.querySelector('.tacos_container');

function activeClass(menu, container) {
    menu.addEventListener('click', () => {
        // Vérifie si l'élément a déjà la classe 'active'
        const isActive = menu.classList.contains('active');

        // Si l'élément n'est pas déjà actif, exécute le bloc suivant
        if (!isActive) {
            // Enlève la classe 'active' de tous les éléments du menu
            [pizzaMenu, burgerMenu, tacosMenu].forEach(item => item.classList.remove('active'));
            [pizzaContainer, burgerContainer, tacosContainer].forEach(item => item.classList.remove('active'));

            // Ajoute la classe 'active' à l'élément cliqué
            menu.classList.add('active');
            container.classList.add('active');
        }
        // Aucune action n'est nécessaire si l'élément est déjà actif
    });
}

activeClass(pizzaMenu, pizzaContainer);
activeClass(burgerMenu, burgerContainer);
activeClass(tacosMenu, tacosContainer);
