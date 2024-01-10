export default function Home() {
  return (
    <div className="p-4">
      <h1 className="flex items-center gap-3 text-5xl font-bold text-violet-500 before:flex before:h-8 before:w-0.5 before:bg-sky-500">
        Home
      </h1>
      <button
        disabled
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 font-medium enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Sign in
      </button>
    </div>
  )
}
