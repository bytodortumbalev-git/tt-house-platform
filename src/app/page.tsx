import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-32 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-md text-base text-foreground/70">
        {siteConfig.description}
      </p>
    </div>
  );
}
