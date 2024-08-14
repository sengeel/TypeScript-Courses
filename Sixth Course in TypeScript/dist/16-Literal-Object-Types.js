"use strict";
function studentDB(student) {
    return student.fullName;
}
console.log(studentDB({ fullName: "Jane Williams" }));
console.log(studentDB({ fullName: "Mark Smith" }));
