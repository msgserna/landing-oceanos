


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



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

/* ------------------------------ IMPACTOS ------------------------------ */

export default function ImpactosSection() {
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


