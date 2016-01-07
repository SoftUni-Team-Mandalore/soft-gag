$(document).ready(function() {
    setTimeout(function(){

        $('#home-page').fadeOut();
        var previous = document.getElementById('home-page');
        var id = "#news-page";

        $(previous).animate({
            left: '-500%'
        },
        {
            duration: 500,
            easing: 'linear',
            complete: function() {
                $(previous).css('left', '200%');
                $(previous).appendTo('#wrapper');
            }
        });

        $(id).animate({
            left: '0%'
        }, 500);

        $(previous).removeClass('content');
        $(previous).addClass('hidden');
        $(id).removeClass('hidden');
        $(id).addClass('content');
    }, 3000);
    
    $('.navigation-button').click(function() {
        var caller = this.id;
        var elems = document.getElementsByClassName('content');
        var previous = "#" + elems[0].id;
        var id = "#" + caller + "-page"; 
        $(previous).animate({
            left: '-500%'

        },
        {
            duration: 500,
            easing: 'linear',
            complete: function() {
                $(previous).css('left', '200%');
                $(previous).appendTo('#wrapper');
            }
        });

        $(id).animate({
            left: '0%'
        }, 500);

        $(previous).removeClass('content');
        $(previous).addClass('hidden');
        $(id).removeClass('hidden');
        $(id).addClass('content');
    });
});
