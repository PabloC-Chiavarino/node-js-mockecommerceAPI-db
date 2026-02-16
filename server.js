import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults()

server.post('/login', (req, res) => {
  const { user, password } = req.body

  if (user === 'admin' && password === 'admin') {
    return res.json({
      token: 'mock-token-123',
      user: { id: 1, username: 'admin' }
    })
  }

  res.status(401).json({ message: 'Invalid credentials' })
})

server.use(middlewares)
server.use(router)


const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})
