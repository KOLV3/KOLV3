import Image from "next/image";
import logoLight from "../../../public/images/kolve-logo-light.png";
import logoDark from "../../../public/images/kolve-logo-dark.png";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = "h-7 w-auto", height = 28 }: LogoProps) {
  return (
    <span className="inline-flex items-center select-none">
      {/* Light Mode Wordmark: Deep Forest Green on Warm Off-White */}
      <Image
        src={logoLight}
        alt="KOLVE"
        height={height}
        className={`${className} dark:hidden object-contain`}
        priority
      />
      {/* Dark Mode Wordmark: Warm Off-White on Charcoal */}
      <Image
        src={logoDark}
        alt="KOLVE"
        height={height}
        className={`${className} hidden dark:block object-contain`}
        priority
      />
    </span>
  );
}
