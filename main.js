HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener(
    "click", (e) => {
        Spans = e.currentTarget.children;
        // console.log(Spans[0]);
        // console.log(Spans[1]);
        // console.log(Spans[2]);
        for (span of Spans) {
            // console.log(span);
        }
    }
)
