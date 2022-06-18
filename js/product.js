const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    });
});


let product = localStorage.getItem("productData");
let variable = {};

variable = product;

product = JSON.parse(product);



Object.values(product).map(detail => {

    document.getElementById("product-des").innerHTML = ` 
    <section class="product-details">
        <div class="image-slider" style="background-image: url('./img/productImages/${detail.tag}.png');">

        </div>

        <div class="details">
            <h2 class="product-brand">${detail.name}</h2>
            <p class="product-short-des">${detail.catagory}</p>
            <span class="product-price">₹${detail.price}</span>
           <br>
            

            <button class="btn cart-btn">add to cart</button>
            <button class="btn">add to wishlist</button>
        </div>
    </section>

    <section class="detail-des">
        <h2 class="heading">description</h2>
        <p class="des"> ${detail.des} </p>
        <br>
        <h2 class="heading">Feature & Details</h2>
        <p class="fea"> ${detail.des} </p>
    </section>
`;
});

document.querySelector(".btn").addEventListener("click", () => {
    console.log(variable)
    setItem(variable);
})