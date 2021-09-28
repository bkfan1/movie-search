export {renderCards};
import { fetchMovies } from "./fetch.js";

const d = document;

async function renderCards(sectionID, templateID) {

    const { data, success } = await fetchMovies()

    let section = d.getElementById(sectionID),
    template = d.getElementById(templateID).content,
    fragment = document.createDocumentFragment();
    
    if ( success ) {
        data.forEach((movie)=> {

            function setEditBtn(){
                template.querySelector('.edit-btn').setAttribute('data-id', `${movie.id}`);
                template.querySelector('.edit-btn').setAttribute('data-id',`${movie.id}`);
                template.querySelector('.edit-btn').setAttribute('data-title',`${movie.title}`);
                template.querySelector('.edit-btn').setAttribute('data-type',`${movie.type}`);
                template.querySelector('.edit-btn').setAttribute('data-description',`${movie.description}`);
                template.querySelector('.edit-btn').setAttribute('data-year',`${movie.year}`);
                template.querySelector('.edit-btn').setAttribute('data-imdb',`${movie.imdb}`);
                template.querySelector('.edit-btn').setAttribute('data-poster',`${movie.poster}`);
            }
            
            // Setting data to the figure
            template.querySelector('figure').setAttribute('data-id',`${movie.id}`);
            template.querySelector('figure').setAttribute('data-title',`${movie.title}`);
            template.querySelector('figure').setAttribute('data-type',`${movie.type}`);
            template.querySelector('figure').setAttribute('data-description',`${movie.description}`);
            template.querySelector('figure').setAttribute('data-year',`${movie.year}`);
            template.querySelector('figure').setAttribute('data-imdb',`${movie.imdb}`);
            template.querySelector('figure').setAttribute('data-poster',`${movie.poster}`);
            template.querySelector('.movie-card__img').setAttribute('src', `${movie.poster}`);

            // Setting data to the buttons
            setEditBtn();
            template.querySelector('.remove-btn').setAttribute('data-id', `${movie.id}`);
            
            //console.log(template.querySelector('.remove-btn'));
            
            let clone = d.importNode(template, true);
            fragment.appendChild(clone);
            section.appendChild(fragment);
        })
    }

    if ( !success ) {
        section.innerHTML = `
        <h1 style="color:white">¡No se han podido obtener las películas! / Razón: 
            <span style="color:yellow">${ data.message }</span>
        </h1>`
    }

}
