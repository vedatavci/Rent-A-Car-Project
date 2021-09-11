$(document).ready(function(){
$("#tarih1, #tarih2, #tarih3").datepicker({});
$(window).scroll(function(){
    $('.bolum2,.bolum3,.bolum4,.bolum5,.bolum6,.bolum7,.bolum8').each(function(){
        var ustkenar=$(this).offset().top;
        var altkenar=$(window).scrollTop()+$(window).height();
        if(altkenar>ustkenar){
            $(this).animate({'opacity':'1'},1000);
        }
    })
})
});