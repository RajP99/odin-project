const http = require("http")
const fs = require("fs")

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                throw err
            }
            res.setHeader("Content-Type", "text/html")
            res.write(data)
            res.end()
        })   
    } else if (req.url === "/about") {
        fs.readFile("./about.html", (err, data) => {
            if (err) {
                throw err
            }
            res.setHeader("Content-Type", "text/html")
            res.write(data)
            res.end()
        })   
    } else if (req.url === "/contact") {
        fs.readFile("./contact-me.html", (err, data) => {
            if (err) {
                throw err
            }
            res.setHeader("Content-Type", "text/html")
            res.write(data)
            res.end()
        })   
    } else {
        fs.readFile("./error-404.html", (err, data) => {
            if (err) {
                throw err
            }
            res.setHeader("Content-Type", "text/html")
            res.write(data)
            res.end()
        }) 
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})