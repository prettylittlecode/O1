function fetchData() {
    let myRequest = new Request("products.json")

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
                .map(user => {
                    return `
                        <li>
                            <img src="${user.imageUrl}" alt="Product">
                            <div class="text">
                                <p>${user.name}</p>
                                <p class="price">${user.price}</p>
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