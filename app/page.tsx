'use client'

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Menu, Moon, Sun } from "lucide-react"

/**
 * Landing de contaminación en los océanos
 * Next.js (App Router) + Tailwind + shadcn/ui + next-themes
 * Coloca este archivo como app/page.tsx
 * Asegúrate de envolver tu app con ThemeProvider (next-themes) en app/layout.tsx
 */

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <DatosSection />
      <FuentesSection />
      <ImpactosSection />
      <SolucionesSection />
      <Footer />
    </main>
  )
}

/* ------------------------------ NAVBAR ------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const isDark = resolvedTheme === "dark"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#" className="font-display text-lg font-semibold tracking-tight">
          Océanos
        </Link>

        <nav className="hidden gap-6 md:flex">
          <a href="#datos" className="text-sm text-foreground/80 hover:text-foreground">Datos</a>
          <a href="#fuentes" className="text-sm text-foreground/80 hover:text-foreground">Fuentes</a>
          <a href="#impactos" className="text-sm text-foreground/80 hover:text-foreground">Impactos</a>
          <a href="#soluciones" className="text-sm text-foreground/80 hover:text-foreground">Soluciones</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cambiar tema"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Button asChild size="sm">
            <a href="#accion">Participa</a>
          </Button>
        </div>

        {/* Menú móvil */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Drawer simple */}
      {open && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <a href="#datos" className="text-sm" onClick={() => setOpen(false)}>Datos</a>
            <a href="#fuentes" className="text-sm" onClick={() => setOpen(false)}>Fuentes</a>
            <a href="#impactos" className="text-sm" onClick={() => setOpen(false)}>Impactos</a>
            <a href="#soluciones" className="text-sm" onClick={() => setOpen(false)}>Soluciones</a>
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Cambiar tema"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              <Button asChild size="sm" className="w-fit">
                <a href="#accion" onClick={() => setOpen(false)}>Participa</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden px-6"
    >
      {/* Fondo: póster para precarga */}
      <div className="absolute inset-0 -z-20 bg-[url('/hero-poster.jpg')] bg-cover bg-center" />

      {/* Video */}
      <video
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover sm:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        {/* Ajusta rutas a tus assets */}
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
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#datos">Explorar datos</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
            <a href="#accion">Cómo ayudar</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ DATOS ------------------------------ */
function DatosSection() {
  // Datos de ejemplo: plástico al océano (Mt/año)
  const raw = [
    { year: 2015, plasticMt: 8 },
    { year: 2020, plasticMt: 11 },
    { year: 2024, plasticMt: 13 }, // 11–14 rango; usamos 13 como valor medio ilustrativo
    { year: 2040, plasticMt: 29 }, // proyección
  ]
  const data = useMemo(() => raw.map(d => ({ ...d, label: String(d.year) })), [])

  return (
    <section id="datos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">El problema en cifras</h2>
        <p className="mt-2 max-w-2xl text-foreground/80">
          La mayor parte de la contaminación es invisible: microplásticos y efluentes que degradan el agua.
          Mira estas magnitudes clave y su evolución.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plástico que entra al océano (Mt/año)</CardTitle>
          <CardDescription>Estimaciones históricas y una proyección de riesgo para 2040.</CardDescription>
        </CardHeader>
        <CardContent className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="plasticMt" stroke="#3b82f6" fill="#60a5fa" fillOpacity={0.25} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Datos destacados */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Stat title="≈80% desde tierra" desc="Fuente principal de contaminación marina." />
        <Stat title="1,6 M km²" desc="Superficie de la gran mancha del Pacífico." />
        <Stat title="Microplásticos en humanos" desc="Hallados en sangre y placentas (evidencia emergente)." />
      </div>
    </section>
  )
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="text-xl font-semibold">{title}</div>
      <p className="mt-1 text-sm text-foreground/80">{desc}</p>
    </div>
  )
}

