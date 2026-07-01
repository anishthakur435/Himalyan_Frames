"use client";
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

// Only initialize PostHog if the API key is present
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  // Capture page views conditionally based on the route
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      const handleRouteChange = () => {
        posthog.capture('$pageview');
      };
      
      // Since App Router doesn't have route change events perfectly matching Pages Router,
      // a simple pageview event on mount is fine. Next.js 13+ App Router specific integrations
      // can use usePathname / useSearchParams if more precision is needed.
      handleRouteChange();
    }
  }, []);

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
