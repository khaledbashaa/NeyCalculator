function calculateAll() {
    const totalLength = parseFloat(document.getElementById("length").value);

    if (isNaN(totalLength) || totalLength <= 0) {
        alert("الرجاء إدخال طول صحيح!");
        return;
    }

    // حساب أماكن الثقوب
    const holePositions = [
        7.3 / 53,
        9.7 / 53,
        12.1 / 53,
        16.9 / 53,
        19.3 / 53,
        21.5 / 53,
        0.5 // الثقب السابع (الخلفي) سيكون دائمًا في المنتصف
    ];

    const holes = holePositions.map(pos => (pos * totalLength).toFixed(2));

    const holesTableBody = document.querySelector("#holesTable tbody");
    holesTableBody.innerHTML = `
        <tr><td>الثقب الأول</td><td>${holes[0]}</td></tr>
        <tr><td>الثقب الثاني</td><td>${holes[1]}</td></tr>
        <tr><td>الثقب الثالث</td><td>${holes[2]}</td></tr>
        <tr><td>الثقب الرابع</td><td>${holes[3]}</td></tr>
        <tr><td>الثقب الخامس</td><td>${holes[4]}</td></tr>
        <tr><td>الثقب السادس</td><td>${holes[5]}</td></tr>
        <tr><td>الثقب السابع (الخلفي)</td><td>${holes[6]}</td></tr>
    `;

    // حساب أطوال الفكوك
    const originalNaiLength = 59.2;
    const originalFukuk = [6.4, 6.5, 6.6, 6.7, 6.8, 7, 7.1, 7.2, 4.9];
    const ratio = totalLength / originalNaiLength;
    const newFukuk = originalFukuk.map(length => (length * ratio).toFixed(2));

    // تغيير أسماء الفك الأول والتاسع
    const fukukNames = [
        "الرداد", // الفك الأول
        "الفك الثاني",
        "الفك الثالث",
        "الفك الرابع",
        "الفك الخامس",
        "الفك السادس",
        "الفك السابع",
        "الفك الثامن",
        "الخزنة" // الفك التاسع
    ];

    const fukukTableBody = document.querySelector("#fukukTable tbody");
    fukukTableBody.innerHTML = newFukuk.map((length, index) => `
        <tr><td>${fukukNames[index]}</td><td>${length}</td></tr>
    `).join('');

    // إظهار الملاحظة عند ظهور النتائج
    document.getElementById("note").style.display = "block";
}

// دالة جديدة لحساب قطر الرداد
function calculateRadadDiameter() {
    const khaznaDiameter = parseFloat(document.getElementById("khaznaDiameter").value);

    if (isNaN(khaznaDiameter) || khaznaDiameter <= 0) {
        alert("الرجاء إدخال قطر خزنة صحيح!");
        return;
    }

    const radadDiameter = (khaznaDiameter - (khaznaDiameter * 0.191)).toFixed(2);
    document.getElementById("radadResult").innerText = `قطر الرداد: ${radadDiameter} سم`;
}
