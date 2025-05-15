// survey.js

document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.getElementById('surveyForm');
    const designRadios = document.querySelectorAll('input[name="design-satisfaction"]');
    const howKnowRadios = document.querySelectorAll('input[name="navigation-ease"]');
    const serviceCheckboxes = document.querySelectorAll('input[name="useful-sections"]');
    const commentsTextarea = document.getElementById('comments');
    const designError = document.getElementById('designError');
    const howKnowError = document.getElementById('navigationError');
    const surveySuccessMessage = document.getElementById('survey-success-message');

    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let isDesignValid = validateRadioGroup(designRadios, designError, 'Please rate your satisfaction with our services.');
        let isHowKnowValid = validateRadioGroup(howKnowRadios, howKnowError, 'Please tell us how you found me.');
        let isServiceValid = validateCheckboxGroup(serviceCheckboxes, 'Please select at least one service you used.'); 

        if (isDesignValid && isHowKnowValid && isServiceValid) {
           
            displaySuccessMessage();
            surveyForm.reset(); 
        }
    });

    function validateRadioGroup(radioGroup, errorElement, errorMessage) {
        let isChecked = false;
        radioGroup.forEach(radio => {
            if (radio.checked) {
                isChecked = true;
            }
        });

        if (!isChecked) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = '';
            return true;
        }
    }

    function validateCheckboxGroup(checkboxGroup, errorMessage) {
        let isChecked = false;
        checkboxGroup.forEach(checkbox => {
            if (checkbox.checked) {
                isChecked = true;
            }
        });

        if (!isChecked) { U
            alert(errorMessage);
            return false;
        } else {
            return true;
        }
    }

    function displaySuccessMessage() {
        surveySuccessMessage.style.display = 'block';
        setTimeout(() => {
            surveySuccessMessage.style.display = 'none';
        }, 3000); 
    }
});