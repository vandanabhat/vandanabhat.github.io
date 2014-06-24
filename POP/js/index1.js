/**
 * Created by vandana on 6/19/14.
 */
//breakdown the labels into single character spans

$(function () {

    $(".flp label").each(function(){
        var sop = '<span class="ch">'; //span opening
        var scl = '</span>'; //span closing
        //split the label into single letters and inject span tags around them
        $(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
        //to prevent empty spans from collapsing
        $(".ch:contains(' ')").html("&nbsp;");
        /* $(".flp label").css("color","red");*/
    })

    var d;
//animation time
    $(".flp input").focus(function(){
        //calculate movement for .ch = half of input height
        var tm = $(this).outerHeight()/1.5  *-1 + "px";
        //label = next sibling of input
        //to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
        $(this).next().addClass("focussed").children().stop(true).each(function(i){
            d = i*50;//delay
            $(this).delay(d).animate({top: tm}, 200, 'easeOutBack');
        })
        $(".flp label").css("color","white");
    })

    $(".flp input").blur(function(){
        //animate the label down if content of the input is empty
        if($(this).val() == "")
        {
            $(this).next().removeClass("focussed").children().stop(true).each(function(i){
                d = i*50;
                $(this).delay(d).animate({top: 0}, 500, 'easeInOutBack');
            })

        }
        $(".flp label").css("color","black");
    })




})


