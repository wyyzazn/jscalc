function calculateRoots() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const resultElement = document.getElementById("result");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultElement.innerHTML = "Пожалуйста, введите все коэффициенты.";
    return;
  }

  const discriminant = b * b - 4 * a * c;
  let resultText;

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    resultText = `Корни: x₁ = ${root1.toFixed(2)}, x₂ = ${root2.toFixed(2)}`;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    resultText = `Корень: x = ${root.toFixed(2)}`;
  } else {
    resultText = "Корней нет (дискриминант отрицательный)";
  }

  resultElement.innerHTML = resultText;
}
