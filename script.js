// تعريف المتغيّر _0x5bde بشكلٍ عام (لتشفير بعض السلاسل)
var _0x5bde = [
  "play",         // 0
  "paused",       // 1
  "currentTime",  // 2
  "innerText",    // 3
  "▶",           // 4 (رمز التشغيل)
  "■",           // 5 (رمز الإيقاف)
  "split",        // 6
  " - "          // 7
];

var audioPlayers = {};

var scales = {
  "دو": "دو - ري - مي نصف بيمول - فا - صول - لا - سي نصف بيمول - دو",
  "ري بيمول": "ري بيمول - مي بيمول - فا نصف بيمول - صول بيمول - لا بيمول - سي بيمول - دو نصف بيمول - ري بيمول",
  "ري": "ري - مي - فا نصف دييز - صول - لا - سي - دو نصف دييز - ري",
  "مي بيمول": "مي بيمول - فا - صول نصف بيمول - لا بيمول - سي بيمول - دو - ري نصف بيمول - مي بيمول",
  "مي": "مي - فا دييز - صول نصف دييز - لا - سي - دو دييز - ري نصف دييز - مي",
  "فا": "فا - صول - لا نصف بيمول - سي بيمول - دو - ري - مي نصف بيمول - فا",
  "صول بيمول": "صول بيمول - لا بيمول - لا نصف دييز - سي - ري بيمول - مي بيمول - فا نصف بيمول - صول بيمول",
  "صول": "صول - لا - سي نصف بيمول - دو - ري - مي - فا نصف دييز - صول",
  "لا بيمول": "لا بيمول - سي بيمول - دو نصف بيمول - ري بيمول - مي بيمول - فا - صول نصف بيمول - لا بيمول",
  "لا": "لا - سي - دو نصف دييز - ري - مي - فا دييز - صول نصف دييز - لا",
  "سي بيمول": "سي بيمول - دو - ري نصف بيمول - مي بيمول - فا - صول - لا نصف دييز - سي بيمول",
  "سي": "سي - دو دييز - ري نصف دييز - مي - فا دييز - صول دييز - لا نصف دييز - سي",
  // خيار السلم الموسيقي الكامل (علامات الثلاث أرباع)
  "سلم موسيقي كامل": "ري نصف بيمول - دو نصف دييز - مي نصف بيمول - فا نصف دييز - صول نصف بيمول - لا نصف بيمول - لا نصف دييز - سي نصف بيمول - سي نصف دييز"
};

