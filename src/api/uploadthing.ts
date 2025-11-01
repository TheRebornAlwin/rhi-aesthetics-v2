import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 10 },
  }).onUploadComplete(async ({ file }: { file: { url: string; name: string; size: number } }) => {
    console.log("Upload complete:", file.url);
    return { url: file.url };
  }),

  videoUploader: f({
    video: { maxFileSize: "16MB", maxFileCount: 1 },
  }).onUploadComplete(async ({ file }: { file: { url: string; name: string; size: number } }) => {
    console.log("Video upload complete:", file.url);
    return { url: file.url };
  }),

  pdfUploader: f({
    pdf: { maxFileSize: "8MB", maxFileCount: 5 },
  }).onUploadComplete(async ({ file }: { file: { url: string; name: string; size: number } }) => {
    console.log("PDF upload complete:", file.url);
    return { url: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
