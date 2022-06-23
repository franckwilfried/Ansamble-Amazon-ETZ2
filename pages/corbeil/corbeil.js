/******* On ecrit une boucle pour récupérer chaque produit du local storage. Et pour chaque produit , on réalise une ligne dans le tableau */
for (var i = 0; i < localStorage.length; i++) {
    let prod = localStorage.getItem(localStorage.key(i));
    prod = JSON.parse(prod);
    
    const para = ' ' ;
    const card =  '<tr> <td><div><img src=" ' + prod.image + ' " alt=""> </div> <div> <p class="name"> ' + prod.nom + ' </p> </div></td> <td><input type="number" min="1" step="1" class="qty" value="1"> <a href="" class="sup"> Retirer </a> </td> <td class="prix">' + prod.prix + ' € </td> <td class="soustotal"> ' + prod.prix + ' € </td> </tr>';

    document.querySelector(".vide").innerHTML = para ;
    document.querySelector("#cart-tablebody").innerHTML += card  ;
}


/**** Dans cette section , on selectionne toute les classe soustotal pour afficher le prix total de base du pannier. Lorsquue chaque element est de quantité 1 */

let priceAll = document.querySelectorAll(".soustotal");
var somme = 0;
priceAll.forEach( function(price) { 
    somme =  somme + parseFloat( price.innerText ) ; 
    somme = somme*100;          //////////////////////// Gestion des deecimal
        somme = Math.round(somme);
        somme = somme/100;
} );
document.querySelector(".subtotal").innerText = somme ;

/** On associe un evennement click qui calcul le sous total de chaque produit a partir de la ligne du produit qi a été crée dans le tableau grace au données du localStorage. Ensuite on affiche ce prix*** */

let btnAll = document.querySelectorAll(".qty");

btnAll.forEach((btn) => btn.addEventListener('click', calculAffiche) );



function calculAffiche (){
    let prix = parseFloat( this.parentElement.nextElementSibling.innerText );
    let qty = parseInt( this.nextElementSibling.previousElementSibling.value );
    let subt = prix*qty ;
    subt = subt*100;
    subt = Math.round(subt);
    subt = subt/100;
    
    this.parentElement.nextElementSibling.nextElementSibling.innerText = subt + " €" ;


    /*** Une fois dans la fonction , on actualise le sous total du pannier pour les nouvelle quantité du produit selectionné ****/

    let priceAll = document.querySelectorAll(".soustotal");
    var somme = 0;
    priceAll.forEach( function(price) {
        somme = somme + parseFloat( price.innerText ) ;
        somme = somme*100;          //////////////////////// Gestion des deecimal
        somme = Math.round(somme);
        somme = somme/100;
    } 
    );

    document.querySelector(".subtotal").innerText = somme ;

}
/*****************************************            Supprimer un produit                ********************************************************/

let delate = document.querySelectorAll(".sup");

delate.forEach( ( del) => del.addEventListener('click' , suppression) );

function suppression(){

    let name =  this.parentElement.previousElementSibling.querySelector(".name").innerText;
    
    localStorage.removeItem( name );
};



