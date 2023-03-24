const students = [
  { name: 'Monaliza', firstGrades: 8, secondGrades: 9 },
  { name: 'Gabriel', firstGrades: 7, secondGrades: 10 },
  { name: 'Julia', firstGrades: 4, secondGrades: 8 },
  { name: 'Diego', firstGrades: 5, secondGrades: 6 }
]

function calculateGrade(firstGrades, secondGrades) {
  return (firstGrades + secondGrades) / 2
}

for (const student of students) {
  const averageGrade = calculateGrade(student.firstGrades, student.secondGrades)

  const passed = averageGrade >= 7

  const message = `A média do(a) aluno(a) ${student.name} é: ${averageGrade}`
  if (passed) {
    alert(`${message}
 Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`${message}
 Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
} 
