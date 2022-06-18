window.setTimeout(addToCart, 500);
let j = 0;

function addToCart() {
    let carts = document.querySelectorAll('.card-btn');
    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);

        document.querySelector('.addToCart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.addToCart span').textContent = 1;
    }
    setItem(product);

}

function setItem(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

function onLoadCart() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers)(
        document.querySelector('.addToCart span').textContent = productNumbers
    )
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".productClass");
    let total = localStorage.getItem('totalCost');
    total = parseInt(total)
    let grandTotal;

    grandTotal = total + 50;

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        grandTotal.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            
        <div class="product" onclick="removeCartitem(this.id)" >
            <div class="product-image">
                <img src="./img/productImages/${item.tag}.png">
            </div>
            <div class="product-details">
                <div class="product-title">${item.name}</div>
                <p class="product-description"> ${item.des}</p>
            </div>
            <div class="product-price">${item.price}</div>
            <div class="product-quantity">
                <input type="number" onchange="changeFunction(this.value,${j})" id="change" value="${item.inCart}" min="1">
            </div>
            <div class="product-removal">
                <button class="remove-product" id="${j+=1}"  >
            Remove
            </button>
            </div>
            <div class="product-line-price">  ${item.inCart*item.price} </div>
        </div>

           `
        })
        if (total != 0) {
            productContainer.innerHTML += `  
        <div class="totals">
        <div class="totals-item">
        <label>Subtotal</label>
        <div class="totals-value" id="cart-subtotal">${total} .00</div>
        </div>
        <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">50.00</div>
        </div>
        <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">  ${grandTotal} .00</div>
        </div>
        <button class="checkout" onclick="window.location.href ='./Checkout.html';">Checkout</button>
    </div>     
    `
        } else {
            productContainer.innerHTML += ` <p 
            style="color:red; text-align: center;
            padding: 90px;
            border: 1px solid #4CAF50;
            font-size: 200%;
            font-weight: bold;
            ;"> Your Cart is empty  !! </p> `
        }
    }

}

// <-- this is remove cart function - -  -  ---  --  ->

function removeCartitem(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    let x = e.id;
    x = parseInt(x);
    if (x) {
        console.log(x);
        let cartItems = localStorage.getItem("productsIncart");
        cartItems = JSON.parse(cartItems);
        let txt = "";
        for (let y in cartItems) {
            txt += cartItems[y].tag + " ";
        }
        var arr = [];
        var number = 0;
        x -= 1;
        for (let b = 0; b < txt.length; b++) {
            let name = "";
            for (let c = number; c < txt.length; c++) {
                if (txt[c] == " ") {
                    number = c + 1;
                    break;
                }
                name += txt[c];
            }
            arr[b] = name;

        }

        let newCartItem = {};

        var price, incart;
        for (let z in cartItems) {
            if (cartItems[z].tag == arr[x]) {
                price = cartItems[z].price;
                incart = cartItems[z].inCart;
                continue;
            }
            if (cartItems[z] == undefined)
                newCartItem = undefined;
            newCartItem[z] = cartItems[z];

        }

        recalculate(price, incart);
        localStorage.setItem("productsIncart", JSON.stringify(newCartItem));
        localStorage.getItem("cartnumber")
        location.reload();
    }

}

function recalculate(price, incart) {
    price = parseInt(price);
    incart = parseInt(incart);
    var total = localStorage.getItem("totalCost")
    var cartnumber = localStorage.getItem("cartNumbers")
    total = total - incart * price;
    cartnumber = cartnumber - incart;
    console.log(cartnumber, total);
    localStorage.setItem("totalCost", JSON.stringify(total));
    localStorage.setItem("cartNumbers", JSON.stringify(cartnumber));

}


function changeFunction(n, itemNumber) {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let txt = "";
    for (let y in cartItems) {
        txt += cartItems[y].tag + " ";
    }
    var arr = [];
    var number = 0;

    for (let b = 0; b < txt.length; b++) {
        let name = "";
        for (let c = number; c < txt.length; c++) {
            if (txt[c] == " ") {
                number = c + 1;
                break;
            }
            name += txt[c];
        }
        arr[b] = name;
    }

    var cartnumber = 0;

    var total = localStorage.getItem("totalCost")
    total = parseInt(total);
    var diffrenceTotal = 0;
    let newCartItem = {};
    for (let z in cartItems) {
        if (cartItems[z].tag == arr[itemNumber]) {
            cartItems[z].inCart = n;
        }
        if (cartItems[z] == undefined)
            newCartItem = undefined
        newCartItem[z] = cartItems[z];
        diffrenceTotal += cartItems[z].price * cartItems[z].inCart;
        cartnumber += parseInt(newCartItem[z].inCart);

    }

    console.log(cartnumber, total);
    localStorage.setItem("totalCost", JSON.stringify(diffrenceTotal));
    localStorage.setItem("cartNumbers", JSON.stringify(cartnumber));


    localStorage.setItem("productsIncart", JSON.stringify(newCartItem));
    location.reload();



};

onLoadCart();
displayCart();