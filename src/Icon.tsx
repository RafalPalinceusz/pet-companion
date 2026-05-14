import icons, { IconName } from "./pages/Strona_glowna/assets/icons.ts";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  viewBox?: string;
};

export function Icon({
  name,
  size = 24,
  color = "currentColor",
  viewBox = "0 0 20 20",
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={color}
      aria-hidden
    >
      <path d={icons[name]} />
    </svg>
  );
}
