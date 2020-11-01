module.exports = (cpf) => {
  if (!Boolean(cpf)) return false

  const cpfNumbers = cpf.replace(/\D/g, "")

  if (cpfNumbers.length < 11) return false

  const nineFirstNumbers = cpfNumbers.substr(0, 9).split("")

  if (!Array.from(cpfNumbers).filter(e => e !== cpfNumbers[0]).length) return false

  const mult = 10

  let sumFirstNumber = 11 - (nineFirstNumbers.map((number, index) => number * (mult - index)).reduce((acc, curr) => acc + curr) % 11)

  sumFirstNumber > 9 ? (sumFirstNumber = 0) : (sumFirstNumber = sumFirstNumber)

  const cpfFirstNumber = `${nineFirstNumbers.join("")}${sumFirstNumber}`.split("")

  let sumSecondNumber = 11 - (cpfFirstNumber.map((number, index) => number * (mult + 1 - index)).reduce((acc, curr) => (acc += curr)) % 11)

  sumSecondNumber > 9 ? (sumSecondNumber = 0) : (sumSecondNumber = sumSecondNumber)

  const cpfComplete = `${cpfFirstNumber.join("")}${sumSecondNumber}`

  if (cpfComplete !== cpfNumbers) return false

  return true
}
