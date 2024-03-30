
import { createServer } from "miragejs"

export function mockServerStart(){
    createServer({
        routes() {
            this.post("/api/login", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                return attrs;
              })
        },
    })
}