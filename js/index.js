const d = document;

function renderCards(sectionID, templateID){

    let section = d.getElementById(sectionID),
    template = d.getElementById(templateID).content,
    fragment = document.createDocumentFragment();

    fetch('js/db.json')
    .then((res)=>{return res.ok ? res.json() : Promise.reject(res);})
    
    .then((json)=>{

        json.forEach((movie)=>{
        
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
    })

    // Adding the functionality to the searcher and the modal window
    .then(()=>{
        searchFilter('search-input', '.movie-card');
        setInfoModal('modal-container', '.movie-card');
        hideModal('modal-btn', 'modal-container');
    })

    .catch((err)=>{
        // console.log(err);
        section.innerHTML = `<h1>¡No se han podido obtener las películas! / Razón: <span style="color:yellow">${err.statusText} ${err.status}</span></h1>`
    })

}


function searchFilter(inputID, cardSelector){

    let input = d.getElementById(inputID),
    cards = d.querySelectorAll(cardSelector);

    d.addEventListener("keyup", (e)=>{

        if(e.target === input){
            
            cards.forEach((card)=>{
                cardAttributes = [card.getAttribute('data-id'),card.getAttribute('data-title'), card.getAttribute('data-description')];
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
    modalAttributes = [d.getElementById('modal-img'),d.getElementById('modal-title'), d.getElementById('modal-description'), d.getElementById('modal-mediatype'), d.getElementById('imdb-link')];

    d.addEventListener("click", (e)=>{

        cards.forEach((card)=>{
            if(e.target === card || e.target.matches(`${card.classList} *`)){

                let cardData = [card.querySelector('#movie-img').getAttribute('src'),
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

                modalContainer.classList.remove('hidden');
            }
        })
    })
}


function hideModal(btnID, modalContainerID){

    [modalBtn, modalContainer] = [d.getElementById(btnID), d.getElementById(modalContainerID)];

    d.addEventListener("click",(e)=>{

        if(e.target === modalBtn || e.target.matches(`#${modalBtn.id} *`) || e.target === modalContainer){
            modalContainer.classList.add('hidden');
        }
    });

    d.addEventListener("keyup",(e)=>{if(e.key === "Escape"){modalContainer.classList.add('hidden');}})
}


d.addEventListener("DOMContentLoaded", (e)=>{
    renderCards('media-container', 'template-card');
})
