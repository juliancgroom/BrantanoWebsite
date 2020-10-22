$(document).ready(function () {

    var lower = 1000
    var upper = 1009

    // for (i = lower; i < upper; i++) {
    //     $.get("https://localhost:44382/Project/Products/" + i)
    //         .done(function(result){
    //                 console.log(result.image_path)
    //                 $(".productbrowse").append("<div class=\"col-md-4 text-center col-sm-6 col-xs-6\" ><div class=\"thumbnail product-box\"><img src=" + result.image_path + "\" alt=\"\" /><div class=\"caption\"><h3><a href=\"#\">" + result.name + "</a></h3></div></div></div>")            
    //         })

    //         .fail(function(error){
    //             console.log(error);
    //         })
    // }



    jsonObj = []

    var lower = 1000
    var upper = 1009

    $.get("https://localhost:44382/Project/Products/GetAllProducts")
        .done(function(result){
            $.each(result,function(index, value){
                //console.log(value.name)
                //$(".a").append("<p>"+"Product Name: " + value.name + "</p>")
                item = {}
                item['name'] = value.name;
                item['price'] = value.price;

                jsonObj.push(item);
            })
        
        })
        .fail(function(error){
            console.log(error);
        })

    console.log(jsonObj)
    

    console.log(jsonObj.length)
    

    var current_page = 1;
    var records_per_page = 18;

    //$("a#capital").click(function(){
    $("a#btn_prev").click(function prevPage()
    {
        if (current_page > 1) {
            current_page--;
            changePage(current_page);
        }
    })

    $("a#btn_next").click(function nextPage()
    {
        if (current_page < numPages()) {
            current_page++;
            changePage(current_page);
        }
    })

    function changePage(page)
    {
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_table = document.getElementById("productbrowse");
        var page_span = document.getElementById("page");
        //items_table = document.getElementById('items_table');
    
        // Validate page
        if (page < 1) page = 1;
        if (page > numPages()) page = numPages();

        listing_table.innerHTML = "";
        //items_table.innerHTML = "";

        for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < jsonObj.length; i++) {
            

            console.log("listing table: " + listing_table);
            console.log(jsonObj[i].name)

            var pic_path = `<img src="./data/pictures/${jsonObj[i].name}.jpg" width="100px" height="100px">`
            
            listing_table.innerHTML += "<div class=\"col-md-4 text-center col-sm-6 col-xs-6\" ><div class=\"thumbnail product-box\">"

            + pic_path
            + "<div class=\"caption\"><h3><a href=\"#\">"
            + jsonObj[i].name + "</a></h3>"
            + "<p>Price : <strong>"  + jsonObj[i].price + " €" + "</strong>  </p>"
            + "</div></div></div>"
        }
        page_span.innerHTML = page + "/" + numPages();



        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }

        if (page == numPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }


    function numPages()
    {
        return Math.ceil(jsonObj.length / records_per_page);
    }


    $(window).on('load', function() {
        setTimeout(function() {
            document.getElementById("itemcount").innerHTML = jsonObj.length + " ";
            changePage(1);
          }, 100);
    })

    




























// var current_page = 1;
// var records_per_page = 3;

// $.get("https://localhost:44382/Project/Products/GetAllProducts")
// .done(function(result){
//     $.each(result,function(index, value){
//         console.log(value.name)
//         $(".a").append("<p>"+"Product Name: " + value.name + "</p>")
//     })

// })
// .fail(function(error){
//     console.log(error);
// })

// var objJson

// function prevPage()
// {
//     if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//     }
// }

// function nextPage()
// {
//     if (current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//     }
// }
    
// function changePage(page)
// {
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
//     var page_span = document.getElementById("productbrowse");
 
//     // Validate page
//     if (page < 1) page = 1;
//     if (page > numPages()) page = numPages();


//     page_span.innerHTML = page + "/" + numPages();

//     if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//     } else {
//         btn_prev.style.visibility = "visible";
//     }

//     if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//     } else {
//         btn_next.style.visibility = "visible";
//     }
// }

// function numPages()
// {
//     return Math.ceil(objJson.length / records_per_page);
// }

// window.onload = function() {
//     changePage(1);
// };

    // $("#postmsg").click(function addProductRange(lower, upper)){

    //     for (i = lower; i < upper; i++) {
    //         $.get("https://localhost:44382/Project/Products/" + i)
    //             .done(function(result){
    //                     console.log(result.name)
    //                     $(".productbrowse").append("<div class=\"col-md-4 text-center col-sm-6 col-xs-6\" ><div class=\"thumbnail product-box\"><img src=\"assets/img/testphoto.jpg\" alt=\"\" /><div class=\"caption\"><h3><a href=\"#\">" + result.name + "</a></h3></div></div></div>")            
    //             })

    //             .fail(function(error){
    //                 console.log(error);
    //             })
    //     }
    // };



});