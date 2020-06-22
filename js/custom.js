$(function () {


    $('.open-btn').on('click', function () {
        $('.color-picker').toggleClass('active');
    });

    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
        el: '.col-pick',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
            'rgba(156, 39, 176, 0.9)',
            'rgba(50, 39, 176, 0.9)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(122, 181, 63, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                input: true
            }
        }
    });


    pickr.on('change', (color, instance) => {
        var colorCode = color.toHEXA().toString();
        var root = document.documentElement;
        root.style.setProperty('--red-color', colorCode);
    });




});