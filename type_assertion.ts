let myName ;
myName = 'Shahbaaz';

let data: Number = (<string>myName).length;

document.getElementById('str').innerHTML = (myName);
document.getElementById('num').innerHTML = (data.toString());

(myName as Number);
myName = 123;
if(myName == 123){
    document.getElementById('bool').innerHTML = ('true->'+myName);
}else{
    document.getElementById('bool').innerHTML = ('False->'+myName);
}

