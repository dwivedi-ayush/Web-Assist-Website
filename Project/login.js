var cards = document.querySelector(".cards");

fetch("./login.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        for(var i=0;i<data.length;i++)
        {
            var item=data[i];
            cards.innerHTML+='<a href="./sign_in.html"<div class="card"><img src='+item.url+' alt="" /><p>For <span class="'+item.para+'_login">'+item.para+'</span></p><p class="info">'+item.info+'</p></div </a>'
            
        }
    })