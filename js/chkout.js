let j = 0;

function display() {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.getElementById("tableRow");
    let total = localStorage.getItem('totalCost');
    total = parseInt(total)
    let grandTotal;

    grandTotal = total + 50;



    productContainer.innerHTML = '';
    grandTotal.innerHTML = '';
    Object.values(cartItems).map(item => {
        var cell = document.createElement("tr");
        cell.innerHTML = `
                <td> <img style=" width: 13%;" src="./img/productImages/${item.tag}.png"></td>
                <td class="name"> ${item.name} </td>
                <td > ${item.price}₹ X ${item.inCart} </td>
            `;
        document.getElementById("tableRow").appendChild(cell);
    })


    document.getElementById("price1").innerHTML += `  <br>
        <p  class= "price1">
                <p class="price1"> ${total} .00₹ </p>
        </p>
    </div>     
    `

    document.getElementById("previous1").addEventListener("click", function() {
        location.reload();
    });



    document.getElementById("next2").addEventListener("click", function() {
        document.getElementById("billing").remove();
        document.getElementById("chkout").innerHTML = ` <br><br><br><br><br>
        <h1> ${total} .00₹ </h1>
        <h1>Shipping charge 50.00₹ <br> Next step you hav to make payment of ${grandTotal} .00₹ </h1>
        `;
    });
    document.getElementById("next3").addEventListener("click", function() {
        document.getElementById("debitCard").innerHTML = `

        <form class="credit-card">
        <div class="form-header">
          <h4 class="title">Credit card detail</h4>
        </div>
       
        <div class="form-body">
          <!-- Card Number -->
          <input type="text" class="card-number" placeholder="Card Number">
       
          <!-- Date Field -->
          <div class="date-field">
            <div class="month">
              <select name="Month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>
            <div class="year">
              <select  name="Year">
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2021">2025</option>
                <option value="2022">2026</option>
                <option value="2023">2028</option>
                <option value="2024">2029</option>
              </select>
            </div>
          </div>
          
       
          <!-- Card Verification Field -->
          <div class="card-verification">
            <div class="cvv-input">
              <input type="text" placeholder="CVV">
              
           
            <div class="cvv-details">
              <p>
              <br>3 or 4 digits usually found on <br> the signature strip</p>
            </div> 
            </div>
          </div>
       
          <!-- Buttons -->
          
          <button type="submit" class="paypal-btn"><a href="#">Or Pay With UPI</a></button>
        </div>
      </form>
        `;
    });

    document.getElementById("next4").addEventListener("click", function() {

        document.getElementById("debitCard").remove();
        document.getElementById("backE").innerHTML = `
        <form class="credit-card">
        <div class="form-header">
          <h4 class="title">Enter the Name on card</h4>
        </div>
       
        <div class="form-body">
          <!-- Card Number -->
          <input type="text" class="card-number" placeholder="Name">
            </div>
          </form>
        `;


    });


}

document.getElementById("next5").addEventListener("click", function() {
    alert("Thank You For Shopping Here");
    window.location.href = "./home.html";

});


function hideContent() {
    document.getElementById("tableRow").remove();
    document.getElementById("billing").innerHTML = `

<form action="/action_page.php">
  <br>
  <input type="text" id="fname" name="fname" value="Name"><br>
  <br>
  <input type="text" id="lname" name="lname" value="Last Name"><br>
  <br>
  <input type="text" id="address" name="fname" value="Address">
  <input type="text" id="pin" name="lname" value="Pin"><br><br>
  <input type="text" id="city" name="lname" value="City"><br><br>
  <select type="selector" id="state" name="lname" value="state">
  <option value="West Bengal">West Bengal</option>
    <option value="Maharastra">Maharastra</option>
    <option value="Delhi">Delhi</option>
    <option value="Punjab">Punjab</option>
  <br>  <br>
  <input type="text" id="landmark" name="lname" value="Landmark"><br><br>
  <input type="text" id="phoneNo" name="phoneNo" value="Phone No"><br><br>
</form> 

    `;

}


display();