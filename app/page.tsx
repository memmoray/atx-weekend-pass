'use client'

import { useMemo, useState } from 'react'
import { Coffee, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const vibes = [
  { id: 'chill', label: 'Keep it chill', detail: 'Easy does it' },
  { id: 'classic', label: 'Austin classic', detail: 'Best of ATX' },
  { id: 'out', label: 'Go all out', detail: 'No curfew' },
] as const

const itineraries = {
  chill: [
    { time: 'MORNING', clock: '9:30 AM', title: 'Breakfast tacos at Veracruz', detail: 'Two tacos + agua fresca', price: 14, icon: Coffee, color: 'amber' },
    { time: 'AFTERNOON', clock: '2:00 PM', title: 'South Congress stroll', detail: 'Boots, murals + local treats', price: 22, icon: Sun, color: 'mint' },
    { time: 'NIGHT', clock: '8:00 PM', title: 'Two-step at The White Horse', detail: 'Cover + first round', price: 30, icon: Moon, color: 'lilac' },
  ],
  classic: [
    { time: 'MORNING', clock: '9:30 AM', title: 'Breakfast tacos at Veracruz', detail: 'Two tacos + agua fresca', price: 14, icon: Coffee, color: 'amber' },
    { time: 'AFTERNOON', clock: '2:00 PM', title: 'South Congress stroll', detail: 'Boots, murals + local treats', price: 22, icon: Sun, color: 'mint' },
    { time: 'NIGHT', clock: '8:00 PM', title: 'Two-step at The White Horse', detail: 'Cover + first round', price: 30, icon: Moon, color: 'lilac' },
  ],
  out: [
    { time: 'MORNING', clock: '9:30 AM', title: 'Breakfast tacos at Veracruz', detail: 'Two tacos + agua fresca', price: 18, icon: Coffee, color: 'amber' },
    { time: 'AFTERNOON', clock: '2:00 PM', title: 'South Congress stroll', detail: 'Boots, murals + local treats', price: 28, icon: Sun, color: 'mint' },
    { time: 'NIGHT', clock: '8:00 PM', title: 'Two-step at The White Horse', detail: 'Cover + first round', price: 42, icon: Moon, color: 'lilac' },
  ],
} as const

export default function Page() {
  const [vibe, setVibe] = useState<(typeof vibes)[number]['id']>('classic')
  const stops = itineraries[vibe]
  const total = useMemo(() => stops.reduce((sum, stop) => sum + stop.price, 0), [stops])

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7e9] text-[#18221e]">
      <header className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-2 text-[11px] font-extrabold tracking-[-0.02em]">
          <span className="grid size-7 place-items-center rounded-full bg-[#ff5543] text-white">✦</span>
          <span>ATX Weekend<br />Pass</span>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#17221e]">Invite crew <span className="ml-1 rounded-full bg-[#1d2924] px-2 py-1 text-white">↗</span></button>
      </header>

      <div className="mx-auto max-w-[1120px] px-5 pb-14 sm:px-8 lg:px-10">
        <section className="grid items-center gap-8 pb-10 pt-5 lg:grid-cols-[0.85fr_1fr] lg:gap-12 lg:pb-12 lg:pt-8">
          <div>
            <span className="inline-flex rounded-full bg-[#ffd34c] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em]">Made for the group chat</span>
            <h1 className="mt-5 max-w-[470px] font-serif text-[clamp(3.4rem,8vw,5.6rem)] font-black leading-[0.87] tracking-[-0.07em]">Good times,<br /><em className="text-[#f24c39]">zero<br />planning.</em></h1>
            <p className="mt-6 max-w-[400px] text-[15px] leading-6 text-[#53615a]">Rally your favorite people for one unforgettable Saturday in Austin. We&apos;ll handle every stop.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[580px] lg:mx-0">
            <div className="overflow-hidden rounded-[30px] border-[3px] border-[#1d2924] bg-[#5bd6c5] p-2 shadow-[8px_10px_0_#1d2924] rotate-[1.5deg]">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Figma1-pMxU599kyhmh8oroLOd3kg6rBfmKDN.png" alt="Friends enjoying an Austin weekend" className="aspect-[1.6] w-full rounded-[23px] object-cover object-right-top" />
            </div>
            <div className="absolute bottom-[-17px] right-[-2px] rounded-xl border-2 border-[#1d2924] bg-white px-3 py-2 text-[11px] shadow-[3px_4px_0_#1d2924] sm:right-5"><span className="font-black uppercase tracking-[0.1em] text-[#f24c39]">Crew approved</span><br /><strong>4 friends are in</strong></div>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#ded8ce] bg-[#fffdfa] p-4 sm:p-5" aria-labelledby="vibe-heading">
          <div className="mb-3 flex items-center justify-between px-1"><h2 id="vibe-heading" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6f7972]">Pick the group vibe</h2><span className="text-[10px] font-bold text-[#f24c39]">Step 1 of 2</span></div>
          <div className="grid grid-cols-3 gap-2">
            {vibes.map((item) => <button key={item.id} onClick={() => setVibe(item.id)} aria-pressed={vibe === item.id} className={`min-h-[68px] rounded-2xl border px-3 py-3 text-left transition ${vibe === item.id ? 'border-[#1d2924] bg-[#1d2924] text-white shadow-[0_5px_0_#50d5c1]' : 'border-[#d9d1c5] bg-white hover:border-[#1d2924]'}`}><span className="block text-[13px] font-bold">{item.label}</span><span className={`mt-1 block text-[10px] ${vibe === item.id ? 'text-[#b7c1bb]' : 'text-[#818a84]'}`}>{item.detail}</span></button>)}
          </div>
        </section>

        <section className="mt-5 overflow-hidden rounded-[28px] border-2 border-[#1d2924] bg-[#fffdfa] shadow-[8px_9px_0_#1d2924]" aria-labelledby="itinerary-heading">
          <div className="flex items-center justify-between border-b border-[#e2ddd3] px-5 py-5 sm:px-7"><div><span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f24c39]">Saturday</span><h2 id="itinerary-heading" className="mt-1 text-[17px] font-extrabold">Your Austin itinerary</h2></div><span className="rounded-full bg-[#ffd34c] px-3 py-2 text-[11px] font-extrabold">3 stops</span></div>
          <div className="px-5 py-2 sm:px-7">{stops.map((stop, index) => { const Icon = stop.icon; return <div key={stop.time} className={`relative flex items-center gap-4 py-5 ${index < stops.length - 1 ? 'border-b border-[#e5dfd5]' : ''}`}><div className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-xl ${stop.color === 'amber' ? 'bg-[#f2c27b]' : stop.color === 'mint' ? 'bg-[#9bcfc0]' : 'bg-[#b69bd3]'}`}><Icon size={18} strokeWidth={1.8} /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-baseline gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#f24c39]"><span>{stop.time}</span><span className="font-medium tracking-normal text-[#7e8780]">{stop.clock}</span></div><h3 className="mt-1 truncate text-[15px] font-bold">{stop.title}</h3><p className="mt-1 text-[12px] text-[#78837c]">{stop.detail}</p></div><strong className="text-[14px]">${stop.price}</strong></div> })}</div>
          <div className="mx-5 mb-5 flex items-center justify-between rounded-[20px] bg-[#d9f3ee] px-5 py-4 sm:mx-7"><div><p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#33756b]">One price, whole day</p><p className="mt-1 text-[12px] text-[#5d7771]">Reservations and fees included for each guest</p></div><div className="flex items-baseline gap-1"><span className="text-[11px] text-[#5b6f69]">total</span><span className="font-serif text-[35px] font-black tracking-[-0.08em]">${total}</span></div></div>
        </section>

        <Button className="mt-5 h-14 w-full rounded-[17px] border-b-4 border-[#d6930b] bg-[#ffc33d] text-[16px] font-semibold text-[#17221e] shadow-none hover:bg-[#ffd15d]" onClick={() => alert('PayPal checkout is ready to connect.')}>Checkout with <span className="ml-1 text-[21px] font-black text-[#0070ba]">PayPal</span></Button>
        <p className="mt-4 text-center text-[11px] text-[#7e8881]">Plans change. Cancel for free up to 24 hours before.</p>
      </div>
    </main>
  )
}
