$(document).ready( function() { 

    var counter = 0;
    var targetNumber = Math.floor(Math.random() * 120) + 19;
    var RMcry = Math.floor(Math.random() * 12) +1;
    var RMface = Math.floor(Math.random() * 12) +1;
    var RMfingers = Math.floor(Math.random() * 12) +1;
    var meeseeks = Math.floor(Math.random() * 12) +1;
    var wins = 0;
    var losses = 0;
    
    $("#number-to-guess").text(targetNumber);

    
    

    $("#RMcry").on("click", function() {
        
    

        counter += RMcry;
        
        $("#the-counter").html(counter);
        
        

    if (counter === targetNumber) {

              
        alert("You got schwifty!");


        wins++;

        $("#wins").text(wins);
        
        reset();
       
        

           
        }

        else if (counter>= targetNumber) {

           
            alert("Shit on the floor!");

            losses++;

            $("#losses").text(losses);

            reset();

            
    
        };       
    
    });

    $("#RMface").on("click", function() {
        
        counter += RMface;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {
    
            alert("You got schwifty!");

            wins++;

            $("#wins").text(wins);
            
            reset();
           
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");

            losses++;

            $("#losses").text(losses);

            reset();

    
        };

    
    });

    $("#RMfingers").on("click", function() {
        
        counter += RMfingers;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {

    
            alert("You got schwifty!");

            wins++;

            $("#wins").text(wins);
            
            reset();
           
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");

            losses++;

            $("#losses").text(losses);

            reset();

    
        }

    
    });

    $("#meeseeks").on("click", function() {
        
        counter += meeseeks;

        $("#the-counter").html(counter);

        if (counter === targetNumber) {

    
            alert("You got schwifty!");

            wins++;

            $("#wins").text(wins);
            
            reset();
           
        }

        else if (counter>= targetNumber) {

            alert("Shit on the floor!");

            losses++;

            $("#losses").text(losses);

            reset();

           
    
        }



    
    });

    function reset() {

         counter = 0;
         targetNumber = Math.floor(Math.random() * 120) + 19;
         RMcry = Math.floor(Math.random() * 12) +1;
         RMface = Math.floor(Math.random() * 12) +1;
         RMfingers = Math.floor(Math.random() * 12) +1;
         meeseeks = Math.floor(Math.random() * 12) +1;
        $("#number-to-guess").text(targetNumber);        
        $("#the-counter").text("");
    };

    
 
});
