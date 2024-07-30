$(document).ready(function(){

   /*     Alerts after Registering      */

   $("#reg-btn").on("click",function(){
      alert("You have registered successfully");
   });


   /*        Animations on Dropdowns       */

   

    $('.l1').hover(
        function() {
            $(this).find("[href]").stop(true, true).slideDown(700); // Fade in on hover
        },
        function() {
            $(this).find("[href]").stop(true, true).slideUp(700); // Fade out when not hovered
        }
    );

   /*          Focus Setting        */

    $("input").focus(function() {
      $(this).css("background-color","#ED9FA6");
    });

    $("input").blur(function() {
      $(this).css("background-color","");
    });

/*          ------            */


/*          ------            */
/*          ------            */
/*          ------            */
/*          ------            */
/*          ------            */













});