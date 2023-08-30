/******* On ecrit une boucle pour récupérer chaque produit du local storage. Et pour chaque produit , on réalise une ligne dans le tableau */
for (var i = 0; i < localStorage.length; i++) {
    let prod = localStorage.getItem(localStorage.key(i));
    prod = JSON.parse(prod);
    
    const para = ' ' ;
    const card =  '<tr> <td><div><img src=" ' + prod.image + ' " alt=""> </div> <div> <p class="name"> ' + prod.nom + ' </p> </div></td> <td><input type="number" min="1" step="1" class="qty" value="'+prod.quantité+'" > <a href="" class="sup"> Retirer </a> </td> <td class="prix">' + prod.prix + ' € </td> <td class="soustotal"> ' + ( ( Math.round(prod.prix*prod.quantité*100) ) /100)+ ' € </td> </tr>';

    document.querySelector(".vide").innerHTML = para ;
    document.querySelector("#cart-tablebody").innerHTML += card  ;
}


/**** Dans cette section , on selectionne toute les classe soustotal pour afficher le prix total de base du pannier. Lorsquue chaque element est de quantité 1 */

let priceAll = document.querySelectorAll(".soustotal");
var somme = 0;
priceAll.forEach( function(price) { 
    somme =  somme + parseFloat( price.innerText ) ; 
    somme = somme*100;          //////////////////////// Gestion des décimaux
        somme = Math.round(somme);
        somme = somme/100;
} );
document.querySelector(".subtotal").innerText = somme ;

/** On associe un evennement click qui calcul le sous total de chaque produit a partir de la ligne du produit qi a été crée dans le tableau grace au données du localStorage. Ensuite on affiche ce prix*** */

let btnAll = document.querySelectorAll(".qty");
const arr = Array.from(btnAll) /// On transforme bntAll qui est de type Nodelist en un type tableau c'est à dire array afin de recupérer 'indexe de chaque element pour modifier l'objet du local storage correspondant

for (const [index, div] of arr.entries()) {
  console.log(index, div.value)
  div.addEventListener('click', calculAffiche);
  div.addEventListener('mouseout', calculAffiche)  ///Plus adapté pour smartphone ;

    /// La fonction est inclus dans la boucle pour que l'index soit une variable reconnu dans la fonction
  
  function calculAffiche ()
    {
        let prix = parseFloat( this.parentElement.nextElementSibling.innerText );
        let qty = parseInt( this.nextElementSibling.previousElementSibling.value );

        let produit = localStorage.getItem(localStorage.key(index) ) ;
        produit = JSON.parse(produit);
        console.log(produit)
        produit.quantité = qty;
        localStorage.setItem(produit.nom , JSON.stringify(produit))
    
        let subt = prix*qty ;
        subt = subt*100;
        subt = Math.round(subt);
        subt = subt/100;
        
        this.parentElement.nextElementSibling.nextElementSibling.innerText = subt + " €" ;


        /*** Une fois dans la fonction , on actualise le sous total du pannier pour les nouvelle quantité du produit selectionné ****/

        let priceAll = document.querySelectorAll(".soustotal");
        var somme = 0;
        priceAll.forEach( function(price) 
        {
            somme = somme + parseFloat( price.innerText ) ;
            somme = somme*100;          //////////////////////// Gestion des décimal
            somme = Math.round(somme);
            somme = somme/100;
        } 
        );

        document.querySelector(".subtotal").innerText = somme ;
    }

}



/*****************************************            Supprimer un produit                ********************************************************/

let delate = document.querySelectorAll(".sup");

delate.forEach( ( del) => del.addEventListener('click' , suppression) );

function suppression(){

    let name =  this.parentElement.previousElementSibling.querySelector(".name").innerText;
    
    localStorage.removeItem( name );
};



