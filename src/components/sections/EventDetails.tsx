import { Calendar, Clock, MapPin, CalendarPlus } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  { icon: Calendar, label: "Date", value: "12 December 2026" },
  { icon: Clock, label: "Time", value: "6:30 PM onwards" },
  { icon: MapPin, label: "Venue", value: "Salem, Tamil Nadu" },
];

function downloadIcs() {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//RajaAkshitha//EN
BEGIN:VEVENT
UID:raja-akshitha-2026@invite
DTSTAMP:20260101T000000Z
DTSTART:20261212T130000Z
DTEND:20261212T180000Z
SUMMARY:Raja & Akshitha Wedding
LOCATION:Salem, Tamil Nadu
DESCRIPTION:A celebration of love, destiny, and forever.
END:VEVENT
END:VCALENDAR`;
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "raja-akshitha-wedding.ics";
  a.click();
  URL.revokeObjectURL(url);
}

export function EventDetails() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--gold)]">The Celebration</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-gold-gradient">
            The Wedding
          </h2>
          <div className="divider-gold mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.15}>
              <div className="glass group h-full rounded-2xl p-10 text-center transition-all duration-700 hover:-translate-y-2 hover:gold-glow">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] transition-all group-hover:scale-110 group-hover:gold-glow">
                  <it.icon className="h-7 w-7" />
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  {it.label}
                </p>
                <p className="mt-3 font-serif text-xl text-foreground">{it.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <button
            onClick={downloadIcs}
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--gold)] bg-transparent px-8 py-4 text-sm uppercase tracking-[0.3em] text-[var(--gold)] transition-all duration-500 hover:bg-[var(--gold)] hover:text-background hover:gold-glow"
          >
            <CalendarPlus className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Add to Calendar
          </button>
        </Reveal>
      </div>
    </section>
  );
}
