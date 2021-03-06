const express = require('express')
const connectDb = require('./config/db')

const app = express()

// Connect Database
connectDb()

// Init Middleware
app.use(express.json())

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/auth', require('./routes/api/auth'))

app.get('/', (req, res) => res.send('API running!'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))