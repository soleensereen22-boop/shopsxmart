// اختبار قصة SS-1: تسجيل المستخدم
test('should fail for empty username', () => {
    const value = "";
    const result = value.trim() !== "";
    expect(result).toBe(false);
});

test('should pass for valid username', () => {
    const value = "Soleen";
    const result = value.trim() !== "";
    expect(result).toBe(true);
});

// اختبار قصة SS-3: السعر في سلة المشتريات
test('should fail for negative price', () => {
    const price = -5;
    const result = price > 0;
    expect(result).toBe(false);
});

test('should pass for valid price 9.99', () => {
    const price = 9.99;
    const result = price > 0;
    expect(result).toBe(true);
});