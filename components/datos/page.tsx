import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo, useState } from "react";

export default function DatosSection() {
  const raw = [
    { year: 2005, plasticMt: 6.0, projected: false },
    { year: 2006, plasticMt: 6.1, projected: false },
    { year: 2007, plasticMt: 6.3, projected: false },
    { year: 2008, plasticMt: 6.5, projected: false },
    { year: 2009, plasticMt: 6.7, projected: false },
    { year: 2010, plasticMt: 7.0, projected: false },
    { year: 2011, plasticMt: 7.2, projected: false },
    { year: 2012, plasticMt: 7.4, projected: false },
    { year: 2013, plasticMt: 7.6, projected: false },
    { year: 2014, plasticMt: 7.8, projected: false },
    { year: 2015, plasticMt: 8.0, projected: false },
    { year: 2016, plasticMt: 8.3, projected: false },
    { year: 2017, plasticMt: 8.7, projected: false },
    { year: 2018, plasticMt: 9.5, projected: false },
    { year: 2019, plasticMt: 10.2, projected: false },
    { year: 2020, plasticMt: 11.0, projected: false },
    { year: 2021, plasticMt: 11.4, projected: false },
    { year: 2022, plasticMt: 12.0, projected: false },
    { year: 2023, plasticMt: 12.6, projected: false },
    { year: 2024, plasticMt: 13.0, projected: false },
    { year: 2025, plasticMt: 13.4, projected: false },

    // Proyección (ilustrativa)
    { year: 2026, plasticMt: 14.0, projected: true },
    { year: 2027, plasticMt: 14.8, projected: true },
    { year: 2028, plasticMt: 15.7, projected: true },
    { year: 2029, plasticMt: 16.7, projected: true },
    { year: 2030, plasticMt: 17.8, projected: true },
    { year: 2031, plasticMt: 19.0, projected: true },
    { year: 2032, plasticMt: 20.3, projected: true },
    { year: 2033, plasticMt: 21.7, projected: true },
    { year: 2034, plasticMt: 23.2, projected: true },
    { year: 2035, plasticMt: 24.8, projected: true },
    { year: 2036, plasticMt: 26.0, projected: true },
    { year: 2037, plasticMt: 27.0, projected: true },
    { year: 2038, plasticMt: 28.0, projected: true },
    { year: 2039, plasticMt: 28.5, projected: true },
    { year: 2040, plasticMt: 29.0, projected: true },
  ];

  const data = useMemo(
    () => raw.map((d) => ({ ...d, label: String(d.year) })),
    []
  );

  return (
    <section id="datos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          El problema en cifras
        </h2>
        <p className="mt-2 max-w-5xl text-foreground/90">
          La mayor parte de la contaminación es invisible: microplásticos,
          nutrientes de la agricultura y efluentes urbanos que deterioran el
          agua sin que lo percibamos. Estos contaminantes alteran las cadenas
          tróficas, favorecen zonas muertas por falta de oxígeno y se acumulan
          en peces y mariscos que luego consumimos. A esto se suman pérdidas de
          pellets, redes y residuos industriales que intensifican el problema,
          sobre todo en estuarios y costas con mala gestión de residuos. En esta
          sección encontrarás la evolución del problema con datos comparables:
          cuánto plástico entra al océano cada año, qué fuentes aportan más, y
          dónde crecen más rápido los vertidos. Podrás explorar tendencias
          históricas y proyecciones, contrastar indicadores ambientales y
          económicos, y ver qué medidas —desde la reducción de plásticos
          problemáticos hasta mejoras en saneamiento— tienen mayor efecto y
          costo-efectividad.
          <br />
          <br />
          <br />
          <p className="mt-2 text-right italic">
            Lo que no se ve, también contamina.
          </p>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Plástico que entra al océano (Mt/año)</CardTitle>
          <CardDescription>
            Estimaciones históricas y una proyección de riesgo para 2040.
          </CardDescription>
        </CardHeader>
        <CardContent className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={raw}
              margin={{ left: 8, right: 8, top: 8, bottom: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                type="number"
                domain={["dataMin", "dataMax"]}
                tickCount={10}
                tickFormatter={(y) => String(y)}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(y) => `Año ${y}`}
                formatter={(v) => [`${v} Mt`, "Plástico"]}
              />

              {/* Sombreado de la zona proyectada */}
              <ReferenceArea x1={2026} x2={2040} fillOpacity={0.1} />

              <Area
                type="monotone"
                dataKey="plasticMt"
                stroke="#3b82f6"
                fill="#60a5fa"
                fillOpacity={0.25}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Datos destacados */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Stat
          title="≈80% desde tierra"
          desc="Fuente principal de contaminación marina."
        />
        <Stat
          title="1,6 M km²"
          desc="Superficie de la gran mancha del Pacífico."
        />
        <Stat
          title="Microplásticos en humanos"
          desc="Hallados en sangre y placentas (evidencia emergente)."
        />
      </div>
    </section>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-5">
      <div className="text-xl font-semibold">{title}</div>
      <p className="mt-1 text-sm text-foreground/80">{desc}</p>
    </div>
  );
}
