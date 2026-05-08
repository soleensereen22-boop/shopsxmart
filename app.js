// وظيفة قصة SS-1
function registerUser() {
    const input = document.getElementById("usernameInput");
    const value = input.value.trim();
    if (value === "") {
        alert("خطأ: لا يمكن ترك الاسم فارغاً");
        return;
    }
    alert("تم التسجيل بنجاح!");
}

// وظيفة قصة SS-3
function addToCart() {
    const input = document.getElementById("priceInput");
    const price = parseFloat(input.value);
    if (price <= 0 || isNaN(price)) {
        alert("خطأ: السعر يجب أن يكون أكبر من صفر");
        return;
    }
    alert("تمت الإضافة للسلة بنجاح!");
}