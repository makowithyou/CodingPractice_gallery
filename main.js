// スクロールイベント
const Header = document.getElementById("Header");
const Aside = document.getElementById("Aside");
// const MainVisual = document.getElementById("MainVisual");
const Title = document.getElementById("Title");
const Gallery = document.getElementById("Gallery");
const Access = document.getElementById("Access");
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
        // const GY = Gallery.getBoundingClientRect().y;
        // const AY = Access.getBoundingClientRect().y;
        // if (GY > WH) {
        //     Aside.classList.remove("show"); // Galleryより上にいるときは非表示
        // } else if (GY < WH) {
        //     Aside.classList.add("show"); // Galleryが画面下にきたら右から左へスライド
        // } else if (AY < WH) {
        //     Aside.classList.remove("show"); // Accessが画面下にきたらスライドして非表示
        // }

        // Galleryが画面下にきたら右から左へスライド
        const GY = Gallery.getBoundingClientRect().y;
        if (GY < WH) {
            Aside.classList.add("show");
        }
        // Accessが画面下にきたらスライドして非表示
        const AY = Access.getBoundingClientRect().y;
        if (AY < WH) {
            Aside.classList.remove("show");
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
