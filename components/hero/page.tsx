
import { Button } from "@/components/ui/button"


export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-6"
    >
      {/* Fondo: póster para precarga */}
      <div className="absolute inset-0 -z-20 bg-[url('/hero-poster.jpg')] bg-cover bg-center" />

      {/* Video */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover hidden sm:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        {/* Ajusta las rutas a tus archivos */}
        <source src="/video/ocean.webm" type="video/webm" />
        <source src="/video/ocean.mp4" type="video/mp4" />
      </video>

      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Océanos vivos, futuro posible.
        </h1>
        <p className="mt-6 text-base text-white/90 sm:text-lg">
          Cada año millones de toneladas de plástico, aguas residuales y químicos llegan al mar.
          Aquí verás el problema en cifras, sus causas y—sobre todo—qué puedes hacer hoy para revertirlo.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 ">
          <Button asChild size="lg" className="text-white border-white/70 hover:bg-white/10" >
            <a href="#datos">Explorar datos</a>
          </Button>
          <Button asChild size="lg" className="text-white border-white/70 hover:bg-white/10">
            <a href="#accion">Cómo ayudar</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
