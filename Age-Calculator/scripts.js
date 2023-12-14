        // Fonction pour valider un champ d'entrée
        const validateInput = (input, isValidFn, errorMessageElement, labelElement, errorMessage) => {
          // Vérifie la validité du champ en utilisant la fonction de validation spécifiée
          const isValid = isValidFn(input.value);

          // Ajoute ou retire la classe d'erreur en fonction de la validité
          input.classList.toggle('error-input', !isValid);

          // Ajoute ou retire la classe d'erreur au label en fonction de la validité
          labelElement.classList.toggle('error-label', !isValid);

          // Affiche le message d'erreur spécifique
          errorMessageElement.textContent = isValid ? '' : errorMessage;

          // Renvoie la validité du champ
          return isValid;
      };

      // Fonction de validation pour l'année (format YYYY)
      const isValidYear = value => /^\d{4}$/.test(value);

      // Fonction de validation pour le jour (1-31)
      const isValidDate = value => /^\d{1,2}$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 31;

      // Fonction de validation pour le mois (1-12)
      const isValidMonth = value => /^\d{1,2}$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 12;

      // Fonction principale de validation et de calcul d'âge
      const validateInputs = () => {
          // Tableau d'objets décrivant chaque champ d'entrée
          const inputs = [
              { id: 'birth-year', isValidFn: isValidYear, errorMessageId: 'error-year', labelId: 'label-year', errorMessage: 'Must be a valid year' },
              { id: 'birth-date', isValidFn: isValidDate, errorMessageId: 'error-date', labelId: 'label-date', errorMessage: 'Must be a valid day' },
              { id: 'birth-month', isValidFn: isValidMonth, errorMessageId: 'error-month', labelId: 'label-month', errorMessage: 'Must be a valid month' }
          ];

          // Boolean pour vérifier la validité de tous les champs
          let isValid = true;

          // Boucle à travers chaque champ d'entrée
          inputs.forEach(({ id, isValidFn, errorMessageId, labelId, errorMessage }) => {
              // Récupère l'élément d'entrée, le message d'erreur et le label associé
              const input = document.getElementById(id);
              const errorMessageElement = document.getElementById(errorMessageId);
              const labelElement = document.getElementById(labelId);

              // Utilise la fonction de validation pour vérifier chaque champ
              isValid = validateInput(input, isValidFn, errorMessageElement, labelElement, errorMessage) && isValid;
          });

          // Si tous les champs sont valides, calculer l'âge
          if (isValid) {
              calculerAge();
          }
      };

      // Fonction de calcul d'âge
      const calculerAge = () => {
        const anneeNaissance = document.getElementById("birth-year").value;
        const moisNaissance = document.getElementById("birth-month").value;
        const jourNaissance = document.getElementById("birth-date").value;
      
        const anneeActuelle = new Date().getFullYear();
        const moisActuel = new Date().getMonth();
        const jourActuel = new Date().getDate();
      
        let ageEnAnnees = anneeActuelle - anneeNaissance;
      
        // Calculer le nombre de mois
        let nombreMois = (moisActuel + 13 - moisNaissance) % 12;
      
        // Créer une nouvelle date avec le même mois et le jour de naissance
        const dateNaissance = new Date(anneeActuelle, moisActuel, jourNaissance);
      
        // Calculer le nombre de jours
        let differenceEnJours = Math.floor((new Date() - dateNaissance) / (1000 * 60 * 60 * 24));
      
        // Si le nombre de jours est négatif, ajuster le calcul
        if (differenceEnJours < 0) {
          // Retirer un mois
          nombreMois--;
      
          // Calculer le nombre de jours en fonction du mois précédent
          const moisPrecedent = (moisActuel + 12 - 1) % 12; // Soustraire 1 pour obtenir le mois précédent
          const joursDansLeMoisPrecedent = new Date(anneeActuelle, moisPrecedent + 1, 0).getDate(); // Jour 0 donne le dernier jour du mois précédent
          differenceEnJours += joursDansLeMoisPrecedent;
        }
      
        // Afficher les résultats dans le span
        document.getElementById("resultatAnne").textContent = ageEnAnnees;
        document.getElementById("resultatMois").textContent = nombreMois;
        document.getElementById("resultatJours").textContent = differenceEnJours;
      };