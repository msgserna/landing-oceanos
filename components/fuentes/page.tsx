



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Reveal from "@/components/animations/reveal"

/* ------------------------------ FUENTES ------------------------------ */
export default function FuentesSection() {
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

      <Reveal className="mt-8 grid gap-4 md:grid-cols-2">
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
      </Reveal>
    </section>
  )
}
