import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Celebrations } from "@/components/sections/Celebrations";
import { EventDetails } from "@/components/sections/EventDetails";
import { Countdown } from "@/components/sections/Countdown";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { MusicToggle } from "@/components/MusicToggle";
import { IntroOverlay } from "@/components/IntroOverlay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raja & Akshitha — A Wedding Invitation" },
      {
        name: "description",
        content:
          "Raja & Akshitha invite you to celebrate their wedding on 12 December 2026 in Chennai. A celebration of love, destiny, and forever.",
      },
      { property: "og:title", content: "Raja & Akshitha — A Wedding Invitation" },
      {
        property: "og:description",
        content: "A celebration of love, destiny, and forever — 12.12.2026, Chennai.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <IntroOverlay />
      <CursorGlow />
      <MusicToggle />
      <Hero />
      <Story />
      <Celebrations />
      <EventDetails />
      <Countdown />
      <Gallery />
      <RSVP />
      <Location />
      <Footer />
    </main>
  );
}
