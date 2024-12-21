import type { Images } from "@definitions/sharedTypes";
import historyImage from "@images/company/backgroundImage2.webp";
import MissionImage from "@images/company/backgroundImage3.webp";
import VisionImage from "@images/company/backgroundImage4.webp";
import ValuesImage from "@images/company/backgroundImage5.webp";

const images: Images = {
    history: historyImage,
    mission: MissionImage,
    vision: VisionImage,
    values: ValuesImage,
};

export const getIdentityImage = (identityId: string): ImageMetadata => images[identityId];