var noteAudioMapping = {
  "دو": "https://dl.dropboxusercontent.com/scl/fi/z4jgny5lj0srv5x9x5x4w/.mp3?rlkey=v7mlmwehjo587k5mvl9zf17zw",
  "دو دييز": "https://dl.dropboxusercontent.com/scl/fi/h8esky1ivrmuizhstxxsf/.mp3?rlkey=k9qgng4pw5infgbls4oos6kve",
  "دو نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/gz2in1o2q20vflkbmwy8o/.mp3?rlkey=r94ctxnwc4o5tj3exy2u9ugea",
  "دو نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/8ewokvjeonoff5d57q2f4/.mp3?rlkey=tz3xgs9g9msxl8nx68udu1nqy",
  "ري بيمول": "https://dl.dropboxusercontent.com/scl/fi/n3filph5y7rfn4jw8ifcp/.mp3?rlkey=zmb2l5i4tqyfqtdlv88psrhtf",
  "ري": "https://dl.dropboxusercontent.com/scl/fi/rjc587twpi2mvgg8lk3yw/.mp3?rlkey=8duzurj9ylihuablinc5jie4n",
  "ري نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/wyj36xdz8rbsh3mpyae2d/.mp3?rlkey=m3i1nxlydnp7p2lkdo14pgcff",
  "ري دييز": "https://dl.dropboxusercontent.com/scl/fi/t1r698sornyx4e27qr5j0/.mp3?rlkey=r2jhud3lsksr8okwrius96y4o",
  "ري نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/svd5n1g1z0r5z5s5y0xqs/.mp3?rlkey=9lsq4tpzq7xwcqlwwb5kz82iq",
  "مي بيمول": "https://dl.dropboxusercontent.com/scl/fi/t1r698sornyx4e27qr5j0/.mp3?rlkey=r2jhud3lsksr8okwrius96y4o",
  "مي": "https://dl.dropboxusercontent.com/scl/fi/jbv0a5p8xmkn7jiziqr0g/.mp3?rlkey=s7bgznzol6wgygcfl431ao4lb",
  "مي نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/dhl7rlqb3hnqpj28m2j1v/.mp3?rlkey=6c1q8tsuq19w2wphyqv6v5dgm",
  "فا": "https://dl.dropboxusercontent.com/scl/fi/8r1mcp0whqd00oz1lgmvq/.mp3?rlkey=1s9ahhhkpspko8y26czgtloa8",
  "فا دييز": "https://dl.dropboxusercontent.com/scl/fi/kkgdfhoif25848m75bcar/.mp3?rlkey=tl218v4jpqgr9ij1kh14fz8c8",
  "فا نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/w7op6252t2bgtbul8w6pg/.mp3?rlkey=65gt6e4biqgx72en1dbt5oxwn",
  "فا نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/qg2n65zylzepbvjdv7yrl/.mp3?rlkey=caxwu1ohyv697c5o3q9117vct",
  "صول بيمول": "https://dl.dropboxusercontent.com/scl/fi/vx3zik0e9kohqhpw1vwx0/.mp3?rlkey=1d3jolxpautxqysnt0xsuvucs",
  "صول": "https://dl.dropboxusercontent.com/scl/fi/llva6p2t7mjpgjykgaun7/.mp3?rlkey=emkdn3p51f5j6t8fj4s8xljr5",
  "صول دييز": "https://dl.dropboxusercontent.com/scl/fi/ljlihgr4gzhds1gi37i7t/.mp3?rlkey=5204x7yyqqo9tiexntridgkbc",
  "صول نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/dhlr6owrtt8276suyvnws/.mp3?rlkey=ww3667fhy3adjg5hk2tnpzrvy",
  "صول نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/1kqv5htfxm9mjlgfeeup9/.mp3?rlkey=g0tj2ywg88wz0e74t4nkayag8",
  "لا بيمول": "https://dl.dropboxusercontent.com/scl/fi/tcy304d5gynryksy70ttt/.mp3?rlkey=2bv9fi9ire494zrjndmf45g4c",
  "لا": "https://dl.dropboxusercontent.com/scl/fi/3rc1o0zck2mya1tb5rrhr/.mp3?rlkey=9ocdux2cg2kx8ndqkimh1f9gq",
  "لا دييز": "https://dl.dropboxusercontent.com/scl/fi/jiyfibu441sc03uycezq0/.mp3?rlkey=nwcw5mmb3coo4ymq4vokks6i3",
  "لا نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/3pxpbpqdv9cshkmfrewn8/.mp3?rlkey=go18adx4y318k1z5zygf6jb7x",
  "لا نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/ml42cxnssxyagix5umds2/.mp3?rlkey=457ugly1dsy4v71nuai591ir9",
  "سي بيمول": "https://dl.dropboxusercontent.com/scl/fi/s5vb3crgs3ov8pz6xkqwb/.mp3?rlkey=adecc3p9ptsq3m2y6y56v6srz",
  "سي": "https://dl.dropboxusercontent.com/scl/fi/2aex0qs61yjdjhh3135ce/.mp3?rlkey=guyf2uh2gzjvdwd4m3v9ink6q",
  "سي نصف بيمول": "https://dl.dropboxusercontent.com/scl/fi/efr4t1zutt4l9m9qx2ocx/.mp3?rlkey=uru50p2sn4rvgvcjhikd8mk56",
  "سي نصف دييز": "https://dl.dropboxusercontent.com/scl/fi/az7muuh9md35tjafx2xes/.mp3?rlkey=tdujey33ahe2h8fcugr5t7ftn"
};

function _0x2d7e(id) {
  return document.getElementById(id);
}

function togglePlay(btn, note) {
  if (audioPlayers[note]) {
    if (!audioPlayers[note][_0x5bde[1]]) {  // "paused"
      audioPlayers[note].pause();
      audioPlayers[note][_0x5bde[2]] = 0;      // "currentTime"
      btn[_0x5bde[3]] = _0x5bde[4];            // "innerText" = "▶"
    } else {
      audioPlayers[note].play();
      btn[_0x5bde[3]] = _0x5bde[5];            // "innerText" = "■"
    }
  } else {
    var audio = new Audio(noteAudioMapping[note]);
    audioPlayers[note] = audio;
    audio.play();
    btn[_0x5bde[3]] = _0x5bde[5];
    audio.onended = function () {
      btn[_0x5bde[3]] = _0x5bde[4];
    };
  }
}

