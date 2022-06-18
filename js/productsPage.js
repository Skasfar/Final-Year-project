if (localStorage.getItem("initial") == undefined) {
    localStorage.setItem("initial", 0);

}

if (localStorage.getItem("initial") == undefined || localStorage.getItem("initial") == 0) {
    document.querySelector(".previousBtn").style = "display: none;"
}



document.querySelector(".nextBtn").addEventListener("click", function() {
    let initialB = JSON.parse(localStorage.getItem("initial"));
    initialB = initialB + 12;
    console.log(initialB);
    localStorage.setItem("initial", initialB);
    document.querySelector(".previousBtn").style = "display: initial;"
    location.reload();


});

document.querySelector(".previousBtn").addEventListener("click", function() {
    let initialB = JSON.parse(localStorage.getItem("initial"));
    initialB -= 12;
    localStorage.setItem("initial", initialB);
    location.reload();
});

function displayProduct() {
    let productContainer = document.createElement("ul");
    productContainer.classList.add("card-wrapper");
    let prod = "";
    var initiate = localStorage.getItem("initial");
    initiate = parseInt(initiate);
    if (initiate + 12 >= products.length) {
        document.querySelector(".nextBtn").style = "display: none;"
    }

    for (let i = initiate; i < products.length; i++) {
        if (i == initiate + 12) {
            break;
        }
        prod += ` 
                                <li class="card">      
                                <a href="./product.html" class="clicked"> <img src='./img/productImages/${products[i].tag}.png' alt='' ></a> 
                                        <div class="addButton">add to Cart</div>
                                <h3><a href=""> ${products[i].name}</a></h3>
                                    <p>₹${products[i].price} </p>
                                </li>
        `;
    }

    productContainer.innerHTML = prod;
    document.getElementById("push").appendChild(productContainer);
}

function addToCart1() {
    var initiate = localStorage.getItem("initial");
    var x = 0;

    initiate = parseInt(initiate);
    let carts = document.querySelectorAll('.addButton');

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            x = initiate + i;
            cartNumbers(products[x]);
            totalCost(products[x]);
        })

    }
}






function addToCart2() {
    var initiat = localStorage.getItem("initial");
    var y = 0;

    initiat = parseInt(initiat);
    let cart = document.querySelectorAll('.clicked');

    for (let i = 0; i < cart.length; i++) {
        cart[i].addEventListener('click', () => {
            y = initiat + i;
            productClicked(products[y]);
            console.log(y);

        });
    }
}

function productClicked(product) {
    let productSelect;
    productSelect = {
        [product.tag]: product
    }
    localStorage.setItem("productData", JSON.stringify(productSelect));
}


window.setTimeout(addToCart1, 500);
window.setTimeout(addToCart2, 500);
displayProduct();