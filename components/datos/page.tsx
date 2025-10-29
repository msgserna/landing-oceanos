
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMemo, useState } from "react"


export default function DatosSection() {
  
  const raw = [
    { year: 2015, plasticMt: 8 },
    { year: 2020, plasticMt: 11 },
    { year: 2024, plasticMt: 13 },
    { year: 2040, plasticMt: 29 }, 
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