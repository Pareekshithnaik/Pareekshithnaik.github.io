
    /* 1. Grab the input value */

    document.querySelector(".search").addEventListener('click',function(){

        var input = document.querySelector("input").value;

        ajax(input);
    
    });

    
    document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    
        var input = document.querySelector("input").value;
    
        // if the key ENTER is pressed...
        if(e.which === 13) {
            
            ajax(input);

        }
    
    });

    /* 2. do the data stuff with the API */

    function ajax(input) {

        var query = input.split(' ').join('+')
        var url = "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=zo9bEVEz8c7tWQzXmylFLfjU0Exg1fbY";
            
        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open( 'GET', url );
        GiphyAJAXCall.send();
        
        GiphyAJAXCall.addEventListener('load',function(e){
        
            var data = e.target.response;
            clear();
            pushToDOM(data);
        
        });

    }
    
    /* 3. Show me the GIFs */
    
    function clear() {

        document.querySelector(".js-container").innerHTML = "";

    }

    function pushToDOM(input) {
    
        var response = JSON.parse(input);
    
        var imageUrls = response.data;
    
        imageUrls.forEach(function(image){
    
        var src = image.images.fixed_height.url;

        document.querySelector(".js-container").innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    
        });
    
    }