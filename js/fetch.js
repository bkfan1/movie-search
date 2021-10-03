export {fetchMovies};

async function fetchMovies(){
    //console.log('fetching...')
    try {
        const res = await fetch('js/db.json');
        if (!res.ok) throw Error("Couldn't fetch the data for that resource");
        const data = await res.json();
        return { data, success: true }
    } catch (err) {
        console.log(`An error has ocurred: ${err.message}`)
        return { data: err.message, success: false }
    }
}


