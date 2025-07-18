"use strict";
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
// 1. Create and export constants for subjects
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
// 2. Create and export a Teacher object with experienceTeachingC = 10
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
// 3. For Cpp subject
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// 4. For Java subject
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// 5. For React subject
console.log('React');
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
