const d = document;

const fetchMovies = async () => {
    console.log('fetching...')
    try {
        const res = await fetch('js/db.json')
        if (!res.ok) throw Error("Couldn't fetch the data for that resource")
        const data = await res.json()
        return { data, success: true }
    } catch (err) {
        console.log(`An error has ocurred: ${err.message}`)
        return { data: err.message, success: false }
    }
}   

async function renderCards(sectionID, templateID) {
    const { data, success } = await fetchMovies()

    let section = d.getElementById(sectionID)
    let template = d.getElementById(templateID).content
    let fragment = document.createDocumentFragment();
    if ( success ) {
        data.forEach((movie)=> {
            template.querySelector('figure').setAttribute('data-id',`${movie.id}`);
            template.querySelector('figure').setAttribute('data-title',`${movie.title}`);
            template.querySelector('figure').setAttribute('data-type',`${movie.type}`);
            template.querySelector('figure').setAttribute('data-description',`${movie.description}`);
            template.querySelector('figure').setAttribute('data-year',`${movie.year}`);
            template.querySelector('figure').setAttribute('data-imdb',`${movie.imdb}`);
            template.querySelector('img').setAttribute('src',`${movie.poster}`);
            let clone = d.importNode(template, true);
            fragment.appendChild(clone);
            section.appendChild(fragment);
        })
    }

    if ( !success ) {
        section.innerHTML = `
        <h1>¡No se han podido obtener las películas! / Razón: 
            <span style="color:yellow">${ data.message }</span>
        </h1>`
    }
}

async function searchFilter(inputID, cardSelector){

    let input = d.getElementById(inputID),
    cards = d.querySelectorAll(cardSelector);

    d.addEventListener("keyup",async (e)=>{

        if(e.target === input){
            
            cards.forEach((card)=>{
                let cardAttributes = [
                    card.getAttribute('data-id'), 
                    card.getAttribute('data-title'), 
                    card.getAttribute('data-description')
                ]
                if(cardAttributes[0].includes(input.value) || cardAttributes[1].includes(input.value)|| cardAttributes[2].includes(input.value) || input.value === ""){
                    card.classList.remove('hidden');
                }
                else{card.classList.add('hidden');}
            })
        }
    })
}


function setInfoModal(modalContainerID, cardSelector){

    let modalContainer = d.getElementById(modalContainerID),
    cards = d.querySelectorAll(cardSelector),
    modalAttributes = [ 
        d.getElementById('modal-img'),
        d.getElementById('modal-title'), 
        d.getElementById('modal-description'), 
        d.getElementById('modal-mediatype'), 
        d.getElementById('imdb-link')
    ];
    d.addEventListener("click", (e)=> {
        cards.forEach((card)=>{
            if(e.target === card || e.target.matches(`${card.classList} *`)) {
                let cardData = [
                card.querySelector('#movie-img').getAttribute('src'),
                card.getAttribute('data-title'),
                card.getAttribute('data-description'),
                card.getAttribute('data-type'),
                card.getAttribute('data-year'),
                card.getAttribute('data-imdb')
                ];
                // Setting...
                //IMG
                modalAttributes[0].setAttribute('src', `${cardData[0]}`);
                // Title
                modalAttributes[1].innerText = `${cardData[1]}`;
                // Description
                modalAttributes[2].innerText = `${cardData[2]}`;
                // MmediaType
                modalAttributes[3].innerText = `${cardData[3]} (${cardData[4]})`;
                // IMDB link
                modalAttributes[4].href = `${cardData[5]}`
                // Show
                modalContainer.classList.remove('hidden');
            }
        })
    })
}


function hideModal(btnID, modalContainerID){
    const modalBtn = d.getElementById(btnID),
    modalContainer = d.getElementById(modalContainerID);

    d.addEventListener("click",(e)=>{
        if(e.target === modalBtn || e.target.matches(`#${modalBtn.id} *`) || e.target === modalContainer){
            modalContainer.classList.add('hidden');
        }
    });
    d.addEventListener("keyup",(e)=>{if(e.key === "Escape"){modalContainer.classList.add('hidden');}})
}


d.addEventListener("DOMContentLoaded", async (e)=>{
    await renderCards('media-container', 'template-card');
    await searchFilter('search-input', '.movie-card');
    setInfoModal('modal-container', '.movie-card');
    hideModal('modal-btn', 'modal-container');
})