const server = require('./app')
const db = require('./configs/db')
const PORT = 8000;

async function init() {
    try {
        await db.authenticate()
        await db.sync({alter : true})
        server.listen(PORT, () => {
            console.log(`Connecting to Database`)
            console.log(`Server running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
  }
  
  init()
    