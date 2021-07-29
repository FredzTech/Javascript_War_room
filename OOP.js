class secondary{
    constructor(streams,forms){
        this.streams=streams;
        this.forms=forms;
    }
};

let riverside = new secondary(3,"form-2s");
let kabati=new secondary(4,"Form-1s");

console.log(typeof(riverside.forms));
console.log(typeof(kabati.streams));

kabati.teachers=13;

// secondary.teachers=teachers;

console.log(kabati);
console.log(typeof(secondary));

//CLASS INHERITANCE 
    // Must use the super method before the this. properties and the properties must still be defined 
    //Now super shows that the defined properties have been borrowed and the you go ahead to define yours

class universities extends secondary{
    constructor(streams,forms,lecturers,students){
        super(streams,forms);
        this.lecturers=lecturers;
        this.students=students;
    }

};


let dedan=new universities(3,'lecture_Halls','shitty','dope');

console.log(dedan);