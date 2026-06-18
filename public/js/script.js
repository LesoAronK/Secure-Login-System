// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginForm.classList.toggle('hidden');
    registerForm.classList.toggle('hidden');
    
    // Clear form data
    document.getElementById('loginFormElement').reset();
    document.getElementById('registerFormElement').reset();
    clearAllErrors();
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

// Clear all error messages
function clearAllErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    document.querySelectorAll('.success-message').forEach(el => {
        el.textContent = '';
    });
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate username format
function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
}

// Validate password strength
function isValidPassword(password) {
    return password.length >= 8;
}

// Show error message
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
    }
}

// Show success message
function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
    }
}

// Disable form button
function disableButton(buttonSelector, disabled = true) {
    const button = document.querySelector(buttonSelector);
    if (button) {
        button.disabled = disabled;
        button.textContent = disabled ? 'Processing...' : (buttonSelector.includes('login') ? 'Login' : 'Create Account');
    }
}

// Login form handler
document.getElementById('loginFormElement').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    clearAllErrors();
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    // Validation
    let isValid = true;
    
    if (!username) {
        showError('loginUsernameError', 'Username is required');
        isValid = false;
    }
    
    if (!password) {
        showError('loginPasswordError', 'Password is required');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Disable button
    disableButton('#loginFormElement button[type="submit"]');
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showSuccess('loginSuccess', 'Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1500);
        } else {
            showError('loginError', data.message || 'Login failed');
            disableButton('#loginFormElement button[type="submit"]', false);
        }
    } catch (error) {
        console.error('Login error:', error);
        showError('loginError', 'An error occurred. Please try again.');
        disableButton('#loginFormElement button[type="submit"]', false);
    }
});

// Register form handler
document.getElementById('registerFormElement').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    clearAllErrors();
    
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    
    // Validation
    let isValid = true;
    
    if (!username) {
        showError('registerUsernameError', 'Username is required');
        isValid = false;
    } else if (!isValidUsername(username)) {
        showError('registerUsernameError', 'Username must be 3-20 characters (alphanumeric, - and _ only)');
        isValid = false;
    }
    
    if (!email) {
        showError('registerEmailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('registerEmailError', 'Invalid email format');
        isValid = false;
    }
    
    if (!password) {
        showError('registerPasswordError', 'Password is required');
        isValid = false;
    } else if (!isValidPassword(password)) {
        showError('registerPasswordError', 'Password must be at least 8 characters');
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Disable button
    disableButton('#registerFormElement button[type="submit"]');
    
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword
            })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            showSuccess('registerSuccess', 'Registration successful! Redirecting...');
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1500);
        } else {
            showError('registerError', data.message || 'Registration failed');
            disableButton('#registerFormElement button[type="submit"]', false);
        }
    } catch (error) {
        console.error('Register error:', error);
        showError('registerError', 'An error occurred. Please try again.');
        disableButton('#registerFormElement button[type="submit"]', false);
    }
});

// Clear error on input focus
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        const errorElement = this.parentElement.querySelector('.error-message') || 
                           this.parentElement.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
});
