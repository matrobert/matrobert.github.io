import type { Publication, InsertPublication, SubstackArticle, InsertSubstackArticle, CvFile, InsertCvFile } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getPublications(): Promise<Publication[]>;
  getSubstackArticles(): Promise<SubstackArticle[]>;
  getCvFile(): Promise<CvFile | undefined>;
}

export class MemStorage implements IStorage {
  private publications: Map<string, Publication>;
  private substackArticles: Map<string, SubstackArticle>;
  private cvFile: CvFile | undefined;

  constructor() {
    this.publications = new Map();
    this.substackArticles = new Map();
    this.cvFile = undefined;
  }

  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values());
  }

  async getSubstackArticles(): Promise<SubstackArticle[]> {
    return Array.from(this.substackArticles.values());
  }

  async getCvFile(): Promise<CvFile | undefined> {
    return this.cvFile;
  }
}

export const storage = new MemStorage();
