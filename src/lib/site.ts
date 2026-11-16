/** GitHub Pages serves the site from a sub-path (e.g. /texas-silicon). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the base path (next/image and <a> don't add it). */
export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

/**
 * Brand accent as "r, g, b". Keep in sync with --color-accent in globals.css.
 * (Not burnt orange: that color is a UT trademark.)
 */
export const ACCENT_RGB = "15, 118, 110";
export const accent = (alpha = 1) => `rgba(${ACCENT_RGB}, ${alpha})`;

export const SITE = {
  name: "Texas Silicon",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://themoddedcube.github.io/texas-silicon",
  description:
    "Texas Silicon is a student-led chip design club in Austin, Texas. We design and verify custom silicon, working toward our first tape-out.",
  contactEmail: "texassilicon028@gmail.com",
} as const;
