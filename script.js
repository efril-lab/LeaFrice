// script.js - dasar interaksi: menu toggle, cart mock, checkout behavior
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  menuToggle?.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
  });

  // simple cart
  const cart = [];
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function renderCart(){
    if(!cartItemsEl || !cartTotalEl) return;
    cartItemsEl.innerHTML = '';
    let total = 0;
    cart.forEach((it, idx) => {
      total += it.price;
      const li = document.createElement('li');
      li.textContent = `${it.name} — Rp ${numberWithDots(it.price)}`;
      cartItemsEl.appendChild(li);
    });
    cartTotalEl.textContent = `Rp ${numberWithDots(total)}`;
  }

  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action="add-to-cart"]');
    if(btn){
      const name = btn.dataset.name || 'Produk';
      const price = parseInt(btn.dataset.price || '0', 10);
      cart.push({name, price});
      renderCart();
      alert(`${name} ditambahkan ke keranjang.`);
    }
  });

  checkoutBtn?.addEventListener('click', () => {
    if(cart.length === 0){ alert('Keranjang kosong.'); return; }
    // untuk tugas: arahkan ke form / tampilkan instruksi pembayaran
    alert('Terima kasih! Checkout sementara mock-up. Hubungi WA untuk menyelesaikan pembelian.');
  });

  // helper
  function numberWithDots(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
});
