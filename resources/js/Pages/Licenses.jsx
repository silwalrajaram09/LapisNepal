import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
const nepal = [
  { name:'MoE Nepal — Main licence',   detail:'Ministry of Education, Science & Technology, Nepal. Authorises language and study abroad programmes.', badge:'Active', badgeColor:'bg-green-50 text-green-800' },
  { name:'MoE Nepal — Branch licence', detail:'Branch-in-Nepal registration permitting operation of Japanese-affiliated educational programmes.', badge:'Active', badgeColor:'bg-green-50 text-green-800' },
]

const japan = [
  { name:'Japan licence — Meros',   detail:'Licensed partnership with Meros Japan for student placement and language programme accreditation.', badge:'Japan', badgeColor:'bg-amber-50 text-amber-800' },
  { name:'Japan licence — Project', detail:'Project-based partnership framework for collaborative programmes and joint educational initiatives.', badge:'Japan', badgeColor:'bg-amber-50 text-amber-800' },
  { name:'Japan licence — SSW',     detail:'Specified Skilled Worker sending organisation licence. Authorises placement of Nepali SSW candidates.', badge:'SSW visa', badgeColor:'bg-teal-50 text-teal-800' },
  { name:'Japan licence — TITP',    detail:'Technical Intern Training Programme sending organisation covering all TITP sectors.', badge:'TITP visa', badgeColor:'bg-red-50 text-red-800' },
]

function LicCard({ name, detail, badge, badgeColor }) {
  return (
    
    <div className="border border-gray-100 rounded-xl p-4 flex gap-3">
      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 fill-blue-700" viewBox="0 0 20 20"><path d="M10 2L2 7v6l8 5 8-5V7L10 2z"/></svg>
      </div>
      <div>
        <div className="text-sm font-medium mb-1">{name}</div>
        <div className="text-xs text-gray-500 leading-relaxed">{detail}</div>
        <span className={`inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
      </div>
    </div>
  )
}

export default function Licenses() {
  return (
    <AppLayout>
      <Head title="Licences" />
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › Licences</p>
          <h1 className="text-2xl font-medium mb-2">Licences &amp; accreditations</h1>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Fully licensed by Nepal's Ministry of Education and Japanese authorities across all programme tracks.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">Nepal — Ministry of Education</h2>
          <div className="grid grid-cols-2 gap-3">
            {nepal.map(l => <LicCard key={l.name} {...l} />)}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">Japan — Partner licences</h2>
          <div className="grid grid-cols-2 gap-3">
            {japan.map(l => <LicCard key={l.name} {...l} />)}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}