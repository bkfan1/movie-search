export {createMovie, deleteMovie};

const d = document;

function createMovie(){
    
    function validateField(input, field){

        if(input.value === "" || input.value === " "){
            hasContent[field] = false;
            console.log("info INvalida");
        }
        else{
            hasContent[field] = true;
            console.log("info valida");
        }

    }
    
    function validateForm(e){
        switch (e.target.name){
            case "title":
                validateField(e.target, 'title');
                break;
            case "sinopsis":
                validateField(e.target, 'sinopsis');
                break;
            case "year":
                validateField(e.target, 'year');
                break;
            case "poster":
                validateField(e.target, 'poster');
                break;
            case "imdb_card":
                validateField(e.target, 'imdb_card');
                break;
            case "type":
                validateField(e.target, 'type');
                break;
        }
    }

    const addBtn = d.getElementById('add-btn');
    let hasContent = {
        title: false,
        sinopsis: false,
        year: false,
        poster: false,
        imdb_card: false,
        type: false,
    }

    d.addEventListener("click", (e)=>{

        if(e.target === addBtn){

            let form = d.getElementById('add-form');
            let inputs = d.querySelectorAll('.form-input');

            inputs.forEach((input)=>{
                input.addEventListener("keyup", validateForm);
                input.addEventListener("click", validateForm);
                input.addEventListener("blur", validateForm);
            })


            form.addEventListener("submit", (e)=>{
                e.preventDefault();
                if(hasContent.title && hasContent.sinopsis && hasContent.year && hasContent.poster && hasContent.imdb_card && hasContent.type){
                    d.querySelector('.warning-message').classList.add('hidden');
                    console.log("todos los campos están correctos");

                    let data = new FormData(form);
                    //console.log(newMovie);
                    //console.log(JSON.stringify(newMovie));
                    //console.log(data);
                    //console.log(data.get('title'))

                    let newMovie = {
                        id: inputs[0].value.split(' ').join('-').toLowerCase(),
                        title: inputs[0].value,
                        type: inputs[5].value,
                        description: inputs[1].value,
                        year: inputs[2].value,
                        poster: inputs[3].value,
                        imdb: inputs[4].value
                    }

                    fetch('http://localhost:5500/movies', {
                        method: 'POST',
                        body: JSON.stringify(newMovie),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })

                    .then((res)=>{
                        if(res.ok){return;}
                    })
                    .catch((err)=>{alert(`Ha ocurrido un error al intentar añadir la película: ${err.message}`)})

                    //form.reset();
                }
                else{
                    d.querySelector('.warning-message').classList.remove('hidden');
                    console.log("faltan campos por completar /  verifica que todos los campos esten correctos")
                }
            })
        }

    })

}

function deleteMovie(){

    let removeBtns =  d.querySelectorAll('.remove-btn');

    removeBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{

            let isDeleting = confirm('¿Estás seguro de que quieres eliminar esta película?:');
            if(isDeleting){
                let options = {
                    method: 'DELETE',
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                }

                fetch(`http://localhost:5500/movies/${btn.getAttribute('data-id')}`, options)
                .then((res)=>{if(res.ok){console.log(`Se ha eliminado la película con éxito`)}})
                .catch((err)=>{alert(`Ha ocurrido un error al intentar eliminar la película: ${err.message}`)});
            }

        })
    })


}