# 🚀 Quick Setup Guide

Get your secure login system up and running in 5 minutes!

## Step-by-Step Installation

### 1️⃣ Prerequisites
Make sure you have Node.js installed:
```bash
node --version  # Should be v14 or higher
npm --version   # Should be v6 or higher
```

Don't have Node.js? [Download here](https://nodejs.org/)

### 2️⃣ Clone or Download

**Option A: Using Git (Recommended)**
```bash
git clone https://github.com/yourusername/secure-login-system.git
cd secure-login-system
```

**Option B: Download ZIP**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file
4. Open terminal in the extracted folder

### 3️⃣ Install Dependencies
```bash
npm install
```
This will install all required packages (Express, bcrypt, SQLite, etc.)

### 4️⃣ Setup Environment Variables
```bash
cp .env.example .env
```

Now edit the `.env` file and generate a secure session secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Copy the generated value and paste it in `.env` as `SESSION_SECRET`:
```
SESSION_SECRET=your-generated-secret-here
```

### 5️⃣ Start the Server

**Development Mode (with auto-reload):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

You'll see:
```
Server running on http://localhost:3000
Connected to SQLite database
```

### 6️⃣ Open in Browser
Navigate to: `http://localhost:3000`

## 🧪 Test the Application

### Create a Test Account
1. Click "Register here"
2. Fill in the form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `SecurePass123`
3. Click "Create Account"

### Login
1. Enter your username and password
2. Click "Login"
3. You should see the dashboard!

## 📁 Project Files Explained

| File | Purpose |
|------|---------|
| `server.js` | Main application server |
| `package.json` | Dependencies & scripts |
| `.env` | Configuration (secret) |
| `.gitignore` | Files to exclude from git |
| `public/index.html` | Login/Register page |
| `public/dashboard.html` | User dashboard |
| `public/css/style.css` | Login page styles |
| `public/js/script.js` | Login form logic |
| `users.db` | SQLite database (auto-created) |

## 🔧 Customization

### Change Port
Edit `.env`:
```
PORT=8000
```

### Change Colors
Edit `public/css/style.css`:
```css
--primary-blue: #0066cc;    /* Change primary color */
--bright-yellow: #ffc107;    /* Change accent color */
--white: #ffffff;            /* Change background */
```

### Change Session Timeout
Edit `server.js` (line ~40):
```javascript
maxAge: 1000 * 60 * 60 * 24  // Currently 24 hours
```

## 🚢 Deploy to the Web

### Option 1: Heroku (Free)
```bash
npm install -g heroku
heroku login
heroku create
git push heroku main
heroku open
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: Railway
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub
3. Select this repository
4. Deploy!

### Option 4: Other Platforms
- Render
- Fly.io
- AWS Lightsail
- DigitalOcean App Platform

## 🆘 Common Issues

### "Port 3000 is already in use"
```bash
# Either kill the process or use different port
# Change PORT in .env to 3001
PORT=3001
npm start
```

### "npm install takes too long"
```bash
# Use npm ci instead
npm ci
```

### "Password not hashing"
Make sure bcrypt is installed:
```bash
npm install bcrypt
```

### "Database locked error"
```bash
# Remove old database and restart
rm users.db
npm start
```

### Module not found errors
```bash
# Reinstall all dependencies
rm -rf node_modules
npm install
```

## ✅ Security Checklist

Before deploying to production:

- [ ] Change `SESSION_SECRET` in `.env`
- [ ] Set `NODE_ENV=production` in `.env`
- [ ] Enable HTTPS/SSL certificate
- [ ] Remove `.env` from git (check `.gitignore`)
- [ ] Run `npm audit` to check vulnerabilities
- [ ] Test all features work correctly
- [ ] Set up logging and monitoring
- [ ] Regular backups of database

## 📚 Next Steps

1. **Customize the UI** - Modify colors, fonts, layout
2. **Add more features** - Password reset, email verification, 2FA
3. **Deploy to production** - Use one of the deployment options
4. **Monitor security** - Set up alerts and logging
5. **Scale your app** - Add more databases, load balancing

## 💡 Pro Tips

- Use Git to track changes: `git init && git add . && git commit -m "Initial commit"`
- Keep `.env` file secret - add to `.gitignore`
- Regularly update dependencies: `npm update && npm audit fix`
- Use HTTPS in production - get free SSL from Let's Encrypt
- Monitor server logs for suspicious activity
- Test thoroughly before deploying

## 🎓 Learning Resources

- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express.js Guide](https://expressjs.com/en/starter/basic-routing.html)
- [Web Security](https://owasp.org/www-project-top-ten/)
- [Bcrypt Explained](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

## 🎯 What's Next?

Ready to level up? Consider adding:
- Email verification
- Password reset flow
- Two-Factor Authentication
- User profile page
- Admin dashboard
- API documentation
- Automated tests

## 📞 Need Help?

1. Check the [README.md](README.md) for detailed documentation
2. Look at [TROUBLESHOOTING.md](TROUBLESHOOTING.md) if issues persist
3. Search [GitHub Issues](https://github.com/yourusername/secure-login-system/issues)
4. Create a new issue with details about your problem

---

**🎉 Congratulations!** Your secure login system is ready to use!

Happy coding! 🚀
