// #1
window.addEventListener('DOMContentLoaded', function(){
    let btn = document.createElement('button');
    let btntext = document.createTextNode("Alert");
    btn.appendChild(btntext);

    btn.addEventListener('click', function(){
        alert("This is a nice message lol");
    });
    
    // #2    
    btn2 = document.querySelector('button');
    text_input = document.getElementById('text');
    btn2.addEventListener('click', function(){
        event.preventDefault();
        alert(text_input.value)
        text_input.value = ""
    })

    // #3
    div = document.querySelector('div');
    div.style.height = "8em";
    div.style.width = "8em";
    div.style.margin = "50px";
    div.style.background = "lightblue";
    div.style.display = "block";

    div.addEventListener('mouseover', function() {
        div.style.background = "lightcoral"
    });
    
    div.addEventListener('mouseout', function(){
        div.style.background = "lightblue"
    })
    
    // #4
    p = document.createElement('p');
    p_text = document.createTextNode("Put some text in a paragraph they said, it'll be fun they said");
    p.appendChild(p_text);

    p.addEventListener('click', function(){
        rgb_string = rando_color();
        event.currentTarget.style.color = rgb_string;
    });

    function rando_color(){
        rando1 = Math.floor(Math.random()*255);
        rando2 = Math.floor(Math.random()*255);
        rando3 = Math.floor(Math.random()*255);
        rgb_string = `rgb(${rando1}, ${rando2}, ${rando3})`;
        return rgb_string
    };

    // #5
    btn3 = document.createElement('button');
    btn3_text = document.createTextNode("Span");
    btn3.appendChild(btn3_text);

    div2 = document.createElement('div');
    span = document.createElement('span');
    span_text = document.createTextNode('Cesar Juarez');
    span.appendChild(span_text);
    div2.appendChild(span);

    btn3.addEventListener('click', function(){
        document.body.appendChild(div2);
    })

    // #6
    btn4 = document.createElement('button');
    btn4_text = document.createTextNode('Friends')
    btn4.appendChild(btn4_text);
    friends_array = ['Jake Fink', 'Ray Weinstein', 'Zack Morrow', 'Rob Humphrey', 'Trey Borders', 'Garrett Thrash', 
                        'Max Kay', 'Olivia Johnson', 'Mel Clemmons', 'Chase Graffeo', 'Garrett Jenkins', 'Patrick Vincent',
                    'Mike Jones', 'Jeremy Damron', 'David Gauch', 'Eric Gardner'];
    ul1 = document.createElement('ul');
    count = 0;
    
    btn4.addEventListener('click', function(){
        if (count !== 16){
            li_append = document.createElement('li');
            li_text = document.createTextNode(friends_array[count]);
            li_append.appendChild(li_text);
            ul1.appendChild(li_append); 
            count++
        }
    });

    document.body.appendChild(btn);
    document.body.appendChild(div);
    document.body.appendChild(p);
    document.body.appendChild(btn3);
    document.body.appendChild(btn4);
    document.body.appendChild(ul1);
})