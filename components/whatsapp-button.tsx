"use client"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function WhatsAppButton({
  phoneNumber = "27703096749",
  message = "Hi Cold Fix Services, I'd like to get a quote for a repair.",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18395132504/VSWzCMGu--UcENjkvcNE",
        value: 1.0,
        currency: "ZAR",
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Chat with Cold Fix Services on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-110 hover:bg-[#25D366]/90 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7 md:h-8 md:w-8" aria-hidden="true" />
    </a>
  )
}
