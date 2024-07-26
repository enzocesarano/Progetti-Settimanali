const row = document.getElementById('row')

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3OGIzN2FiYWQyODAwMTliZDRiNWYiLCJpYXQiOjE3MjE5ODA0NzgsImV4cCI6MTcyMzE5MDA3OH0.dI-R20SsU4EHqh3nceKxn3w6kDXN5kVsi0llx1wVV-A"
    }
})
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('error')
        }
    })

    .then((product) => {
        console.log(product)
        displayCard(product)
    })

    .catch((error) => {
        console.log('errore', error)
    })



function displayCard(card) {
    row.innerHTML = ''
    card.forEach(element => {
        row.innerHTML += `
                <div class="col-2">
                    <div id="${element._id}" class="card mb-4 shadow-sm pointer">
                        <div class="text-center p-3">
                        <img
                          src="${element.imageUrl}"
                          class="bd-placeholder-img card-img-top show altezza"/>
                        </div>
                        <div class="card-body">
                          <h5 class="card-title fs-6">${element.name}</h5>
                          <p class="card-text">${element.description}
                          </p>
                          <div class="text-end">
                            <small class="text-muted">id: <span>${element._id}</span></small>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
    });

    const pointer = document.querySelectorAll('.pointer')

    pointer.forEach(element => {
        element.addEventListener('click', function () {
            const cardId = element.id;
            location.assign(`./details.html?cardId=${cardId}`)
        })
    })

}