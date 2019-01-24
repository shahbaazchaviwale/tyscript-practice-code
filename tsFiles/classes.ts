
class Person{
    firstName: string;
    lastName: string;
    age: number;
    qualification: any[];
    address: any;
    contact: any;

    getPersonName (){
        return "First Name : "+ this.firstName 
        +"<br> Last Name : "+this.lastName;
    }
    getPersonDetails (){
        return "<br> Age : "+ this.age
                +"<br> Qualification : "+ this.qualification
                +"<br> Address : "+this.address
                +"<br> Contact : "+this.contact;
    }
    getFullDetails () {
        return [{
            "Full Name" : this.firstName +' ' +this.lastName,
            "Age" : this.age,
            "Qualification": this.qualification,
            "Address": this.address,
            "Contact": this.contact
        }];
    }

}

let objPerson1 = new Person();
objPerson1.firstName = "Shahbaaz";
objPerson1.lastName = "Chaviwale";
objPerson1.address = "BTM 2nd stage";
objPerson1.age = 25;
objPerson1.contact=8904532737;
objPerson1.qualification=['SSLC', 'PUC', 'BCA', 'MCA'];

let div1 = document.createElement('div');
div1.innerHTML = objPerson1.getPersonName() + objPerson1.getPersonDetails();
document.body.appendChild(div1);
 
let newLine1 = document.createElement('hr');
document.body.appendChild(newLine1);

let objPerson2 = new Person();
objPerson2.firstName = "Mayu";
objPerson2.lastName = "Pawar";
objPerson2.address = "BTM 3nd stage";
objPerson2.age = 26;
objPerson2.contact=844795126;
objPerson2.qualification=['SSLC', 'PUC', 'ENGGI'];

let div2 = document.createElement('div');
div2.innerHTML = objPerson2.getPersonName() + objPerson2.getPersonDetails()  ;
 

document.body.appendChild(div2);
console.log( objPerson1.getFullDetails());
console.log( objPerson2.getFullDetails());
