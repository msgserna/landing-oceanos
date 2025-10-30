
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

/* ------------------------------ SOLUCIONES ------------------------------ */
export default function SolucionesSection() {
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
