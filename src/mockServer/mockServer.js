
import { createServer } from "miragejs"
import { repository } from "./repository"
import { decryptString } from "../utils/aes"

export function mockServerStart(){

    createServer({
        routes() {
            this.post("/api/v1/login", async (schema, request) => { //Login API call
                const decryptedFormData = decryptString(request.requestBody)
                const credentials = JSON.parse(decryptedFormData)
                return credentials.Email;
              })

            this.post("/api/v1/feed", async (schema, request) => { //HomeScreen feed API call
                let attrs = await JSON.parse(request.requestBody)
                return repository.posts.slice(attrs.itemStart, attrs.itemStart + attrs.feedIterationSize)
            }) 
            this.post("/api/v1/search", async (schema, request) => { //SearchScreen API call
                let attrs = await JSON.parse(request.requestBody)
                return repository.content.slice(attrs.itemStart, attrs.itemStart + attrs.searchIterationSize)
            })
        },
    })
}