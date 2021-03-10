let code="";
document.addEventListener('keydown', function(event)

{
    let clav = event.key;
    code = code + clav;

    if(code == "kap")

    
    {
        let foot = document.createElement('footer');
        let div = document.createElement('div');
        let head = document.createElement('header');
        document.body.prepend(foot);
        document.body.prepend(div);
        document.body.prepend(head);
        head.append("LaPlateforme_");
        div.append("Vous êtes le roi!");
        foot.append("Copyright 2021 | By Kap ");
    }
})

