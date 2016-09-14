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

    document.getElementById("angularjs").setAttribute("d", describeArc(200, 200, 200, 0, 250));
    document.getElementById("html").setAttribute("d", describeArc(200, 200, 175, 0, 310));
    document.getElementById("js").setAttribute("d", describeArc(200, 200, 150, 0, 290));
    document.getElementById("css").setAttribute("d", describeArc(200, 200, 125, 0, 270));
    document.getElementById("jquery").setAttribute("d", describeArc(200, 200, 100, 0, 270));
    document.getElementById("bootstrap").setAttribute("d", describeArc(200, 200, 75, 0, 330));

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


    $(".skill-chart").on('mouseover','path',function(event) {
        changeText(event);
    }).on('mouseleave', 'path', function() {
        resetText();
    });
})