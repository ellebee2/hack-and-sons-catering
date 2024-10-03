export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">Hack & Sons</h2>
            <p className="text-xs">Personal Chef | Private Catering</p>
          </div>
          <p className="text-sm leading-loose text-center">
            © 2024 Hack & Sons Private Catering. Crafting culinary memories.
          </p>
        </div>
      </div>
    </footer>
  )
}