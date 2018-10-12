$(document).ready( function() { 

    var counter = 0;
    var targetnumber = Math.floor(Math.random() * 120) + 19;
    var RMcry = Math.floor(Math.random() * 12) +1;
    var RMface = Math.floor(Math.random() * 12) +1;
    var RMfingers = Math.floor(Math.random() * 12) +1;
    var meeseeks = Math.floor(Math.random() * 12) +1;
    
    $("#number-to-guess").text(targetnumber);

    $("#the-counter").text(counter);

    $(".RMcry").on("click", function() {
        
        counter += RMcry;
        
        // alert(RMcry);
    
    });

    $(".RMface").on("click", function() {
        
        counter += RMface;
    
    });

    $(".RMfingers").on("click", function() {
        
        counter += RMfingers;
    
    });

    $(".meeseeks").on("click", function() {
        
        counter += meeseeks;
    
    });



});
