export enum defaults {
  SCALE = 1,
  OPACITY_ZERO = 0,
  OPACITY_FULL = 1,
  DELAY = 1,
  DURATION = 1,
  SPRING = "spring",
  TWEEN = "tween",
}

export enum one {
  FULL = 1,
  THIRD = 0.75,
  HALF = 0.5,
  QUARTER = 0.25,
  ZERO = 0,
}

export enum color {
  YELLOW = "#F8E112",
  WHITE_GLOW = "0px 0px 8px rgb(255, 255, 255)",
}

export const buttonGlow = {
  scale: defaults.SCALE + 0.1,
  textShadow: color.WHITE_GLOW,
  boxShadow: color.WHITE_GLOW,
};

export const listGlow = {
  scale: defaults.SCALE + 0.3,
  color: color.YELLOW,
  originX: one.ZERO,
};

export const listConfig = {
  type: defaults.SPRING,
  stiffness: 300,
};

export const listSettings = {
  onHover: listGlow,
  config: listConfig,
};
