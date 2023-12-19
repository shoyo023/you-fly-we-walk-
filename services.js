const products = [
    {
        id: 0,
        image: 'image/pancit.jpg',
        title: 'Pancit Canton',
        price: 1,
    },
    {
        id: 1,
        image: 'image/steak.jpg',
        title: 'Steak',
        price: 15,
    },
    {
        id: 2,
        image: 'image/bucks.jpg',
        title: 'Coffee',
        price: 2,
    },
    {
        id: 3,
        image: 'image/ramen.jpg',
        title: 'Ramen',
        price: 4,
    },
    {
        id: 4,
        image: 'image/sushi.jpg',
        title: 'Sushi',
        price: 10,
    },
];

const categories = [...new Set(products.map((item) => item))];
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { id, image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + id + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(id) {
    cart.push({ ...products.find(item => item.id === id) });
    displaycart();
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

function checkout() {
   
    alert("Check out successfully. Procede");
}

// --- for nav ---

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


function checkout() {
   
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
    l
    document.getElementById('paymentModal').style.display = 'none';
}

function makePayment(paymentOption) {
    
    alert(`Payment successful with ${paymentOption}. Proceed with order.`);
    closePaymentModal();
  
}

// --- payment deets ---

function checkout() {
   
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
   
    document.getElementById('paymentModal').style.display = 'none';
}

function redirectToHomepage() {
    
    window.location.href = 'homepage.html';
}

function makePayment(paymentOption) {
    
    switch (paymentOption) {
        case 'GCash':
            alert("To pay with GCash, use this number: 09127796007");
            closePaymentModal();
            
            redirectToHomepage();
            break;
        case 'PayPal':
            
            var name = prompt("Enter your name:");
            var address = prompt("Enter your paypal address:");
            var email = prompt("Enter your email address:");

            alert("Payment successful with PayPal. Proceed with order.");
            closePaymentModal();

            redirectToHomepage();
            break;
        case 'Credit Card':
            
            var cardName = prompt("Enter your name as on the card:");
            var cardNumber = prompt("Enter your credit card number:");
            var cvc = prompt("Enter your card's CVC:");
            var expiryDate = prompt("Enter your card's expiry date:");

            alert("Payment successful with Credit Card. Proceed with order.");
            closePaymentModal();

            redirectToHomepage(); 
            break;
        default:
            alert("Invalid payment option");
    }
}
