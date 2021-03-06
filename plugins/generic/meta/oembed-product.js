module.exports = {

    getMeta: function(oembed) {
        return {
            price: oembed.price && parseFloat(oembed.price),
            currency_code: oembed.currency_code,
            brand: oembed.brand,
            product_id: oembed.product_id,
            availability: oembed.availability,
            quantity: oembed.quantity && parseInt(oembed.quantity),
            products: oembed.products
        };
    }
};
