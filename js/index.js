import { renderCards } from "./cards.js";
import { searchFilter } from "./search.js";
import { setInfoModal, hideModal } from "./modal.js";

const d = document;

d.addEventListener("DOMContentLoaded", async (e)=>{
    await renderCards('media-container', 'template-card');
    await searchFilter('search-input', '.movie-card');
    setInfoModal('modal-container', '.movie-card');
    hideModal('modal-btn', 'modal-container');
})