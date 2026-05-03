var n=0;
function fmtUsd(x){
    var n = Number(x);
    if (!isFinite(n)) return '$0.00';
    return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function price(unit_price){
    return fmtUsd(unit_price);
}
function amount(unit_price,qty){
    return fmtUsd(unit_price * qty);
}
function total_amount(total){
    return fmtUsd(total);
}
function increas() {
    n++;
    return n;
}
function rowNumber(index) {
    return Number(index) + 1;
}