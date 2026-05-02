var n=0;
function price(unit_price){
    return Math.round(unit_price).toLocaleString();
}
function amount(unit_price,qty){
    return Math.round(unit_price * qty).toLocaleString();
}
function total_amount(total){
    return Math.round(total).toLocaleString();
}
function increas() {
    n++;
    return n;
}
function rowNumber(index) {
    return Number(index) + 1;
}