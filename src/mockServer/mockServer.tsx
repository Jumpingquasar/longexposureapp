
import { createServer } from "miragejs"

export function mockServerStart(){
    createServer({
        routes() {
            this.post("/api/v1/login", (schema, request) => {
                return true;
              })
        },
    })
}