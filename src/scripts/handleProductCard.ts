import type { Images } from "@definitions/sharedTypes";

import productImage1 from "@images/products/product1.webp";
import productImage2 from "@images/products/product2.webp";
import productImage3 from "@images/products/product3.webp";
import productImage4 from "@images/products/product4.webp";
import productImage5 from "@images/products/product5.webp";
import productImage6 from "@images/products/product6.webp";
import productImage7 from "@images/products/product7.webp";

const images: Images = {
    product1: productImage1,
    product2: productImage2,
    product3: productImage3,
    product4: productImage4,
    product5: productImage5,
    product6: productImage6,
    product7: productImage7,
};

export const getProductImage = (productId: string): ImageMetadata => images[productId];
