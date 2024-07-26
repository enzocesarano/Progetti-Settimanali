const barParameters = new URLSearchParams(location.search).get('cardId')
const row = document.getElementById('row')

const object = function (query) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${query}`, {
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

        .then((card) => {
            console.log(card)
            row.innerHTML += `
                <div class="col col-md-5">
                    <div class="card mb-4 shadow-sm">
                        <img
                          src="${card.imageUrl}"
                          class="bd-placeholder-img card-img-top show w-100"/>
                        <div class="card-body">
                          <h5 class="card-title fs-6">${card.name}</h5>
                          <p class="card-text">${card.description}
                          </p>
                          <div class="text-end">
                            <small class="text-muted">id: <span>${card._id}</span></small>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
        })

        .catch((error) => {
            console.log('errore', error)
        })
}


object(barParameters)


