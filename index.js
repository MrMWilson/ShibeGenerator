window.onload = function () {

}

function GetShibeImg() {
    debugger;

    var randomShibe = fetch('http://shibe.online/api/shibes', {
            method: 'GET'
        })
        .then(
            response => response.json()
        )
        .then(
            Images => {
                return Images;
            }
        );

    return randomShibe
}

async function DisplayShibe() {

    var shibe = document.getElementById("randomShibe");
    var getRandomShibe = await GetShibeImg();

    shibe.contentEditable = getRandomShibe;
}