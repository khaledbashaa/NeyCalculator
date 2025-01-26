// بيانات سلالم المقامات
const scales = {
    "دو": "دو - ري - مي نصف بيمول - فا - صول - لا - سي نصف بيمول - دو",
    "دو دييز": "دو دييز - ري دييز - مي نصف دييز - فا دييز - صول دييز - لا دييز - سي نصف دييز - دو دييز",
    "ري بيمول": "ري بيمول - مي بيمول - فا نصف بيمول - صول بيمول - لا بيمول - سي بيمول - دو نصف بيمول - ري بيمول",
    "ري": "ري - مي - فا نصف دييز - صول - لا - سي - دو نصف دييز - ري",
    "مي بيمول": "مي بيمول - فا - صول نصف بيمول - لا بيمول - سي بيمول - دو - ري نصف بيمول - مي بيمول",
    "مي": "مي - فا دييز - صول نصف دييز - لا - سي - دو دييز - ري نصف دييز - مي",
    "فا": "فا - صول - لا نصف بيمول - سي بيمول - دو - ري - مي نصف بيمول - فا",
    "فا دييز": "فا دييز - صول دييز - لا نصف دييز - سي - دو دييز - ري دييز - مي نصف دييز - فا دييز",
    "صول بيمول": "صول بيمول - لا بيمول - لا نصف دييز - سي - ري بيمول - مي بيمول - مي نصف دييز - صول بيمول",
    "صول": "صول - لا - سي نصف بيمول - دو - ري - مي - فا نصف دييز - صول",
    "صول دييز": "صول دييز - لا دييز - سي نصف دييز - دو دييز - ري دييز - مي دييز - صول نصف بيمول - صول دييز",
    "لا بيمول": "لا بيمول - سي بيمول - دو نصف بيمول - ري بيمول - مي بيمول - فا - صول نصف بيمول - لا بيمول",
    "لا": "لا - سي - دو نصف دييز - ري - مي - فا دييز - صول نصف دييز - لا",
    "لا دييز": "لا دييز - سي دييز - ري نصف بيمول - ري دييز - فا - صول - لا نصف بيمول - لا دييز",
    "سي بيمول": "سي بيمول - دو - ري نصف بيمول - مي بيمول - فا - صول - لا نصف بيمول - سي بيمول",
    "سي": "سي - دو دييز - ري نصف دييز - مي - فا دييز - صول دييز - لا نصف دييز - سي",
    "ري نصف بيمول": "ري نصف بيمول - مي نصف بيمول - فا - صول نصف بيمول - لا نصف بيمول - سي نصف بيمول - دو نصف دييز - ري نصف بيمول",
    "مي نصف بيمول": "مي نصف بيمول - فا نصف دييز - صول - لا نصف بيمول - سي نصف بيمول - دو نصف دييز - ري - مي نصف بيمول",
    "فا نصف بيمول": "فا نصف بيمول - صول نصف بيمول - لا بيمول - لا نصف دييز - سي نصف دييز - ري نصف بيمول - مي بيمول - فا نصف بيمول",
    "صول نصف بيمول": "صول نصف بيمول - لا نصف بيمول - سي بيمول - سي نصف دييز - ري نصف بيمول - مي نصف بيمول - فا - صول نصف بيمول"
};

// وظيفة لعرض السلم المقامي
function showScale() {
    const selectedScale = document.getElementById("scaleSelect").value;
    const scaleResult = document.getElementById("scaleResult");
    scaleResult.innerText = scales[selectedScale];
}

// وظيفة لعرض علامات التبويب
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// وظائف صناعة الناي
function calculateAll() {
    const totalLength = parseFloat(document.getElementById("length").value);

    if (isNaN(totalLength) || totalLength <= 0) {
        alert("الرجاء إدخال طول صحيح!");
        return;
    }

    const holePositions = [
        7.3 / 53,
        9.7 / 53,
        12.1 / 53,
        16.9 / 53,
        19.3 / 53,
        21.5 / 53,
        0.5
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

    const originalNaiLength = 59.2;
    const originalFukuk = [6.4, 6.5, 6.6, 6.7, 6.8, 7, 7.1, 7.2, 4.9];
    const ratio = totalLength / originalNaiLength;
    const newFukuk = originalFukuk.map(length => (length * ratio).toFixed(2));

    const fukukNames = [
        "الرداد",
        "الفك الثاني",
        "الفك الثالث",
        "الفك الرابع",
        "الفك الخامس",
        "الفك السادس",
        "الفك السابع",
        "الفك الثامن",
        "الخزنة"
    ];

    const fukukTableBody = document.querySelector("#fukukTable tbody");
    fukukTableBody.innerHTML = newFukuk.map((length, index) => `
        <tr><td>${fukukNames[index]}</td><td>${length}</td></tr>
    `).join('');

    document.getElementById("note").style.display = "block";
}

function calculateRadadDiameter() {
    const khaznaDiameter = parseFloat(document.getElementById("khaznaDiameter").value);

    if (isNaN(khaznaDiameter) || khaznaDiameter <= 0) {
        alert("الرجاء إدخال قطر خزنة صحيح!");
        return;
    }

    const radadDiameter = (khaznaDiameter - (khaznaDiameter * 0.191)).toFixed(2);
    document.getElementById("radadResult").innerText = `قطر الرداد: ${radadDiameter} سم`;
}

// وظائف صناعة الكولة
function calculateKawala() {
    const totalLength = parseFloat(document.getElementById('totalLength').value);

    if (isNaN(totalLength) || totalLength <= 0) {
        alert("الرجاء إدخال قيمة صحيحة!");
        return;
    }

    const jawRatios = [1.9, 14.3, 14.8, 16.4, 8.6];
    const sumJawRatios = jawRatios.reduce((a, b) => a + b, 0);
    const jawLengths = jawRatios.map(ratio => (ratio / sumJawRatios) * totalLength);

    const holePositions = [
        8.6 / 56,
        12.9 / 56,
        17.2 / 56,
        23.5 / 56,
        27.8 / 56,
        32.1 / 56
    ];
    const holes = holePositions.map(pos => (pos * totalLength).toFixed(2));

    const kawalaHolesTableBody = document.querySelector("#kawalaHolesTable tbody");
    kawalaHolesTableBody.innerHTML = `
        <tr><td>الثقب الأول</td><td>${holes[0]}</td></tr>
        <tr><td>الثقب الثاني</td><td>${holes[1]}</td></tr>
        <tr><td>الثقب الثالث</td><td>${holes[2]}</td></tr>
        <tr><td>الثقب الرابع</td><td>${holes[3]}</td></tr>
        <tr><td>الثقب الخامس</td><td>${holes[4]}</td></tr>
        <tr><td>الثقب السادس</td><td>${holes[5]}</td></tr>
    `;

    const fukukNames = [
        "الرداد",
        "الفك الثاني",
        "الفك الثالث",
        "الفك الرابع",
        "الفك الخامس (فك الخزنة)"
    ];

    const kawalaFukukTableBody = document.querySelector("#kawalaFukukTable tbody");
    kawalaFukukTableBody.innerHTML = jawLengths.map((length, index) => `
        <tr><td>${fukukNames[index]}</td><td>${length.toFixed(2)} سم</td></tr>
    `).join('');
}
