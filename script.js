var check=false;

$('#div1').click(function(){
    $('h1').toggleClass("color-white");
    $('body').toggleClass("bg-color-black");
    if(!check){
        $('#circle').css('marginLeft',"100px");
        check=true;
    }
    else{
        $('#circle').css('marginLeft',"1px");
        check=false;
    }
})