function showScale() {
  var scaleVal = _0x2d7e("scaleSelect").value,
      scaleDiv = _0x2d7e("scaleResult"),
      scaleStr = scales[scaleVal] || "السلم غير متوفر",
      notesArr = scaleStr[_0x5bde[6]](_0x5bde[7]); // "split" on " - "
  var html = "<div class=\"scale-grid\">";
  notesArr.forEach(function(note, idx) {
    html += "<div class=\"scale-card\"><div class=\"note-index\">" + (idx + 1) + "</div><div class=\"note-name\">" + note + "</div><button class=\"play-note\" onclick=\"togglePlay(this, '" + note + "')\">" + _0x5bde[4] + "</button></div>";
    if (idx < notesArr.length - 1) {
      html += "<div class=\"scale-arrow\">→</div>";
    }
  });
  html += "</div>";
  scaleDiv.innerHTML = html;
}

function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(function(el) {
    el.classList.remove("active");
  });
  document.querySelectorAll('.tab-button').forEach(function(el) {
    el.classList.remove("active");
  });
  _0x2d7e(tabName).classList.add("active");
  document.querySelector("button[onclick=\"showTab('" + tabName + "')\"]").classList.add("active");
}

function validateInput(id) {
  var inp = _0x2d7e(id);
  if (!inp.value || parseFloat(inp.value) <= 0) {
    inp.classList.add("error");
    return false;
  } else {
    inp.classList.remove("error");
    return true;
  }
}

function calculateAll() {
  if (!validateInput("length")) {
    alert("الرجاء إدخال طول صحيح للناي!");
    return;
  }
  var totalLength = parseFloat(_0x2d7e("length").value),
      ratios = [7.3/53, 9.7/53, 12.1/53, 16.9/53, 19.3/53, 21.5/53, 0.5],
      holes = ratios.map(function(ratio) { return (ratio * totalLength).toFixed(2); });
  var resHTML = "<div class=\"result-table\"><table><thead><tr><th colspan=\"2\">أماكن الثقوب</th></tr><tr><th>الثقب</th><th>المسافة (سم)</th></tr></thead><tbody>" +
      "<tr><td>الثقب الأول</td><td>" + holes[0] + "</td></tr>" +
      "<tr><td>الثقب الثاني</td><td>" + holes[1] + "</td></tr>" +
      "<tr><td>الثقب الثالث</td><td>" + holes[2] + "</td></tr>" +
      "<tr><td>الثقب الرابع</td><td>" + holes[3] + "</td></tr>" +
      "<tr><td>الثقب الخامس</td><td>" + holes[4] + "</td></tr>" +
      "<tr><td>الثقب السادس</td><td>" + holes[5] + "</td></tr>" +
      "<tr><td>الثقب السابع (الخلفي)</td><td>" + holes[6] + "</td></tr>" +
      "</tbody></table>";
  var originalLength = 59.2,
      fukuk = [6.4, 6.5, 6.6, 6.7, 6.8, 7, 7.1, 7.2, 4.9],
      factor = totalLength / originalLength,
      newFukuk = fukuk.map(function(val) { return (val * factor).toFixed(2); }),
      fukukNames = ["الرداد", "الفك الثاني", "الفك الثالث", "الفك الرابع", "الفك الخامس", "الفك السادس", "الفك السابع", "الفك الثامن", "الخزنة"];
  resHTML += "<table><thead><tr><th colspan=\"2\">أطوال الفكوك</th></tr><tr><th>الفك</th><th>الطول (سم)</th></tr></thead><tbody>";
  newFukuk.forEach(function(val, idx) {
    resHTML += "<tr><td>" + fukukNames[idx] + "</td><td>" + val + "</td></tr>";
  });
  resHTML += "</tbody></table></div><button class=\"copy-button\" onclick=\"copyResult('naiResults')\">نسخ النتائج</button>";
  _0x2d7e("naiResults").innerHTML = resHTML;
}

