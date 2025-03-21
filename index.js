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
                <h1>Beğenebileceğinizi düşündüklerimiz</h1>
                <div class="cards"></div>
            </div>
        `;
        $("body").append(html); //‼️"body" kısmı değişebilir.
    };


    const buildCss = () => {
        $('<style>').html(`
            body{
                font-family: Poppins, "cursive";
            }
            .cards{
                display: flex;
                gap: 1.5rem;
                overflow-x: auto; //‼️butona tıkladığında sağa sola kaymasını sağlayacağım.
                
            }

            .card{
                border: 1px solid black;
                border-radius: 1rem;
                padding: 1.5rem;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .card a{
                font-size: 1rem;
                font-weight: 500;
                text-decoration: none;
                color:  #7d7d7d
            }

            .priceCalculate{
                display: flex;
                gap:.8rem;
                align-items: center;
            }

            .original-price{
            text-decoration: line-through;
            }

            .discount{
                color: #00a365;
                font-size: 1.2rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: .3rem;
            }

            .addToCart{
                background-color:#fff7ec;
                border: none;
                width: 100%;
                height: 2.68rem;
                color: #f28e00;
                border-radius: 2.34rem;
                font-family: Poppins, "cursive";
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
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

                if (originalPrice > price) {
                    discountRate = ((originalPrice - price) * 100) / (originalPrice);
                }

                const cardHtml = `
                    <div class="card">
                        <a href="${product.url}" target="_blank">
                            <img src="${product.img}" alt="${product.name}">
                            <p><strong>${product.brand}</strong> - ${product.name}</p>
                            <p class="priceCalculate">${discountRate ? `<span class="original-price">${originalPrice} TL</span> 
                                <span class="discount">%${discountRate.toFixed(0)} 
                                    <img src="assets/arrow-down-circle.svg"></img> 
                                </span>` : ''}
                            </p>
                            <p>${product.price} TL</p>
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