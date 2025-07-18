// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties
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

// 5. Example usage
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

console.log('Teacher:', teacher3);
console.log('Director:', director1);
console.log('Print Teacher:', printTeacher('John', 'Doe')); // J. Doe
