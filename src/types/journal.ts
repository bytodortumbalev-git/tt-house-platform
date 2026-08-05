/**
 * Normalized Journal entry shape. Journal remains repository-local in
 * this sprint (see docs/master-blueprint.md — it is the flagged first
 * CMS/Shopify migration candidate), but keeps the same "handle" naming
 * as Chapter/Object for consistency across the content gateway.
 */

export interface JournalEntry {
  handle: string;
  title: string;
  dek: string;
  date: string;
  category: string;
  author: string;
  body: string[];
}
