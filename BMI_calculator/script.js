function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    if (height === '' || weight === '') {
        alert('Please fill out all fields.');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(2);

    let resultMessage = `Your BMI is ${roundedBMI}. `;
    
    if (bmi < 18.5) {
        resultMessage += 'You are underweight.';
    } else if (bmi < 24.9) {
        resultMessage += 'You are normal weight.';
    } else if (bmi < 29.9) {
        resultMessage += 'You are overweight.';
    } else {
        resultMessage += 'You are obese.';
    }

    document.getElementById('result').innerText = resultMessage;
}
