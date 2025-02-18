// スクロールイベント
const Header = document.getElementById("Header");
const Aside = document.getElementById("Aside");
// const MainVisual = document.getElementById("MainVisual");
const Title = document.getElementById("Title");
const GalleryTitle = document.getElementById("GalleryTitle");
const AccessTitle = document.getElementById("AccessTitle");
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

        // asideの表示・非表示
        const GY = GalleryTitle.getBoundingClientRect().y;
        const AY = AccessTitle.getBoundingClientRect().y;
        if (GY > WH) {
            Aside.classList.remove("show"); // Galleryより上にいるときは非表示
        }
        if (GY < WH) {
            Aside.classList.add("show"); // Galleryが画面下にきたら右から左へスライド
        }
        if (AY < WH) {
            Aside.classList.remove("show"); // Accessが画面下にきたらスライドして非表示
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
