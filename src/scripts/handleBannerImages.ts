import type { OptimizedImages } from "@definitions/sharedTypes";
import backgroundImage1 from "../assets/images/company/backgroundImage1.webp";
import backgroundImage2 from "../assets/images/company/backgroundImage2.webp";
import backgroundImage3 from "../assets/images/company/backgroundImage3.webp";
import backgroundImage4 from "../assets/images/company/backgroundImage4.webp";
import backgroundImage5 from "../assets/images/company/backgroundImage5.webp";
import { getImage } from "astro:assets";

const optimizeImage = async (src: ImageMetadata) => await getImage({ src, format: "webp" });

const banner1 = await optimizeImage(backgroundImage1);
const banner2 = await optimizeImage(backgroundImage2);
const banner3 = await optimizeImage(backgroundImage3);
const banner4 = await optimizeImage(backgroundImage4);
const banner5 = await optimizeImage(backgroundImage5);

const bannerImages: OptimizedImages = {
    banner1: banner1.src,
    banner2: banner2.src,
    banner3: banner3.src,
    banner4: banner4.src,
    banner5: banner5.src,
};

const bannerNotFoundImages: OptimizedImages = {
    notFoundBanner1: banner3.src,
};

export const getBannerImage = (bannerId: string) => bannerImages[bannerId];
export const getNotFoundBannerImage = (bannerId: string) => bannerNotFoundImages[bannerId];
