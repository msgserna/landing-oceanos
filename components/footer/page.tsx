
'use client'

/* ------------------------------ FOOTER ------------------------------ */
export default function Footer() {
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