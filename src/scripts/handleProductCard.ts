import type { Images } from "@definitions/sharedTypes";

import productImage1 from "@images/products/NatillaCasera.jpg";
import productImage2 from "@images/products/QuesoMaduro.jpg";
import productImage3 from "@images/products/QuesoPalmito.jpg";
import productImage4 from "@images/products/YogurtGuananbana.jpg";
import productImage5 from "@images/products/QuesoMaduroChile.jpg";
import productImage6 from "@images/products/YogurtKiwi.jpg";
import productImage7 from "@images/products/YogurtMora.jpg";

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
