
const static  = document.getElementById('static');
that = this;
window.onload = function(event){
fetch('./data.json')
.then(res => res.json())
.then(obj => {
    static.innerHTML = ""
    for (let func in obj) {
        let arr;
        that.tdata  = obj;
        switch (func) {
            case 'matchesPlayedPerYear':
                arr = [];
                for (let key in obj.matchesPlayedPerYear) {
                    arr.push([key, obj.matchesPlayedPerYear[key]])
                }
                static.append(createContainer('matchesPlayedPerYear'))
                plotGraph('Matches played per year', "years", 'matchesPlayedPerYear', arr)
                break;
            case 'matchesWonByEachTeam':
                arr = [];
                for (let key in obj.matchesWonByEachTeam) {
                    let temp = [];
                    for(let team in obj.matchesWonByEachTeam[key]){
                        temp.push([team,obj.matchesWonByEachTeam[key][team]]);
                    }
                    
                    arr.push({name:key, data:temp})
                }
                static.append(createContainer('matchesWonByEachTeam'))
                plotGraph1('matches won by each team', 'matchesWonByEachTeam', arr)             
                break;
            case 'extraRunsConcededByEachTeam':
                arr = [];
                for (let key in obj.extraRunsConcededByEachTeam) {
                    arr.push([key, obj.extraRunsConcededByEachTeam[key]])
                }
                static.append(createContainer('extraRunsConcededByEachTeam'))
                plotGraph('extra runs conceded by each team in year 2016', "teams", 'extraRunsConcededByEachTeam', arr)
                break;
            case 'economicalBowlers':
                arr = [];
                for (let key in obj.economicalBowlers) {
                    arr.push([key, obj.economicalBowlers[key].economuRate])
                }
                arr = arr.sort((a, b) => a[1] - b[1]).slice(0, 11);
                static.append(createContainer('economicalBowlers'))
                plotGraph('top 10 economical bowlers along with their economy rates in year 2015', "bowlers", 'economicalBowlers', arr)
                break;
                case 'tossWinnerByTeam':
                    arr = [];
                    for (let key in obj.tossWinnerByTeam) {
                        arr.push([key, obj.tossWinnerByTeam[key]])
                    }
                    static.append(createContainer('tossWinnerByTeam'))
                    plotGraph('Toss Winner By Team', "Toss", 'tossWinnerByTeam', arr)
                    break;
        }
    }
    
  
})
}

const form = document.getElementById("fm")
form.addEventListener('submit', (event) => {
// change
event.preventDefault();
let main  = document.getElementById("dynamic");
main.innerHTML = ""
document.getElementById("err_msg").innerHTML = ""
let year = form.ip.value.trim()
arr = [];
                for (let key in that.tdata.matchesPlayedPerYear) 
                { 
                    if(key == year)
                        {
                            arr.push([key, that.tdata.matchesPlayedPerYear[key]])
                        }
                    else
                        {
                            arr.push([key, 0])
                        }
                }           
                plotGraph('Matches played per year', "years", 'matchesPlayedPerYear', arr)     
 arr2 = [];
                for (let key in that.tdata.matchesWonByEachTeam) {
                    let temp = [];
                    for(let team in that.tdata.matchesWonByEachTeam[key]){
                        if(team == year) 
                        {
                            temp.push([team,that.tdata.matchesWonByEachTeam[key][team]]);
                        }       
                    }       
                    arr2.push({name:key, data:temp})
                }
                plotGraph1('matches won by each team', 'matchesWonByEachTeam', arr2)           


})




function plotGraph(title, name, id, seriesData) {
Highcharts.chart(id, {
    chart: {
        type: 'column'
    },
    title: {
        text: title
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        min: 0.00,
        title: {
            text: 'Matches'
        }
    },
    series: [{
        name: name,
        data: seriesData
    }]
});
}

    
function plotGraph1(title, id, seriesData) {
Highcharts.chart(id, {
    chart: {
        type: 'column'
    },
    title: {
        text: title
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        min: 0.00,
        title: {
            text: 'Matches'
        }
    },
    series: seriesData
});
}

function createContainer(id){
let row = createElements('div',"row flex-md-row flex-lg-row justify-content-between align-items-center")
let col = createElements('div',"col-12 p-2 m-3")
let card = createElements('div',"card")
let cardTitle = createElements('div',"card-title")
let cardBody = createElements('div',"card-body")
let div = document.createElement('div')
div.style.cssText = "width:100%; height:550px;"
div.id = id;
cardBody.append(div)
card.append(cardTitle,cardBody)
col.append(card)
row.append(col)
return row
}


function createElements(ele,classes = ""){
let element = document.createElement(ele)
element.className = classes
return element
}

