var developer = /** @class */ (function () {
    function developer(data) {
        this.fullName = data.fullName;
        this.contact = data.contact;
        this.email = data.email;
        this.desgination = data.desgination;
        this.skills = data.skills;
        this.lastCompanyName = data.lastCompanyName;
    }
    developer.prototype.getFullDetails = function () {
        return [{
                'fullName': this.fullName,
                'contact': this.contact,
                'email': this.email,
                'desgination': this.desgination,
                'skills': this.skills,
                'lastCompanyName': this.lastCompanyName
            }];
    };
    return developer;
}());
var obj = {
    'fullName': 'shahbaaz',
    'contact': 7896542,
    'email': 'shahz@gmail.com',
    'desgination': 'Sr. Developer',
    'skills': ['HTML5', 'CSS3', 'JAVASCRIPT'],
    'lastCompanyName': 'TECH SFS'
};
var objDeveloper = new developer(obj);
console.log(objDeveloper.getFullDetails());
//# sourceMappingURL=class_constructor.js.map