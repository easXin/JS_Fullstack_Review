const warriorsGames = [
    {
        awayTeam: {
            team: 'Golden State',
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
];

const makeChart = (games ,targetTeam)=>{
    const ulParent = document.createElement('ul');
    for (let game of games) {
        // destructor syntax
        const gameLi = document.createElement('li');
        gameLi.innerHTML = getScoreLine(game);
        gameLi.classList.toggle(isWinner(game, targetTeam) ? 'win' : 'loss');

        ulParent.appendChild(gameLi);
    }
    // contains all the data
    return ulParent;
};

const isWinner = ({homeTeam,awayTeam},targetTeam) =>{
    const target = homeTeam.team === 'Golden State' ? homeTeam : awayTeam;
    return target.isWinner;
    // gameLi.classList.toggle(warrior.isWinner ? 'win' : 'loss');
};

const getScoreLine = ({homeTeam,awayTeam}) =>{
    const {
        team: hTeam, points: hPoints
    } = homeTeam;

    const {
        team: aTeam, points: aPoints
    } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine = null;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames, 'Golden State');
const gsSection = document.querySelector("#gs");
gsSection.appendChild(chart1);

const hrSection = document.querySelector('#hr');
const chart2 = makeChart(warriorsGames, 'Houston');
hrSection.appendChild(chart2);


/*
const ulParent = document.createElement('ul');
for(let game of warriorsGames){
    // destructor syntax
    const{
        awayTeam,homeTeam
    } = game;

    const gameLi = document.createElement('li');
    const{
        team:hTeam, points:hPoints
    } = homeTeam;

    const{
        team:aTeam, points:aPoints
    } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine  = null;
    if(aPoints>hPoints){
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }else{
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    // innerText won't work, because it doesn't count html element
    //gameLi.innerText = `${teamNames} ${scoreLine}`;
    const warrior = hTeam === 'Golden State'? homeTeam:awayTeam;
    gameLi.classList.toggle(warrior.isWinner?'win':'loss');


    gameLi.innerHTML = `${teamNames} ${scoreLine}`;

    ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
*/
