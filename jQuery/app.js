$(document).ready(function(){
    // #1
    $('body').append('<button class="btn1">ALERT</button>');
    $('.btn1').click(function(){
        alert("This is a nice message");
    })

    // #2
    $('#Submit').click(function(){
        event.preventDefault();
        alert($('#text').val());
        $('#text').val("");
    })

    // #3
    $('body').append('<div class="div1"></div>')
    $('.div1').css({'margin': '50px', 'width': '8em', 'height': '8em', 'background-color': 'lightsalmon'})

    $('.div1').mouseover(function(){
        $(this).css('background-color', 'LightSkyBlue')
    })

    $('.div1').mouseout(function(){
        $(this).css('background-color', 'lightsalmon')
    })

    // #4
    $('body').append('<p>In a galaxy far far far far very far far away</p>')
    $('p').click(function(){
        $(this).css('color', rando_color);
    })

    // #5
    $('body').append('<button class="btn2">SPAN</button>');
    $('body').append('<div class="div2"></div>');
    
    $('.btn2').click(function(){
        $('.div2').append('<span>Cesar Juarez</span>');
    })

    // #6
    $('body').append('<button class="btn3">FRIENDS</button>')
    $('body').append('<ul></ul>')
    count = 0
    let friends_array = ['Jake Fink', 'Ray Weinstein', 'Zack Morrow', 'Rob Humphrey', 'Trey Borders', 'Garrett Thrash', 
                        'Max Kay', 'Olivia Johnson', 'Mel Clemmons', 'Chase Graffeo', 'Garrett Jenkins', 'Patrick Vincent',
                    'Mike Jones', 'Jeremy Damron', 'David Gauch', 'Eric Gardner'];

    $('.btn3').click(function(){
        if (count !== 16) {
        $('ul').append('<li>' + friends_array[count] + '</li>')
        count++
        }
    })
})

function rando_color(){
    rando1 = Math.floor(Math.random()*255);
    rando2 = Math.floor(Math.random()*255);
    rando3 = Math.floor(Math.random()*255);
    rgb_string = `rgb(${rando1}, ${rando2}, ${rando3})`;
    return rgb_string
};