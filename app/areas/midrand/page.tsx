import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Tumble Dryer, Freezer & Appliance Repair Service in Midrand | Gauteng Repair Network",
  description:
    "Tumble dryer repairs, freezer repairs, and appliance repair service in Midrand. Also air conditioning and refrigeration repairs. Serving Carlswald, Halfway House, Vorna Valley, Kyalami, Waterfall and surrounding areas. Same day callouts available.",
  openGraph: {
    title: "Tumble Dryer, Freezer & Appliance Repair Service in Midrand | Gauteng Repair Network",
    description:
      "Reliable tumble dryer, freezer, appliance, air conditioning, and refrigeration repairs for Midrand homes and businesses.",
  },
}

export default function MidrandPage() {
  return (
    <ServiceAreaTemplate
      areaName="Midrand"
      description="Gauteng Repair Network serves Midrand's growing residential and commercial communities with air conditioning, refrigeration, and appliance repairs. Our central location makes us ideal for fast callouts across this rapidly developing area."
      introImage="/refrigeration-repair-technician.png"
      suburbs={[
        "Carlswald",
        "Halfway House",
        "Vorna Valley",
        "Glen Austin",
        "Noordwyk",
        "Halfway Gardens",
        "Kyalami",
        "Waterfall",
      ]}
      introduction="Midrand's position between Pretoria and Johannesburg has made it one of Gauteng's fastest growing areas. Gauteng Repair Network offers a reliable appliance repair service in Midrand for the area's mix of residential estates, office parks, and commercial developments. Looking for tumble dryer repairs in Midrand or freezer repairs in Midrand? Our technicians handle both, along with fridges, air conditioning, and cold rooms. From a tumble dryer that has stopped heating in a townhouse to freezer repairs for a business, we respond quickly with quality work."
      servicesOffered={[
        "Tumble dryer repairs",
        "Freezer and chest freezer repairs",
        "Washing machine repairs",
        "Fridge repairs",
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
        "Refrigeration for offices and estates",
      ]}
      whyChooseUs={[
        "Full appliance repair service in Midrand, not just cooling",
        "Centrally located for fast response across Midrand",
        "Experience with security estates and office parks",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Extended hours emergency support for cooling breakdowns",
        "Quality parts and lasting repairs on every job",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/areas/johannesburg" },
        { name: "Pretoria", href: "/areas/pretoria" },
        { name: "Centurion", href: "/areas/centurion" },
        { name: "Sandton", href: "/areas/sandton" },
        { name: "Fourways", href: "/areas/fourways" },
      ]}
    />
  )
}