function calculateRadadDiameter() {
  if (!validateInput("khaznaDiameter")) {
    alert("الرجاء إدخال قطر خزنة صحيح!");
    return;
  }
  var diam = parseFloat(_0x2d7e("khaznaDiameter").value),
      radad = (diam - (diam * 0.191)).toFixed(2);
  _0x2d7e("radadResult").innerHTML = "<p>قطر الرداد: " + radad + " سم</p><button class=\"copy-button\" onclick=\"copyResult('radadResult')\">نسخ النتيجة</button>";
}

function calculateKawala() {
  if (!validateInput("totalLength")) {
    alert("الرجاء إدخال طول الكولة!");
    return;
  }
  var total = parseFloat(_0x2d7e("totalLength").value),
      jawRatios = [1.9, 14.3, 14.8, 16.4, 8.6],
      sumJaw = jawRatios.reduce(function(a, b){ return a + b; }, 0),
      jawLengths = jawRatios.map(function(ratio){ return (ratio/sumJaw) * total; }),
      holeRatios = [8.6/56, 12.9/56, 17.2/56, 23.5/56, 27.8/56, 32.1/56],
      holes = holeRatios.map(function(r){ return (r * total).toFixed(2); });
  var resHTML = "<div class=\"result-table\"><table><thead><tr><th colspan=\"2\">أماكن الثقوب</th></tr><tr><th>الثقب</th><th>المسافة (سم)</th></tr></thead><tbody>" +
      "<tr><td>الثقب الأول</td><td>" + holes[0] + "</td></tr>" +
      "<tr><td>الثقب الثاني</td><td>" + holes[1] + "</td></tr>" +
      "<tr><td>الثقب الثالث</td><td>" + holes[2] + "</td></tr>" +
      "<tr><td>الثقب الرابع</td><td>" + holes[3] + "</td></tr>" +
      "<tr><td>الثقب الخامس</td><td>" + holes[4] + "</td></tr>" +
      "<tr><td>الثقب السادس</td><td>" + holes[5] + "</td></tr>" +
      "</tbody></table>";
  var origLen = 59.2,
      fukuk = [6.4, 6.5, 6.6, 6.7, 6.8, 7, 7.1, 7.2, 4.9],
      factor = total / origLen,
      newFukuk = fukuk.map(function(val){ return (val * factor).toFixed(2); }),
      names = ["الرداد", "الفك الثاني", "الفك الثالث", "الفك الرابع", "الفك الخامس", "الفك السادس", "الفك السابع", "الفك الثامن", "الخزنة"];
  resHTML += "<table><thead><tr><th colspan=\"2\">أطوال الفكوك</th></tr><tr><th>الفك</th><th>الطول (سم)</th></tr></thead><tbody>";
  newFukuk.forEach(function(val, idx){
    resHTML += "<tr><td>" + names[idx] + "</td><td>" + val + "</td></tr>";
  });
  resHTML += "</tbody></table></div><button class=\"copy-button\" onclick=\"copyResult('kawalaResults')\">نسخ النتائج</button>";
  _0x2d7e("kawalaResults").innerHTML = resHTML;
}

function copyResult(id) {
  var el = _0x2d7e(id);
  var range = document.createRange();
  range.selectNode(el);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  try {
    document.execCommand("copy");
    alert("تم نسخ النتائج إلى الحافظة");
  } catch (err) {
    alert("تعذر نسخ النتائج");
  }
  window.getSelection().removeAllRanges();
}

function resetSection(section) {
  if (section === "nai") {
    _0x2d7e("length").value = "";
    _0x2d7e("naiResults").innerHTML = "";
    _0x2d7e("khaznaDiameter").value = "";
    _0x2d7e("radadResult").innerHTML = "";
    removeError("length");
    removeError("khaznaDiameter");
  } else if (section === "kawala") {
    _0x2d7e("totalLength").value = "";
    _0x2d7e("kawalaResults").innerHTML = "";
    removeError("totalLength");
  }
}

function resetInput(inpId, resId) {
  _0x2d7e(inpId).value = "";
  _0x2d7e(resId).innerHTML = "";
  removeError(inpId);
}

function removeError(id) {
  _0x2d7e(id).classList.remove("error");
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".footer").classList.add("show");
  }, 1000);
});
