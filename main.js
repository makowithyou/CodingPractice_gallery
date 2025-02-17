// スクロールイベント
const Header = document.getElementById("Header");
const MainVisual = document.getElementById("MainVisual");
const Title = document.getElementById("Title");
const WH = window.innerHeight;
addEventListener(
    "scroll", () => {

        // スクロールしてヘッダーを表示
        if (window.scrollY > 520) {
            Header.classList.add("show");
        } else {
            Header.classList.remove("show");
        }

        // Titleが画面下にきたら下からふわっと表示
        const TY = Title.getBoundingClientRect().y;
        if (TY < WH) {
            Title.classList.add("show");
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
