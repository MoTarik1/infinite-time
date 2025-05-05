//  القائمة 
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// عرض المنتجات المميزة
const featuredProducts = [
    {
        id: 1,
        name: "ساعة رجالية كلاسيكية",
        description: "ساعة يدوية فاخرة من الجلد الطبيعي",
        price: 1200,
        image: "../assets/images/Baume10686.png",
        category: "men"
    },
    {
        id: 2,
        name: "ساعة نسائية أنيقة",
        description: "ساعة ماسية بتصميم عصري",
        price: 1800,
        image: "../assets/images/KKCN1750V05.png",
        category: "women"
    },
    {
        id: 3,
        name: "ساعة أطفال رياضية",
        description: "ساعة مقاومة للماء بتصميم ملون",
        price: 400,
        image: "../assets/images/ساعة مقاومة للماء بتصميم ملون.png",
        category: "kids"
    },
    {
        id: 4,
        name: "ساعة مناسبات خاصة",
        description: "ساعة ذهبية بتصميم فاخر",
        price: 2500,
        image: "../assets/images/KKHR1738V03.png",
        category: "events"
    }
];

const productGrid = document.getElementById('featured-products');

featuredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price} د.أ</p>
            <button class="add-to-cart" data-id="${product.id}">إضافة إلى السلة</button>
        </div>
    `;
    
    productGrid.appendChild(productCard);
});

// إدارة سلة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = featuredProducts.find(p => p.id === productId);
        
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        alert('تمت إضافة المنتج إلى سلة التسوق');
    }
});

updateCartCount();