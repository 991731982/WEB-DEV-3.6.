//same as DAN
console.log("JQuery");



$(document).ready(function(){
    $("button").click(function(){
      $("p").hide(); //hide() is a jQuery effect

      $("#imm").hide(); //hide() is a jQuery effect
      
      $(".imm").hide(); //hide() is a jQuery 
      $("#div2").fadeIn("slow");

      $("#p1").animate({
        height: 'toggle'
      });

    });


    $( "h1" ).css(  
        {
            fontSize: "100px",
            color: "red"
          }
          );    

          $("h2").css(        {
            fontSize: "70px",
            color: "blue"
          })
        //   .slideUp(500).slideDown(500)
          ;

          $("p").dblclick(function(){
            $(this).hide();
          });



        //   $("#mouseenter").mouseenter(function(){
        //     alert("You entered IMM!");
        //   });

          $("input").focus(function(){
            $(this).css("background-color", "yellow");

          });

          $("input").blur(function(){
            $(this).css("background-color", "orange");

        

          });


         


});






