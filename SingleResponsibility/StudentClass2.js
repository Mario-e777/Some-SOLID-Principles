/* StudentRegister.js */
class StudentRegister {
  private name: string;
  private age: number;
  
  constructor(name: string, age: number) {
  	this.name = name;
    this.age = age;
  };

  get studentName() {
  	return this.name;
  };
  
  get studentAge() {
    return this.age;
  };
};

/* StudentResult.js */
class StudentResult {
  	private results: any;
  
		constructor(student: StudentRegister) {
      this.results = {
      	name: student.studentName,
        age: student.studentAge,
      	calif: '7',
      	time: '31:00min',
      };
    };
  
    public calculateStudentResult() {
      console.log(`Student results: ${JSON.stringify(this.results)}`);
    };
};

/* StudentEmails.js */
class StudentEmails { 
  	student: StudentRegister;
  	emailText: string;
  
  	constructor(student: StudentRegister, emailText: string) {
      this.student = student;
      this.emailText = emailText;
    }
  
    sendEmail() {
        console.log(`Email text: This is ${this.student.studentName}, and I have ${this.student.studentAge}. \n${this.emailText}`);
    };
};

const STUDENT_1 = new StudentRegister('LuxR', 27);
new StudentResult(STUDENT_1).calculateStudentResult();
new StudentEmails(STUDENT_1, 'I,m interested in the SOLID design patterns course...').sendEmail();
