$(document).ready(function () {
    const characters = [
        {
            name:'Harry Potter',
            img:'./images/grifi.jpg'
        },
        {
            name:'Ronald Weasley',
            img:'./images/rony.jpg'
        },
        {
            name:'Hermione Granger',
            img:'./images/hermione.jpg'
        },
        {
            name:'Draco Malfoy',
            img:'./images/draco.jpg'
        },
        {
            name:'Neville Longbottom',
            img:'./images/neville.jpg'
        },
        {
            name:'Luna Lovegood',
            img:'./images/luna.jpg'
        },
        {
            name:'Fred e George Weasley',
            img:'./images/fred-george.jpg'
        },
        {
            name:'Alvo Dumbledore',
            img:'./images/dumbledore.jpg'
        },
        {
            name:'Minerva McGonagall',
            img:'./images/minerva.jpg'
        },
        {
            name:'Rubeus Hagrid',
            img:'./images/hagrid.jpg'
        },
        {
            name:'Severo Snape',
            img:'./images/snape.jpg'
        },
        {
            name:'Remus Lupin',
            img:'./images/lupin.jpg'
        },
        {
            name:'Tiago e Lilian Potter',
            img:'./images/tiago-lili.jpg'
        },
        ,
        {
            name:'Sirius Black',
            img:'./images/sirius.jpg'
        },
        {
            name:'Pedro Pettigrew',
            img:'./images/peter.jpg'
        },
        {
            name:'Dolores Umbridge',
            img:'./images/dolores.jpg'
        },
        {
            name:'Voldemort ',
            img:'./images/Voldemort.jpg'
        },
        {
            name:'Dobby ',
            img:'./images/dobby.jpg'
        },
        {
            name:'Gina Weasley',
            img:'./images/gina.jpg'
        },
        {
            name:'Murta',
            img:'./images/murta.jpg'
        }
    ]

    const personagensContainer = $('.personagens');

    characters.forEach( function(character) {
        const personagensCard = $('<div></div>', {'class':'personagens__card'});
        const personagensImgContainer = $('<div></div>', {'class':'personagens__card__img'});
        const personagensImg = $('<img />', {'src':character.img, 'alt':character.name });
        const personagensText = $('<h2></h2>', {'class':'text'});
        
        personagensText.text(character.name);
        
        personagensContainer.append(personagensCard);
        personagensImgContainer.append(personagensImg).appendTo(personagensCard);
        personagensText.appendTo(personagensCard);
    })
})