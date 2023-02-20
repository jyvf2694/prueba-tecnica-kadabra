$(document).ready(function(){
    //dropdown stopPropagation
    $(".dropdown-menu").on("click", function(e){
        e.stopPropagation();
    });

    //button--hamburger
    $(".button--hamburger").on("click", function(e){
        $("body, html").toggleClass("openMenu");
        $(".menu__mobile").slideToggle();
    });

    //modal link-alert
    var link;
    $(".link-alert").on("click", function(e){
        event.preventDefault();
        $("#modal-alert-link").modal("show");
        link=$(this).attr("href");
    });
    $(".button--proceed").click(function(){
        window.open(link, "_blank");
     });
    
    //modal close and cancel
    $(".modal .close, .modal .button--cancel").on("click", function(e){
        $("#modal-alert-link").modal("hide");
    });

    //button--prev
    $(".dropdown__menu--prevF a").on("click", function(e){
        event.preventDefault();
        $(this).closest(".dropdown-menu").removeClass("show");
    });
    $(".dropdown__menu--prevS a").on("click", function(e){
        event.preventDefault();
        $(this).closest(".dropdown__menu--second").css("right", "-1000px");
    });

    if($(window).width() > 768){
        //dropdown__menu--second / arrowLight--down
        $(".siteHeader__menu ul li .arrowLight--down").on("click", function(e){
            var width=$(this).closest("li").find(".dropdown__position").width();
            var positionTop=$(this).closest("li").find(".dropdown__position").position().top;
            var positionLeft=$(this).closest("li").find(".dropdown__position").position().left + width;

            $(".dropdown__menu--second").css("display", "none"); 
            $(".dropdown__menu--active .dropdown__menu--second").css({
                "width": width,
                "top": positionTop,
                "left": positionLeft,
                "display": "block"
            });
        });

        //dropdown__menu--second / arrowLight--right
        $(".dropdown-menu.first ul li .arrowLight--right").on("click", function(e){
            var width= $(this).closest(".dropdown-menu.first").find(".dropdown__position").width();
            var positionTop= $(this).closest(".dropdown-menu.first").find(".dropdown__position").position().top;
            var positionLeft= $(this).closest(".dropdown-menu.first").find(".dropdown__position").position().left + width;

            $(".dropdown__menu--second").css("display", "none");
            $(this).closest("li").find(".dropdown__menu--second").css({
                "width": width,
                "top": positionTop,
                "left": positionLeft,
                "display": "block"
            });
        });
    }
    else{
        //dropdown__menu--second / arrowLight--right
        $(".dropdown-menu.first ul li .arrowLight--right").on("click", function(e){
            $(this).closest("li").find(".dropdown__menu--second").css({
                "right": 0
            });
        });
    }

    //search-form
    var options = [
        'Branch ATM 1', 
        'Branch ATM 2', 
        'Branch ATM 3',
    ];
    $("#search-form").autocomplete({
        hints: options,
        placeholder: "Branch ATM",
		onSubmit: function(text){
			//			
		}
	});
});
