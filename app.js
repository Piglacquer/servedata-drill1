const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.listen(process.env.PORT || 3000)

const data = [
    {id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberOfStudents: 28
    },
    {id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberOfStudents: 24
    },
    {id: 3,
    cohortName: "17-01-WD-PX",
    cohortCode: "g109",
    numberOfStudents: 30
    },
    {id: 4,
    cohortName: "17-01-WD-BD",
    cohortCode: "g110",
    numberOfStudents: 29
    },
]
function idPull(data, idNum) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == idNum) {
      return data[i]
    }
  }
  return false
}

app.get("/", function(request, response) {
  response.json(data)
})

app.get("/:id", function(request, response) {
  if (!idPull(data, request.params.id)) {
      response.status(404)
      response.json({
          error: {
              "message": "No record found!"
          }
      })
    }
  response.json(idPull(data, request.params.id))
})

console.log("it's healing me")
