window.onload = function () {

}

function GetShibeImg() {

    var randomShibe = fetch('https://cdn.shibe.online/shibes/', {
            method: 'GET'
        })
        .then(
            response => response.json()
        )
        .then(
            data => {
                return data;
            }
        );

    return randomShibe;

    async function DisplayShibe() {

        var shibe = document.getElementById("randomShibe");
        var getRandomShibe = await GetShibeImg();

        shibe.contentEditable = getRandomShibe;
    }
}