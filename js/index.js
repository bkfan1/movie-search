import { renderCards } from "./cards.js";
import { searchFilter } from "./search.js";
import { appendCardInfoModal, hideModal, appendFormModal} from "./modal.js";
import { createMovie, deleteMovie } from "./crud.js";

const d = document;


d.addEventListener("DOMContentLoaded", async (e)=>{
    await renderCards('media-container', 'card__template');
    await searchFilter('search-input', '.movie-card');
    appendCardInfoModal();
    hideModal('modal-btn', 'modal-container');
    appendFormModal('add-btn','add-form__template');
    createMovie();
    deleteMovie();

})

