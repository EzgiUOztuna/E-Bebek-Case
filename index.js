$(document).ready(function () {
    const init = () => {
        buildHtml();
        buildCss();
        fetchProducts();
        setEvents();
    };

    const buildHtml = () => {
        const html = `
            <div class="container">
                <h1 class="title-primary"> Beğenebileceğinizi düşündüklerimiz</h1>
                <div class="cards"></div>
            </div>
        `;
        $("body").append(html); //‼️"body" kısmı değişebilir.
    };


    const buildCss = () => {
        $('<style>').html(`

            .title-primary{
                font-family: "Quicksand", sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
                color: #f28e00;
                background-color: #fef6eb;
                padding: 1.56rem 4.18rem;
                border-top-left-radius: 2.18rem;
                border-top-right-radius: 2.18rem;
            }
            
            .cards{
                display: flex;
                gap: 1.5rem;
                overflow-x: auto; //‼️butona tıkladığında sağa sola kaymasını sağlayacağım.
                font-family: 
            }

            .card{
                min-width: 21.6rem; 
                border: 1px solid #ededed;
                background-color: #fff;
                border-radius: 1rem;
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                font-family: "Poppins";
            }

            .card a{
                font-size: 1rem;
                font-weight: 500;
                text-decoration: none;
                color:  #7d7d7d;
            }

            .productImg{
                margin-bottom: 1rem;
            }

            .containerMiddle {
                
            }

            .definition{
                font-size: 1rem;
            }

            .definition span{
                font-weight: 500;
            }

            .priceAndRating {
                margin:0;
                display: flex;
                flex-direction: column;
                gap: 0.2rem;
            }

            .priceCalculate {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                margin: 0;
            }

            .rating {
                position: relative;
            }

            .rating, 
            .finalPrice {
                margin: 0;
            }

            .originalPrice{
                text-decoration: line-through;
                margin:0;
            }

            .discount{
                color: #00a365;
                font-size: 1.2rem;
                font-weight: 700;
                display: flex;
            }

            .productPrice{
                color: #00a365;
            }

            .addToCart{
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
                margin-top: 15rem;
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
                        <a href="${product.url}" target="_blank">
                            <img class="productImg" src="${product.img}" alt="${product.name}">
                            <div class="containerMiddle">
                                <h1 class="definition"><strong>${product.brand}</strong> - <span>${product.name}</span></h1>
                                <div class="priceAndRating">
                                    <p class="rating">${starsHtml} (${comment})</p>
                                    <p class="priceCalculate">${discountRate ? `<span class="originalPrice">${originalPrice} TL</span> 
                                        <span class="discount">%${discountRate.toFixed(0)} 
                                            <img src="assets/arrow-down-circle.svg"></img> 
                                        </span>` : ''}
                                    </p>
                                    <p class="finalPrice">${discountRate ? `<span style="color: #00a365; font-size: 1.5rem">${product.price} TL</span>` : `<span style="font-size: 1.5rem">${product.price} TL</span>`}</p>
                                </div>
                            </div>
                        </a>
                        <button class="addToCart" type="submit">Sepete Ekle</button>
                    </div>
                `;

                $(".cards").append(cardHtml); //‼️"cards" kısmı değişebilir.
            });



        } catch (error) {
            console.error("Hata oluştu:", error);
        }


    };


    const setEvents = () => {

    };

    init();

})