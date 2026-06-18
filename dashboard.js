// Load user data on page load
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();

        if (response.ok && data.user) {
            const user = data.user;
            
            // Display user information
            document.getElementById('username').textContent = user.username;
            document.getElementById('displayUsername').textContent = user.username;
            document.getElementById('displayEmail').textContent = user.email;
        } else {
            // If not authenticated, redirect to home
            window.location.href = '/';
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        window.location.href = '/';
    }
});

// Logout function
async function logout() {
    if (confirm('Are you sure you want to logout?')) {
        try {
            const response = await fetch('/api/logout', {
                method: 'POST'
            });

            if (response.ok) {
                window.location.href = '/';
            } else {
                showError('Failed to logout');
            }
        } catch (error) {
            console.error('Logout error:', error);
            showError('An error occurred during logout');
        }
    }
}

// Copy account information
function copyInfo() {
    const username = document.getElementById('displayUsername').textContent;
    const email = document.getElementById('displayEmail').textContent;
    const text = `Username: ${username}\nEmail: ${email}`;

    navigator.clipboard.writeText(text).then(() => {
        showSuccessMessage('Account information copied to clipboard!');
    }).catch(() => {
        showError('Failed to copy to clipboard');
    });
}

// Show system information
function showAlert() {
    const info = `
Security Features:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Bcrypt Password Hashing (12 rounds)
✓ SQL Injection Protection
✓ Rate Limiting (5 attempts/15 min)
✓ Secure Session Management
✓ HTTPS Ready
✓ CSRF Protection
✓ Input Validation
✓ Password Requirements (min 8 chars)
✓ Session Timeout (24 hours)
✓ XSS Protection Headers

Your session is secure and encrypted.
    `;
    alert(info);
}

// Show error message
function showError(message) {
    const banner = document.getElementById('errorBanner');
    const errorMsg = document.getElementById('errorMessage');
    
    errorMsg.textContent = message;
    banner.classList.add('show');
    
    setTimeout(() => {
        banner.classList.remove('show');
    }, 4000);
}

// Show success message
function showSuccessMessage(message) {
    const banner = document.getElementById('errorBanner');
    const errorMsg = document.getElementById('errorMessage');
    
    banner.style.background = '#d4edda';
    banner.style.borderColor = '#28a745';
    errorMsg.style.color = '#155724';
    errorMsg.textContent = message;
    banner.classList.add('show');
    
    setTimeout(() => {
        banner.classList.remove('show');
        banner.style.background = '#f8d7da';
        banner.style.borderColor = '#dc3545';
        errorMsg.style.color = '#dc3545';
    }, 4000);
}

// Logout on page unload (cleanup)
window.addEventListener('beforeunload', () => {
    // Session will be maintained by server
});

// Prevent going back after logout
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // Page was restored from browser cache
        // Verify session is still active
        fetch('/api/user')
            .then(response => {
                if (!response.ok) {
                    window.location.href = '/';
                }
            })
            .catch(() => {
                window.location.href = '/';
            });
    }
});
