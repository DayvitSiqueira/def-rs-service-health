export default function ServicesTablesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="p-24">
      <div className="flex items-start justify-between w-full mb-6">
        <div className="items-start gap-4">
          <h2 className="text-xl text-gray-700 font-semibold mb-1">Saúde dos serviços</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Acompanhe o status dos serviços nacionalmente oferecidos utilizado pela
            Defensoria Pública.
          </p>
        </div>
      </div>
      {children}
    </main>
  )
}
