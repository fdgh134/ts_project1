"use strict";
function assignGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
function calculateAverage(student) {
    const Scores = student.scores;
    const sum = Scores.korean + Scores.math + Scores.society + Scores.science + Scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
}
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student);
    const grade = assignGrade(average);
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent('Spartan', 30, 95, 89, 92, 85, 97);
    printResult(spartan);
}
main();
