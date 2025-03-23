$(document).ready(function () {
    const init = () => {
        buildHtml();
        buildCss();
        fetchProducts();
        setEvents();
    };

    const buildHtml = () => {
        const html = `
            <div class="header">
                <div class="header-up">
                    <img class="ebebek-logo" src="https://cdn05.e-bebek.com/y.ebebek/9973673459742.svg">
                    <div class="search-box">
                        <i class="fa-solid fa-magnifying-glass fa-xl" style="color: #0091d4;"></i>
                        <input 
                            type="text"
                            placeholder="Ürün, kategori veya marka arayın">
                    </div>
                    <div class="user-actions">
                        <i class="fa-regular fa-heart fa-xl heart-icon" style="color: #0091d4;"></i>
                        <p class="account"><i class="fa-regular fa-user fa-xl" style="color: #0091d4;"></i> Hesabım</p>
                        <p class="cart"><i class="fa-solid fa-cart-shopping fa-xl" style="color: #0091d4;"></i> SEPETİM</p>
                    </div>
                </div>
                <div class="header-down">
                    <div class="category-menu">
                        <div class="categories">
                            <p>Kategoriler</p>
                            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                        </div>
                        <div class="explore">
                            <p>Keşfet</p>
                            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                        </div>
                        <div class="present">
                            <p>Hediye</p>
                            <i class="fa-solid fa-chevron-down dropdown-icon"></i>
                        </div>
                        <p class="internet" style="color: #0091D4">İnternete Özel Ürünler</p>
                        <p class="campaign" style="color: #F18E00">Kampanyalar</p>
                        <p class="outlet" style="color: #F18E00">Outlet</p>
                    </div>
                    <div class="order">
                        <div class="order-location">
                            <img src="https://cdn05.e-bebek.com/media/c/siparisim-nerede-logo.png">
                            <p>SİPARİŞİM NEREDE</p>
                        </div>
                        <div class="closest-location">
                            <img src="https://cdn05.e-bebek.com/media/c/enyakin-ebebek-logo.png">
                            <p>EN YAKIN EBEBEK</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero">
                <img class="bg-img" src="https://cdn05.e-bebek.com/media/c/haftasonufirsatiyenibg.jpg"> 
                <img class="adv-img" src="https://cdn05.e-bebek.com/media/c/1000022649-secili-tekstil-urunlerinde-sepette-net-30-indirim-internete-ozeld.jpg"> 
                <ul class="nav-hero">
                    <li class="nav-item"> 
                        <button class="nav-button" id="first-btn"
                            data-bg="https://cdn05.e-bebek.com/media/c/haftasonufirsatiyenibg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/1000022649-secili-tekstil-urunlerinde-sepette-net-30-indirim-internete-ozeld.jpg">
                            BEBEK MODASI
                        </button>
                        <button class="nav-button" 
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/-tum-oioi-beslenme-gereclerinde-net-40-indirim-d.jpg">
                            EMZİRME&BESLENME
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/bebek-bezlerinde-net-20-indirim-prima-ve-pofy-haric-d.jpg">
                            BEBEK BEZİ&ISLAK MENDİL
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/tum-banyo-ve-tuvalet-urunlerinde-net-20-indirim-d.jpg">
                            BANYO&BAKIM
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/tum-akulu-araclar-scooter-ve-bisikletlerde-sepette-30-indirim-d.jpg">
                            OYUNCAK
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/tum-joie-urunlerinde-sepette-net-30-indirimaaaaad.jpg">
                            ARAÇ GEREÇ&MOBİLYA
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/bayram-bgg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/bayram-senligi-lp-dd.jpg">
                            BAYRAM ŞENLİĞİ
                        </button>
                        <button class="nav-button"
                            data-bg="https://cdn05.e-bebek.com/media/c/tum-kategorilerde-4-taksit-arac-gerec-ve-mobilya-kategorisinde-8-taksit-bg.jpg"
                            data-adv="https://cdn05.e-bebek.com/media/c/tum-kategorilerde-4-taksit-arac-gerec-ve-mobilya-kategorisinde-8-taksit-d.jpg">
                            DUYURU
                        </button>
                    </li>
                </ul>
            </div>
            <div class="container">
                <h1 class="title-primary"> Beğenebileceğinizi düşündüklerimiz</h1>
                <div class="carousel">
                    <button class="left-button carousel-button"><i class="fas fa-chevron-left"></i></button>
                    <div class="cards"></div>
                    <button class="right-button carousel-button"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
        $("body").append(html);
    };


    const buildCss = () => {
        $('<style>').html(`
            body {
                margin: 0;
                padding: 0;
                font-family: "Poppins", sans-serif;
            }

            .header-up{
                margin: 0 8rem;
                padding: 1.25rem 0.62rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap:5rem;
            }

            .ebebek-logo{
                width: 8rem;
            }

            .search-box{
                border: 1px solid #EBF6FB;
                background-color: #EBF6FB;
                width: 37.5rem;
                height: 3rem;
                border-radius: 2.5rem;
                padding: 0 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .search-box input {
                width: 100%;
                border: none;
                outline: none;
                background-color: transparent;
                color: #686868;
                font-size: 1rem;
                font-family: "Quicksand", sans-serif;
                font-weight: 600;
            }

            .user-actions{
                display:flex;
                align-items: center;
                justify-content: flex-end;
            }

            .heart-icon{
                border: 2px solid #EBF6FB;
                width: 3rem;
                height: 3rem;
                border-radius: 100%;
                display: inline-flex; /* İçeriği hizalamak için */
                align-items: center; 
                justify-content: center;
                cursor: pointer;
            }

            .heart-icon:hover {
                background-color: #EBF6FB;
            }

            .fa-user{
                margin-right: .5rem;
            }

            .account{
                border: 2px solid #EBF6FB;
                width: 8rem;
                height: 3rem;
                border-radius: 2rem;
                display: flex;
                align-items: center; 
                justify-content: center;  
                padding: 0 .5rem;
                color: #0091d4;  
                margin-left: 1rem;   
                font-weight: 600;  
                font-family: "Poppins";
                cursor: pointer;         
            }

            .cart{
                border: 2px solid #EBF6FB;
                width: 8rem;
                height: 3rem;
                border-radius: 2rem;
                display: flex;
                align-items: center; 
                justify-content: center;  
                padding: 0 .5rem;
                color: #0091d4;  
                margin-left: 1rem;   
                font-weight: 600;  
                font-family: "Poppins";
                cursor: pointer;  
                background-color: #EBF6FB;
                display:flex;
                gap: .5rem;
            }

            .cart:hover{
                background-color: #008ACE;
                color: #fff;
            }

            .cart i{
                margin-rigth: 20px;
            }

            .cart:hover i {
                color: white !important; 
            }

            .header-down {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 0 8rem 1rem 8rem;
            }

            .category-menu {
                display:flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                font-weight: 600;
                font-family: "Poppins";
                font-size: 1rem;
                cursor: pointer;
            }

            .categories, 
            .explore,
            .present{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #686868;
            }

            .categories:hover, 
            .explore:hover,
            .present:hover{
                color: #008ACE
            }

            .internet:hover,
            .campaign:hover,
            .outlet:hover{
                text-decoration: underline;
            }

            .categories i,
            .explore i, 
            .present i{
                height:1.5rem;
                display: flex;
                align-items: center;
                margin-left: .7rem;
            }

            .categories i:hover,
            .explore i:hover, 
            .present i:hover {
                transform: rotate(180deg);
                color: #008ACE
            }

            .order{
                display: flex;
                gap: 2rem;
                color: #686868;
                font-weight: 600;
                font-family: "Poppins";
                font-size: 1rem;
                cursor: pointer;
            }

            .order-location, 
            .closest-location{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
            }

            .hero{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }

            .adv-img{
                position: absolute;
                width: 75rem;
                border-radius: 3rem;
                margin-bottom: 2rem;
            }

            .nav-hero {
                position: absolute;
                top: 1rem; 
                left: 50%;
                transform: translate(-50%, -50%); 
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 100px;
                width: 100%;
            }

            .nav-item {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .nav-button {
                font-family: "Poppins";
                font-size: 1rem;
                font-weight: 600;
                border: none;
                border-radius: 2rem;
                background-color: transparent;
                padding: .6rem 1rem;
                color: white;
                cursor: pointer;
            }

            .nav-button.active{
                background-color: #fef6eb;
                color: #F18E00;
                border: none;
            }
            

            .title-primary{
                font-family: "Quicksand", sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
                color: #f28e00;
                background-color: #fef6eb;
                padding: 1.56rem 4.18rem;
                border-top-left-radius: 2.18rem;
                border-top-right-radius: 2.18rem;
                margin: 2rem 8rem 1.5rem 8rem;
            }
            
            .carousel{
                display:flex;
                align-items: center;
                justify-content: space-between;
                gap: 2rem;
                width: 80%;
                margin: 0 auto;
            }

            .carousel-button{
                border-radius: 100%;
                padding: 1.5rem;
                display: inline-flex;
                align-items: center; 
                justify-content: center;
                cursor: pointer;
                border: none;
                background-color: #FEF6EB;
                color: #F18E00;
                font-size: 1.5rem;
            }
            
            .cards{
                display: flex;
                gap: 1.5rem;
                overflow-x: auto; 
                scroll-behavior: smooth;
            }

            .card{
                min-width: 18rem; 
                border: 1px solid #ededed;
                background-color: #fff;
                border-radius: 1rem;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                font-family: "Poppins";
                position: relative;
            }

            .card a{
                font-size: 1rem;
                font-weight: 500;
                text-decoration: none;
                color:  #7d7d7d;
            }

            .favorite-button{
                border: none;
                background-color: transparent;
                position: relative;
                left: 8rem;
                transition: background-color 0.3s ease;
                cursor: pointer;
            }

            .favorite-button.active {
                background-color: #ff8a00;
            }

            .product-img{
                margin-bottom: 1rem;
            }

            .definition{
                font-size: 1rem;
            }

            .definition span{
                font-weight: 500;
            }

            .price-rating {
                margin:0;
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
                position: absolute;
                top: 28rem;
            }

            .price-calculate {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                margin: 0;
            }

            .rating {
                position: relative;
            }

            .rating, 
            .final-price {
                margin: 0;
            }

            .original-price{
                text-decoration: line-through;
                margin:0;
            }

            .discount{
                color: #00a365;
                font-size: 1.2rem;
                font-weight: 700;
                display: flex;
            }

            .add-to-cart{
                background-color: #fff7ec;
                border: none;
                width: 100%;
                height: 2.68rem;
                color: #f28e00;
                border-radius: 2.34rem;
                font-family: Poppins, "cursive";
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                margin-top: 10rem;
            }

            /* Telefonlar (320px - 480px) */
            @media (max-width: 480px) {
        
                .header-up{
                    max-width:320px;
                    margin: 0 1rem;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap:2rem;
                }

                .search-box{
                    display: none;
                }                

                .heart-icon {
                    border: none;
                    color: gray !important;
                }

                .cart{
                    display: none;
                }

                .account {
                    font-size:0;
                    width: 2rem;
                    border: none;
                    padding: 0;
                }

                .account i {
                    font-size: 1.5rem; /* İkonu eski haline getir */
                }

                .fa-user{
                    margin: 0;
                }

                .header-down{
                    display: none;
                }

                .bg-img{
                    width: 100%;
                    height: 13rem;
                }

                .adv-img{
                    width: 18rem;
                    border-radius: 1rem;
                    margin-bottom: .5rem;
                    margin-top: 1rem;
                }

                .nav-hero {
                    top: 1.5rem; 
                    left: 50%;
                    margin:0 auto;
                    padding: 0;
                }

                .nav-item {
                    margin: 0 1.5rem;
                }

                .nav-button {
                    font-size: .5rem;
                    border-radius: 1.5rem;
                    padding: 0 1rem;
                }


                .title-primary{
                    font-size: .8rem;
                    padding: 1rem 2rem;
                    margin: 1rem 0;
                }

                .carousel{
                    gap: 1rem;
                    width: 95%;
                    margin: 0 auto;
                }

                .carousel-button{
                    display: none;
                }

                .cards{
                    gap: 1rem;
                }

                .card{
                    min-width: 10rem; 
                }

                .favorite-button{
                    left: 4.5rem;
                }

                .product-img{
                    margin-bottom: .5rem;
                    width: 10rem;
                }

                .definition{
                    font-size: .8rem;
                }

                .price-rating {
                    margin:0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                    position: absolute;
                    top: 20rem;
                }
                    
                .rating, 
                .final-price {
                    font-size: .8rem;
                }

                .discount{
                    font-size: 1rem;
                }

                .add-to-cart{
                    font-size: .8rem;
                }
            }

            /* Büyük Ekranlar (1281px ve üzeri) */
            @media (min-width: 1281px) {
                .header-up{
                    margin: 0 10rem;
                }

                .header-down {
                    margin: 0 10rem 1rem 10rem;
                }   
            }
            `).appendTo('head');
    };


    const fetchProducts = async () => {
        try {
            const response = await fetch("https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json");
            const products = await response.json();

            products.forEach((product) => {
                const originalPrice = parseFloat(product.original_price);
                const price = parseFloat(product.price);
                let discountRate = '';
                const comment = Math.floor(Math.random() * 500);
                const rating = Math.floor(Math.random() * 5) + 1; // 1 ile 5 arasında rastgele rating
                const maxStars = 5;
                let starsHtml = '';

                if (originalPrice > price) {
                    discountRate = ((originalPrice - price) * 100) / (originalPrice);
                }

                for (let i = 1; i <= maxStars; i++) {
                    if (i <= Math.floor(rating)) {
                        starsHtml += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`; //Dolu
                    } else if (i - rating < 1) {
                        starsHtml += `<i class="fa-regular fa-star-half-stroke" style="color: #FFD43B;"></i>`; //Yarı Dolu
                    } else {
                        starsHtml += `<i class="fa-regular fa-star" style="color: #C4C4C4;"></i>`; //Boş
                    }
                }

                const cardHtml = `
                        <div class="card">
                        <button id="favorite-btn" class="favorite-button" data-id=${product.id}>
                            <i id="heart-icon" class="fa-regular fa-heart fa-2xl" style="color: #ff8a00;"></i>
                        </button>

                        <a href="${product.url}" target="_blank">
                            <img class="product-img" src="${product.img}" alt="${product.name}">
                            <div class="containerMiddle">
                                <h1 class="definition"><strong>${product.brand}</strong> - <span>${product.name}</span></h1>
                                <div class="price-rating">
                                    <p class="rating">${starsHtml} (${comment})</p>
                                    <p class="price-calculate">${discountRate ? `<span class="original-price">${originalPrice} TL</span> 
                                        <span class="discount">%${discountRate.toFixed(0)} 
                                            <img src="assets/arrow-down-circle.svg"></img> 
                                        </span>` : ''}
                                    </p>
                                    <p class="final-price">${discountRate ? `<span style="color: #00a365; font-size: 1.5rem">${product.price} TL</span>` : `<span style="font-size: 1.5rem">${product.price} TL</span>`}</p>
                                </div>
                            </div>
                        </a>
                        <button class="add-to-cart" type="submit">Sepete Ekle</button>
                    </div>
                `;

                $(".cards").append(cardHtml);
            });
        } catch (error) {
            console.error("Hata oluştu:", error);
        }


    };


    const setEvents = () => {

        document.addEventListener("click", function () {
            //CAROUSEL
            const leftButton = document.querySelector(".left-button");
            const rightButton = document.querySelector(".right-button");
            const cardsContainer = document.querySelector(".cards");

            const scrollAmount = 350; // Her tıklamada kayma mesafesi (px)

            rightButton.addEventListener("click", () => {
                cardsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });

            leftButton.addEventListener("click", () => {
                cardsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });
        });

        //FAVORITE BUTTON
        document.addEventListener("click", function (event) {
            if (event.target.closest(".favorite-button")) {
                const btn = event.target.closest(".favorite-button");
                const icon = btn.querySelector("i");
                const productId = btn.getAttribute("data-id");
                console.log("product id:" + productId);

                let favoriteProducts = JSON.parse(localStorage.getItem("favorites")) || [];

                if (favoriteProducts.includes(productId)) {
                    // Eğer ürün zaten favorilere eklenmişse, kaldır
                    favoriteProducts = favoriteProducts.filter(id => id !== productId);
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                } else {
                    // Değilse favorilere ekle
                    favoriteProducts.push(productId);
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                }

                console.log("favoriler:" + favoriteProducts);

                // Güncellenmiş favorileri kaydet
                localStorage.setItem("favorites", JSON.stringify(favoriteProducts));

            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            const favoriteProductsFromLocal = JSON.parse(localStorage.getItem("favorites") || []);
            console.log("favoriteProductsFromLocal:" + favoriteProductsFromLocal);

            const btn = event.target.closest(".favorite-button");
            const icon = btn.querySelector("i");
            const productId = btn.getAttribute("data-id");

            if (favoriteProductsFromLocal.includes(productId)) {
                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");
            }

        });


        //HERO BUTTONS
        const buttons = document.querySelectorAll('.nav-button');

        const bgImage = document.querySelector('.bg-img');
        const advImage = document.querySelector('.adv-img');

        buttons.forEach(button => {
            button.addEventListener('click', () => {

                const bgSrc = button.getAttribute('data-bg');
                const advSrc = button.getAttribute('data-adv');

                bgImage.src = bgSrc;
                advImage.src = advSrc;

                buttons.forEach(btn => btn.classList.remove('active'));

                button.classList.add('active');
            });
        });



    };

    init();

})