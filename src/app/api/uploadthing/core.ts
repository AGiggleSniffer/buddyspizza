import { getQueryClient } from "@/lib/query-client";
import { auth } from "@/lib/auth";
import { ensureSession } from "@better-auth-ui/react/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UTApi } from "uploadthing/server";
import z from "zod";
import { getPhoto, patchPhoto } from "@/server/queries";

const f = createUploadthing();

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN,
});

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(z.object({ customId: z.string() }))
    // Set permissions and file types for this FileRoute
    // This code runs on your server before upload
    .middleware(async ({ input }) => {
      // validate
      const queryClient = getQueryClient();
      const session = await ensureSession(queryClient, auth, {
        headers: await headers(),
      });
      if (!session) {
        redirect("/auth/sign-in?redirectTo=/dashboard");
      }

      return { input };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("file url", file.ufsUrl);

      const photo = await getPhoto(metadata.input.customId);

      // delete old
      await utapi.deleteFiles(photo.key);

      // update DB
      await patchPhoto({ name: metadata.input.customId, key: file.key });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
