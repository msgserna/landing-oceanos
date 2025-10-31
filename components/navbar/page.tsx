
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import ModeToggle from "../mode-toggle/page"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="#" className="font-display text-lg font-semibold tracking-tight">
          Océanos
        </Link>

        <nav className="hidden gap-6 md:flex">
          <a href="#datos" className="text-sm hover:cyan-500 text-foreground/80 hover:text-foreground">Datos</a>
          <a href="#fuentes" className="text-sm text-foreground/80 hover:text-foreground">Fuentes</a>
          <a href="#impactos" className="text-sm text-foreground/80 hover:text-foreground">Impactos</a>
          <a href="#soluciones" className="text-sm text-foreground/80 hover:text-foreground">Soluciones</a>
        </nav>

        {/* Derecha: aquí va el toggle */}
        <div className="hidden items-center gap-2 md:flex">
          <ModeToggle />                             {/* ← AQUÍ */}
          <Button asChild size="sm"><a href="#accion">Participa</a></Button>
        </div>

        {/* Botón móvil */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            <a href="#datos" onClick={() => setOpen(false)}>Datos</a>
            <a href="#fuentes" onClick={() => setOpen(false)}>Fuentes</a>
            <a href="#impactos" onClick={() => setOpen(false)}>Impactos</a>
            <a href="#soluciones" onClick={() => setOpen(false)}>Soluciones</a>
            <div className="mt-2 flex items-center gap-2">
              <ModeToggle />                         {/* ← y también en el menú móvil si quieres */}
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