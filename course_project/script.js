function validateLogin() {
    let isValid = true;
    
    // Clear previous errors
    document.getElementById('loginEmailError').innerText = '';
    document.getElementById('loginPasswordError').innerText = '';
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email.trim() === '') {
        document.getElementById('loginEmailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('loginEmailError').innerText = 'Invalid email format.';
        isValid = false;
    }
    
    if (password.trim() === '') {
        document.getElementById('loginPasswordError').innerText = 'Password is required.';
        isValid = false;
    }
    
    return isValid;
}

function validateRegistration() {
    let isValid = true;
    
    // Clear previous errors
    document.getElementById('regNameError').innerText = '';
    document.getElementById('regEmailError').innerText = '';
    document.getElementById('regPasswordError').innerText = '';
    document.getElementById('regConfirmPasswordError').innerText = '';
    document.getElementById('regSuccess').innerText = '';
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (name.trim() === '') {
        document.getElementById('regNameError').innerText = 'Name is required.';
        isValid = false;
    }
    
    if (email.trim() === '') {
        document.getElementById('regEmailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('regEmailError').innerText = 'Invalid email format.';
        isValid = false;
    }
    
    if (password.length < 6) {
        document.getElementById('regPasswordError').innerText = 'Password must be at least 6 characters.';
        isValid = false;
    }
    
    if (confirmPassword !== password) {
        document.getElementById('regConfirmPasswordError').innerText = 'Passwords do not match.';
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('regSuccess').innerText = 'Registration validated successfully!';
        return false; // Prevent form submission to keep the success message visible
    }
    
    return false; // Prevent submission on error
}
