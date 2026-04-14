import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PackageOption = {
  name: string;
  priceLabel: string;
  depositLabel: string;
  waveUrl: string;
  includes: string[];
  note?: string;
};

const PACKAGES: PackageOption[] = [
  {
    name: "Wedding/Event - Starter Package",
    priceLabel: "$250",
    depositLabel: "$150 reservation deposit",
    waveUrl: "https://link.waveapps.com/t4xksq-gf73wa",
    includes: [
      "Up to 30 minutes of live violin music (ceremony)",
      "Professional coordination with your venue/planner",
      "Includes repertoire",
      "Includes 1 custom arrangement",
    ],
  },
  {
    name: "Wedding/Event - Standard Package",
    priceLabel: "$500",
    depositLabel: "$250 reservation deposit",
    waveUrl: "https://link.waveapps.com/vgfzcx-3wzgvw",
    includes: [
      "Up to 1 hour of live violin music (ceremony or cocktail hour)",
      "Professional coordination with your venue/planner",
      "Includes repertoire",
      "Includes up to 5 custom arrangements",
    ],
  },
  {
    name: "Wedding/Event - Premium Package",
    priceLabel: "$1000",
    depositLabel: "$350 reservation deposit",
    waveUrl: "https://link.waveapps.com/t26hcv-rz3v5e",
    includes: [
      "Up to 2 hours of live violin music (ceremony + cocktail hour)",
      "Professional coordination with your venue/planner",
      "Includes repertoire",
      "Includes 10 custom arrangements",
    ],
    note: "Fully curated option: $1500 for 3+ hours with a $350 reservation deposit.",
  },
];

export default function Reserve() {
  const activeTabClass = cn(buttonVariants({ variant: "default" }), "cursor-default");
  const lessonsTabClass = buttonVariants({ variant: "secondary" });
  const paymentButtonClass = cn(buttonVariants({ variant: "default" }), "w-full");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section>
          <h1 className="font-serif text-4xl md:text-5xl mt-6">Pay Deposit</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Reserve your wedding or event date with a deposit. Deposits are applied toward your total, and the remaining
            balance is invoiced closer to your event date.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className={activeTabClass} aria-current="page">
            Pay deposit
          </span>
          <Link href="/lessons/pay" className={lessonsTabClass}>
            Pay for lessons
          </Link>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Back to home
          </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <Card key={p.name} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="font-serif text-xl">{p.name}</h2>
                  <p className="text-lg font-normal text-foreground leading-tight">{p.priceLabel}</p>
                  <p className="text-base font-normal text-muted-foreground leading-tight">{p.depositLabel}</p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.includes.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>

                {p.note && (
                  <p className="mt-4 text-sm text-muted-foreground">{p.note}</p>
                )}

                <div className="mt-auto pt-6">
                  <a
                    href={p.waveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={paymentButtonClass}
                  >
                    Pay Deposit
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Deposit is applied to your total. Remaining balance will be invoiced closer to your date.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10">
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Your deposit secures your date and package selection.</li>
            <li>Deposits vary by package and are applied toward your total.</li>
            <li>The remaining balance is invoiced closer to your event date.</li>
            <li>Fully curated packages include 3+ hours and expanded musical planning support.</li>
            <li>A $50 travel fee applies only to non-premium packages for locations more than one hour outside of Portland.</li>
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
