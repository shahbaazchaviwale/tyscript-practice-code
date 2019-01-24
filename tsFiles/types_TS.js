var myStr = "new String variable";
document.body.appendChild(CreateLabel(myStr, 'String'));
var myNum = 123;
document.body.appendChild(CreateLabel(myNum, 'Number'));
var myBool = true;
if (myBool) {
    document.body.appendChild(CreateLabel(myBool, 'BOOLEAN'));
}
var myArrNum = [1, 2, 3, 4, 5, 6];
document.body.appendChild(CreateLabel(myArrNum, 'Number[ ]'));
var myArrStr = ['Hello', 'Good', 'Morning'];
document.body.appendChild(CreateLabel(myArrStr, 'String[ ]'));
var myArrAny = ['Hero', 'No', 1, 3, 6];
document.body.appendChild(CreateLabel(myArrAny, 'ANY[ ]'));
//functions
function CreateLabel(getData, type) {
    var label = document.createElement('h3');
    var labelContent = document.createTextNode('Type of ' + type + ' => ' + getData);
    label.appendChild(labelContent);
    return label;
}
//# sourceMappingURL=types_TS.js.map