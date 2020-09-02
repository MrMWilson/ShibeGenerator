window.onload = function () {

}

function GetShibeImg() {
    debugger;

    var randomShibe = fetch('http://shibe.online/api/shibes')
        .then(
            response => response.json()
        )
        .then(
            Data => {
                return Data;
            }
        );

    return randomShibe
}

async function DisplayShibe() {

    var shibe = document.getElementById("randomShibe");
    var getRandomShibe = await GetShibeImg();

    shibe.src = getRandomShibe;
}