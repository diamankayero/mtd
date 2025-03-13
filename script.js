document.addEventListener('DOMContentLoaded', function() {
    // Lorsque le détail est ouvert, forcer MathJax à mettre à jour le contenu
    document.querySelectorAll('.exercise-box details').forEach((details) => {
        details.addEventListener('toggle', function() {
            if (details.open) {
                // Forcer le rendu des formules de MathJax lorsque la correction est ouverte
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            }
        });
    });

    // Exemple d'interactivité, comme les boutons ou d'autres éléments dynamiques que tu pourrais vouloir ajouter
    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', function() {
            const correction = this.nextElementSibling;
            if (correction.style.display === "none") {
                correction.style.display = "block";
                // Forcer MathJax à traiter le contenu après l'affichage
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            } else {
                correction.style.display = "none";
            }
        });
    });

    // Autres comportements ou scripts personnalisés à ajouter ici
});
