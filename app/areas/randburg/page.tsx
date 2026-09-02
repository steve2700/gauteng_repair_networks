import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fridge Repairs & Appliances Repair in Randburg | Gauteng Repair Network",
  description:
    "Fridge repairs and appliances repair in Randburg. Also air conditioning and refrigeration repairs. Serving Ferndale, Blairgowrie, Northcliff, Boskruin, Fairland and surrounding suburbs. Same day callouts available.",
  openGraph: {
    title: "Fridge Repairs & Appliances Repair in Randburg | Gauteng Repair Network",
    description:
      "Reliable fridge repairs, appliance repairs, air conditioning, and refrigeration services for Randburg homes, complexes, and businesses.",
  },
}

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="Gauteng Repair Network provides trusted fridge repairs, appliance repairs, air conditioning, and refrigeration services across Randburg. From established family homes and townhouse complexes to shops and offices, we keep your cooling and appliances working reliably."
      introImage="/washing_machine_repairs.jpg"
      suburbs={[
        "Ferndale",
        "Blairgowrie",
        "Northcliff",
        "Boskruin",
        "Fairland",
        "Bordeaux",
        "Randpark Ridge",
        "Fontainebleau",
      ]}
      introduction="Randburg blends established family homes, townhouse complexes, and busy commercial areas, and all of them rely on working fridges, freezers, air conditioners, and appliances. Looking for fridge repairs in Randburg or an appliances repair service you can trust? Gauteng Repair Network has become a dependable choice in Randburg for fast repairs and honest advice. Whether it is a washing machine that has stopped mid cycle or a fridge that needs regassing, our technicians arrive prepared to get things running again."
      servicesOffered={[
        "Fridge repairs",
        "Chest freezer and bar fridge repairs",
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Trusted fridge repairs and appliances repair service in Randburg",
        "Local technicians reaching Randburg quickly for same day callouts",
        "Experience with body corporate and complex work",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Extended hours emergency support for cooling breakdowns",
      ]}
      nearbyAreas={[
        { name: "Fourways", href: "/areas/fourways" },
        { name: "Sandton", href: "/areas/sandton" },
        { name: "Johannesburg", href: "/areas/johannesburg" },
        { name: "Rosebank", href: "/areas/rosebank" },
      ]}
    />
  )
}
