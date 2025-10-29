
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
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

        <div className="hidden md:block">
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

      {open && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <a href="#datos" className="text-sm" onClick={() => setOpen(false)}>Datos</a>
            <a href="#fuentes" className="text-sm" onClick={() => setOpen(false)}>Fuentes</a>
            <a href="#impactos" className="text-sm" onClick={() => setOpen(false)}>Impactos</a>
            <a href="#soluciones" className="text-sm" onClick={() => setOpen(false)}>Soluciones</a>
            <Button asChild size="sm" className="mt-2 w-fit">
              <a href="#accion" onClick={() => setOpen(false)}>Participa</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}