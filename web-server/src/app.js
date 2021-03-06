const path = require('path')// it allows us to manipulate a path by providing individual path segments.
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)// registerpartial takes the path to your directory

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// to display the content on the home page is the reason we have kept empty the path ''
app.get('', (req, res) => {
    res.render('index', { // as we are using the hbs(handlebars) is the reason we are using the render insted of send
        title: 'WEATHER APPLICATION',
        name: 'Amit Rawat'
    })
})
// The about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT ME',
        name: 'Amit Rawat'
    })
})

//The help page
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'HELP',
        name: 'Amit Rawat'
    })
})

//The weather Page
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})


//The Product page
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})


//the help page and wild card page not found
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})


// 404 error page we have use the wildcard charater to detect the page(*)
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})