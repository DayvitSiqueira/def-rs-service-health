export default function ErrorComponent() {
  return (
    <div
      data-testid="error-component"
      className="grid px-4 py-40 bg-white place-content-center"
    >
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ops...
        </p>

        <p className="mt-4 text-gray-500">Erro ao carregar dados</p>
      </div>
    </div>
  )
}
