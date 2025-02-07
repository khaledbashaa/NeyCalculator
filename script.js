// script.obfuscated.js
(function(_0x56a4, _0x5bde){
    var _0x1c3d = function(_0x2ef3){
        while(--_0x2ef3){
            _0x56a4.push(_0x56a4.shift());
        }
    };
    _0x1c3d(++_0x5bde);
}(_0x56a4 = [
    "play", "paused", "currentTime", "innerText", "▶", "■",
    "getElementById", "scaleSelect", "value", "scaleResult", "split", " - ",
    "scale-grid", "scale-card", "note-index", "note-name", "togglePlay", "addEventListener",
    "DOMContentLoaded", "querySelector", "footer", "classList", "add", "setTimeout"
], 0x106));
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
function _0x2d7e(_0x4571){ return document["getElementById"](_0x4571); }
function togglePlay(_0x3d27, _0x3bcd) {
    if(audioPlayers[_0x3bcd]){
        if(!audioPlayers[_0x3bcd]["paused"]){
            audioPlayers[_0x3bcd]["pause"]();
            audioPlayers[_0x3bcd]["currentTime"] = 0;
            _0x3d27["innerText"] = _0x5bde[4];
        } else {
            audioPlayers[_0x3bcd]["play"]();
            _0x3d27["innerText"] = _0x5bde[5];
        }
    } else {
        var _0x55e4 = new Audio(noteAudioMapping[_0x3bcd]);
        audioPlayers[_0x3bcd] = _0x55e4;
        _0x55e4["play"]();
        _0x3d27["innerText"] = _0x5bde[5];
        _0x55e4["onended"] = function(){
            _0x3d27["innerText"] = _0x5bde[4];
        };
    }
}
function showScale() {
    var _0x1f62 = _0x2d7e("scaleSelect")["value"],
        _0x453d = _0x2d7e("scaleResult"),
        _0x3a29 = scales[_0x1f62] || "السلم غير متوفر",
        _0x267b = _0x3a29["split"](_0x5bde[1]);
    var _0x3aef = "<div class=\"scale-grid\">";
    _0x267b["forEach"](function(_0x45d1, _0x1cd3){
        _0x3aef += "<div class=\"scale-card\"><div class=\"note-index\">" + ( _0x1cd3 + 1 ) + "</div><div class=\"note-name\">" + _0x45d1 + "</div><button class=\"play-note\" onclick=\"togglePlay(this, '" + _0x45d1 + "')\">" + _0x5bde[4] + "</button></div>";
        if(_0x1cd3 < _0x267b["length"] - 1){
            _0x3aef += "<div class=\"scale-arrow\">→</div>";
        }
    });
    _0x3aef += "</div>";
    _0x453d["innerHTML"] = _0x3aef;
}
function showTab(_0x35b8) {
    document["querySelectorAll"](".tab-content")["forEach"](function(_0x51b4){
        _0x51b4["classList"]["remove"]("active");
    });
    document["querySelectorAll"](".tab-button")["forEach"](function(_0x5a84){
        _0x5a84["classList"]["remove"]("active");
    });
    _0x2d7e(_0x35b8)["classList"]["add"]("active");
    document["querySelector"]("button[onclick=\"showTab('" + _0x35b8 + "')\"]")["classList"]["add"]("active");
}
function validateInput(_0x1503) {
    var _0x45f8 = _0x2d7e(_0x1503);
    if(!_0x45f8["value"] || parseFloat(_0x45f8["value"]) <= 0){
        _0x45f8["classList"]["add"]("error");
        return false;
    } else {
        _0x45f8["classList"]["remove"]("error");
        return true;
    }
}
function calculateAll() {
    if(!validateInput("length")){
        alert("الرجاء إدخال طول صحيح للناي!");
        return;
    }
    var _0x40da = parseFloat(_0x2d7e("length")["value"]),
        _0x4baf = [7.3/53, 9.7/53, 12.1/53, 16.9/53, 19.3/53, 21.5/53, 0.5],
        _0x2b8e = _0x4baf["map"](function(_0x2578){ return (_0x2578 * _0x40da).toFixed(2); });
    var _0x44a5 = "<div class=\"result-table\"><table><thead><tr><th colspan=\"2\">أماكن الثقوب</th></tr><tr><th>الثقب</th><th>المسافة (سم)</th></tr></thead><tbody>" +
        "<tr><td>الثقب الأول</td><td>" + _0x2b8e[0] + "</td></tr>" +
        "<tr><td>الثقب الثاني</td><td>" + _0x2b8e[1] + "</td></tr>" +
        "<tr><td>الثقب الثالث</td><td>" + _0x2b8e[2] + "</td></tr>" +
        "<tr><td>الثقب الرابع</td><td>" + _0x2b8e[3] + "</td></tr>" +
        "<tr><td>الثقب الخامس</td><td>" + _0x2b8e[4] + "</td></tr>" +
        "<tr><td>الثقب السادس</td><td>" + _0x2b8e[5] + "</td></tr>" +
        "<tr><td>الثقب السابع (الخلفي)</td><td>" + _0x2b8e[6] + "</td></tr>" +
        "</tbody></table>";
    var _0x3cfd = 59.2,
        _0x55a4 = [6.4,6.5,6.6,6.7,6.8,7,7.1,7.2,4.9],
        _0x31b2 = _0x40da/_0x3cfd,
        _0x173e = _0x55a4["map"](function(_0x4e8b){ return (_0x4e8b * _0x31b2).toFixed(2); }),
        _0x44e1 = ["الرداد","الفك الثاني","الفك الثالث","الفك الرابع","الفك الخامس","الفك السادس","الفك السابع","الفك الثامن","الخزنة"];
    _0x44a5 += "<table><thead><tr><th colspan=\"2\">أطوال الفكوك</th></tr><tr><th>الفك</th><th>الطول (سم)</th></tr></thead><tbody>";
    _0x173e["forEach"](function(_0x2f69, _0x3e24){ _0x44a5 += "<tr><td>" + _0x44e1[_0x3e24] + "</td><td>" + _0x2f69 + "</td></tr>"; });
    _0x44a5 += "</tbody></table></div><button class=\"copy-button\" onclick=\"copyResult('naiResults')\">نسخ النتائج</button>";
    _0x2d7e("naiResults")["innerHTML"] = _0x44a5;
}
function calculateRadadDiameter() {
    if(!validateInput("khaznaDiameter")){
        alert("الرجاء إدخال قطر خزنة صحيح!");
        return;
    }
    var _0x1c5f = parseFloat(_0x2d7e("khaznaDiameter")["value"]),
        _0x25a2 = (_0x1c5f - (_0x1c5f * 0.191)).toFixed(2);
    _0x2d7e("radadResult")["innerHTML"] = "<p>قطر الرداد: " + _0x25a2 + " سم</p><button class=\"copy-button\" onclick=\"copyResult('radadResult')\">نسخ النتيجة</button>";
}
function calculateKawala() {
    if(!validateInput("totalLength")){
        alert("الرجاء إدخال طول الكولة!");
        return;
    }
    var _0x4e29 = parseFloat(_0x2d7e("totalLength")["value"]),
        _0x1d67 = [1.9,14.3,14.8,16.4,8.6],
        _0x56e2 = _0x1d67.reduce(function(_0x19c5, _0x2b67){ return _0x19c5 + _0x2b67; }, 0),
        _0x2b9a = _0x1d67.map(function(_0x54d7){ return (_0x54d7/_0x56e2) * _0x4e29; }),
        _0x11f2 = [8.6/56,12.9/56,17.2/56,23.5/56,27.8/56,32.1/56],
        _0x34d1 = _0x11f2.map(function(_0x3e90){ return (_0x3e90 * _0x4e29).toFixed(2); });
    var _0x488d = "<div class=\"result-table\"><table><thead><tr><th colspan=\"2\">أماكن الثقوب</th></tr><tr><th>الثقب</th><th>المسافة (سم)</th></tr></thead><tbody>" +
        "<tr><td>الثقب الأول</td><td>" + _0x34d1[0] + "</td></tr>" +
        "<tr><td>الثقب الثاني</td><td>" + _0x34d1[1] + "</td></tr>" +
        "<tr><td>الثقب الثالث</td><td>" + _0x34d1[2] + "</td></tr>" +
        "<tr><td>الثقب الرابع</td><td>" + _0x34d1[3] + "</td></tr>" +
        "<tr><td>الثقب الخامس</td><td>" + _0x34d1[4] + "</td></tr>" +
        "<tr><td>الثقب السادس</td><td>" + _0x34d1[5] + "</td></tr>" +
        "</tbody></table>";
    var _0x5b78 = 59.2,
        _0x4112 = [6.4,6.5,6.6,6.7,6.8,7,7.1,7.2,4.9],
        _0x238d = _0x4e29/_0x5b78,
        _0x1e8c = _0x4112.map(function(_0x3f1d){ return (_0x3f1d * _0x238d).toFixed(2); }),
        _0x3bde = ["الرداد","الفك الثاني","الفك الثالث","الفك الرابع","الفك الخامس","الفك السادس","الفك السابع","الفك الثامن","الخزنة"];
    _0x488d += "<table><thead><tr><th colspan=\"2\">أطوال الفكوك</th></tr><tr><th>الفك</th><th>الطول (سم)</th></tr></thead><tbody>";
    _0x1e8c.forEach(function(_0x29d5, _0x3af2){
        _0x488d += "<tr><td>" + _0x3bde[_0x3af2] + "</td><td>" + _0x29d5 + "</td></tr>";
    });
    _0x488d += "</tbody></table></div><button class=\"copy-button\" onclick=\"copyResult('kawalaResults')\">نسخ النتائج</button>";
    _0x2d7e("kawalaResults").innerHTML = _0x488d;
}
function copyResult(_0x1c7a) {
    var _0x47e2 = _0x2d7e(_0x1c7a);
    var _0x3bb9 = document.createRange();
    _0x3bb9.selectNode(_0x47e2);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(_0x3bb9);
    try {
        document.execCommand("copy");
        alert("تم نسخ النتائج إلى الحافظة");
    } catch(_0x1fd4) {
        alert("تعذر نسخ النتائج");
    }
    window.getSelection().removeAllRanges();
}
function resetSection(_0x4b18) {
    if(_0x4b18==="nai"){
        _0x2d7e("length").value = "";
        _0x2d7e("naiResults").innerHTML = "";
        _0x2d7e("khaznaDiameter").value = "";
        _0x2d7e("radadResult").innerHTML = "";
        removeError("length");
        removeError("khaznaDiameter");
    } else if(_0x4b18==="kawala"){
        _0x2d7e("totalLength").value = "";
        _0x2d7e("kawalaResults").innerHTML = "";
        removeError("totalLength");
    }
}
function resetInput(_0x2f47, _0x55b8) {
    _0x2d7e(_0x2f47).value = "";
    _0x2d7e(_0x55b8).innerHTML = "";
    removeError(_0x2f47);
}
function removeError(_0x27ed) {
    _0x2d7e(_0x27ed).classList.remove("error");
}
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.querySelector(".footer").classList.add("show");
    }, 1000);
});
