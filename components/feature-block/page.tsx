'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function FeatureBlockOcean() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:gap-12">
      {/* Imagen (light/dark) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
        <Image
          src="/images/fondo.png"
          alt="Desembocadura limpia, vegetación y agua clara"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </div>

      {/* Texto */}
      <div>
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
          Prevención en origen
        </p>
        <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Detén la contaminación antes de que llegue al mar
        </h3>
        <p className="mt-3 text-base text-foreground/80">
          El 80% de los residuos marinos proviene de tierra. Mejorar la gestión de residuos,
          el saneamiento y el diseño de productos evita que plásticos y efluentes alcancen ríos y costas.
          La prevención en origen es la forma más rápida y costo-efectiva de reducir la carga contaminante.
        </p>

        <ul className="mt-5 list-inside list-disc space-y-1 text-sm text-foreground/80">
          <li>Envases reutilizables y rellenables en comercios</li>
          <li>Saneamiento y tratamiento terciario en ciudades</li>
          <li>Filtros de microfibras en lavadoras y lavanderías</li>
          <li>Planes de pérdida cero para pellets plásticos</li>
        </ul>

        <div className="mt-6">
          <Button asChild>
            <a href="#soluciones">Cómo empezar</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
