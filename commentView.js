function commentView(){
    const app = document.getElementById('app');
    let html = "";

    html +=/*HTML*/ `
    <button onclick="updateView()">x</button>
    <div>${createCommentInput()}</div>
    <button onclick="pushComment">Legg til kommentar</button>
    `;
    app.innerHTML = html;
}

function createCommentInput(){
    return /*HTML*/`
    <div class="comments">

    `;
}
