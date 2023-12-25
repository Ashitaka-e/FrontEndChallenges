const navLinks = document.getElementById("navLinks");
const body = document.body;
function showMenu() {
  navLinks.style.right = "0";
  navLinks.style.background = "var(--Almost-White)"; // Fond sombre avec une opacité de 0.5
  body.style.overflow = "hidden"; // Empêche le défilement de la page lorsque le menu est ouvert
  body.style.background = "rgba(0, 0, 0, 0.5)"; // Fond sombre avec une opacité de 0.5
}
function hideMenu() {
  navLinks.style.right = "-60%"
  navLinks.style.background = "transparent";
  body.style.overflow = "visible"; // Réactive le défilement lorsque le menu est fermé
  body.style.background = "transparent"; // Fond transparent lorsque le menu est caché
}




// DropDown Toogle

document.addEventListener('DOMContentLoaded', () => {
  // Sélection de tous les éléments .dropdown-toggle et .arrow-icon
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const arrowIcons = document.querySelectorAll('.arrow-icon');

  // Ajout d'événements pour chaque .dropdown-toggle
  dropdownToggles.forEach((toggle, index) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDropdown(index); // Appel de la fonction pour basculer le menu déroulant
    });
  });

  // Ajout d'événements pour chaque .arrow-icon
  arrowIcons.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      toggleDropdown(index); // Appel de la fonction pour basculer le menu déroulant
    });
  });

  // Fonction pour basculer l'état du menu déroulant en fonction de l'index
  const toggleDropdown = (index) => {
    const parentLi = dropdownToggles[index].closest('li');
    parentLi.classList.toggle('active');
    updateArrowIcon(index, parentLi.classList.contains('active'));
  };

  // Fonction pour mettre à jour l'icône en fonction de l'état du menu et de l'index
  const updateArrowIcon = (index, isActive) => {
    const arrowSrc = `./images/icon-arrow-${isActive ? 'up' : 'down'}.svg`;
    arrowIcons[index].innerHTML = `<img src="${arrowSrc}" alt="Arrow">`;
  };
});