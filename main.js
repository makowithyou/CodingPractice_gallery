const Header = document.getElementById("Header");
const Aside = document.getElementById("Aside");
const MainVisual = document.getElementById("MainVisual");
const MainVisualImages = document.getElementsByClassName("MainVisualImages");
const MainVisualImagesStyle = window.getComputedStyle(MainVisualImages[0]);
const MainVisualImageOriginalWidth = parseInt(MainVisualImagesStyle.getPropertyValue("width"));
const MainTitle = document.getElementById("MainTitle");
const Information = document.getElementById("Information");
const InformationTitle = document.getElementById("InformationTitle");
const Gallery = document.getElementById("Gallery");
const GalleryTitle = document.getElementById("GalleryTitle");
const GalleryImages = document.getElementsByClassName("GalleryImages");
const Access = document.getElementById("Access");
const AccessTitle = document.getElementById("AccessTitle");
const Contact = document.getElementById("Contact");
const ContactTitle = document.getElementById("ContactTitle");
const WH = window.innerHeight;
const WW = window.innerWidth;

// スクロールイベント
addEventListener(
    "scroll", () => {
        const MVY = MainVisual.getBoundingClientRect().y;
        const MTY = MainTitle.getBoundingClientRect().y;
        const ITY = InformationTitle.getBoundingClientRect().y;
        const GTY = GalleryTitle.getBoundingClientRect().y;
        const ATY = AccessTitle.getBoundingClientRect().y;
        const CTY = ContactTitle.getBoundingClientRect().y;

        // メインビジュアルの画像
        const img1 = MainVisualImages[0];
        const img2 = MainVisualImages[1];
        const img3 = MainVisualImages[2];
        if (WW < 900) {
            const num = 100 + MVY / 10; // スクロール距離の数値を画像縮小の数値とする

            img1.style.left = `-${num}%`;
            img3.style.right = `-${num}%`;
        } else {
            const num = -( MVY / 2); // スクロール距離の半分の数値を画像拡大の数値とする

            const width = MainVisualImageOriginalWidth + num;
            const img1_left = num * 1.5;
            const img2_left = MainVisualImageOriginalWidth - num / 2;
            const img3_right = num * 1.5;

            img1.style.width = `${width}px`;
            img1.style.left = `-${img1_left}px`;

            img2.style.width = `${width}px`;
            img2.style.left = `${img2_left}px`;

            img3.style.width = `${width}px`;
            img3.style.right = `-${img3_right}px`;
        }


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
        if (ITY < WH) {
            Information.classList.add("show");
        }
        // GalleryTitleが画面下にきたら下からふわっと表示
        if (GTY < WH) {
            GalleryTitle.classList.add("show");
        }

        // asideの表示・非表示
        if (GTY > WH) {
            Aside.classList.remove("show"); // Galleryタイトルより上にいるときは非表示
        }
        if (GTY < WH) {
            Aside.classList.add("show"); // Galleryタイトルが画面下にきたら右から左へスライド
        }
        if (ATY < WH) {
            Aside.classList.remove("show"); // Accessタイトルが画面下にきたらスライドして非表示
        }

        // Galleryの画像の表示
        for (images of GalleryImages) {
            const GIY = images.getBoundingClientRect().y
            if (GIY < WH) {
                images.classList.add("show");
            }
        }

        // ACCESSの背景画像
        if (ATY > WH) {
            Access.classList.remove("show"); // Accessタイトルより上にいるときは非表示
        }
        if (ATY < WH) {
            Access.classList.add("show"); // Accessが画面下にきたら表示
        }
        if (CTY < WH) {
            Access.classList.remove("show"); // Contactタイトルが画面下にきたら非表示
        }
    }
)


// ハンバーガーボタンとメニューの開閉
const HamburgerButton = document.getElementById("HamburgerButton");
HamburgerButton.addEventListener("click", menuOpen);

function menuOpen(e) {
    const HamburgerMenu = document.getElementById("HamburgerMenu");
    Spans = e.currentTarget.children;
        for (span of Spans) {
            span.classList.toggle("open");
        }
    HamburgerMenu.classList.toggle("open");
}



// メニュークリック時の動作
// const MenuLinks = document.getElementsByClassName("MenuLinks");
addEventListener(
    "click", (e) => {
        const IY = Information.getBoundingClientRect().y;
        const GY = Gallery.getBoundingClientRect().y;
        const AY = Access.getBoundingClientRect().y;
        const CY = Contact.getBoundingClientRect().y;
        const scrollTo = e.target.dataset.scrollTo;
        switch (scrollTo) {
        case "Top":
            menuOpen(e);
            menuScroll(0);
            break;
        case "Information":
            menuOpen(e);
            menuScroll(IY);
            break;
        case "Gallery":
            menuOpen(e);
            menuScroll(GY);
            break;
        case "Access":
            menuOpen(e);
            menuScroll(AY);
            break;
        case "Contact":
            menuOpen(e);
            menuScroll(CY);
            break;
        default:
            console.log("クリックされたのはメニューじゃない");
        }
        // menuScroll(GY);
    }
)

function menuScroll (y) {
    window.scrollTo(0, y);
}
