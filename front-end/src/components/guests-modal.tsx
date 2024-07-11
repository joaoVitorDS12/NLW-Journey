import { X } from "lucide-react"
export function GuestsModal() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900">
      <div className="flex items-center justify-between">
        <h2>Selecionar convidados</h2>
        <button type="button">
          <X className="size-5 text-zinc-400" />
        </button>
      </div>
    </div>
  </div>
  )
}