

// Cattura icona Navbar

let navIcon = document.querySelector('#navIcon');


// Condizione icona Navbar

let verifica = false;

// Evento Click Navbar

navIcon.addEventListener('click', ()=>{

    if(verifica == false){

        navIcon.classList.remove('fa-flip-horizontal');
        verifica = true;

    } else{

        navIcon.classList.add('fa-flip-horizontal');
        verifica = false;

    }



})

// Cattura Nabvar

let mainNavbar = document.querySelector('#mainNavbar');

// Cattura Loghi Navbar 

let logo1 = document.querySelector('logo1');

let logo2 = document.querySelector('logo2');

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

    mainNavbar.classList.add('background-primaryC');
    mainNavbar.classList.remove('bg-transparent');

    mainNavbar.style.height = '100px';

    logo2.classList.remove('d-none');
    logo1.classList.add('d-none');

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.height = '60px';

        logo2.classList.add('d-none');
        logo1.classList.remove('d-none');

    }

})

// Animazioni dei cerchi

let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

let confirm = false;

let dipendenti = [


    { name : 'Tizia', skills : ['Assistenza clienti', 'Vendita'] , url : './media/Persona1.jpg'},
    { name : 'Caia', skills : ['Magazzino', 'Allestimento'] , url : './media/Persona2.jpg'},
    { name : 'Sempronia', skills : ['Spedizioni', 'Ufficio Acquisti'] , url : './media/Persona3.jpg'},
    { name : 'Gonfaloniere', skills : ['Manager', 'Controllo Qualità'] , url : './media/Persona4.jpg'},

]

let cardWrapper = document.querySelector('#cardWrapper');

movedDivs.forEach((moved, i)=> {

    moved.style.backgroundImage = `url('${dipendenti[i].url}')`;

    moved.addEventListener('click', ()=>{

        cardWrapper.innerHTML = '';

        let div = document.createElement('div');

        div.classList.add('dipendenti-card');

        div.innerHTML = `

                <p class="h3">${dipendenti[i].name}</p>
                <p>${dipendenti[i].skills}</p>

        `;

        cardWrapper.appendChild(div);

        let card = document.querySelector('.dipendenti-card');

        card.style.backgroundImage = `url('${dipendenti[i].url}')`;

    })

})

opener.addEventListener('click', ()=> {

    if(confirm == false){

        confirm = true;

        movedDivs.forEach( (moved, i)=> {

            let angle = (360 * i) / movedDivs.length;

            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

            opener.innerHTML = `

            <i class="fa-solid fa-exclamation fa-5x"></i>
            
            `;


        })

    } else {

        confirm = false;

        cardWrapper.innerHTML = '';

        movedDivs.forEach( (moved, i)=> {

            let angle = (360 * i) / movedDivs.length;

            moved.style.transform = `rotate(0deg) translate(0px)`;

            opener.innerHTML = `

            <i class="fa-solid fa-question fa-5x"></i>
            
            `;


        })

    }

})