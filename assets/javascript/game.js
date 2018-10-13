$(document).ready( function() { 

    var counter = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    var RMcry = Math.floor(Math.random() * 12) +1;
    var RMface = Math.floor(Math.random() * 12) +1;
    var RMfingers = Math.floor(Math.random() * 12) +1;
    var meeseeks = Math.floor(Math.random() * 12) +1;
    
    $("#number-to-guess").text(targetNumber);

    

    $(".RMcry").on("click", function() {
        
        counter += RMcry;
        
        $("#the-counter").html(counter); 

        if (counter === targetNumber) {

    
            alert("You got schwifty!");

            $("#wins").text(=++);

           
        }

        else if (counter>= targetNumber) {

    

            alert("Shit on the floor!");

            $("#losses").text(+1);
            
    
        };       
    
    });

    $(".RMface").on("click", function() {
        
        counter += RMface;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {
    
            alert("You got schwifty!");
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");
    
        };

    
    });

    $(".RMfingers").on("click", function() {
        
        counter += RMfingers;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {

    
            alert("You got schwifty!");
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");
    
        }

    
    });

    $(".meeseeks").on("click", function() {
        
        counter += meeseeks;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {

    
            alert("You got schwifty!");
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");
    
        }



    
    });

    
  



});
