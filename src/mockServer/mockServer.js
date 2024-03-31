
import { createServer } from "miragejs"
import { encryptString } from "../utils/aes"
import { repository } from "./repository"

const key = 'longExposureIsGreat!&&1998'



export function mockServerStart(){
    createServer({
        routes() {
            this.post("/api/v1/login", (schema, request) => {                
                let attrs = JSON.parse(request.requestBody)
                return attrs;
              })

            this.get("/api/v1/feed", () => {
                return repository.images;
            })
        },
    })
}