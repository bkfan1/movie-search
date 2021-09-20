import { renderCards } from "./cards.js";
import { searchFilter } from "./search.js";
import { setInfoModal, hideModal } from "./modal.js";

const d = document;

function showForm(){

    let template = d.getElementById('add-form__template').content;
    let btn = d.getElementById('add-btn');
    let body = d.querySelector('body');

    d.addEventListener("click", (e)=>{
        if(e.target === btn){
            let clone = d.importNode(template, true);
            body.appendChild(clone);
        }
    })
}


d.addEventListener("DOMContentLoaded", async (e)=>{
    await renderCards('media-container', 'card__template');
    await searchFilter('search-input', '.movie-card');
    setInfoModal();
    hideModal('modal-btn', 'modal-container');
    //showForm();
})

