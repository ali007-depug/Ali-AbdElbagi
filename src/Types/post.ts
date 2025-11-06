import type { EntrySkeletonType } from "contentful";

export type BlogFields = {
  title: string;
  uniqueUrl: string;
  media?: any;
  previewShortText?: string;
  description?: string;
  content?: any;
  date?: string;
};

export type BlogSkeleton = EntrySkeletonType<BlogFields, "blog">;
