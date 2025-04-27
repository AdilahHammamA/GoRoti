// Menyimpan produk ke Local Storage
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + ' berhasil ditambahkan ke keranjang!');
}

// Menampilkan isi keranjang
function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - Rp ${item.price}</p>
                <button onclick="removeItem(${index})">Hapus</button>
            </div>
        `;
        totalPrice += item.price;
    });

    document.getElementById('total-price').innerText = 'Rp ' + totalPrice;
}

// Menghapus item dari keranjang
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

// Submit order
function submitOrder(event) {
    event.preventDefault();
    alert('Terima kasih, pesanan Anda telah diterima!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

function showOrderSummary() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orderSummary = document.getElementById('order-summary');
    let total = 0;
    orderSummary.innerHTML = '<h2>Pesanan Kamu:</h2><ul>';

    cart.forEach(item => {
        let quantity = item.qty || 1; // default 1 kalau qty belum ada
        let itemTotal = item.price * quantity;
        orderSummary.innerHTML += `<li>${quantity} x ${item.name} - Rp ${itemTotal}</li>`;
        total += itemTotal;
    });

    orderSummary.innerHTML += '</ul>';
    orderSummary.innerHTML += `<h3>Total Belanja: Rp ${total}</h3>`;
}