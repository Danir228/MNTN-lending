    // Scroll down window.............................................................

    function downWindow() {
        let scrollheight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        let u;

        function down() {
            let scrollTop = document.documentElement.scrollTop;
            if (
                (scrollTop + clientHeight) < (scrollheight - 1)
            ) {
                window.scrollBy(0, 100);
                u = setTimeout(down, 10);
            } else {
                clearTimeout(u);
            }
        }

        down();
    }

    const scrollDownWindow =
          document.querySelector('.circular-arrow');

    scrollDownWindow.addEventListener('click', downWindow);

    // Hidden Slide-Menu..........................................

    const sectionElementsThree =
          document.querySelector(".section_elements-3");

    window.addEventListener('scroll', function() {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;

        sectionElementsThree.hidden = (
            (scrollTop + clientHeight) > (scrollHeight - 200)
        );
    });

    // Scroll up window.........................................................................

    function up() {
        let t;
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

    anchors.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

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

    const modal = document.querySelector("#modal"),
          modalOverlay = document.querySelector("#modal-overlay"),
          closeButton = document.querySelector("#close-button"),
          openButton = document.querySelector("#open-button"),
          loginBlock = document.querySelector("#login-block"),
          signupBlock = document.querySelector("#signup-block"),
          loginBlockContent = document.querySelector("#login-block_content"),
          signupBlockContent = document.querySelector("#signup-block_content"),
          loginEmail = document.querySelector('.login_email'),
          signupEmail = document.querySelector('.signup_email'),
          loginPassword = document.querySelector('.login_password'),
          signupPassword = document.querySelector('.signup_password'),
          userName = document.querySelector('.name'),
          userSurName = document.querySelector('.surname'),
          loginPasswordHidden =
                    document.querySelector('.login_password_hidden'),
          loginPasswordVisible =
                    document.querySelector('.login_password_visible'),
          signupPasswordHidden =
                    document.querySelector('.signup_password_hidden'),
          signupPasswordVisible =
                    document.querySelector('.signup_password_visible');

        //   Buttons for Open and Closed modal window...........................

        closeButton.addEventListener("click", function() {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });

        openButton.addEventListener("click", function() {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });

        loginBlock.addEventListener("click", function() {
            loginBlockContent.classList.remove("closed");
            signupBlockContent.classList.add("closed");
            signupBlock.classList.remove("bgdiv");
            loginBlock.classList.add("bgdiv");
        });

        signupBlock.addEventListener("click", function() {
            loginBlockContent.classList.add("closed");
            signupBlockContent.classList.remove("closed");
            signupBlock.classList.add("bgdiv");
            loginBlock.classList.remove("bgdiv");
        });

        // Validate Mail and Password .............................

        function validMail(elem) {
            let regular  = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
            let myMail = elem.value;
            let valid = regular.test(myMail);
            let noValue = '';
            if (valid || myMail == noValue) {
                elem.classList.remove('invalid_mail');
            } else {
                elem.classList.add('invalid_mail');
            }
        }

        signupEmail.addEventListener('input', () => {
            validMail(signupEmail);
        });

        loginEmail.addEventListener('input', () => {
            validMail(loginEmail);
        });

        function validPassword() {
            let myPassword = signupPassword.value;

            if (myPassword.length < 8 ) {
                signupPassword.classList.add('invalid_mail');
            } else if (myPassword.search(/[a-z]/i) < 0) {
                signupPassword.classList.add('invalid_mail');
            } else if (myPassword.search(/[0-9]/) < 0) {
                signupPassword.classList.add('invalid_mail');
            } else {
                signupPassword.classList.remove('invalid_mail');
            }

        }

        signupPassword.addEventListener('input', validPassword);

        // Hidden and visible password...........................

        loginPasswordHidden.addEventListener('click', function() {
            loginPasswordHidden.classList.add('closed');
            loginPasswordVisible.classList.remove('closed');
            loginPassword.setAttribute("type", "text");
        });

        loginPasswordVisible.addEventListener('click', function() {
            loginPasswordVisible.classList.add('closed');
            loginPasswordHidden.classList.remove('closed');
            loginPassword.setAttribute("type", "password");
        });

        signupPasswordHidden.addEventListener('click', function() {
            signupPasswordHidden.classList.add('closed');
            signupPasswordVisible.classList.remove('closed');
            signupPassword.setAttribute("type", "text");
        });

        signupPasswordVisible.addEventListener('click', function() {
            signupPasswordVisible.classList.add('closed');
            signupPasswordHidden.classList.remove('closed');
            signupPassword.setAttribute("type", "password");
        });

    // Animation for Slider-Menu..............................

    const animate_slide = [].slice.call(
        document.querySelectorAll('.animate_slide'));

    const slider_menu = [].slice.call(
        document.querySelectorAll('.section_slider-1'));

    function getCoordTop(el) {
        let coordY = el.getBoundingClientRect();
        let top = Math.round(coordY.top);

        return top;
    }

    function getCoordBottom(el) {
        let coordY = el.getBoundingClientRect();
        let bottom = Math.round(coordY.bottom);

        return bottom;
    }

    function addAnimate(index) {
        slider_menu.forEach(function(item, i) {
            if(index == i) {
                item.classList.add('show-btn');
            } else {
                item.classList.remove('show-btn');
            }
        });
    }

    function removeAnimate(index) {
        slider_menu.forEach(function(item, i) {
            if(index == i) {
                item.classList.remove('show-btn');
            }
        });
    }

    window.addEventListener('scroll', () => {
        animate_slide.forEach(function(item, i) {
            let t = getCoordTop(item);
            let b = getCoordBottom(item);
            if (t <= 300) {
                item.style.opacity = '1';
                addAnimate(i);
            }
            else if (b >= t) {
                item.style.opacity = '0.5';
                removeAnimate(i);
            }
        });
    });


































