pomme.onclick = () => {
    const pomme = {
        image:  "../resto/pages/fruits/images/pomme.png" ,
        nom: 'Pomme',
        prix: 0.80,
        quantité: 1,
    }
 localStorage.setItem("Pomme" , JSON.stringify(pomme))
}

banane.onclick = () => {
    const banane = {
        image:  "../resto/pages/fruits/images/banane.png",
        nom: 'Banane',
        prix: 0.80,
        quantité: 1,
    }
 localStorage.setItem("Banane" , JSON.stringify(banane))
}

orange.onclick = () => {
    const orange = {
        image:  "../resto/pages/fruits/images/orange.png" ,
        nom: 'Orange',
        prix: 0.80,
        quantité: 1,
    }
 localStorage.setItem("Orange" , JSON.stringify(orange))
}

poire.onclick = () => {
    const poire = {
        image:  "../resto/pages/fruits/images/poire.png" ,
        nom: 'Poire',
        prix: 0.80,
        quantité: 1,
    }
 localStorage.setItem("Poire" , JSON.stringify(poire))
}