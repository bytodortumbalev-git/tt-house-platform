import {
  HomeHero,
  HomeStatement,
  HomeCurrentChapter,
  HomeFeaturedObject,
  HomeHousePreview,
  HomeJournalHighlights,
  HomeArchivePreview,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeStatement />
      <HomeCurrentChapter />
      <HomeFeaturedObject />
      <HomeHousePreview />
      <HomeJournalHighlights />
      <HomeArchivePreview />
    </>
  );
}
