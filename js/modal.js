export {setInfoModal, hideModal};

const d = document;

function setInfoModal(modalContainerID, cardSelector){

    let cards = d.querySelectorAll(cardSelector),
    modalAttributes = [ 
        d.getElementById('modal-img'),
        d.getElementById('modal-title'), 
        d.getElementById('modal-description'), 
        d.getElementById('modal-mediatype'), 
        d.getElementById('imdb-link')
    ];

    d.addEventListener("click", async (e)=>{
        cards.forEach((card)=>{
            if(e.target === card || e.target.matches(`${card.classList} *`)){
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
                // MediaType
                modalAttributes[3].innerText = `${cardData[3]} (${cardData[4]})`;
                // IMDB link
                modalAttributes[4].href = `${cardData[5]}`
                // ...
                showModal();
            }
        })
    })

}

function showModal(){
    d.getElementById('modal-container').classList.remove('hidden');
}


function hideModal(btnID, modalContainerID){
    let modalBtn = d.getElementById(btnID),
    modalContainer = d.getElementById(modalContainerID);

    d.addEventListener("click",(e)=>{
        if(e.target === modalBtn || e.target.matches(`#${modalBtn.id} *`) || e.target === modalContainer){
            modalContainer.classList.add('hidden');
        }
    });
    d.addEventListener("keyup",(e)=>{if(e.key === "Escape"){modalContainer.classList.add('hidden');}})
}