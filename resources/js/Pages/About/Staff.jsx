import AppLayout from '@/layouts/AppLayouts'

const staff = [
  { initials:'S', name:'Sandee',          role:'Founder & Director',    bio:'Leads the consultancy with 10+ years of Japan-Nepal educational partnerships.', color:'bg-blue-50 text-blue-800' },
  { initials:'T', name:'Tanaka Sensei',   role:'Head Japanese Instructor', bio:'Native Japanese instructor with JLPT N1 teaching expertise across all levels.', color:'bg-teal-50 text-teal-800' },
  { initials:'R', name:'Ramesh Sharma',   role:'Visa Counsellor',       bio:'Specialist in SSW and TITP documentation, visa processing and pre-departure guidance.', color:'bg-amber-50 text-amber-800' },
  { initials:'P', name:'Priya Adhikari',  role:'Student Coordinator',   bio:'Manages student intake, class schedules and post-arrival Japan support.', color:'bg-red-50 text-red-800' },
  { initials:'K', name:'Keiko Yamamoto',  role:'Japan Liaison Officer',  bio:'Based in Japan — coordinates with partner organisations for placements and internships.', color:'bg-teal-50 text-teal-800' },
  { initials:'B', name:'Bijay Karki',     role:'Administrative Officer', bio:'Handles finance, documentation and office operations at the Kathmandu branch.', color:'bg-purple-50 text-purple-800' },
]

const structure = [
  { title:'Director',          name:'Sandee' },
  { title:'Academic head',     name:'Tanaka Sensei' },
  { title:'Visa & counselling',name:'Ramesh Sharma' },
  { title:'Japan liaison',     name:'Keiko Yamamoto' },
]

export default function Staff() {
  return (
    <AppLayout>
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › About us</p>
          <h1 className="text-2xl font-medium mb-2">About us</h1>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Nepal Japan Consultancy is a licensed study abroad and language institute
            connecting Nepali students with opportunities in Japan.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Owner message */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex gap-5 items-start mb-8">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center text-lg font-medium shrink-0">S</div>
          <div>
            <p className="text-sm text-gray-500 italic leading-relaxed">
              "Our mission is to open genuine pathways to Japan for every Nepali student —
              through quality language education, honest counselling and long-term support."
            </p>
            <p className="text-sm font-medium mt-2">Sandee <span className="font-normal text-gray-400">— Founder & Director</span></p>
          </div>
        </div>

        {/* Staff grid */}
        <h2 className="text-base font-medium mb-4">Our team</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {staff.map(s => (
            <div key={s.name} className="border border-gray-100 rounded-xl p-5">
              <div className={`w-11 h-11 rounded-full ${s.color} flex items-center justify-center font-medium text-sm mb-3`}>
                {s.initials}
              </div>
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-xs text-gray-400 mb-2">{s.role}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.bio}</div>
            </div>
          ))}
        </div>

        {/* Admin structure */}
        <h2 className="text-base font-medium mb-4">Administrative structure</h2>
        <div className="grid grid-cols-4 gap-3">
          {structure.map(s => (
            <div key={s.title} className="border border-gray-100 rounded-lg p-3 text-center">
              <div className="text-xs font-medium">{s.title}</div>
              <div className="text-xs text-gray-400 mt-1">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}