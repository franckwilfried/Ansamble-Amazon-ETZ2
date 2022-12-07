//Animation boutn d'ouverture du menu

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener
('click', 
    function() {
        body.classList.toggle('open');
    }
)



document.querySelector(".nombre").value = localStorage.length;

// Mise à jour du nombre affiché sur le panier quand on clic sur ajouter pour mettre un element dans le panier

let refres = document.querySelectorAll(".ajouter")

refres.forEach( (ref) => ref.addEventListener('click', function(){
    window.location.reload(true);
}
));
