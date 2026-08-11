"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import { UploadButton } from "@/lib/uploadthing";
import { FieldDescription } from "@/components/ui/field";

type Props = {
  description: string;
  initialPhotos: { hero: string; about: string };
};

export default function PhotoPanel({ description, initialPhotos }: Props) {
  const [heroPhoto, setHeroPhoto] = useState<File | null>(null);
  const [aboutPhoto, setAboutPhoto] = useState<File | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Pictures</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1.5">
          <Label htmlFor="hero">Hero Page</Label>
          <FieldDescription>
            Select a picture to preview for the Hero Page.
          </FieldDescription>
          <Input
            id="hero"
            type="file"
            className="cursor-pointer"
            onChange={(e) => setHeroPhoto(e.target.files?.[0] || null)}
            // value={heroPhoto}
            // onChange={(e) => setHeroPhoto(e.target.value)}
          />

          <div className="flex w-full items-center justify-center">
            <div className="flex h-[25vh] w-[25vw] items-center justify-center">
              <div className="scale-25 border-2">
                <Hero
                  photo={
                    heroPhoto
                      ? URL.createObjectURL(heroPhoto)
                      : initialPhotos.hero
                  }
                />
              </div>
            </div>
          </div>

          <UploadButton
            className="ut-button:bg-primary ut-button:text-black mt-4"
            content={{ button: "Save" }}
            endpoint="imageUploader"
            input={{ customId: "hero" }}
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}

            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />

          <Label htmlFor="about">About Page</Label>
          <FieldDescription>
            Select a picture to preview for the About Page.
          </FieldDescription>
          <Input
            id="about"
            type="file"
            onChange={(e) => setAboutPhoto(e.target.files?.[0] || null)}
          />

          <div className="flex w-full items-center justify-center">
            <div className="flex h-[25vh] w-[25vw] items-center justify-center">
              <div className="scale-25">
                <div className="h-screen w-screen border-2">
                  <SectionAbout
                    photo={
                      aboutPhoto
                        ? URL.createObjectURL(aboutPhoto)
                        : initialPhotos.about
                    }
                    description={description}
                  />
                </div>
              </div>
            </div>
          </div>

          <UploadButton
            endpoint="imageUploader"
            className="ut-button:bg-primary ut-button:text-black mt-4"
            content={{ button: "Save" }}
            input={{ customId: "about" }}
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}

            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </CardContent>
      </Card>
    </>
  );
}
