

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

// Chiamata Asincrona

function createInterval(finalNumber, element){

    let counter = 0;

    let interval = setInterval( ()=>{

        if(counter < finalNumber){

            counter++
            element.innerHTML = counter; 

        } else{

            clearInterval(interval);

        }


    }, 1)
}

createInterval();

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

createInterval(1304, firstSpan); 
createInterval(403, secondSpan); 
createInterval(120, thirdSpan); 

// Osservatore 

let h2Test = document.querySelector('#h2Test');

// Variabile Incremento

let check = true;

let osservatore = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && check == true){

                createInterval(1304, firstSpan); 
                createInterval(403, secondSpan); 
                createInterval(120, thirdSpan); 

                check = false;

            }

        })


    }
)

