$(document).ready(function () {

    var top_nav_collapse = false;

    $(window).scroll(function () {
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if ((scrollTop > 200 && top_nav_collapse) || (scrollTop < 200 && !top_nav_collapse)) {
            return;
        } else {
            var nav_collpase_class = $('#nav-bar-top').hasClass("top-nav-collapse");
            if (top_nav_collapse && nav_collpase_class) {
                $('#nav-bar-top').removeClass('top-nav-collapse');
                top_nav_collapse = false;
            } else {
                top_nav_collapse = true;
                $('#nav-bar-top').addClass('top-nav-collapse');
            }
        }
    });

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, startAngle, endAngle) {

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");

        return d;
    }

    var changeText = function (e) {
        var text = '';
        switch (e.target.id){
            case 'angularjs':
                text = "AngularJS 70%";
                break;
            case 'css':
                text = "CSS3 75%";
                break;
            case 'html':
                text = "HTML5 85%";
                break;
            case 'js':
                text = "Javascript 80%";
                break;
            case 'jquery':
                text = "jQuery 75%";
                break;
            case 'bootstrap':
                text = "Bootstrap 90%";
                break;
        }
        $('#skillText').text(text);
    };
    var resetText = function () {
        $('#skillText').text("Creativity 100%");
    };
    var findProjectElement = function (currentElm, nextElm, arrow) {
        nextElm = nextElm.length === 0? (arrow === 'left'? $('.project-list li:last-child'): nextElm = $('.project-list li:first-child')):nextElm;
        if( arrow == 'left'){
            $(nextElm).addClass('fadeInRight');
        }else {
            $(nextElm).addClass('fadeInLeft')
        }
        $(currentElm).removeClass("show");
        $(nextElm).addClass('show');
    };

    document.getElementById("angularjs").setAttribute("d", describeArc(200, 200, 170, 0, 250));
    document.getElementById("html").setAttribute("d", describeArc(200, 200, 150, 0, 310));
    document.getElementById("js").setAttribute("d", describeArc(200, 200, 130, 0, 290));
    document.getElementById("css").setAttribute("d", describeArc(200, 200, 110, 0, 270));
    document.getElementById("jquery").setAttribute("d", describeArc(200, 200, 90, 0, 270));
    document.getElementById("bootstrap").setAttribute("d", describeArc(200, 200, 70, 0, 330));


    $(".skill-chart").on('mouseover','path',function(event) {
        changeText(event);
    }).on('mouseleave', 'path', function() {
        resetText();
    });

    $("#arrow-left-id").on('click', function () {
        var currentElm = $('.project-list').find(".show");
        var  prevElm = currentElm.prev();
        prevElm = prevElm.length === 0? $('.project-list li:last-child') : prevElm;
        $(prevElm).addClass('fadeInRight').addClass('show');
        $(currentElm).removeClass("show");
    });
    $("#arrow-right-id").on('click', function () {
        var currentElm = $('.project-list').find(".show");
        var  nextElm = currentElm.next();
        nextElm = nextElm.length === 0? $('.project-list li:first-child') : nextElm;
        $(nextElm).addClass('fadeInLeft').addClass('show');
        $(currentElm).removeClass("show");
    });

    $('.contactForm').on("keyup",'input, textarea', function () {
        if($(this).val().length > 0){
            $(this).addClass("has-value");
        }
    });

    var greetArr = ['',"Hello,","नमस्ते,",'ನಮಸ್ಕಾರ,'],
        cursor = $('#cursor'),
        greeting = $('#greeting'),
        counter = 500,
        len = greetArr.length,
        i=0,
        intervalId;

    var changeGreetingText = function(text,j){
        var text = text;
        var index= j;
        setTimeout( function () {
            $(greeting).text($(greeting).text() + text);
        },1000 + index * 100);

    };
    setInterval(function () {
        i = i >= len-1 ? 0 : i+1;
        $(greeting).text('');
        var subArr = greetArr[i].split('');
            for (var j=0;j<subArr.length;j++){
                changeGreetingText(subArr[j],j);
            }
    }, (greetArr[i].length+1)*1000+2000);

    setInterval(function () {
        $(cursor).text( $(cursor).text() == '' ? "|":'' );
    },1000);

})
function sendEmail() {
    $.ajax({
        url: "https://formspree.io/vandanak.bhat@gmail.com",
        method: "POST",
        data: {message: "hello!",email:"test@gmail.com"},
        dataType: "json"
    });
}