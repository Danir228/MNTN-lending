// Scripts for larger monitor sizes
    // Scroll down window
    const scrollDownWindow = document.querySelector(".section_window_scroll-item");

    scrollDownWindow.onclick = function() {
        let i = 10;
        let int = setInterval (function mobscrollDownHeight() {
            window.scrollTo(0, i);
            i += 10;
            if (i >= 4600) clearInterval(int);
        }, 3);
    };

    // Scroll up window

    const arrowTop = document.querySelector(".arrowTop");

    arrowTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
        };

    window.addEventListener('scroll', function() {
        arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    // Scroll to the anchor

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










































