$(document).ready(function(){

    $("#imgBandeira").click(function(){
      if($(this).attr("src") == "sources/cartão.png") 
        $(this).attr("src","sources/canecas.png");
      else
        $(this).attr("src","sources/cartão.png");
  
    });
  });