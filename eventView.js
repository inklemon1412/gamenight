function seeEvent(){
    let html = "";
    app.innerHTML = /*HTML*/ `
    <div class="eventsView">
    <div class="innerEventsView">
    <div style= "height: 300px; overflow-y: scroll;">
    <div>Event: ${eventarray[chosenEventIndex].eventName}</div>
    </br>
    <div>Tidspunkt: ${eventarray[chosenEventIndex].time}</div>
    </br>
    <div>Dato: ${eventarray[chosenEventIndex].date}</div>
    </br>
    <div>Info: ${eventarray[chosenEventIndex].info}</div>
    </br>
    <div>Påmeldte: ${seeAttendantsHtml()}</div>
    <button onclick="attendView()">Join eventet!</button>
    </div>
    </div>
    </div>
    </br>
    <div class="commentsOuter">
    <div class="comments">Kommentarer: ${seeCommentsHtml()}
    <input type="text" oninput="commentInput = this.value" value = "${commentInput}"/>
    <button onclick="pushComment()">Legg til kommentarer</button>
    </div>
    </div>
    </div>
    <div class="buttonUp"></div>
    <div class="buttonDown"></div>
    <div class="buttonSide1"></div>
    <div class="buttonSide2"></div>
    <div class="buttonX">X</div>
    <div class="buttonB">B</div>
    <div class="buttonA">A</div>
    <div class="buttonY">Y</div>
    <div class="line"></div>
    </br>
    <div class="tinyButton1" onclick="updateView()"></br>Tilbake</div>
    `;
    return html;
}



function seeAttendantsHtml(){
    let html = "";

 for(let i = 0; i < eventarray[chosenEventIndex].attendants.length; i++){
        html += `
       <li>${eventarray[chosenEventIndex].attendants[i]}</li>
        `;
    }
    return html;
}

function seeCommentsHtml(){
    let html = "";
    
       for(let i = 0; i < eventarray[chosenEventIndex].comments.length; i ++) {
            html += `
            <li>${eventarray[chosenEventIndex].comments[i]}</li>
            `;
    } 
    return html;
}
