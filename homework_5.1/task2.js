let averageGrade = 91;
let gradeCategory;

switch (true) {
    case averageGrade < 60:
        gradeCategory = "Незадовільно";
        break;

    case averageGrade >= 60 && averageGrade <= 70:
        gradeCategory = "Задовільно";
        break;

    case averageGrade >= 71 && averageGrade <= 80:
        gradeCategory = "Добре";
        break;

    case averageGrade >= 81 && averageGrade <= 90:
        gradeCategory = "Дуже добре";
        break;

    case averageGrade >= 91 && averageGrade <= 100:
        gradeCategory = "Відмінно";
        break;

    default:
        gradeCategory = "Некоректна оцінка";
}

console.log(gradeCategory);