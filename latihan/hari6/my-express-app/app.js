const express = require('express')
const app = express()
const port = 3000
let movies = [
{id: 1, title: "Spider-Man", year: 2002},
{id: 2, title: "John Wick", year: 2014},
{id: 3, title: "The Avengers", year: 2012},
{id: 4, title: "Logan", year: 2017},
]
const getMovies = (req, res) => {
    let result =" "

    movies.forEach((Item, index) => {
    result += `${index+1}, ${Item.title}</br>`    
    })
    res.send(result)
}

const getMoviesID = (req, res) => {
    let {title} = req.query
    let result = ""
    res.send(`${result.title}`)

    movies.forEach((item, index) => {
        if (item.title.toLowerCase().includes(title)){
        result += `${index+1}, ${Item.title}</br>`    

        }
    })
}

const logMiddleware = (req, res, next) => {
    console.log("Stop")
    next()
}

const getText = (req, res) => {
    res.status(200).json({text: "Ini text"})
}


app.get(`/`, (req, res) => {
    res.send("Hai")
    })

app.get(`/text`, logMiddleware, getText)
app.get(`/movie`, getMovies)
app.get(`/movie/:id`, getMoviesID)

app.listen(port, () => {
console.log(`App listening on port http://localhost:${port}`)
})
