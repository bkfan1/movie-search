export {setInfoModal, hideModal};

const d = document;

function setInfoModal(){

    let modalContainer = d.getElementById('modal-container');
    let modalWindow = d.importNode(d.getElementById('modal-window__template').content, true);
    let cards = d.querySelectorAll('.movie-card');


    d.addEventListener("click", (e)=>{

        cards.forEach((card)=>{
            if(e.target === card || e.target == card.querySelector('.movie-card__img')){

                modalContainer.appendChild(modalWindow);

                d.getElementById('modal-img').setAttribute('src', `${card.getAttribute('data-poster')}`);
                d.getElementById('modal-title').textContent = `${card.getAttribute('data-title')}`;
                d.getElementById('modal-mediatype').textContent = `${card.getAttribute('data-type')} - ${card.getAttribute('data-year')}`;
                d.getElementById('modal-description').textContent = `${card.getAttribute('data-description')}`;
                d.getElementById('imdb-link').href = `${card.getAttribute('data-imdb')}`;     
                
                showModal();
            }
        })
    
    })

}

function showModal(){d.getElementById('modal-container').classList.remove('hidden');}


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