import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fridge Repairs & Appliance Repairs in Vereeniging | Gauteng Repair Network",
  description:
    "Fridge repairs, air conditioning, and appliance repairs in Vereeniging. Serving Three Rivers, Duncanville, Arcon Park, Roshnee, and surrounding Vaal Triangle areas. Same day callouts available.",
  openGraph: {
    title: "Fridge Repairs & Appliance Repairs in Vereeniging | Gauteng Repair Network",
    description:
      "Reliable fridge, appliance, air conditioning, and refrigeration repairs for Vereeniging homes and businesses.",
  },
}

export default function VereenigingPage() {
  return (
    <ServiceAreaTemplate
      areaName="Vereeniging"
      description="Gauteng Repair Network provides trusted fridge repairs, appliance repairs, air conditioning, and refrigeration services across Vereeniging and the wider Vaal Triangle. From family homes to shops and small businesses, we keep your cooling and appliances working reliably."
      introImage="/refrigeration-repair-technician.png"
      suburbs={[
        "Three Rivers",
        "Duncanville",
        "Arcon Park",
        "Roshnee",
        "Peacehaven",
        "Unitas Park",
        "Sonlandpark",
        "Rus Ter Vaal",
      ]}
      introduction="Vereeniging and the surrounding Vaal Triangle area rely on working fridges, freezers, air conditioners, and household appliances just as much as anywhere else in Gauteng. Looking for fridge repairs in Vereeniging or a technician who can help with appliance breakdowns? Gauteng Repair Network extends its coverage to Vereeniging, bringing the same fast response and honest pricing we offer across the rest of the province. Whether it's a fridge that's stopped cooling or an aircon that needs a regas, our technicians arrive prepared to get things running again."
      servicesOffered={[
        "Fridge repairs",
        "Freezer and chest freezer repairs",
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Fridge repairs and appliance repair service covering Vereeniging",
        "Same day callouts across the Vaal Triangle",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "Extended hours emergency support for cooling breakdowns",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/areas/johannesburg" },
        { name: "Midrand", href: "/areas/midrand" },
        { name: "Centurion", href: "/areas/centurion" },
      ]}
    />
  )
}
