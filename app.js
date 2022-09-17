const express = require("express")
const app = express()
app.use(express.static(__dirname + "/public"))
app.use(express.json())
const people = []

app.post("/api/v1/people", (req, res) => {
  const { name, age } = req.body
  if (age < 0) {
    res.status(400).json({ error: "Age must be greater than 0" })
    return
  }
  people.push([name, age])
  // res.json({ error: "That route is not implemented." })
  res.status(201).json({ msg: "A person entry was added" })
})

app.get("/api/v1/people", (req, res) => {
  res.status(200).json({ people: people })
})

app.get("/api/v1/people/:id", (req, res) => {
  if (!people[req.params.id]) {
    res.status(404).json({ error: "Person not found" })
    return
  }
  res.status(200).json({ person: people[req.params.id] })
})

app.listen(3000, () => {
  console.log("listening on port 3000...")
})

module.exports = app
