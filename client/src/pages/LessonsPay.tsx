import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LessonPack = {
  name: string;
  priceLabel: string;
  waveUrl: string;
  description: string;
};

const LESSON_PACKS: LessonPack[] = [
  {
    name: "4-Lesson Pack",
    priceLabel: "$140",
    waveUrl: "https://link.waveapps.com/y7jj3u-nqhdhe",
    description: "Great for getting started or month-to-month lessons.",
  },
  {
    name: "8-Lesson Pack",
    priceLabel: "$280",
    waveUrl: "https://link.waveapps.com/8g9a86-4wz9ey",
    description: "A solid bundle for steady progress.",
  },
  {
    name: "12-Lesson Pack",
    priceLabel: "$400",
    waveUrl: "https://link.waveapps.com/pffe8c-dd3x84",
    description: "Best value for consistent weekly lessons.",
  },
];

export default function LessonsPay() {
  const activeTabClass = cn(buttonVariants({ variant: "default" }), "cursor-default");
  const depositTabClass = buttonVariants({ variant: "secondary" });
  const paymentButtonClass = cn(buttonVariants({ variant: "default" }), "w-full");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section>
          <h1 className="font-serif text-4xl md:text-5xl mt-6">Pay for Lessons</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Select a lesson pack below. You’ll be redirected to complete payment securely.
          </p>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            New students begin with a complimentary 30-minute trial lesson offered once per student. After your trial,
            you may purchase a lesson pack below.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/reserve" className={depositTabClass}>
              Pay deposit
            </Link>
            <span className={activeTabClass} aria-current="page">
              Pay for lessons
            </span>
            <Link href="/" className={buttonVariants({ variant: "outline" })}>
              Back to home
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {LESSON_PACKS.map((pack) => (
            <Card key={pack.waveUrl} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="font-serif text-xl">{pack.name}</h2>
                  <p className="text-lg font-normal text-foreground leading-tight">{pack.priceLabel}</p>
                  <p className="text-sm text-muted-foreground">{pack.description}</p>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={pack.waveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={paymentButtonClass}
                  >
                    Pay for lessons
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Scheduling is coordinated directly with Lauren after purchase.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Lesson packs are paid in advance and scheduling is coordinated directly with Lauren.</li>
            <li>New students begin with a complimentary 30-minute trial lesson offered once per student.</li>
            <li>Lesson packs are designed for ongoing study and can be used across future scheduled sessions.</li>
            <li>If you have questions about fit or availability, email before purchasing.</li>
          </ul>
        </section>

        <div className="mt-10 text-sm text-muted-foreground">
          Questions? Email{" "}
          <a className="underline underline-offset-4 hover:text-foreground" href="mailto:guerinlaurenllg@gmail.com">
            guerinlaurenllg@gmail.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
