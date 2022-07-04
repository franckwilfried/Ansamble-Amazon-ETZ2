sandwich_poulet.onclick = () => {
    const sandwich_poulet = {
        image:  "../resto/pages/sandwich/images/sandwich.png" ,
        nom: 'Sandwich au poulet',
        prix: 3.00,
        quantité: 1,
    }
    localStorage.setItem("Sandwich au poulet" , JSON.stringify(sandwich_poulet))
}

sandwich_jambon.onclick = () => {
    const sandwich_jambon = {
        image:  "../resto/pages/sandwich/images/sandwich.png" ,
        nom: 'Sandwich au jambon',
        prix: 2.40,
        quantité: 1,
    }
    localStorage.setItem("Sandwich au jambon" , JSON.stringify(sandwich_jambon))
}

sandwich_vege.onclick = () => {
    const sandwich_vege = {
        image:  "../resto/pages/sandwich/images/sandwich.png" ,
        nom: 'Sandwich végétarien',
        prix: 2.50,
        quantité: 1,
    }
    localStorage.setItem("Sandwich végétarien" , JSON.stringify(sandwich_vege))
}