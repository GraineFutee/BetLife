export const methodsFromDb = [
    // Initialize with User own methods
    {
        id: 11109,
        championship: "Premier League",
        name: "ManchesterS",
        creation: "25/06/2019",
        betHowMany: 10,
        currency: "£",
        betOnWho: ["Man United", "Man City"],
        playingWhere: "Home or Away",
        againstWho: "Any Teams",
        conditions:[
            {
                id : 4456,
                onWhat: "The Odds",
                onWho: "The Team I bet",
                value1: 1.3,
                value2: 2.8
            },
            {
                id : 486,
                onWhat: "The Last Results",
                onWho: "The Team I bet",
                value1: "Didn't Lose",
                value2: 1
            }
        ]
    },
    {
        id: 26890,
        championship: "Premier League",
        name: "QPR Home",
        creation: "14/07/2020",
        betHowMany: 100,
        currency: "€",
        betOnWho: ["QPR"],
        playingWhere: "Home",
        againstWho: "Any Teams"
    }
  ]