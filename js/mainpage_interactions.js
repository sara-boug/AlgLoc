 $(document).ready(function(){
   $("form.login").css("visibility","hidden").slideUp();
   $("button.switchbut").click(function(){
       if($(this).text().toLowerCase().trim()=="login"){
          $(this).html("Sing Up");
          $(".switch p").html("Create a new Account?");
          $("form.signup").css("visibility","hidden").slideUp("slow");
          $("form.login").css("visibility","visible").slideDown("slow");

      } else{
            $(".switch p").html("Already have an account?");
            $(this).html("Login");
           $("form.signup").css("visibility","visible").slideDown("slow");
           $("form.login").css("visibility","hidden").slideUp("slow");
   }
   });
   $(".header").css("visibility","hidden").animate({width:'toggle' });
   $(".toggle_leftbar").click(function(){

     $(".header").css("visibility","visible");
         $(".header").animate({
                 width:'toggle',
         });
         $(".toggle_leftbar").css("opacity","0");

   });
    $(".header").click(function(){

        $(this).css("visibility","visible");
        $(this).animate({
                  width:'toggle',
          });
          $(".toggle_leftbar").css("opacity","1");

    });
 });
