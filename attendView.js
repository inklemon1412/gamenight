function attendView(){
    const app = document.getElementById('app');
    let html = "";

    html += /*HTML*/ `
   <button onclick="updateView()">x</button>
   <div>${createAttendInput()}</div>
   <button class="makeOwnEvents" onclick="addAttendantToEvent()">Bli med på eventet!</button>
   </br>
   </br>
   </br>
   `;
   app.innerHTML = html;
}

function createAttendInput(){
    return /*HTML*/ `
    <div class="ownEventCreater">
    <div class="createEventInputText">
    <div>Navnet ditt:</div>
    <input type="text" oninput="attendantsInput = this.value" value = "${attendantsInput}"/>
    </div>
    </div>
    `;
}
