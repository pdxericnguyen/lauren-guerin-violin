"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const eventsGalleryImages = [
  { src: "", alt: "Event gallery image 1" },
  { src: "", alt: "Event gallery image 2" },
  { src: "", alt: "Event gallery image 3" },
];

export function EventsWeddingsSection() {
  const categories = useMemo(
    () => [
      {
        id: "classical",
        title: "Classical",
        items: [
          "Canon in D — Johann Pachelbel",
          "Jesu, Joy of Man’s Desiring — Johann Sebastian Bach",
          "Sonetti de las Rosadas — Eduard Toldrà",
          "Clair de Lune — Claude Debussy",
          "Für Elise — Ludwig van Beethoven",
          "The Wedding March — Felix Mendelssohn",
          "Air on the G String — Johann Sebastian Bach",
          "Minuet in G — Johann Sebastian Bach",
          "Spring — Antonio Vivaldi",
          "Winter (Largo) — Antonio Vivaldi",
          "Ave Maria — Johann Sebastian Bach",
          "Rondeau — Jean-Joseph Mouret",
        ],
      },
      {
        id: "swing",
        title: "Swing / Jazz Standards",
        items: [
          "Can’t Help Falling in Love — Elvis Presley",
          "Fly Me to the Moon — Frank Sinatra",
          "Beyond the Sea — Bobby Darin",
          "La Vie en Rose — Louis Armstrong",
          "At Last — Etta James",
          "The Way You Look Tonight — Frank Sinatra",
          "Walking After Midnight — Patsy Cline",
          "You Make Me Feel So Young — Frank Sinatra",
          "What a Wonderful World — Louis Armstrong",
          "L-O-V-E — Nat King Cole",
        ],
      },
      {
        id: "disney",
        title: "Disney & Musicals",
        items: [
          "When You Wish Upon a Star — Pinocchio",
          "Someday My Prince Will Come — Snow White",
          "Once Upon a Dream — Sleeping Beauty",
          "A Dream Is a Wish — Cinderella",
          "So This Is Love — Cinderella",
          "Beauty and the Beast — Beauty and the Beast",
          "I See the Light — Tangled",
          "Married Life — Up",
          "Somewhere Over the Rainbow — Wizard of Oz",
          "Sunrise, Sunset — Fiddler on the Roof",
          "Moon River — Breakfast at Tiffany’s",
          "It Only Takes a Moment — Hello, Dolly!",
        ],
      },
      {
        id: "pop",
        title: "Pop Arrangements",
        items: [
          "Turning Page — Sleeping At Last",
          "Sweet Nothing — Taylor Swift",
          "Love Story — Taylor Swift",
          "Wildest Dreams — Taylor Swift",
          "Lover — Taylor Swift",
          "Birds of a Feather — Billie Eilish",
          "Ocean Eyes — Billie Eilish",
          "Exist for Love — AURORA",
          "Like Real People Do — Hozier",
          "Until I Found You — Stephen Sanchez",
          "Yellow — Coldplay",
          "Redbone — Childish Gambino",
          "Electric Feel — MGMT",
          "Dákiti / DMTF — Bad Bunny",
          "Suit & Tie — Justin Timberlake",
          "Locked Out of Heaven — Bruno Mars",
          "Thinking Out Loud — Ed Sheeran",
          "Here Comes the Sun — The Beatles",
          "Too Sweet — Hozier",
          "If I Ain’t Got You — Alicia Keys",
          "Best Part — Daniel Caesar & H.E.R.",
          "Halo — Beyoncé",
        ],
      },
    ],
    []
  );

  const [openCategory, setOpenCategory] = useState<string>("classical");
  const visibleEventsGalleryImages = eventsGalleryImages.filter(
    (image) => image.src.trim().length > 0,
  );

  return (
    <section id="events" className="py-24 px-6 bg-muted/40 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Events & Weddings"
          subtitle="Elegant live violin for ceremonies, cocktail hours, and unforgettable gatherings."
        />

        {visibleEventsGalleryImages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {visibleEventsGalleryImages.map((image) => (
              <div key={image.alt} className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-white shadow-sm">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Two-column overview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl mb-3">Weddings</h3>
            <p className="text-muted-foreground leading-relaxed">
              A polished, romantic sound for your ceremony and beyond — with guidance on timing, flow, and song choices.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>• Ceremony processional + recessional</li>
              <li>• Cocktail hour ambience</li>
              <li>• Reception entrances (optional)</li>
              <li>• Custom requests available</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <h3 className="font-serif text-2xl mb-3">Private Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create an elevated atmosphere for celebrations, corporate events, and intimate gatherings.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>• Corporate receptions + brand events</li>
              <li>• Galas + fundraisers</li>
              <li>• Parties, proposals, anniversaries</li>
              <li>• Curated setlists for your vibe</li>
            </ul>
          </div>
        </div>

        {/* Pricing with a "recommended" tier */}
        <div className="mt-10">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-serif text-2xl">Packages</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Hourly performance rate: <span className="font-medium text-foreground">$250–$350</span>
              </p>
            </div>
            <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Check Availability
            </Button>
          </div>

          <div className="mt-6 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <p className="text-xs tracking-[0.2em] text-muted-foreground">STARTER</p>
              <h4 className="font-serif text-xl mt-2">Starter Song Request</h4>
              <p className="text-sm text-muted-foreground mt-2">Includes repertoire and 1 custom arrangement.</p>
              <p className="text-sm text-muted-foreground mt-2"></p>
              <p className="text-2xl font-semibold mt-4">$250</p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm lg:scale-[1.03] relative">
              <div className="absolute -top-3 left-6 rounded-full bg-neutral-900 text-white text-xs px-3 py-1">
                Most Booked
              </div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground">RECOMMENDED</p>
              <h4 className="font-serif text-xl mt-2">Standard Song Requests</h4>
              <p className="text-sm text-muted-foreground mt-2">Includes repertoire and up to 5 custom arrangements.</p>
              <p className="text-sm text-muted-foreground mt-2"></p>
              <p className="text-2xl font-semibold mt-4">$500</p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm">
              <p className="text-xs tracking-[0.2em] text-muted-foreground">PREMIUM</p>
              <h4 className="font-serif text-xl mt-2">Premium / Fully Curated</h4>
              <p className="text-sm text-muted-foreground mt-2">Includes repertoire and 10 custom arrangements, with full musical planning support.</p>
              <p className="text-sm text-muted-foreground mt-2"></p>
              <div className="mt-4 space-y-1">
                <p className="text-2xl font-semibold">$1000</p>
                <p className="text-sm text-muted-foreground">Fully curated event: <span className="font-medium text-foreground">$1500</span></p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border bg-white p-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Travel</p>
            <p>
              $50 travel fee for locations <span className="font-medium">1+ hour outside of Portland</span> (not applicable to Premium selection).
            </p>
          </div>
        </div>

        {/* Repertoire + examples */}
        <div id="repertoire" className="mt-14 rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="font-serif text-2xl mb-3">Repertoire Highlights</h3>
          <p className="text-muted-foreground leading-relaxed">
            Mix styles freely — we’ll curate a musical arc that fits your venue, timing, and story.
          </p>

          {/* Mobile accordion */}
          <div className="mt-6 space-y-3 md:hidden">
            {categories.map((cat) => {
              const isOpen = openCategory === cat.id;
              return (
                <div key={cat.id} className="rounded-xl border bg-white overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`repertoire-${cat.id}`}
                    onClick={() => setOpenCategory(isOpen ? "" : cat.id)}
                  >
                    <span className="font-medium">{cat.title}</span>
                    <span className="text-muted-foreground" aria-hidden>
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <div
                    id={`repertoire-${cat.id}`}
                    className={isOpen ? "px-5 pb-5" : "hidden"}
                  >
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {cat.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop cards */}
          <div className="mt-6 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="rounded-xl border bg-white p-5">
                <div className="font-medium">{cat.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {cat.items.slice(0, 6).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-neutral-50 p-5">
              <h4 className="font-medium mb-2">Popular Requests</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Turning Page — <em>Twilight: Breaking Dawn</em></li>
                <li>• Birds of a Feather — Billie Eilish</li>
                <li>• Can’t Help Falling in Love — Elvis</li>
                <li>• Canon in D</li>
              </ul>
            </div>

            <div className="rounded-xl bg-neutral-50 p-5">
              <h4 className="font-medium mb-2">Perfect For</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ceremony moments</li>
                <li>• Cocktail hour ambience</li>
                <li>• Intimate gatherings</li>
                <li>• Private events & celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
