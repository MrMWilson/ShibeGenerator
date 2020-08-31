window.onload = function () {

}

function GetShibeImg() {

    var randomShibe = fetch('https://cdn.shibe.online/shibes/25274238a3ff550a072cb9c9f6898ee77fbc6c84.jpg' + Image, {
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

}