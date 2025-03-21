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
            .cards{
                display: flex;
                gap: 1.5rem;
                overflow-x: auto; //‼️butona tıkladığında sağa sola kaymasını sağlayacağım.
                
            }

            .card{
                border: 1px solid black;
                border-radius: 1rem;
                padding: 1.5rem;
            }

            
            `).appendTo('head');
    };


    const fetchProducts = async () => {
        try {
            const response = await fetch("https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json");
            const products = await response.json();
            console.log(products);

            products.forEach((product) => {
                const cardHtml = `
                    <div class="card">
                        <a href="${product.url}">
                            <img src="${product.img}" alt="${product.name}">
                            <p><strong>${product.brand}</strong> - ${product.name}</p>
                            <p>${product.original_price}</p>
                            <p>${product.price}</p>
                        </a>
                        <button>Sepete Ekle</button>
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