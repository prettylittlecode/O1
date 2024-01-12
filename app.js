function fetchData() {
    let myRequest = new Request("https://prettylittlecode.github.io/O1/products.json")

    fetch(myRequest)
        .then(response => {
            if(!response.ok) {
                throw Error("An error occured during attemption to fetch the JSON data.");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const html = data
                .filter(product => product.price >= 1)
                .map(product => {
                    return `
                        <li>
                            <img src="${product.imageUrl}" alt="Product">
                            <div class="text">
                                <p>${product.name}</p>
                                <p class="price">${product.price}</p>
                            </div>
                        </li>
                    `;
                })
                .join("");
                console.log(html)
                document.querySelector("#json").insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.error(error)
        });
}

fetchData()
