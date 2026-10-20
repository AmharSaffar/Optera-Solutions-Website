import light from "@/assets/logo-light.webp.asset.json";
import dark from "@/assets/logo-dark.webp.asset.json";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      <img src={light.url} alt="Optera Solutions" width={135} height={45} className={`${className} w-auto dark:hidden`} />
      <img src={dark.url} alt="Optera Solutions" width={135} height={45} className={`${className} hidden w-auto dark:block`} />
    </span>
  );
}
