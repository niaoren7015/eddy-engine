import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        <div className="text-xl font-semibold text-gray-700">Loading Eddy Engine...</div>
        <div className="text-sm text-gray-500">Preparing your search experience</div>
      </div>
    </div>
  )
}
