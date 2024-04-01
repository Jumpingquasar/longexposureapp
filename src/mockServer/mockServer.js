
import { createServer } from "miragejs"
import { repository } from "./repository"

const key = 'longExposureIsGreat!&&1998'



export function mockServerStart(){
    createServer({
        routes() {
            this.post("/api/v1/login", async (schema, request) => {                
                let attrs = await JSON.parse(request.requestBody)
                return attrs;
              })

            this.post("/api/v1/feed", async (schema, request) => {
                let attrs = await JSON.parse(request.requestBody)
                return repository.posts.slice(attrs.itemStart, attrs.itemStart + attrs.feedIterationSize)
            }) 
            this.post("/api/v1/search", async (schema, request) => {
                let attrs = await JSON.parse(request.requestBody)
                return repository.posts.filter(post => post.userName.toLowerCase().includes(attrs.searchTerm.toLowerCase()))
            })
        },
    })
}