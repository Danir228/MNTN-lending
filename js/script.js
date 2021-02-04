    // Scroll down window.............................................................

    function goBottom() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

        if (match != document.documentElement.scrollHeight) {
            window.scrollBy(0, 15);
            setTimeout(goBottom, 0);
        }
    }

    const scrollDownWindow = document.querySelector(".section_window_scroll-item");

    scrollDownWindow.addEventListener('click', goBottom);

    // Scroll up window.........................................................................

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -15);
            setTimeout(backToTop, 0);
        }
    }

    const arrowTop = document.querySelector(".arrowTop");

    arrowTop.addEventListener('click', backToTop);

    window.addEventListener('scroll', function() {
        arrowTop.hidden = (window.pageYOffset < document.documentElement.clientHeight);
    });

    // Scroll to the anchor........................................................................

    const anchors = [].slice.call(document.querySelectorAll('.scroll_menu a[href*="#"]')),
            animationTime = 400,
            framesCount = 30;

    function hiddenElementParent() {
        anchors.forEach(item => {
            item.classList.remove('show-btn');
        });
    }

    anchors.forEach(function(item) {
            item.addEventListener('click', function(e) {
                const target = e.target;
                e.preventDefault();

                hiddenElementParent();

                if(target == item) {
                    item.classList.add('show-btn');
                }

            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

            let scroller = setInterval(function() {
                let scrollBy = coordY / framesCount;

                if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    window.scrollBy(0, scrollBy);
                } else {
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
            }, animationTime / framesCount);
        });
    });

    // Open Modal Window......................................................

    var modal = document.querySelector("#modal"),
        modalOverlay = document.querySelector("#modal-overlay"),
        closeButton = document.querySelector("#close-button"),
        openButton = document.querySelector("#open-button");

    closeButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });

    openButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });









































