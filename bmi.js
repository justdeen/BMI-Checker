// Retrieves HTML elements from the HTML document using their IDs and stores them in a constant variable
const form = document.getElementById('form');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const resultElement = document.getElementById('result');
const bmiElement = document.getElementById('bmi');
const empty = document.getElementById('empty')
const comment = document.getElementById('comment')

// Listens for when the button is clicked, then executes the nested code
form.addEventListener('submit', (e) => {
    e.preventDefault();   // prevents the page from refreshing after the button is clicked

    if(isNaN(weight.value)){
        alert('Weight must be a value')
        return;
    }
   
    const radioInput = document.querySelector('input[name="option"]:checked');  // stores the selected radio input
    const radio = radioInput.value  // stores the value of the selected radio input
    
    const x = parseFloat(weight.value);  // Retrieves the value (string, number etc.) in the input field and converts it to a number
    const y = parseFloat(height.value)**2;   // squares the value of the height
    
    if(radio === 'pounds'){   // conditional for calculating bmi when weight is in pounds  
        const temp = x/2.205    // BMI calculation
        const ans1 = temp/y
        let bmi = Number(ans1.toFixed(2))   // Rounds up BMI to 2 decimal places
        resultElement.innerText = bmi   
    }
    
    else if(radio === "kg"){    // conditional for calculating bmi when weight is in kg 
        const ans2 = x/y   
        let bmi = Number(ans2.toFixed(2))   
        resultElement.innerText = bmi
    }
    
    // if conditionals for different BMI scores
    if(resultElement.innerText<18.5){
        empty.innerText = `Your BMI is;`
        bmiElement.innerText = resultElement.innerText
        comment.innerText = `You fall under the underweight category:(`
        resultElement.innerText = ''
    }

    else if(resultElement.innerText>18.5 && resultElement.innerText<25){
        empty.innerText = `Your BMI is;`
        bmiElement.innerText = resultElement.innerText
        comment.innerText = `This is a healthy BMI score:)`    
        resultElement.innerText = ''
    }
    
    else if(resultElement.innerText>25 && resultElement.innerText<35){
        empty.innerText = `Your BMI is;`
        bmiElement.innerText = resultElement.innerText
        comment.innerText = `You fall under the overweight category:(` 
        resultElement.innerText = ''
    }

    else if(resultElement.innerText>35){
        empty.innerText = `Your BMI is;`
        bmiElement.innerText = resultElement.innerText
        comment.innerText = `You fall under the obessed category:(` 
        resultElement.innerText = ''
    }
}); 
