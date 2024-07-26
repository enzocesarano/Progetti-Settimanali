
class Product {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name = _name
        this.description = _description
        this.brand = _brand
        this.imageUrl = _imageUrl
        this.price = _price
    }
}

const inputName = document.getElementById('inputName')
const inputBrand = document.getElementById('inputBrand')
const inputDescription = document.getElementById('inputDescription')
const inputImageUrl = document.getElementById('inputImageUrl')
const inputPrice = document.getElementById('inputPrice')
const formCard = document.getElementById('formCard')
const btnCrea = document.getElementById('btnCrea')

const barParameters = new URLSearchParams(location.search).get('cardId')


if (barParameters) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${barParameters}`, {
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

        .then((product1) => {
            inputName.value = product1.name,
            inputDescription.value = product1.description,
            inputBrand.value = product1.brand,
            inputImageUrl.value = product1.imageUrl,
            inputPrice.value = product1.price
        })

        .catch((error) => {
            console.log('errore', error)
        })

}



formCard.addEventListener('submit', function (e) {
    e.preventDefault()
    const newProduct = new Product(
        inputName.value,
        inputDescription.value,
        inputBrand.value,
        inputImageUrl.value,
        inputPrice.value
    )

    let methodCustom;
    let urlCustom;

    if (barParameters) {
        urlCustom = `https://striveschool-api.herokuapp.com/api/product/${barParameters}`
        methodCustom = 'PUT'
    } else {
        urlCustom = `https://striveschool-api.herokuapp.com/api/product/`
        methodCustom = 'POST'
    }

    fetch(urlCustom, {
        method: methodCustom,

        body: JSON.stringify(newProduct),

        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3OGIzN2FiYWQyODAwMTliZDRiNWYiLCJpYXQiOjE3MjE5ODA0NzgsImV4cCI6MTcyMzE5MDA3OH0.dI-R20SsU4EHqh3nceKxn3w6kDXN5kVsi0llx1wVV-A",
            'Content-Type': 'application/json'
        },

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

        })

        .catch((error) => {
            console.log('errore', error)
        })

    setInterval(() => {
        location.assign(`./back-office.html`)
    }, 200);
})


const rowDetails = document.getElementById('rowDetails')


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
        displayCard(product)
    })

    .catch((error) => {
        console.log('errore', error)
    })



let idParam;

function displayCard(card) {
    rowDetails.innerHTML = ''
    card.forEach(element => {
        rowDetails.innerHTML += `
                    <div class="col">
                        <div class="card mb-2 shadow-sm d-flex flex-row align-items-center p-2 bg-secondary text-light shadow">
                            <div class="w-10">
                                <img
                              src="${element.imageUrl}"
                              class="bd-placeholder-img card-img-top show w-100"/>
                            </div>
                            <div class="card-body">
                              <h5 class="card-title fs-6">${element.name}</h5>
                              <p class="card-text">${element.description}
                              </p>
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                                <button id="${element._id}" type="button" class="btn btn-info fs-supersmall mb-2 edit">Modifica</button>
                                <button data-id="${element._id}" type="button" class="btn btn-danger fs-supersmall deleteProduct" data-bs-toggle="modal" data-bs-target="#deleteModal">Elimina</button>
                            </div>
                          </div>
                        </div>
                      `

        const edit = document.querySelectorAll('.edit')

        edit.forEach(element => {
            element.addEventListener('click', function () {
                const cardId = element.id;
                location.assign(`./back-office.html?cardId=${cardId}`)
                
            })
        })

        const btnDelete = document.getElementById('btnDelete')
        const deleteProduct = document.querySelectorAll('.deleteProduct')

        deleteProduct.forEach(element => {
            element.addEventListener('click', async function () {
                const cardId = element.dataset.id;
                btnDelete.addEventListener('click', function() {
                    removeProduct(cardId);
                })
                
            })
        })
    });

}


function removeProduct(card) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${card}`, {
        method: 'DELETE',

        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY3OGIzN2FiYWQyODAwMTliZDRiNWYiLCJpYXQiOjE3MjE5ODA0NzgsImV4cCI6MTcyMzE5MDA3OH0.dI-R20SsU4EHqh3nceKxn3w6kDXN5kVsi0llx1wVV-A"
        }
    })
        .then((response) => {
            if (response.ok) {
                alert('PRODOTTO ELIMINATO')
                location.assign('./back-office.html') 
            } else {
                
                throw new Error(err)
            }
        })
        .catch((err) => {
            console.log('error', err)
        })

}


