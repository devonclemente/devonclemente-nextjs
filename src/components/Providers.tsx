'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    return 'unknown';
  }
};

function ProvidersInner({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function LDWrapper({ children }: { children: React.ReactNode }) {
  const [userIP, setUserIP] = useState<string>('unknown');
  const [sessionId] = useState<string>(() => {
    try {
      if (typeof window === 'undefined') return Math.random().toString(36).slice(2);
      const existing = localStorage.getItem('ld_session_id');
      if (existing) return existing;
      const id = (crypto as any).randomUUID?.() ?? Math.random().toString(36).slice(2);
      localStorage.setItem('ld_session_id', id);
      return id;
    } catch {
      return Math.random().toString(36).slice(2);
    }
  });

  useEffect(() => {
    getUserIP().then(setUserIP);
  }, []);

  const ldUser = {
    key: userIP !== 'unknown' ? userIP : sessionId,
    ip: userIP !== 'unknown' ? userIP : undefined,
    anonymous: userIP === 'unknown',
    custom: {
      sessionId,
      app: 'devonclemente-nextjs',
    },
  };

  const LDApp = withLDProvider({
    clientSideID: "68d56a0aec2cdc09ab7cbe15",
    user: ldUser,
  })(function Inner() {
    return <>{children}</>;
  });

  return <LDApp />;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LDWrapper>
      <ProvidersInner>{children}</ProvidersInner>
    </LDWrapper>
  );
}
