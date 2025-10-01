import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const publications = pgTable("publications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  authors: text("authors").notNull(),
  venue: text("venue").notNull(),
  year: integer("year").notNull(),
  citations: integer("citations").default(0),
  pdfUrl: text("pdf_url"),
  scholarUrl: text("scholar_url"),
});

export const substackArticles = pgTable("substack_articles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  url: text("url").notNull(),
  publishedDate: text("published_date").notNull(),
  readTime: text("read_time").notNull(),
});

export const cvFile = pgTable("cv_file", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  filepath: text("filepath").notNull(),
  uploadedAt: text("uploaded_at").notNull(),
  fileSize: integer("file_size").notNull(),
});

export const insertPublicationSchema = createInsertSchema(publications).omit({ id: true });
export const insertSubstackArticleSchema = createInsertSchema(substackArticles).omit({ id: true });
export const insertCvFileSchema = createInsertSchema(cvFile).omit({ id: true });

export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type Publication = typeof publications.$inferSelect;

export type InsertSubstackArticle = z.infer<typeof insertSubstackArticleSchema>;
export type SubstackArticle = typeof substackArticles.$inferSelect;

export type InsertCvFile = z.infer<typeof insertCvFileSchema>;
export type CvFile = typeof cvFile.$inferSelect;
