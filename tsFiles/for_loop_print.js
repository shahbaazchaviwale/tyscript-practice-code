var toAdd = document.createDocumentFragment();
function loop(limit) {
    var i;
    for (i = 1; i <= limit; i++) {
        console.log(i);
        var div = document.createElement('div');
        var divContent = document.createTextNode(i);
        div.appendChild(divContent);
        toAdd.appendChild(div);
    }
    return document.getElementById('list').appendChild(toAdd);
}
loop(5);
//# sourceMappingURL=for_loop_print.js.map