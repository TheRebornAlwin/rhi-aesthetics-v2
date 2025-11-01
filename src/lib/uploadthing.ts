import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "@/api/uploadthing";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>({
  url: `${import.meta.env.VITE_UPLOADTHING_URL || 'https://uploadthing.com'}/api/uploadthing`,
});
