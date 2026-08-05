import { IndexPageShell, ObjectCard } from "@/components/patterns";
import { getObjects } from "@/lib/content";

/**
 * Object directory — every Object in the archive, available and archived
 * alike (archived Objects are shown honestly rather than hidden). No
 * filters or search in v1.0.
 */
export async function ObjectDirectory() {
  const objects = await getObjects();

  return (
    <IndexPageShell
      eyebrow="Objects"
      title="The Objects"
      intro="Every Object in the archive, available and archived alike."
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {objects.map((object) => (
          <ObjectCard key={object.handle} object={object} />
        ))}
      </div>
    </IndexPageShell>
  );
}
