"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook } from "lucide-react";

interface GalleryShareButtonsProps {
  shareUrl: string;
}

export default function GalleryShareButtons({ shareUrl }: GalleryShareButtonsProps) {
  const text = "Check out my professional portfolio - Devon Clemente, AI Automation Specialist";

  const handleShare = (platform: "twitter" | "linkedin" | "facebook") => {
    let url: string | undefined;
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    }
    if (url) window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="mt-8 flex gap-3 justify-start">
      <Button variant="outline" size="sm" onClick={() => handleShare("twitter")} className="gap-2">
        <Twitter className="w-4 h-4" />
        Share
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("linkedin")} className="gap-2">
        <Linkedin className="w-4 h-4" />
        Share
      </Button>
      <Button variant="outline" size="sm" onClick={() => handleShare("facebook")} className="gap-2">
        <Facebook className="w-4 h-4" />
        Share
      </Button>
    </div>
  );
}
