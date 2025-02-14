const HamburgerButton = document.getElementById("HamburgerButton");
const HamburgerMenu = document.getElementById("HamburgerMenu");
HamburgerButton.addEventListener(
    "click", (e) => {
        Spans = e.currentTarget.children;
        if (HamburgerMenu.classList.length == 0) {
            for (span of Spans) {
                span.classList.add("open");
            }
            HamburgerMenu.classList.add("open");
        } else {
            for (span of Spans) {
                span.classList.toggle("open");
                span.classList.toggle("close");
            }
            HamburgerMenu.classList.toggle("open");
            HamburgerMenu.classList.toggle("close");
        }
    }
)
