# 🔐 Secure Login System

A modern, secure authentication web application with user registration, login, and session management. Built with Node.js, Express, and SQLite, featuring bcrypt password hashing, input validation, and protection against common web vulnerabilities.

![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![Express](https://img.shields.io/badge/Express-v4.18+-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### Security Features
- ✅ **Bcrypt Password Hashing** - 12-round hashing for maximum security
- ✅ **SQL Injection Protection** - Parameterized queries prevent SQL attacks
- ✅ **Rate Limiting** - 5 login attempts per 15 minutes
- ✅ **Input Validation** - Comprehensive client and server-side validation
- ✅ **Session Management** - Secure session handling with 24-hour timeout
- ✅ **Security Headers** - Helmet.js for additional protection
- ✅ **Password Requirements** - Minimum 8 characters enforcement
- ✅ **Email Validation** - RFC-compliant email validation
- ✅ **HTTPS Ready** - Easy SSL/TLS configuration

### User Features
- 📝 **User Registration** - Easy account creation with validation
- 🔑 **Secure Login** - Protected login with rate limiting
- 👤 **User Dashboard** - View account information after login
- 🚪 **Logout** - Secure session termination
- 🎨 **Beautiful UI** - Modern design with white, yellow, and blue colors
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🔄 **Form Switching** - Toggle between login and register forms
- 👁️ **Password Visibility** - Toggle password visibility while typing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/secure-login-system.git
cd secure-login-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

4. **Generate a secure session secret**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Then update `SESSION_SECRET` in `.env` with the generated value.

5. **Start the server**
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

6. **Access the application**
Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
secure-login-system/
├── server.js                 # Main Express server
├── package.json             # Dependencies and scripts
├── .env.example             # Environment template
├── .gitignore              # Git ignore rules
├── README.md               # Documentation
├── users.db                # SQLite database (auto-generated)
└── public/
    ├── index.html          # Login/Register page
    ├── dashboard.html      # User dashboard
    ├── css/
    │   ├── style.css       # Main styles
    │   └── dashboard.css   # Dashboard styles
    └── js/
        ├── script.js       # Login/Register logic
        └── dashboard.js    # Dashboard logic
```

## 🔒 Security Implementation

### Password Hashing
```javascript
// Using bcrypt with 12 rounds
const hashedPassword = await bcrypt.hash(password, 12);
```

### SQL Injection Prevention
```javascript
// Parameterized queries
db.run('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
```

### Input Validation
- Username: 3-20 characters (alphanumeric, -, _)
- Email: RFC-compliant format
- Password: Minimum 8 characters
- Server-side validation on all inputs

### Session Security
- HttpOnly cookies
- Secure flag for HTTPS
- 24-hour timeout
- Automatic logout after inactivity

### Rate Limiting
- Maximum 5 login attempts per 15 minutes
- Prevents brute-force attacks

## 📊 API Endpoints

### Authentication
- `POST /api/register` - Create new account
- `POST /api/login` - Authenticate user
- `POST /api/logout` - Terminate session

### User
- `GET /api/user` - Get current user info (requires authentication)

### Response Format
```json
{
  "success": true,
  "message": "Success message",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

## 🎨 UI/UX Design

### Color Scheme
- Primary Blue: `#0066cc`
- Bright Yellow: `#ffc107`
- White: `#ffffff`
- Light Gray: `#f8f9fa`

### Design Features
- Smooth animations and transitions
- Gradient backgrounds
- Decorative blob elements
- Responsive grid layouts
- Clear error/success messages
- Password visibility toggle
- Form validation feedback

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚢 Deployment

### Deploy to Heroku

1. **Install Heroku CLI**
```bash
npm install -g heroku
```

2. **Login and create app**
```bash
heroku login
heroku create your-app-name
```

3. **Set environment variables**
```bash
heroku config:set SESSION_SECRET="your-generated-secret"
heroku config:set NODE_ENV="production"
```

4. **Deploy**
```bash
git push heroku main
```

5. **Open app**
```bash
heroku open
```

### Deploy to Railway, Render, or Similar

1. Connect your GitHub repository
2. Add environment variables in the platform's dashboard
3. Deploy with one click

### Production Checklist
- [ ] Change `SESSION_SECRET` to a secure random value
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS/SSL certificates
- [ ] Use a production database (PostgreSQL recommended)
- [ ] Set secure cookie flags
- [ ] Configure CORS if needed
- [ ] Enable rate limiting
- [ ] Set up error logging
- [ ] Regular security audits

## 🔄 Password Reset (Optional Feature)

To add password reset functionality, you can extend the system with:
1. Email verification endpoints
2. Reset token generation
3. Token validation middleware
4. Password update endpoint

## 🧪 Testing

### Test Registration
```
Username: testuser
Email: test@example.com
Password: TestPass123
```

### Test Login
```
Username: testuser
Password: TestPass123
```

## 🛠️ Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### Database Locked
```bash
# Remove old database
rm users.db
# Restart server
npm start
```

### Session Not Persisting
- Clear browser cookies
- Check `.env` SESSION_SECRET
- Verify express-session configuration

## 📈 Performance Tips

1. **Use HTTPS** - Encrypt all traffic
2. **Enable Caching** - Implement client-side caching
3. **Database Indexing** - Add indexes on frequently queried columns
4. **Connection Pooling** - Use connection pools for production
5. **Load Balancing** - Distribute traffic across multiple instances

## 🔐 Security Best Practices

1. **Never log passwords** - Never store or log user passwords
2. **Use environment variables** - Keep secrets out of code
3. **Update dependencies** - Regularly run `npm audit fix`
4. **HTTPS only** - Always use encrypted connections in production
5. **Database backups** - Regular automated backups
6. **Monitor logs** - Watch for suspicious activity
7. **Two-Factor Authentication** - Consider adding 2FA

## 📚 Resources

- [Express Documentation](https://expressjs.com/)
- [Bcrypt Security](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [OWASP Top 10](https://owasp.org/Top10/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This is an educational project demonstrating security best practices. For production use:
- Conduct security audits
- Use established authentication libraries (e.g., Passport.js)
- Consider using OAuth2 / OpenID Connect
- Implement HTTPS/TLS
- Regular security testing

## 🎯 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Two-Factor Authentication (2FA)
- [ ] OAuth2 integration (Google, GitHub)
- [ ] User profile customization
- [ ] Activity logging and dashboard
- [ ] Admin panel
- [ ] Password strength meter
- [ ] Account recovery options
- [ ] API token management

## 📞 Support

For issues, questions, or suggestions:
1. Check existing issues
2. Create a new issue with details
3. Follow the issue template

## 🙏 Acknowledgments

- Express.js team
- Bcrypt creators
- OWASP for security guidelines
- All contributors and users

---

Made with ❤️ by [Your Name]

**Last Updated:** June 2024