/* ------------------------------ FUENTES ------------------------------ */
function FuentesSection() {
  const items = [
    {
      title: "Plásticos de un solo uso",
      body:
        "Envases, bolsas y botellas que escapan del sistema de residuos. Son la fracción más visible y proliferan por mala gestión.",
    },
    {
      title: "Aguas residuales y agricultura",
      body:
        "Nutrientes (N y P) y efluentes sin tratar que causan eutrofización y pérdida de oxígeno en zonas costeras.",
    },
    {
      title: "Pesca y transporte",
      body:
        "Redes fantasma, pérdidas en el mar, pellets y contenedores extraviados; añaden residuos de forma directa en alta mar.",
    },
    {
      title: "Microplásticos",
      body:
        "Fragmentación de piezas mayores y fibras textiles; son difíciles de capturar y persistentes en la columna de agua.",
    },
  ]

  return (
    <section id="fuentes" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">¿De dónde viene?</h2>
      <p className="mt-2 max-w-2xl text-foreground/80">
        Cuatro grandes fuentes explican la mayor parte del vertido al océano. Reducirlas requiere cambios de producto,
        infraestructura y hábitos.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <Card key={it.title}>
            <CardHeader>
              <CardTitle className="text-xl">{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">{it.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------ IMPACTOS ------------------------------ */
function ImpactosSection() {
  return (
    <section id="impactos" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Impactos</h2>
      <p className="mt-2 max-w-2xl text-foreground/80">
        Naturaleza, economía y salud humana ya muestran señales del impacto. Aplicar el principio de precaución es clave.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <ImpactCard
          title="Ecosistemas"
          bullets={[
            "Ingesta y enredo en fauna marina.",
            "Zonas concentradas de basura flotante.",
            "Especies invasoras transportadas por residuos.",
          ]}
        />
        <ImpactCard
          title="Economía"
          bullets={[
            "Costes al turismo y pesca por playas sucias y artes perdidos.",
            "Daños en embarcaciones y puertos por residuos.",
            "Pérdida de productividad por ecosistemas degradados.",
          ]}
        />
        <ImpactCard
          title="Salud"
          bullets={[
            "Microplásticos detectados en sangre y placentas (evidencia emergente).",
            "Riesgos en estudio: inflamación y estrés oxidativo.",
            "Recomendación: reducir exposición y vertidos.",
          ]}
        />
      </div>
    </section>
  )
}

function ImpactCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc space-y-1 text-sm text-foreground/80">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </CardContent>
    </Card>
  )
}

/* ------------------------------ SOLUCIONES ------------------------------ */
function SolucionesSection() {
  return (
    <section id="soluciones" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-6 flex flex-col gap-1">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Soluciones & Acción</h2>
        <p className="max-w-2xl text-foreground/80">
          Combinar políticas, innovación y hábitos diarios produce resultados medibles en poco tiempo.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Política & Sistemas</CardTitle>
            <CardDescription>Marco regulatorio e infraestructura</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground/80">
            <ul className="list-inside list-disc space-y-1">
              <li>Tratado global sobre plásticos, reducción de plásticos problemáticos.</li>
              <li>Mejoras en gestión de residuos y aguas residuales (captación y reuso).</li>
              <li>Incentivos a envases reutilizables y diseños circulares.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Empresas</CardTitle>
            <CardDescription>Ecodiseño y trazabilidad</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground/80">
            <ul className="list-inside list-disc space-y-1">
              <li>Planes de pérdida cero (pellets) y logística responsable.</li>
              <li>Retorno/reutilización y sustitución de plásticos problemáticos.</li>
              <li>Métricas auditables (ESG) con objetivos claros.</li>
            </ul>
          </CardContent>
        </Card>

        <Card id="accion">
          <CardHeader>
            <CardTitle>Personas</CardTitle>
            <CardDescription>Acciones cotidianas</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-foreground/80">
            <ul className="list-inside list-disc space-y-1">
              <li>Reducir y reutilizar: botella, bolsa y tupper.</li>
              <li>Separar correctamente y participar en limpiezas.</li>
              <li>Elegir textiles que suelten menos microfibras y usar filtros de lavado.</li>
            </ul>
            <Separator className="my-4" />
            <div className="flex flex-wrap gap-3">
              <Button asChild><a href="#datos">Ver datos</a></Button>
              <Button asChild variant="outline"><a href="#home">Volver arriba</a></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-foreground/70">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Océanos. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#datos" className="hover:text-foreground">Datos</a>
            <a href="#fuentes" className="hover:text-foreground">Fuentes</a>
            <a href="#impactos" className="hover:text-foreground">Impactos</a>
            <a href="#soluciones" className="hover:text-foreground">Soluciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
