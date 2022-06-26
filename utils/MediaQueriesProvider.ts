import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 0,
  },
});

export const { Media, MediaContextProvider, createMediaStyle } = AppMedia;
