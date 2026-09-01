import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Rosebank | Gauteng Repair Network",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Rosebank. Serving Parktown, Saxonwold, Dunkeld, Forest Town, Killarney and northern Johannesburg suburbs. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Rosebank | Gauteng Repair Network",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Rosebank homes, apartments, and businesses.",
  },
}

export default function RosebankPage() {
  return (
    <ServiceAreaTemplate
      areaName="Rosebank"
      description="Gauteng Repair Network serves Rosebank's mix of heritage homes, modern apartments, offices, and retail spaces with reliable air conditioning, refrigeration, and appliance repairs. We keep your cooling and appliances running with fast, professional service."
      introImage="/hvac-maintenance-technician.png"
      suburbs={["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"]}
      introduction="Rosebank sits at the centre of Johannesburg's northern suburbs, combining older homes with modern apartment blocks, offices, and busy retail. Gauteng Repair Network helps residents and businesses in Rosebank with everything from a fridge that has stopped cooling to full air conditioning servicing for an office. Our technicians know the area well and respond quickly with quality work that lasts."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and office refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians reaching Rosebank quickly for same day callouts",
        "Experience with apartments, offices, and retail spaces",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "extended hours emergency support for cooling breakdowns",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/areas/sandton" },
        { name: "Johannesburg", href: "/areas/johannesburg" },
        { name: "Randburg", href: "/areas/randburg" },
        { name: "Morningside", href: "/areas/morningside" },
      ]}
    />
  )
}
