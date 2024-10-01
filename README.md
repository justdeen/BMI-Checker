## Overview
When the page is loaded, you simply specify your weight (in pounds or kilograms) in the input field and select your height from a dropdown option (html select input element), where you simply identify your height in Feet & Inches. After providing the necessary inputs, you can proceed to click the "calculate" button which will display your bmi score alongside a comment which categorizes you as underweight, healthy, overweight or obsessed. 


## Features
1. Weight input in kilograms (kg) or pounds (lbs).
2. Height selection from a dropdown menu.
3. Accurate BMI classification according to WHO standards.

## How The Code Works;
Parsing User Input to Js Variables 
The input provided by the user is parsed to js variables which then allowed me to use the formula for calculating BMI (weight in kg/height**2 in meters) to compute and display the BMI score.

1. Weight input: before any calculation is done, the user has to specify if the value of weight entered is in pounds or kilograms using the radio button option. When either kg or pounds has been selected, the "querySelector" method is then use to point to the particular radio input which has been selected. 
The user's input for weight is then parsed to a js variable.

    The BMI will then be calculated differently for pounds or kg input and this is done by using an "if" command to check if the radio input was kg or pounds and calculate the BMI with respect to the radio inputs.

2. Height input: the height input is parsed to a js variable by pointing to the value of the particular html select option which was selected by the user. 


## Eventlistener for Parsing Inputs and Displaying BMI
The eventlistener is triggered when the "calculate" button is clicked, which then parses the user input to dedicated js variables, calculates the BMI using these input values and displays the BMI alongside the comment relating to that particular BMI score.


## Displaying of Comments Alongside The BMI Score
Comments are displayed according to specific ranges of BMI. In the js code, I used 4 categories representing 4 different BMI ranges, with the end of one BMI range being the start of the next range, in order to properly interpret and categorize the BMI score. 

BMI Ranges;
1. BMI < 18.5 = Underweight 
2. BMI > 18.5 and < 25 = Healthy 
3. BMI > 25 and < 35 = Overweight 
4. BMI > 35 = Obese 


## Stack
1. HTML 
2. CSS 
3. JavaScript 


## User Interface
1. Clean and intuitive design for easy user experience.
2. Clear input fields and labels for weight and height.
3. Dropdown menu for height selection.

Link - https://just-deen.github.io/BMI-Checker/
