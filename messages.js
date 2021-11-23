function handleSubmit(){
    var div=document.createElement("div")
    div.className="message-content"
    var name=document.getElementById("name").value
    var subject=document.getElementById("subject").value
    div.innerHTML=` 
        <span>
        <strong>${name}</strong>: ${subject}
        </span>
        <button class="btn btn-danger btn-small" onclick="removeRow(this)" >Excluir</button>
        
    `
    document.getElementById("messegeSent").appendChild(div)
    document.getElementById("name").value=""
    document.getElementById("subject").value=""
}

function removeRow(button){

    document.getElementById("messegeSent").removeChild(button.parentNode)

}

