class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name();
    }

    getId(){
        return this.id();
    }

    getEmail(){
        return this.email();
    }

    getRole(){
        return this.Employee();
    }
}
class Manager{
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName(){
        return this.name();
    }

    getId(){
        return this.id();
    }
    
    getEmail(){
        return this.email();
    }

    getOfficeNumber(){
        return this.officeNumber();
    }

    getRole(){
        return this.Manager();
    }
}

class Engineer{
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName(){
        return this.name();
    }

    getId(){
        return this.id();
    }

    getEmail(){
        return this.email();
    }

    getGithub(){
        return this.github();
    }

    gitRole(){
        return this.Engineer();
    }
}

class Intern {
    constructor(name, id ,email, school){
        this.name = name;
        this.id = id; 
        this.email = email;
        this.school = school;
    }

    getName(){
        return this.name();
    }

    getId(){
        return this.id();
    }

    getEmail(){
        return this.email();
    }

    getSchool(){
        return this.school();
    }
        
    getRole(){
        return this.Intern();
    }
}
