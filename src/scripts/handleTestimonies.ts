export const getTestimonyId = (i: number) => `testimony-${i}`;
export const getAnimationTimeline = (i: number) => `--${getTestimonyId(i)}`;
export const getTimelineScope = (testimonies: any[]) => testimonies.map((_, i) => getAnimationTimeline(i)).join(", ");
