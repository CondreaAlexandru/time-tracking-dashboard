function daily(){
    
    document.getElementById("dashbord-daily").style.display = "";
    document.getElementById("dashbord-weekly").style.display = "none";
    document.getElementById("dashbord-monthly").style.display = "none";

};

function weekly(){
    document.getElementById("dashbord-weekly").style.display = "";
    document.getElementById("dashbord-daily").style.display = "none";
    document.getElementById("dashbord-monthly").style.display = "none";

}

function monthly(){
    document.getElementById("dashbord-monthly").style.display = "";
    document.getElementById("dashbord-daily").style.display = "none";
    document.getElementById("dashbord-weekly").style.display = "none";

}


fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      
      document.getElementById("dashbord-daily").innerHTML += `<div class="card">
      <div class="img"><img src="${element.image}"/></div>
      <div class="data">
      <h3>${element.title}</h3>
      <h1>${element.timeframes.daily.current}hrs</h1>
      <p>Previous Day: ${element.timeframes.daily.previous}hrs</p>
      </div>
      </div>`

      document.getElementById("dashbord-weekly").innerHTML += `<div class="card">
      <div class="img"><img src="${element.image}"/></div>
      <div class="data">
      <h3>${element.title}</h3>
      <h1>${element.timeframes.weekly.current}hrs</h1>
      <p>Previous Week: ${element.timeframes.weekly.previous}hrs</p>
      </div>
      </div>`

      document.getElementById("dashbord-monthly").innerHTML += `<div class="card">
      <div class="img"><img src="${element.image}"/></div>
      <div class="data">
      <h3>${element.title}</h3>
      <h1>${element.timeframes.monthly.current}hrs</h1>
      <p>Previous Month: ${element.timeframes.monthly.previous}hrs</p>
      </div>
      </div>`
    });
  })