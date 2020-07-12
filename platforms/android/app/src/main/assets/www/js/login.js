$(document).ready(function(){
    // on click Sign In Button checks that username =='admin' and password == 'password'
    $("#login").click(function(){
    if( $("#loginusername").val()=='sravya' && $("#loginpassword").val()=='123') {
            $("#first").hide();
            $("#second").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' /><br>");
            
            
           
            $("#second").append("<button type='button'><a href='quiz.html'>go to quiz</a></button>");
           
            alert("login succesful");
        }
    else {
        alert("Please try again");
    }

    $("#logout").click(function() {
    $("form")[0].reset();
    $("#first").show();
    $("#second").hide();
});
});

});
