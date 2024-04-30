updateView()
function updateView(){
    const app = document.getElementById('app');
    let html = '';
   html += /*HTML*/ `
   <h1>Spill Kveld Finnern!</h1>
   <div class="mainView">
   <h2>Kommende events:</h2>
   <div class="eventsUpComing">
    <div class="innereventsUpComing">${seeEventsHtml()}</div>
    </br>
    <div class="controlButton1"></div>
    <div class="controlButton2"></div>
    <img src ="snorlax.png" class="img1">
    </div>
    </div>
   <button class="makeOwnEvents" onclick="createOwnEventView()">Opprett event +</button>
   <img src="sonic.gif" class="img2">
   <img src="link.gif" class="img3">
    
    `;
    app.innerHTML = html;

}

function seeEventsHtml(){
        let html = "";
    
        for(let i = 0; i < eventarray.length; i++){
            html += /*HTML*/ `
            <li onclick="changeSelectedEvent(${i})">Event: ${eventarray[i].eventName}. </li>
            `;
        }
        return html;
    }










