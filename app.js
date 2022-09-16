const express = require("express")
const app = express()
app.use(express.static(__dirname + "/public"))
app.use(express.json())
const people = []

app.post("/api/v1/people", (req, res) => {
  const { name, age } = req.body
  people.push([name, age])
  // res.json({ error: "That route is not implemented." })
  res.json({ msg: "person added" })
})

app.get("/api/v1/people", (req, res) => {
  res.json({ people: people })
})

app.get("/api/v1/people/:id", (req, res) => {
  res.json({ person: people[req.params.id] })
})

app.listen(3000, () => {
  console.log("listening on port 3000...")
})
