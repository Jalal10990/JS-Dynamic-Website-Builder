function createCard(title, cName, views, monthsOld, dureation, thumbnail) {
    
    let viewStr;
    if(views<1000){
         viewStr = views;
    }
    else if(views>1000000){
         viewStr = views/1000000  + "M"
    }else{
        viewStr = views/1000 + "k"
    }
    
    let html = ` <div class="card">
        <div class="image">
          <img src="${thumbnail}" alt="img">
            <div class="capsule">${dureation}</div>
        </div>
        <div class="text">
             <h1>${title}</h1>
             <p>${cName} .${viewStr} views . ${monthsOld} Months ago</p>
        </div>
      </div>`
        document.querySelector(".container").innerHTML =
        document.querySelector(".container").innerHTML + html 

}

createCard(
  "Introduction to Backend | Sigma web Dev video #73",
  "CodewithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg"
);
