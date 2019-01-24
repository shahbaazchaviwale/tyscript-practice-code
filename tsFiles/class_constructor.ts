class developer {
    fullName : string; 
    contact: number;
    email: any;
    desgination: string[];
    skills: any[];
    lastCompanyName: any;

    constructor(data: developer){
        this.fullName = data.fullName;
        this.contact = data.contact;
        this.email = data.email ;
        this.desgination = data.desgination;
        this.skills = data.skills;
        this.lastCompanyName = data.lastCompanyName;
    }

    getFullDetails () {
        return[{
            'fullName' : this.fullName,
            'contact' : this.contact,
            'email' : this.email,
            'desgination': this.desgination,
            'skills': this.skills,
            'lastCompanyName': this.lastCompanyName
        }];
    }


}
let obj = {     
            'fullName': 'shahbaaz',
            'contact':7896542,
            'email' : 'shahz@gmail.com',
            'desgination': 'Sr. Developer',
            'skills': ['HTML5', 'CSS3', 'JAVASCRIPT'],
            'lastCompanyName': 'TECH SFS'
        };

let objDeveloper = new developer((obj as any));
console.log(objDeveloper.getFullDetails());

