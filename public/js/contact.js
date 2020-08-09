let lastMessage = null;

document.querySelector("#submitBtn").onclick = (e)=>{
    e.preventDefault();

    let now = new Date();

    if ( (lastMessage===null) || (now-lastMessage > 5000))
    {
        let req = new XMLHttpRequest();
        req.open("POST", "/contact", true);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.onload = (e)=>{
            if (req.status === 200){
                alert("Message Bien Reçu\n Merci pour la visite !")
            }
        };
        req.send(JSON.stringify({
            contact: document.querySelector("#contact").value ,
            message: document.querySelector("#message").value ,
        }));
        lastMessage = new Date();
    }else{
        alert("Vous envoyez des messages beaucoup trop vite !")
    }

}