

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

fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {


    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardsWrapper');

    function setCategoryFilters(){

    let categories = data.map( (annuncio)=> annuncio.category );

    let uniqueCategories = [];

    categories.forEach( (category)=> {

        if( !uniqueCategories.includes(category)){

            uniqueCategories.push(category)

        }

    })

    uniqueCategories.forEach( (category)=> {

        let div = document.createElement('div');

        div.classList.add('form-check');

        div.innerHTML = `

            <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
            <label class="form-check-label" for="${category}">
            ${category}
            </label>
        
        `;

        categoryWrapper.appendChild(div);

    } )

    }

    setCategoryFilters();

    // Mostra Cards

    function showCards(array){

        cardsWrapper.innerHTML = '';

        array.sort( (a, b)=> Number(b.price - a.price));

        array.forEach( (element)=> {

            let div = document.createElement('div');

            div.classList.add('col-12', 'col-md-3', 'my-5');

            div.innerHTML = `

                            <div class="announcement-card">

                                    <p class="h3">${element.name}</p>
                                    <h3>${element.category}</h3>
                                       <h3>${element.price} €</h3>


                                   </div>
            
            `;

            cardsWrapper.appendChild(div);


        })

    }

    showCards(data);

    //Filtro Categoria

    function filterbyCategory(categoria){

        if(categoria != 'All') {

        let filtered = data.filter( (annuncio)=> annuncio.category == categoria );

        showCards(filtered);

        } else {

            showCards(data);

        }


    }

    // Radio Buttons

    let checkInputs = document.querySelectorAll('.form-check-input');

    checkInputs.forEach( (checkInput)=> {

        checkInput.addEventListener('click', ()=>{

            filterbyCategory(checkInput.id);

        })


    })

    // Range Input

    let inputPrice = document.querySelector('#inputPrice');

    let incrementNumber = document.querySelector('#incrementNumber');

    function setInputPrice(){

        let prices = data.map( (annuncio)=> Number(annuncio.price ));

        let maxPrice = Math.max(...prices);

        inputPrice.max = Math.ceil(maxPrice);

        inputPrice.valure = Math.ceil(maxPrice);

        incrementNumber.innerHTML = Math.ceil(maxPrice);



    }

    setInputPrice();

    // Funzione Filtro Prezzo

    function filterbyPrice(prezzo){

        let filtered = data.filter( (annuncio)=> annuncio.price <= prezzo );

        showCards(filtered);

    }

    inputPrice.addEventListener('input', ()=>{

        filterbyPrice(inputPrice.value);

        incrementNumber.innerHTML = inputPrice.value;

    })

    // Filtro per parola

    let wordInput = document.querySelector('#wordInput');

    function filterbyWord(nome){

        let filtered = data.filter ( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));

        showCards(filtered);

    }

    wordInput.addEventListener('input', ()=> {

        filterbyWord(wordInput.value);


    })

})