// تعريف متغير لحفظ السلة
let cart = [];

// دالة لإضافة منتج إلى السلة
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    // إضافة المنتج إلى السلة
    cart.push(product);

    // عرض إشعار
    alert(productName + " تمت إضافته إلى السلة!");

    // تحديث عرض السلة
    updateCartDisplay();
}

// دالة لتحديث عرض السلة
function updateCartDisplay() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // تفريغ محتوى السلة السابق

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>السلة فارغة</p>";
    } else {
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">إزالة</button></p>`;
        });

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartContainer.innerHTML += `<p>الإجمالي: $${total.toFixed(2)}</p>`;
    }
}

// دالة لإزالة منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// دالة لإتمام الشراء
function checkout() {
    if (cart.length === 0) {
        alert("السلة فارغة!");
    } else {
        alert("تم إتمام الشراء بنجاح! شكراً لك.");
        cart = []; // تفريغ السلة بعد إتمام الشراء
        updateCartDisplay();
    }
}
