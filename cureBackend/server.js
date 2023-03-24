import express from "express"
import cors from "cors"
import restaurants from "./api/router/client.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/client", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app