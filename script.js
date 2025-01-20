// ملفات JSON للغات
const languages = {
    ar: {
        tabNai: "صناعة الناي",
        tabKawala: "صناعة الكولة",
        naiTitle: "حساب مقاسات الناي - الثقوب والفكوك",
        lengthLabel: "أدخل طول الناي (بالسنتيمتر):",
        calculateButton: "حساب الثقوب والفكوك",
        noteTitle: "ملاحظة:",
        noteText1: "- يجب رفع الثقب الخلفي 5 ملم باتجاه الخزنة.",
        noteText2: "- بداية قياس أماكن الثقوب تبدأ من أول الرداد باتجاه الخزنة.",
        holesHeader: "أماكن الثقوب",
        holeLabel: "الثقب",
        distanceLabel: "المسافة (سم)",
        fukukHeader: "أطوال الفكوك",
        fukLabel: "الفك",
        lengthLabel2: "الطول (سم)",
        radadTitle: "حساب قطر الرداد بناءً على قطر الخزنة",
        khaznaLabel: "أدخل قطر الخزنة (بالسنتيمتر):",
        radadButton: "حساب قطر الرداد",
        kawalaTitle: "حساب أطوال الفكوك وأماكن الثقوب للكولة",
        kawalaLengthLabel: "أدخل طول الكولة (بالسنتيمتر):",
        kawalaButton: "احسب",
        kawalaHolesHeader: "أماكن الثقوب",
        kawalaHoleLabel: "الثقب",
        kawalaDistanceLabel: "المسافة (سم)",
        kawalaFukukHeader: "أطوال الفكوك",
        kawalaFukLabel: "الفك",
        kawalaLengthLabel2: "الطول (سم)",
        footerText: "تصميم وتطوير:",
        groupLink: "جروب تعليم آلة الكولة على الفيسبوك"
    },
    en: {
        tabNai: "Nay Making",
        tabKawala: "Kawala Making",
        naiTitle: "Calculate Nay Measurements - Holes and Joints",
        lengthLabel: "Enter Nay length (in cm):",
        calculateButton: "Calculate Holes and Joints",
        noteTitle: "Note:",
        noteText1: "- The back hole should be raised 5mm towards the Khazna.",
        noteText2: "- The measurement of hole positions starts from the Radad towards the Khazna.",
        holesHeader: "Hole Positions",
        holeLabel: "Hole",
        distanceLabel: "Distance (cm)",
        fukukHeader: "Joints Lengths",
        fukLabel: "Joint",
        lengthLabel2: "Length (cm)",
        radadTitle: "Calculate Radad Diameter Based on Khazna Diameter",
        khaznaLabel: "Enter Khazna diameter (in cm):",
        radadButton: "Calculate Radad Diameter",
        kawalaTitle: "Calculate Kawala Joints and Hole Positions",
        kawalaLengthLabel: "Enter Kawala length (in cm):",
        kawalaButton: "Calculate",
        kawalaHolesHeader: "Hole Positions",
        kawalaHoleLabel: "Hole",
        kawalaDistanceLabel: "Distance (cm)",
        kawalaFukukHeader: "Joints Lengths",
        kawalaFukLabel: "Joint",
        kawalaLengthLabel2: "Length (cm)",
        footerText: "Designed and Developed by:",
        groupLink: "Kawala Learning Group on Facebook"
    },
    fr: {
        tabNai: "Fabrication de Nay",
        tabKawala: "Fabrication de Kawala",
        naiTitle: "Calcul des mesures du Nay - Trous et Joints",
        lengthLabel: "Entrez la longueur du Nay (en cm):",
        calculateButton: "Calculer les Trous et Joints",
        noteTitle: "Remarque:",
        noteText1: "- Le trou arrière doit être surélevé de 5 mm vers la Khazna.",
        noteText2: "- La mesure des positions des trous commence du Radad vers la Khazna.",
        holesHeader: "Positions des Trous",
        holeLabel: "Trou",
        distanceLabel: "Distance (cm)",
        fukukHeader: "Longueurs des Joints",
        fukLabel: "Joint",
        lengthLabel2: "Longueur (cm)",
        radadTitle: "Calculer le Diamètre du Radad Basé sur le Diamètre de la Khazna",
        khaznaLabel: "Entrez le diamètre de la Khazna (en cm):",
        radadButton: "Calculer le Diamètre du Radad",
        kawalaTitle: "Calcul des Joints et Positions des Trous de la Kawala",
        kawalaLengthLabel: "Entrez la longueur de la Kawala (en cm):",
        kawalaButton: "Calculer",
        kawalaHolesHeader: "Positions des Trous",
        kawalaHoleLabel: "Trou",
        kawalaDistanceLabel: "Distance (cm)",
        kawalaFukukHeader: "Longueurs des Joints",
        kawalaFukLabel: "Joint",
        kawalaLengthLabel2: "Longueur (cm)",
        footerText: "Conçu et Développé par:",
        groupLink: "Groupe d'Apprentissage de la Kawala sur Facebook"
    }
};

// تغيير اللغة
function changeLanguage(lang) {
    const texts = languages[lang];
    for (const key in texts) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = texts[key];
        }
    }
}

// باقي الوظائف (calculateAll, calculateRadadDiameter, calculateKawala) تبقى كما هي
