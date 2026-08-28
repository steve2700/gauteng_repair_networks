// File path: app/appliance-repairs/page.tsx
// Clean URL: https://www.gautengrepairnetwork.co.za/appliance-repairs

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Wrench, WashingMachine, Clock, Award, ShieldCheck, Refrigerator, Zap, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "Appliance Repairs in Gauteng | Washing Machine, Dishwasher, Oven Repair | Gauteng Repair Network",
  description:
    "Home appliance repairs across Gauteng. We repair washing machines, tumble dryers, dishwashers, ovens, stoves, and more. Fast, reliable service in Pretoria, Johannesburg and Midrand. Same day callouts available.",
  keywords:
    "appliance repairs Gauteng, washing machine repair Johannesburg, dishwasher repair Pretoria, tumble dryer repair, oven repair Midrand, stove repair, washing machine not draining, washing machine not spinning",
  openGraph: {
    title: "Appliance Repairs | Gauteng Repair Network Gauteng",
    description:
      "Fast, reliable repairs for washing machines, dishwashers, ovens, and home appliances across Gauteng.",
    images: [
      {
        url: "/appliance_repairs.jpg",
        width: 1200,
        height: 630,
        alt: "Appliance repairs in Gauteng by Gauteng Repair Network",
      },
    ],
  },
}

const faqs = [
  {
    question: "My washing machine won't drain or spin. What's wrong?",
    answer:
      "This is usually caused by a blocked drain pump or filter, a faulty drain hose, or a worn drive belt. Sometimes it's as simple as a blockage from coins or debris. We diagnose the exact cause on site before quoting, so you know what you're paying for.",
  },
  {
    question: "Is it worth repairing my appliance or should I buy a new one?",
    answer:
      "It depends on the age of the appliance, the cost of the part needed, and its overall condition. We give you an honest recommendation, not just a repair quote, so you can decide what makes sense financially rather than defaulting to buying new.",
  },
  {
    question: "Do you repair all appliance brands?",
    answer:
      "Yes, our technicians work across all major brands found in South African homes, including Samsung, LG, Defy, Whirlpool, Bosch, and more.",
  },
  {
    question: "How quickly can you fix my appliance?",
    answer:
      "We offer same day callouts across Gauteng for most repairs. Once we've diagnosed the fault, we'll let you know if the part is available immediately or needs to be ordered in.",
  },
  {
    question: "My oven isn't heating up. Can this be repaired?",
    answer:
      "In most cases, yes. A common cause is a failed heating element, a faulty thermostat, or an issue with the control board. These are usually straightforward, cost effective repairs rather than requiring a full replacement.",
  },
  {
    question: "Do you offer a warranty on appliance repairs?",
    answer:
      "We stand behind our workmanship and the parts we fit. Ask your technician about the specific warranty terms for your repair when they provide your quote.",
  },
]

export default function ApplianceRepairsPage() {
  return (
    <ServicePageTemplate
      title="Appliance Repairs"
      description="A broken appliance disrupts your whole day. Gauteng Repair Network repairs washing machines, tumble dryers, dishwashers, ovens, stoves, and other household appliances across Gauteng. Our technicians diagnose the fault, quote honestly, and repair with quality parts so your home runs smoothly again."
      icon={WashingMachine}
      heroImage="/appliance_repairs.jpg"
      priceRange="Free quotes"
      responseTime="Same day"
      features={[
        "Washing machine repairs",
        "Tumble dryer repairs",
        "Dishwasher repairs",
        "Oven and stove repairs",
        "Hob and cooktop repairs",
        "Microwave repairs",
        "Fault finding and diagnostics",
        "Motor and pump replacement",
        "Element and thermostat replacement",
        "Control board repairs",
        "Door seal and hinge repairs",
        "Emergency breakdown callouts",
      ]}
      benefits={[
        {
          title: "Fast Turnaround",
          description:
            "We respond quickly with same day callouts so you are not left without your essential appliances for long.",
          icon: Clock,
        },
        {
          title: "Skilled Technicians",
          description:
            "Experienced technicians who diagnose faults accurately and repair a wide range of appliance brands.",
          icon: Award,
        },
        {
          title: "Quality Parts",
          description:
            "We fit quality replacement parts so your repair lasts and your appliance performs like it should.",
          icon: ShieldCheck,
        },
        {
          title: "Honest Pricing",
          description:
            "Clear quotes before we start, with honest advice on whether a repair or replacement makes more sense.",
          icon: Wrench,
        },
        {
          title: "All Major Brands",
          description:
            "From washing machines to ovens, we service and repair the appliance brands found in most Gauteng homes.",
          icon: Refrigerator,
        },
        {
          title: "Safe and Reliable",
          description:
            "We repair to a safe standard, testing every appliance thoroughly before we hand it back to you.",
          icon: Zap,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Diagnosis",
          description:
            "We inspect and test your appliance to identify exactly what is causing the fault.",
        },
        {
          step: 2,
          title: "Clear Quote",
          description:
            "You receive an honest quote covering parts and labour, with advice on repair versus replacement.",
        },
        {
          step: 3,
          title: "Professional Repair",
          description:
            "Our technicians carry out the repair using quality parts and proper methods.",
        },
        {
          step: 4,
          title: "Testing and Handover",
          description:
            "We test the appliance to confirm it is working correctly and safely before we leave.",
        },
      ]}
      relatedServices={[
        { title: "Refrigeration Repairs", href: "/refrigeration-repairs", icon: Refrigerator },
        { title: "Electrical Services", href: "/electrical-services", icon: Zap },
        { title: "Property Maintenance", href: "/property-maintenance", icon: Store },
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
            <h2 className="mb-8 text-3xl font-bold">Home Appliance Repairs Across Gauteng</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                When your washing machine stops mid cycle or your oven will not heat, you need a reliable technician fast. <strong>Gauteng Repair Network</strong> repairs the household appliances you depend on for clients across <strong>Pretoria, Johannesburg, Midrand</strong>, and the wider Gauteng region, with honest quotes and quality parts on every job.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Laundry Appliances</h3>
                  <p className="text-sm text-muted-foreground">
                    Washing machines and tumble dryers that will not start, drain, spin, or heat properly.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-bold text-lg mb-2 text-secondary">Kitchen Appliances</h3>
                  <p className="text-sm text-muted-foreground">
                    Ovens, stoves, hobs, dishwashers, and microwaves diagnosed and repaired on site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/FAQPage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-center">Appliance Repair Questions</h2>
            <p className="text-center text-muted-foreground mb-12">
              Answers to the questions we get asked most often about home appliance repairs.
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
