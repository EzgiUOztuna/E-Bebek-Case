(() => {
    const init = () => {
        buildHtml();
        buildCss();
        setEvents();
    };

    const buildHtml = () => {
        const html = `

        `;
        $("body").append(html); //"body" kısmı değişebilir.
    };


    const buildCss = () => {
        $('<style>').html(`
            
            `).appendTo(head);
    };


    const setEvents = () => {

    };

    init();

})