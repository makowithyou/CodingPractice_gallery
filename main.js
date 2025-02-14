const HamburgerButton = document.getElementById("HamburgerButton");
const HamburgerMenu = document.getElementById("HamburgerMenu");
HamburgerButton.addEventListener(
    "click", (e) => {
    Spans = e.currentTarget.children;
        for (span of Spans) {
            span.classList.toggle("open");
        }
        HamburgerMenu.classList.toggle("open");
    }
)
