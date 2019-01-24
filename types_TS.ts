let myStr : string = "new String variable";
document.body.appendChild(CreateLabel(myStr, 'String'));

let myNum: number = 123;
document.body.appendChild(CreateLabel(myNum, 'Number'));

let myBool: Boolean = true;

if(myBool){
    document.body.appendChild(CreateLabel(myBool, 'BOOLEAN'));
}

let myArrNum: Number[] = [1,2,3,4,5,6];
document.body.appendChild(CreateLabel(myArrNum, 'Number[ ]'));

let myArrStr : String[] = ['Hello', 'Good', 'Morning'];
document.body.appendChild(CreateLabel(myArrStr, 'String[ ]'));

let myArrAny : any[] = ['Hero', 'No', 1, 3, 6];
document.body.appendChild(CreateLabel(myArrAny, 'ANY[ ]'));

//functions
function CreateLabel(getData, type) {
    var label = document.createElement('h3');
    var labelContent = document.createTextNode( 'Type of '+ type +' => ' +getData);
    label.appendChild(labelContent);
    return label;
}


