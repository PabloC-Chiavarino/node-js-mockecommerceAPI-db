import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === 'admin') {
    return res.json({
      token: 'mock-token-123',
      user: { id: 1, username: 'admin' }
    })
  }

  res.status(401).json({ message: 'Invalid credentials' })
})

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})
