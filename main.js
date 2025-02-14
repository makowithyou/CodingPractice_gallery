// スクロールしてヘッダーを表示
const Header = document.getElementById("Header");
addEventListener(
    "scroll", () => {
        if (window.scrollY > 520) {
            Header.classList.add("show");
        } else {
            Header.classList.remove("show");
        }
    }
)

// ハンバーガーボタンとメニューの開閉
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
