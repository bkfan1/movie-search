export {appendCardInfoModal, appendFormModal, createElement, destroySecondChild, hideModal, showModal};

const d = document;

function createElement(templateID){

    let element = d.importNode(d.getElementById(templateID).content, true);
    element = element.firstElementChild;
    return element;
}

function appendCardInfoModal(){

    const cards = d.querySelectorAll('.movie-card');

    let modalContainer = d.getElementById('modal-container');
    let modalWindow = createElement('modal-window__template');

    d.addEventListener("click", (e)=>{

        cards.forEach((card)=>{
            if(e.target === card || e.target == card.querySelector('.movie-card__img')){

                destroySecondChild();
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

function appendFormModal(btnID, form){

    let btn = d.getElementById(btnID);
    let modalContainer = d.getElementById('modal-container');

    d.addEventListener("click", (e)=>{
        if(e.target === btn){
            destroySecondChild();
            modalContainer.appendChild(form);
            showModal();
        }
    })
}


function showModal(){d.getElementById('modal-container').classList.remove('hidden');}


function hideModal(btnID, modalContainerID){
    let modalBtn = d.getElementById(btnID),
    modalContainer = d.getElementById(modalContainerID);

    d.addEventListener("click",(e)=>{
        if(e.target === modalBtn || e.target.matches(`#${modalBtn.id} *`) || e.target === modalContainer){
            destroySecondChild();
            modalContainer.classList.add('hidden');
        }
    });
    d.addEventListener("keyup",(e)=>{
        if(e.key === "Escape"){
            destroySecondChild();
            modalContainer.classList.add('hidden');
        }})
}


function destroySecondChild(){
    let modalContainer = d.getElementById('modal-container');

    // Si el contenedor de la modal tiene más de 2 hijos,
    // o el contenedor modal tiene un segundo hijo (distinto del botón)
    //...entonces elimina al segundo hijo..
    // Porque, de lo contrario, borraría el botón y se rompe el flujo
    // de la app.
    if(modalContainer.childElementCount >= 2){
        modalContainer.removeChild(modalContainer.lastElementChild);
    }
}