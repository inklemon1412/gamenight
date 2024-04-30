
function pushComment(){
    if(commentInput == "")return;

   eventarray[chosenEventIndex].comments.push(commentInput);

    commentInput = "";
    updateView();
 };
 
function addOwnEvent(){
    if (ownEventNameInput == "" && ownEventTimeInput == "" && ownEventDateInput == "" && ownEventInfoInput == "")return;


    let eventObject = {
        eventName: ownEventNameInput,
        time: ownEventTimeInput,
        date: ownEventDateInput,
        info: ownEventInfoInput,
        comments: [],
        attendants: [],
    };
    eventarray.push(eventObject);
    
    ownEventNameInput = "";
    ownEventTimeInput = "";
    ownEventDateInput = "";
    ownEventInfoInput = "";
    updateView();
 }

function addAttendantToEvent(){
      // Vi sjekker om checkNameMatch er undefined, som betyr at den ikke fant noe. Som betyr at den kan gå videre.
      if(attendantsInput == "" || checkNameMatch() != undefined) {
         alert("Allerede påmeldt på dette eventet!")
         return;
      }
      
      eventarray[chosenEventIndex].attendants.push(attendantsInput);
      attendantsInput = "";
      updateView();
      }
  
function checkNameMatch(){
      // Vi bruker den innebygde funksjonen find()
      // denne bruker vi til å finne et navn inne attendants
      // Den da returnerer undefined vis den ikke finner noe, og den returner en string vis den finner noe  
    return eventarray[chosenEventIndex].attendants.find(findName)
}

function findName(name){
      // Sjekker at ett av elementene i attendants er == attendantsInput
      // Vi setter det til lowerCase so det er lettere å sjekke
      // også etter det returnerer vi hva vi får
   return name.toLowerCase() == attendantsInput.toLowerCase()
}

console.log(checkNameMatch)

/*
const attendant = 
*/

  
  /*  for (let i in eventarray) {
      if (eventarray[i].attendants === attendants){
         return attendants[i]
      }
   } return null */


function changeSelectedEvent(index){
    chosenEventIndex = index;
    seeEvent();
 }

