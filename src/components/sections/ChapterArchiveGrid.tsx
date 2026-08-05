import { IndexPageShell, ChapterCard } from "@/components/patterns";
import { getPublishedChapters } from "@/lib/content";

/** Chapter archive index — every published Chapter, past and current. */
export async function ChapterArchiveGrid() {
  const chapters = await getPublishedChapters();

  return (
    <IndexPageShell
      eyebrow="Chapters"
      title="The Chapters"
      intro="Every Chapter TT House has released, in the order it was made."
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.handle} chapter={chapter} />
        ))}
      </div>
    </IndexPageShell>
  );
}
