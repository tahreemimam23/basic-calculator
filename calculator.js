function display(val) {
    document.getElementById('final').value+=val
}
function solve() {
    var expr=document.getElementById('final').value
    var soln=eval(expr)
    document.getElementById('final').value=soln
}
function c() {
    document.getElementById('final').value=""
}
function ce() {
    var text=document.getElementById('final').value
    text=text.slice(0,-1)
    document.getElementById('final').value=text
}
function percent() {
    num=document.getElementById('final').value
    num=eval(num/100)
    document.getElementById('final').value=num
}