
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type PackageOption = {
  name: string;
  totalPriceLabel: string;
  depositLabel: string;
  waveUrl: string;
  includes: string[];
  note?: string;
};

const PACKAGES: PackageOption[] = [
  {
    name: "Wedding/Event – Starter Package (Deposit)",
    totalPriceLabel: "Starter package deposit",
    depositLabel: "$150 deposit",
    waveUrl: "https://link.waveapps.com/t4xksq-gf73wa",
    includes: [
      "Deposit applied toward your total",
      "Remaining balance invoiced closer to your event date",
      "Includes repertoire",
      "Includes 1 custom arrangement",
    ],
    note: "A $50 travel fee applies for locations more than one hour outside of Portland",
  },
  {
    name: "Wedding/Event – Standard Package (Deposit)",
    totalPriceLabel: "Standard package deposit",
    depositLabel: "$250 deposit",
    waveUrl: "https://link.waveapps.com/vgfzcx-3wzgvw",
    includes: [
      "Deposit applied toward your total",
      "Remaining balance invoiced closer to your event date",
      "Includes repertoire",
      "Includes up to 5 custom arrangements",
    ],
     note: "A $50 travel fee applies for locations more than one hour outside of Portland",
  },
  {
    name: "Wedding/Event – Premium/Curated Package (Deposit)",
    totalPriceLabel: "Premium/Curated package deposit",
    depositLabel: "$350 deposit",
    waveUrl: "https://link.waveapps.com/t26hcv-rz3v5e",
    includes: [
      "Deposit applied toward your total",
      "Remaining balance invoiced closer to your event date",
      "Includes repertoire",
      "Includes 10+ custom arrangements",
    ],
    note: "Premium packages require a larger deposit due to additional planning and customization.",
  },
];

export default function Reserve() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to site
            </a>
          </Link>
          <a
            href="mailto:laurenguerinllg@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            guerinlaurenllg@gmail.com
          </a>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl mt-6">Reserve Your Date</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Reserve your wedding or event date with a deposit. Deposits are applied toward your total, and the remaining
          balance is invoiced closer to your event date.
        </p>

        <ul className="mt-4 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>Your deposit secures your date and package selection.</li>
          <li>Deposits vary by package and are applied toward your total.</li>
          <li>The remaining balance is invoiced closer to your event date.</li>
          <li>Premium packages require a larger deposit due to additional planning and customization.</li>
        </ul>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <Card key={p.name} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="space-y-2">
                  <h2 className="font-serif text-xl">{p.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{p.depositLabel}</span>
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {p.includes.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>

                {p.note && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {p.note}
                  </p>
                )}

                <div className="mt-auto pt-6">
                  <a href={p.waveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">Pay deposit</Button>
                  </a>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Deposit is applied to your total. Remaining balance will be invoiced closer to your date.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          Questions? Email{" "}
          <a className="underline underline-offset-4 hover:text-foreground" href="mailto:laurenguerinllg@gmail.com">
            guerinlaurenllg@gmail.com
          </a>
          .
        </div>
      </div>
    </div>
  );
}
