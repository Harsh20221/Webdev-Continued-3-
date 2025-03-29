///WHAT IS JQUERY? -- IT IS A SIMPLIFIED WAY OF WRITING JAVASCRIPT TO MAKE JAVASCRIPT CODE SMALLER WE USE JQUERY
//$("h1").css("color","red")///#THIS  IS HOW WE CAN CHANGE THE COLOR OF THE FIRST HEADING TO RED COLOR USING  JQUERY 

$("Button").css("color","blue")
$('a').attr("href","https://www.bing.com")
$('h1').addClass('bigtitle addstyle')

var text=" "

$('button').click( ///? This is how you can add event listenser to the buttons
    function(){
        alert("BUTTON PRESSED")
    }
)

$('input').keypress(function(event){
    console.log(event.key)
    text = event.key;
    $('h1').text(text);
})

$('h1').mouseover(function () {  ///? Using Jquery For dom events 
    $('h1').css("color","orange")
});


$("h1").after("<button>LICK ME </button>")////!! Maker sure the button element is correctly wrapped in a string     

$('button').on("click", function () { //? This is how you can apply toggle animation uinsg the toggle function of j query , similarly you can also apply the fadeout animation 
    $('h1').fadeOut();
});