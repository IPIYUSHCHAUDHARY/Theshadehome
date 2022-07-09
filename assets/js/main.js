// Back to top 
let backtoTop = document.querySelector(".backToTop");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backtoTop.style.display = "inline-flex";
    } else {
        backtoTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backtoTop.addEventListener('click', function() {

    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

// Header transition
window.onscroll = function() {
    let header = document.querySelector(".main-header");
    let sticky = document.querySelector("#about").offsetTop - 150;

    (window.pageYOffset > sticky) ? header.classList.add("bg-black"): header.classList.remove("bg-black");

    scrollFunction();
}

// projects slider
$(document).ready(function() {
    $('.project-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
});

// footer select
$('.custSelect').each(function() {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('select-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


//nav close
document.addEventListener("click", function(e) {
    let nav = document.querySelector(".navbar");
    if (!(e.target == nav || e.target.closest(".navbar"))) {
        nav.querySelector(".navbar-collapse").classList.remove("show");
    }
})


//scrolling

let navMenus = document.querySelectorAll(".nav-link");
for (let i = 0; i < navMenus.length; i++) {
    navMenus[i].addEventListener("click", function(e) {
        e.preventDefault();
        let getHref = this.getAttribute("href");
        let sectn = document.querySelector('' + getHref + '');
        let headerHyt = document.querySelector('.main-header').clientHeight;
        window.scrollTo({
            top: sectn.offsetTop - headerHyt,
            behavior: "smooth"
        });
    })
}