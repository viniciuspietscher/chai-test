document.addEventListener('DOMContentLoaded', event => {
    const addPerson = document.getElementById('addPerson')
    const getPerson = document.getElementById('getPerson')
    const listPeople = document.getElementById('listPeople')
    const name = document.getElementById('name')
    const age = document.getElementById('age')
    const index = document.getElementById('index')
    const result = document.getElementById('result')
    addPerson.addEventListener('click', async (event) => {
        event.preventDefault()
        try {
            response = await fetch('/api/v1/people', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ name: name.value, age: Number(age.value) })
            })
            data = await response.json()
            result.innerHTML = JSON.stringify(data)
        } catch (err) {
            result.innerHTML = err.message
        }
    })
    listPeople.addEventListener('click', async (event) => {
        event.preventDefault()
        try {
            response = await fetch('/api/v1/people', { headers: { 'Content-Type': 'application/json' } })
            data = await response.json()
            result.innerHTML = JSON.stringify(data)
        } catch (err) {
            result.innerHTML = err.message
        }
    })
    getPerson.addEventListener('click', async (event) => {
        event.preventDefault()
        index1 = encodeURIComponent(index.value)
        try {
            response = await fetch(`/api/v1/people/${index1}`,
                { headers: { 'Content-Type': 'application/json' } })
            data = await response.json()
            result.innerHTML = JSON.stringify(data)
        } catch (err) {
            result.innerHTML = err.message
        }
    })
})