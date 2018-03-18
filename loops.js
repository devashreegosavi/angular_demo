var arr = new Array();
arr.push('Android');
arr.push('iOS');
arr.push('windows');
arr.push('java');
arr.push('php');
var nrr = [
    [{}, {}, {}],
    [{}, {}, {}]
];
var arrOth = new Array();
arrOth.forEach(function (el) {
    el.forEach(function (elIn) { return console.log(elIn); });
});
for (var i = 0; i < nrr.length; i++) {
    for (var j = 0; j < nrr[i].length; j++) {
    }
}
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(function (el, ind) { return console.log(ind, el); });
