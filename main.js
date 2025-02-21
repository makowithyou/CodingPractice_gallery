const Header = document.getElementById("Header");
const Aside = document.getElementById("Aside");
// const MainVisual = document.getElementById("MainVisual");
const MainTitle = document.getElementById("MainTitle");
const Information = document.getElementById("Information");
const InformationTitle = document.getElementById("InformationTitle");
const GalleryTitle = document.getElementById("GalleryTitle");
const Access = document.getElementById("Access");
const AccessTitle = document.getElementById("AccessTitle");
const ContactTitle = document.getElementById("ContactTitle");
const WH = window.innerHeight;

// スクロールイベント
addEventListener(
    "scroll", () => {
        const MTY = MainTitle.getBoundingClientRect().y;
        const IY = InformationTitle.getBoundingClientRect().y;
        const GY = GalleryTitle.getBoundingClientRect().y;
        const AY = AccessTitle.getBoundingClientRect().y;
        const CT = ContactTitle.getBoundingClientRect().y;

        // スクロールしてヘッダーを表示
        if (window.scrollY > 520) {
            Header.classList.add("show");
        } else {
            Header.classList.remove("show");
        }

        // MainTitleが画面下にきたら下からふわっと表示
        if (MTY < WH) {
            MainTitle.classList.add("show");
        }
        // InformationTitleが画面下にきたら下からふわっと表示
        if (IY < WH) {
            Information.classList.add("show");
        }
        // GalleryTitleが画面下にきたら下からふわっと表示
        if (GY < WH) {
            GalleryTitle.classList.add("show");
        }

        // asideの表示・非表示
        if (GY > WH) {
            Aside.classList.remove("show"); // Galleryタイトルより上にいるときは非表示
        }
        if (GY < WH) {
            Aside.classList.add("show"); // Galleryタイトルが画面下にきたら右から左へスライド
        }
        if (AY < WH) {
            Aside.classList.remove("show"); // Accessタイトルが画面下にきたらスライドして非表示
        }

        // ACCESSの背景画像
        if (AY > WH) {
            Access.classList.remove("show"); // Accessタイトルより上にいるときは非表示
        }
        if (AY < WH) {
            Access.classList.add("show"); // Accessが画面下にきたら表示
        }
        if (CT < WH) {
            Access.classList.remove("show"); // Contactタイトルが画面下にきたら非表示
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
