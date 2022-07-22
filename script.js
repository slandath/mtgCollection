//Search Card in Scryfall

function getCard() {
    let buttfuck = document.getElementById('hocus').value;
    let mouthfuck = document.getElementById('pocus').value; 

    fetch(`https://api.scryfall.com/cards/named?exact=${buttfuck}&set=${mouthfuck}`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('search-result').innerHTML = "Card Found!"
            document.getElementById('scryfall-pic').src = data.image_uris.border_crop
            document.getElementById('scryfall-name').innerHTML = data.name
            document.getElementById('scryfall-set').innerHTML = data.set_name
            document.getElementById('scryfall-price').innerHTML = "$" + data.prices.usd
            document.getElementById('trouble').value = data.id;
        })
        .catch((error) => {
            console.log(error)
            document.getElementById('search-result').innerHTML = "Card Not Found!";
        });
};

// Get All Cards

function getPGCards() {
    fetch(`http://localhost:3000/api/v1/cards`, {
        method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
        let output = '<h3 class="list-group-item list-group-item-dark ">Cards</h3>';
        data.forEach(function(post){
            output += `
            <li class="list-group-item">${post.name}</li>
            `;
        });
    document.getElementById('output-list').innerHTML = output;
    })
    .catch((error) => {
        console.log(error);
    });
};


// Add Card

function insertCard() {
    let pussy = document.getElementById('trouble').value;

     fetch (`http://localhost:3000/api/v1/cards`, {
        method: 'POST',
        body: JSON.stringify({
            "id" : `${pussy}`
        }),
        headers: {
            "Content-type": "application/json",
        }
    })
        .then(res => res.json())
        .then(data => console.log(data));
    };

// Update Card

/*

fetch(`https://api.scryfall.com/cards/named?exact=${buttfuck}&set=${mouthfuck}`)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('search-result').innerHTML = "Card Found!"
            document.getElementById('scryfall-pic').src = data.image_uris.border_crop
            document.getElementById('scryfall-name').innerHTML = data.name
            document.getElementById('scryfall-set').innerHTML = data.set_name
            document.getElementById('scryfall-price').innerHTML = "$" + data.prices.usd
            document.getElementById('trouble').value = data.id;
        })
        .catch((error) => {
            console.log(error)
            document.getElementById('search-result').innerHTML = "Card Not Found!";
        }); 

        */