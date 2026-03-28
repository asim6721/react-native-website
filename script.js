// Product data from mockup (24 items unique)
const products = [
    { id: 1, title: 'Kenneth cole Men Round Grey Watches', brand: 'Movado', gender: 'Men', model: 'Bold', price: '₹74,625', cta: 'Check Our Selling Price', img: 'https://source.unsplash.com/300x200/?watch,men' },
    { id: 2, title: 'Kenneth cole Men Round Grey Watches', brand: 'Versace', gender: 'Men', model: 'HELLENIUM-VK', price: '₹1,14,995', cta: 'Check Our Selling Price', img: 'https://source.unsplash.com/300x200/?watch,luxury' },
    { id: 3, title: 'Kenneth cole Men Round Grey Watches', brand: 'Cerruti 1881', gender: 'Men', model: 'FW23', price: '₹32,500', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,round' },
    { id: 4, title: 'Kenneth cole Men Round Grey Watches', brand: 'Balmain', gender: 'Men', model: 'Classic R', price: '₹55,000', cta: 'Check Our Selling Price', img: 'https://source.unsplash.com/300x200/?watch,balmain' },
    { id: 5, title: 'Kenneth cole Men Round Grey Watches', brand: 'Calvin Klein', gender: 'Men', model: 'Sport Multi-Function', price: '₹16,800', cta: 'Check Availability', img: 'https://source.unsplash.com/300x200/?watch,sport' },
    { id: 6, title: 'Kenneth cole Men Round Grey Watches', brand: 'Citizen', gender: 'Men', model: 'Automatic Tsuyosa', price: '₹38,900', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,automatic' },
    { id: 7, title: 'Kenneth cole Men Round Grey Watches', brand: 'Fossil', gender: 'Women', model: 'Virginia', price: '₹13,495', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,women' },
    { id: 8, title: 'Kenneth cole Men Round Grey Watches', brand: 'G-Shock', gender: 'Men', model: 'Metal Covered', price: '₹16,995', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,gshock' },
    { id: 9, title: 'Kenneth cole Men Round Grey Watches', brand: 'Casio', gender: 'Unisex', model: 'Vintage', price: '₹5,995', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,casio' },
    { id: 10, title: 'Kenneth cole Men Round Grey Watches', brand: 'Fitbit', gender: 'Unisex', model: 'Sense 2', price: '₹24,999', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?smartwatch' },
    { id: 11, title: 'Kenneth cole Men Round Grey Watches', brand: 'Tissot', gender: 'Men', model: 'PRX', price: '₹41,000', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,tissot' },
    { id: 12, title: 'Kenneth cole Men Round Grey Watches', brand: 'Swarovski', gender: 'Women', model: 'Crystalline Aura', price: '₹40,000', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,swarovski' },
    { id: 13, title: 'Kenneth cole Men Round Grey Watches', brand: 'Anne Klein', gender: 'Women', model: 'Diamonds', price: '₹8,800', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,diamond' },
    { id: 14, title: 'Kenneth cole Men Round Grey Watches', brand: 'Kenneth Cole', gender: 'Men', model: 'Fun Loving', price: '₹19,999', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,kennethcole' },
    { id: 15, title: 'Kenneth cole Men Round Grey Watches', brand: 'Michael Kors', gender: 'Women', model: 'Parker', price: '₹24,495', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,michaelkors' },
    { id: 16, title: 'Kenneth cole Men Round Grey Watches', brand: 'Emporio Armani', gender: 'Women', model: 'Gianni T-B', price: '₹26,995', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,armani' },
    { id: 17, title: 'Kenneth cole Men Round Grey Watches', brand: 'Armani Exchange', gender: 'Men', model: 'Outerbanks', price: '₹11,495', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,armaniexchange' },
    { id: 18, title: 'Kenneth cole Men Round Grey Watches', brand: 'Daniel Wellington', gender: 'Women', model: 'Petite', price: '₹13,494 ₹15,499 (13% off)', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,danielwellington' },
    { id: 19, title: 'Kenneth cole Men Round Grey Watches', brand: 'Balmain', gender: 'Women', model: 'Classic R', price: '₹52,000', cta: 'Check Our Selling Price', img: 'https://source.unsplash.com/300x200/?watch,balmain,women' },
    { id: 20, title: 'Kenneth cole Men Round Grey Watches', brand: 'Movado', gender: 'Men', model: 'Bold', price: '₹67,125', cta: 'Check Our Selling Price', img: 'https://source.unsplash.com/300x200/?watch,movado' },
    { id: 21, title: 'Kenneth cole Men Round Grey Watches', brand: 'Citizen', gender: 'Men', model: 'Eco drive Basic', price: '₹24,900', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,citizen' },
    { id: 22, title: 'Kenneth cole Men Round Grey Watches', brand: 'Milus', gender: 'Unisex', model: 'Snow Star', price: '₹1,87,100', cta: 'Check Availability', img: 'https://source.unsplash.com/300x200/?watch,milus' },
    { id: 23, title: 'Kenneth cole Men Round Grey Watches', brand: 'Michael Kors', gender: 'Women', model: 'Pyper', price: '₹14,995', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,michaelkors,women' },
    { id: 24, title: 'Kenneth cole Men Round Grey Watches', brand: 'Armani Exchange', gender: 'Men', model: 'Banks', price: '₹17,995', cta: 'Buy Online', img: 'https://source.unsplash.com/300x200/?watch,banks' }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');

// Init: Render products
function renderProducts(productList = products) {
    productsGrid.innerHTML = '';
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h4 class="product-title">${product.title}</h4>
                <p class="product-brand">${product.brand} | ${product.gender} | ${product.model}</p>
                <p class="product-price">${product.price}</p>
                <button class="cta ${product.cta.includes('Buy') ? 'cta-buy' : product.cta.includes('Check') ? 'cta-check' : ''}">${product.cta}</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Search
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) ||
        p.model.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// Sort
function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    let sorted = [...products];
    if (sortBy === 'Bestsellers') {
        sorted.sort((a, b) => parseFloat(b.price.replace(/[^0-9]/g, '')) - parseFloat(a.price.replace(/[^0-9]/g, '')));
    }
    renderProducts(sorted);
}

// Filters
function applyFilters() {
    const brands = Array.from(document.querySelectorAll('input[type=checkbox][value]:checked')).map(cb => cb.value);
    const gender = document.querySelector('input[name=gender]:checked')?.value;

    let filtered = products;
    if (brands.length) {
        filtered = filtered.filter(p => brands.includes(p.brand.toLowerCase()));
    }
    if (gender) {
        filtered = filtered.filter(p => p.gender.toLowerCase() === gender);
    }
    renderProducts(filtered);
}

// Cart modal (simple toggle)
function toggleCart() {
    let modal = document.querySelector('.cart-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'cart-modal';
        modal.innerHTML = `
            <div class="cart-content">
                <h3>My Cart</h3>
                <p>Your cart is empty.</p>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Initial render
renderProducts();
