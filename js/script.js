    // Scroll down window.............................................................
    function downWindow() {
        let scrollheight = document.documentElement.scrollHeight;
        let heightClient = document.documentElement.clientHeight;
        let u;

        function down() {
            let scrollTop = document.documentElement.scrollTop;
            if((scrollTop + heightClient) < (scrollheight - 1)) {
                window.scrollBy (0, 100);
                u = setTimeout(down, 10);
            } else {
                clearTimeout(u);
            }
        }
        down();
    }

    const scrollDownWindow = document.querySelector('.section_window_scroll-item');

    scrollDownWindow.addEventListener('click', downWindow);

    // Scroll up window.........................................................................

    let t;

    function up() {
        let top = Math.max(
            document.body.scrollTop,
            document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,((top+150)/-10));
            t = setTimeout(up,20);
        } else {
            clearTimeout(t);
        }
    }

    const arrowTop = document.querySelector(".arrowTop");

    arrowTop.addEventListener('click', up);

    window.addEventListener('scroll', function() {
        arrowTop.hidden = (
            window.pageYOffset < document.documentElement.clientHeight
        );
    });

    // Scroll to the anchor........................................................................

    const anchors = [].slice.call(
        document.querySelectorAll('.scroll_menu a[href*="#"]')),
        animationTime = 500,
        framesCount = 20;

    function animationElementParent() {
        anchors.forEach(item => {
            item.classList.remove('show-btn');
        });
    }

    anchors.forEach(function(item) {
        item.addEventListener('click', function(e) {
            const target = e.target;
            e.preventDefault();

            animationElementParent();

            if(target == item) {
                item.classList.add('show-btn');
            }

            let coordY = document.querySelector(
                item.getAttribute('href')).getBoundingClientRect().top +
                window.pageYOffset;

            let scroller = setInterval(function() {
                let scrollBy = coordY / framesCount;

                if (
                    scrollBy > window.pageYOffset -
                    coordY && window.innerHeight +
                    window.pageYOffset <
                    document.body.offsetHeight
                ) {
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

    // Animation for Slider-Menu..............................

    const animate_slide = [].slice.call(
        document.querySelectorAll('.animate_slide'));

    const slider_menu = [].slice.call(
        document.querySelectorAll('.section_slider-1'));

    function addAnimate(index) {
        slider_menu.forEach(function(item, i){
            if(index == i) {
                item.classList.add('show-btn');
            }
        });
    }

    function removeAnimate() {
        slider_menu.forEach(function(item) {
            item.classList.remove('show-btn');
        });
    }

    animate_slide.forEach(function(item, i) {
        let indexSlide = i;
        item.addEventListener('mouseleave', () => {
            removeAnimate();
        });
        item.addEventListener('mouseenter', () => {
            addAnimate(indexSlide);
        });
    });


































