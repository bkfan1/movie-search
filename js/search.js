export {searchFilter};

const d = document;

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