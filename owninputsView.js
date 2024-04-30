function createOwnEventView(){
    const app = document.getElementById('app');
    let html = "";

   html += /*HTML*/ `
   <button onclick="updateView()">x</button>
   <div>${createOwnEventInputs()}</div>
   </br>
   <button class="makeOwnEvents" onclick="addOwnEvent()">Legg til event +</button>
   
   `;
   app.innerHTML = html;
}

function createOwnEventInputs(){
    return /*HTML*/ `
    <div class="ownEventCreater">
    <div class="createEventInputText">
    <div>Event Navn:</div>
    <input type="text" oninput="ownEventNameInput = this.value" value = "${ownEventNameInput}"/>
    </div>
    <div class="createEventInputText">
    <div>Tidspunkt:</div>
    <input type="text" oninput="ownEventTimeInput = this.value" value = "${ownEventTimeInput}"/>
    </div>
    <div class="createEventInputText">
    <div>Dato:</div>
    <input type="text" oninput="ownEventDateInput = this.value" value = "${ownEventDateInput}"/>
    </div>
    <div class="createEventInputText">
    <div>Om:</div>
    <input type="text" oninput="ownEventInfoInput = this.value" value = "${ownEventInfoInput}"/>
    </div>
    </div>
    `;

}
