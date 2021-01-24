const axios = require('axios');
const selector = (qry) => document.querySelector(qry);
var date = [];

function clear() {
    selector('.subtitle').innerText = '';
    selector('.title').innerText = '';
    selector('.poster').removeAttribute('src');
    selector('.description').innerText = '';
}

function hideLoader() {
    selector('.loadingPage').style.display = 'none';
    selector('.return').style.display = 'block';
}

function getMovie(title) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76b9bb7490ecd13d4dc5db744cd0b714&query=${title}&language=pt-BR&page=1&include_adult=false `)
        .then(response => {
            selector('.poster').src = 'http://image.tmdb.org/t/p/w185/' + response.data.results[0].poster_path;
            selector('.description').innerText = response.data.results[0].overview;
        });
}

window.onload = function () {
    selector('#next').addEventListener('click', () => {
        clear();

        date = selector("#date").value.split('-');
        const dayAndMonth = `${date[2]}/${date[1]}`;

        Number(date[0]) >= 1974 && Number(date[0]) < Number(new Date().getFullYear()) + 1 ?
            (
                axios.get('https://api.jsonbin.io/b/5fbbfcaf04be4f05c9295ec8/3')
                    .then(response => {
                        
                        const year = response.data[date[0]];

                        hideLoader()
                        year[dayAndMonth] == undefined ?
                            (
                                selector('.subtitle').innerText = 'Parece Que Não Houveram Exibições Nesta Data...'
                            )
                            : (
                                selector('.subtitle').innerText = `No dia ${dayAndMonth}/${date[0]} o filme exibido foi...`,
                                selector('.title').innerText = year[dayAndMonth],
                                getMovie(year[dayAndMonth])
                            )

                    })
            ) :
            (
                selector('.subtitle').innerText = 'Insira Uma Data Válida',
                hideLoader()
            )
            
    });
}
