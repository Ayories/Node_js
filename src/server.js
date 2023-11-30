import http from "http"

const server = http.createServer((req, res) => {
    res.end("hello this is my first server!!!!")
}
)

const port = 3001
const host = "127.0.0.1"

server.listen(3001, "127.0.0.1", ()=>{
    console.log(`Server connection to port:${port} and host:${host} established`);
})