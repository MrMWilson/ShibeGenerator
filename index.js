window.onload = function () {

}

function GetShibeImg(pokedexNumber) {

    var randomShibe = fetch('https://pokeapi.co/api/v2/pokemon-form/' + pokedexNumber + '/', {
            method: 'GET'
        })

        .then(
            response => response.json()
        )
        .then(
            Data => {
                return Data;
            }
        );

    return randomShibe;
}

async function DisplayShibe() {

    var shibe = document.getElementById("randomShibe");
    var randomNumber = GenerateRandomNumber(1, 151);
    var getRandomShibe = await GetShibeImg(randomNumber);

    shibe.src = getRandomShibe.sprites.front_shiny;
}

function GenerateRandomNumber(lowerRange, upperRange) {
    var randomNumber = Math.floor(Math.random() * (parseInt(upperRange) - parseInt(lowerRange) + 1) + parseInt(lowerRange));
    return randomNumber;
}