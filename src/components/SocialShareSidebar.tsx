"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Link2, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SocialShareSidebarProps {
  url: string;
  title: string;
  description: string;
}

const SocialShareSidebar = ({ url, title, description }: SocialShareSidebarProps) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);

  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      '_blank',
      'width=600,height=600'
    );
  };

  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      '_blank',
      'width=600,height=600'
    );
  };

  const handleEmailShare = () => {
    window.location.href = `mailto:?subject=${shareTitle}&body=${shareDescription}%0A%0A${shareUrl}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col bg-card/95 backdrop-blur-md border-2 border-border rounded-xl shadow-2xl p-2 space-y-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLinkedInShare}
          className="w-12 h-12 bg-muted/50 border border-border/50 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-200"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleTwitterShare}
          className="w-12 h-12 bg-muted/50 border border-border/50 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:shadow-lg hover:shadow-[#1DA1F2]/30 transition-all duration-200"
          title="Share on Twitter/X"
        >
          <Twitter className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopyLink}
          className="w-12 h-12 bg-muted/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
          title="Copy link"
        >
          {copied ? <Check className="w-6 h-6" /> : <Link2 className="w-6 h-6" />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleEmailShare}
          className="w-12 h-12 bg-muted/50 border border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-200"
          title="Share via email"
        >
          <Mail className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShareSidebar;
