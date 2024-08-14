// type Student = {fullName : string}

// function studentDB(student: {fullName : string}) :string {
//     return student.fullName;
// }

function studentDB({fullName}: {fullName : string}) :string {
    return fullName;
}

// const student = {fullName: "Jane Williams"}

console.log(studentDB({fullName : "Jane Williams"}));
console.log(studentDB({fullName: "Mark Smith"}));
