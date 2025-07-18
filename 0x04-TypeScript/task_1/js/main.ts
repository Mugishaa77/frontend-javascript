// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// 3. Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Implement printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 5. StudentClass Interfaces
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 6. StudentClass Implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// 7. Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const student = new StudentClass('Alice', 'Smith');

console.log('Teacher:', teacher3);
console.log('Director:', director1);
console.log('Print Teacher:', printTeacher('John', 'Doe')); // J. Doe
console.log('Student Display Name:', student.displayName()); // Alice
console.log('Student Work:', student.workOnHomework()); // Currently working
