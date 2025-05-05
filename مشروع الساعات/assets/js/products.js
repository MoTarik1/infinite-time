// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "ساعة رجالية كلاسيكية",
        description: "ساعة يدوية فاخرة من الجلد الطبيعي مع حركة أوتوماتيكية",
        price: 1200,
        image: "../assets/images/Hampton.png",
        category: "men",
        features: ["leather", "automatic"],
        brand: "infinity"
    },
    {
        id: 2,
        name: "ساعة نسائية أنيقة",
        description: "ساعة ماسية بتصميم عصري مقاومة للماء",
        price: 1800,
        image: "../assets/images/ساعة الخالده.png",
        category: "women",
        features: ["waterproof"],
        brand: "luxury"
    },
    {
        id: 3,
        name: "ساعة أطفال رياضية",
        description: "ساعة مقاومة للماء بتصميم ملون",
        price: 400,
        image: "../assets/images/ساعة مقاومة للماء بتصميم ملون.png",
        category: "kids",
        features: ["waterproof"],
        brand: "infinity"
    },
    {
        id: 4,
        name: "ساعة مناسبات خاصة",
        description: "ساعة ذهبية بتصميم فاخر مع كرونوغراف",
        price: 2500,
        image: "../assets/images/wristwatch-with-chronograph.png",
        category: "events",
        features: ["chronograph"],
        brand: "prestige"
    },
    {
        id: 5,
        name: "ساعة رياضية متطورة",
        description: "ساعة رياضية مقاومة للماء مع العديد من الميزات",
        price: 900,
        image: "../assets/images/اوتيتو5برو.png",
        category: "sports",
        features: ["waterproof", "chronograph"],
        brand: "elite"
    },
    {
        id: 6,
        name: "ساعة يومية أنيقة",
        description: "ساعة بتصميم بسيط وأنيق للاستخدام اليومي",
        price: 600,
        image: "../assets/images/CASIO.png",
        category: "daily",
        features: [],
        brand: "infinity"
    }
];

// تهيئة الصفحة  
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
});

// عرض المنتجات
function displayProducts(productsToDisplay) {
    const productGrid = document.getElementById('all-products');
    productGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="no-results">لا توجد منتجات تطابق معايير البحث</p>';
        return;
    }

    productsToDisplay.forEach(product => {
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
}

// تحديث عداد السلة
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.cart-count').textContent = cart.length;
}

// إدارة سلة التسوق
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        addToCart(e);
    }
});

// إضافة إلى السلة
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        showToast('تمت إضافة المنتج إلى سلة التسوق');
    }
}

// عرض رسالة toast
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}