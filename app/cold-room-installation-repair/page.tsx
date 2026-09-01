// File path: app/cold-room-installation-repair/page.tsx
// Clean URL: https://www.gautengrepairnetwork.co.za/cold-room-installation-repair

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Warehouse, Snowflake, Wrench, Clock, Award, ShieldCheck, Store, Refrigerator } from "lucide-react"

export const metadata: Metadata = {
  title: "Cold Room Repair Near Me in Gauteng | Cold Storage Repair | Gauteng Repair Network",
  description:
    "Looking for cold room repair near me? We install, repair, and maintain cold storage and freezer rooms across Gauteng. Serving Pretoria, Johannesburg and Midrand. Fast, honest quotes.",
  keywords:
    "cold room repair near me, cold storage repair near me, cold room installation Gauteng, cold room repair Johannesburg, walk in freezer room Pretoria, freezer room repair, cold room maintenance Midrand, cold room not holding temperature, cold room cost Gauteng",
  openGraph: {
    title: "Cold Room Repair Near Me | Gauteng Repair Network",
    description:
      "Professional cold room and cold storage repair, installation, and maintenance for businesses across Gauteng.",
    images: [
      {
        url: "/cold-room-installation.png",
        width: 1200,
        height: 630,
        alt: "Cold room installation and repair in Gauteng by Gauteng Repair Network",
      },
    ],
  },
}

const faqs = [
  {
    question: "Do you do cold room repair near me, or only certain areas of Gauteng?",
    answer:
      "We cover all of Gauteng, including Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, and Roodepoort. Wherever you're based in the province, we can get a technician to you.",
  },
  {
    question: "How much does a cold room installation cost in Gauteng?",
    answer:
      "Cost depends on size, insulation thickness, refrigeration capacity, and whether it's a new build or a retrofit into existing space. We assess your site and stock needs first, then give you a detailed, itemised quote so there are no surprises.",
  },
  {
    question: "My cold room isn't holding temperature. What could be causing this?",
    answer:
      "The usual culprits are a refrigerant gas leak, a failing condenser or evaporator fan, damaged door seals letting warm air in, or the unit being undersized for the current stock load. We diagnose on site and give you an honest repair quote before starting any work.",
  },
  {
    question: "How long does a cold room installation take?",
    answer:
      "A straightforward walk in cold room installation typically takes a few days from site prep to handover, depending on size and site access. We'll give you a clear timeline during the site assessment so you can plan around it.",
  },
  {
    question: "Can you install a cold room without shutting down my business?",
    answer:
      "In most cases, yes. We work around your trading hours wherever possible and plan installations or major repairs to minimise disruption to your operation.",
  },
  {
    question: "How often should a commercial cold room be serviced?",
    answer:
      "We recommend at least two maintenance visits a year for commercial cold rooms, more often for high use environments like butcheries and restaurants. Regular servicing catches small issues, like a slow gas leak or a worn seal, before they become a full breakdown.",
  },
  {
    question: "Do you repair existing cold rooms installed by another company?",
    answer:
      "Yes, we service and repair cold rooms regardless of who installed them. Our technicians work across all major refrigeration plant brands and cold room panel systems.",
  },
]

export default function ColdRoomPage() {
  return (
    <ServicePageTemplate
      title="Cold Room Repair Near Me"
      description="Searching for cold room repair near me or cold storage repair near me? Gauteng Repair Network designs, installs, repairs, and maintains walk in cold rooms and freezer rooms for restaurants, butcheries, retailers, and other businesses across Gauteng. From new installations to breakdown repairs and routine maintenance, our technicians keep your stock at the right temperature and your operation running."
      icon={Warehouse}
      heroImage="/cold-room-installation.png"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "New cold room installation",
        "Freezer room installation",
        "Cold room repairs and breakdowns",
        "Refrigeration plant and condenser repairs",
        "Temperature control and monitoring setup",
        "Panel, door, and seal replacement",
        "Evaporator and fan repairs",
        "Gas leak detection and refills",
        "Preventative maintenance visits",
        "Insulated panel repairs",
        "Defrost system repairs",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Protect Your Stock",
          description:
            "A cold room failure can ruin thousands in stock. We respond fast to keep your temperatures stable and your losses at zero.",
          icon: ShieldCheck,
        },
        {
          title: "Certified Technicians",
          description:
            "Refrigerant handling certified technicians experienced in commercial cold room and freezer room systems.",
          icon: Award,
        },
        {
          title: "Same Day Response",
          description:
            "When a cold room goes down, every hour counts. We prioritise breakdown callouts to get you cooling again quickly.",
          icon: Clock,
        },
        {
          title: "Built to Last",
          description:
            "We install and repair with quality components and proper methods so your cold room performs reliably for years.",
          icon: Snowflake,
        },
        {
          title: "Honest Pricing",
          description:
            "Clear quotes before any work starts, with practical advice on installation, repair, and maintenance options.",
          icon: Wrench,
        },
        {
          title: "Business Ready",
          description:
            "We understand food safety and uptime pressures, and we work around your trading hours wherever possible.",
          icon: Store,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Site Assessment",
          description:
            "We visit your site to assess your cooling needs, space, and power, then plan the right installation or repair.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive a detailed quote covering equipment, parts, and labour with no hidden costs.",
        },
        {
          step: 3,
          title: "Installation or Repair",
          description:
            "Our technicians complete the work to a high standard, using quality components and proper refrigeration practice.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We confirm the cold room holds the correct temperature and brief you on care and maintenance.",
        },
      ]}
      relatedServices={[
        { title: "Commercial Refrigeration", href: "/commercial-refrigeration", icon: Store },
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "HVAC Maintenance Contracts", href: "/hvac-maintenance-contracts", icon: ShieldCheck },
        { title: "Emergency Callout Service", href: "/emergency-callout-service", icon: Clock },
      ]}
      serviceAreas={[
        "Pretoria",
        "Johannesburg",
        "Midrand",
        "Sandton",
        "Centurion",
        "Fourways",
        "Randburg",
        "Rosebank",
        "Bedfordview",
        "Roodepoort",
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Cold Rooms Built and Maintained for Gauteng Businesses</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you run a restaurant, butchery, supermarket, or distribution business, your cold room is central to your operation. <strong>Gauteng Repair Network</strong> installs new cold rooms and freezer rooms, repairs failing units, and keeps existing rooms in top condition across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Installations</h3>
                  <p className="text-sm text-muted-foreground">
                    New walk in cold rooms and freezer rooms sized to your stock, space, and power supply.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Repairs and Maintenance</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast breakdown repairs and scheduled maintenance to prevent costly failures and stock loss.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Warehouse className="h-6 w-6 text-secondary" />
                  Looking for Cold Room Repair Near Me?
                </h3>
                <p className="text-muted-foreground">
                  We cover the whole of Gauteng, including Pretoria, Johannesburg, Midrand, Sandton, Centurion, Fourways, Randburg, Bedfordview, Rosebank, and Roodepoort. Whether you searched for "cold room repair near me" or "cold storage repair near me," we're a call or WhatsApp away from getting a technician to your site. Same day quotes, honest pricing, no obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-center">Cold Room Installation and Repair Questions</h2>
            <p className="text-center text-muted-foreground mb-12">
              Answers to the questions businesses ask us most often about cold rooms.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-bold text-lg mb-2" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-sm text-muted-foreground leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
