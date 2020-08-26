// Let's consider, for now, a "complete" method looking like that :
/*
    method = {
        id:,
        championship:,
        name:,
        creation:,
        summary:,
        betHowMany:,
        currency:,
        betOnWho:,
        playingWhere:,
        againstWho:,
        conditions:[
            {
                onWhat:,
                onWho:,
                value1:,
                value2:
            }
        ]
    }
*/

export const methodsFromDb = [
    // Initialize with User own methods
    {
        id: 1,
        championship: "Premier League",
        name: "Test 1",
        creation: "2020-06-25",
        summary: "Test method",
        betHowMany: 10,
        currency: "$",
        betOnWho: ["Team1", "Team2"],
        playingWhere: "Home",
        againstWho: "",
        conditions:[
            {
                onWhat: "The Odds",
                onWho: "Home Team",
                value1: 2.3,
                value2: 2.8
            }
        ]
    },
    {
        id: 2,
        championship: "Premier League",
        name: "Idée du siècle",
        creation: "2020-07-14",
        summary: "Always OM",
        betHowMany: 100,
        currency: "€",
        betOnWho: ["Team1"],
        playingWhere: "",
        againstWho: "Any Teams",
        conditions:[
            {
                onWhat: "",
                onWho: "",
                value1: "",
                value2: ""
            }
        ]
    }
  ]