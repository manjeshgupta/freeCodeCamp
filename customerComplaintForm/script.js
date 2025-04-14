
const form = document.getElementById('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const solutionDescription = document.getElementById('solution-description');


function setBorderColor(element, isValid) {
  element.style.borderColor = isValid ? 'green' : 'red';
}


function isNotEmpty(value) {
  return value.trim() !== '';
}

function isValidEmail(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
}

function isValidOrderNo(value) {
  const regex = /^2024\d{6}$/;
  return regex.test(value);
}

function isValidProductCode(value) {
  const regex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
  return regex.test(value);
}

function isPositiveInteger(value) {
  const regex = /^[1-9]\d*$/;
  return regex.test(value);
}

function isAtLeastTwentyChars(value) {
  return value.trim().length >= 20;
}

function isCheckboxGroupChecked(group) {
  const isCheckboxChecked = Array.from(group.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked);
  return isCheckboxChecked;
}

function isRadioGroupChecked(group) {
  const isRadioChecked = Array.from(group.querySelectorAll('input[type="radio"]')).some(radio => radio.checked);
  return isRadioChecked;
}


function validateForm() {
  const validations = {
    'full-name': isNotEmpty(fullNameInput.value),
    'email': isValidEmail(emailInput.value),
    'order-no': isValidOrderNo(orderNoInput.value),
    'product-code': isValidProductCode(productCodeInput.value),
    'quantity': isPositiveInteger(quantityInput.value),
    'complaints-group': isCheckboxGroupChecked(complaintsGroup),
    'complaint-description': true,
    'solutions-group': isRadioGroupChecked(solutionsGroup),
    'solution-description': true
  };

  
  const otherComplaintChecked = document.getElementById('other-complaint').checked;
  if (otherComplaintChecked) {
    validations['complaint-description'] = isAtLeastTwentyChars(complaintDescription.value);
  }

  const otherSolutionChecked = document.getElementById('other-solution').checked;
  if (otherSolutionChecked) {
    validations['solution-description'] = isAtLeastTwentyChars(solutionDescription.value);
  }

  return validations;
}


function isValid(validations) {
  return Object.values(validations).every(value => value === true);
}


fullNameInput.addEventListener('change', () => {
  setBorderColor(fullNameInput, isNotEmpty(fullNameInput.value));
});

emailInput.addEventListener('change', () => {
  setBorderColor(emailInput, isValidEmail(emailInput.value));
});

orderNoInput.addEventListener('change', () => {
  setBorderColor(orderNoInput, isValidOrderNo(orderNoInput.value));
});

productCodeInput.addEventListener('change', () => {
  setBorderColor(productCodeInput, isValidProductCode(productCodeInput.value));
});

quantityInput.addEventListener('change', () => {
  setBorderColor(quantityInput, isPositiveInteger(quantityInput.value));
});

complaintsGroup.addEventListener('change', () => {
  setBorderColor(complaintsGroup, isCheckboxGroupChecked(complaintsGroup));
});

complaintDescription.addEventListener('change', () => {
  const otherComplaintChecked = document.getElementById('other-complaint').checked;
  if (otherComplaintChecked) {
    setBorderColor(complaintDescription, isAtLeastTwentyChars(complaintDescription.value));
  }
});

solutionsGroup.addEventListener('change', () => {
  setBorderColor(solutionsGroup, isRadioGroupChecked(solutionsGroup));
});

solutionDescription.addEventListener('change', () => {
  const otherSolutionChecked = document.getElementById('other-solution').checked;
  if (otherSolutionChecked) {
    setBorderColor(solutionDescription, isAtLeastTwentyChars(solutionDescription.value));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const validations = validateForm();
    const formIsValid = isValid(validations);

   
    setBorderColor(fullNameInput, validations['full-name']);
    setBorderColor(emailInput, validations['email']);
    setBorderColor(orderNoInput, validations['order-no']);
    setBorderColor(productCodeInput, validations['product-code']);
    setBorderColor(quantityInput, validations['quantity']);
    setBorderColor(complaintsGroup, validations['complaints-group']);

    const otherComplaintChecked = document.getElementById('other-complaint').checked;
    if (otherComplaintChecked) {
      setBorderColor(complaintDescription, validations['complaint-description']);
    } else {
      complaintDescription.style.borderColor = '';
    }

    setBorderColor(solutionsGroup, validations['solutions-group']);

    const otherSolutionChecked = document.getElementById('other-solution').checked;
    if (otherSolutionChecked) {
      setBorderColor(solutionDescription, validations['solution-description']);
    } else {
      solutionDescription.style.borderColor = '';
    }

    const errorMsg = document.getElementById('form-error-message');
    if (formIsValid) {
      if (errorMsg) {
        errorMsg.textContent = '';
      }
      console.log("Form is valid. Ready to submit.");
      // form.submit(); // Uncomment to submit
    } else {
      if (errorMsg){
        errorMsg.textContent = "Please, fill out the required fields correctly before submitting.";
      } 
    }
  });
});




