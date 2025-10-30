'use client'

import Navbar from '@/components/navbar/page'
import Hero from '@/components/hero/page'
import DatosSection from '@/components/datos/page'
import FuentesSection from '@/components/fuentes/page'
import ImpactosSection from '@/components/impacto/page'
import SolucionesSection from '@/components/soluciones/page'
import FeatureBlockOcean from '@/components/feature-block/page'
import Footer from '@/components/footer/page'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <DatosSection />
      <FeatureBlockOcean />
      <FuentesSection />
      <ImpactosSection />
      <SolucionesSection />
      <Footer />
    </main>
  )
}
