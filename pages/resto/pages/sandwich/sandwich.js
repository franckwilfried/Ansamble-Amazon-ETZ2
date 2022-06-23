sandwich_poulet.onclick = () => {
    const sandwich_poulet = {
        image:  "file:///C:/Users/PC/Desktop/site/pages/resto/pages/sandwich/images/sandwich.png" ,
        nom: 'sandwich_poulet',
        prix: 3.00,
        quantité: 1,
    }
    localStorage.setItem("sandwich_poulet" , JSON.stringify(sandwich_poulet))
}

sandwich_jambon.onclick = () => {
    const sandwich_jambon = {
        image:  "file:///C:/Users/PC/Desktop/site/pages/resto/pages/sandwich/images/sandwich.png" ,
        nom: 'sandwich_jambon',
        prix: 2.40,
        quantité: 1,
    }
    localStorage.setItem("sandwich_jambon" , JSON.stringify(sandwich_jambon))
}

sandwich_vege.onclick = () => {
    const sandwich_vege = {
        image:  "file:///C:/Users/PC/Desktop/site/pages/resto/pages/sandwich/images/sandwich.png" ,
        nom: 'sandwich_vege',
        prix: 2.50,
        quantité: 1,
    }
    localStorage.setItem("sandwich_vege" , JSON.stringify(sandwich_vege))
}