import Hero from './components/Hero'
import EventCarousel from './components/EventCarousel'
import HowToJoin from './components/HowToJoin'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <div className="bg-ink overflow-x-hidden">
      <Hero />
      <EventCarousel />
      <HowToJoin />
      {/* 18+ notice */}
      <p className="text-center font-body text-ice/20 text-xs px-6 py-6 leading-relaxed pb-24">
        18+ sahaja. Judi bertanggungjawab. i88 menyokong perjudian bertanggungjawab.
        Talian MY: 1-800-88-3151
      </p>
      <StickyCTA />
    </div>
  )
}
