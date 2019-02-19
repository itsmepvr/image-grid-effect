window.onload = function() {
    
    document.getElementById("input").defaultValue = "10";

    imageToGrid(10);  //run function with required size with default width and height
    
    //imageToGrid(10, 300, 300) //run function with required size, custom width and custom height

    $("button").click(function(){
        $("#main").html("");
        val = $('input').val()
        if(val == 0){
            imageToGrid(1);
        }
        imageToGrid(val);
    })
    
}
