const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const MC_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const MC_API_KEY = process.env.API_KEY
const PORT = 8081

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/test-url', async (req, res) => {
    const { form_url } = req.body
    console.log(form_url)
    const meaningCloudUrl = `${MC_API_URL}?key=${MC_API_KEY}&url=${form_url}&lang=en`
    //console.log(meaningCloudUrl)
    try {
      const {data} = await axios.get(meaningCloudUrl)
      //console.log(data)
      res.send({
        text: data.sentence_list[0].text || 'not found',
        score_tag: data.score_tag,
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,
      })
    } catch (error) {
      console.log(error.message)
    }
  })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = {app}