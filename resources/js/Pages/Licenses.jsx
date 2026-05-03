import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'

const nepal = [
  { name: 'MoE Nepal — Main licence',   detail: 'Ministry of Education, Science & Technology, Nepal. Authorises language and study abroad programmes.', badge: 'Active', badgeColor: 'bg-green-50 text-green-800' },
  { name: 'MoE Nepal — Branch licence', detail: 'Branch-in-Nepal registration permitting operation of Japanese-affiliated educational programmes.',       badge: 'Active', badgeColor: 'bg-green-50 text-green-800' },
]
const japan = [
  { name: 'Japan licence — Meros',   detail: 'Licensed partnership with Meros Japan for student placement and language programme accreditation.',           badge: 'Japan',     badgeColor: 'bg-amber-50 text-amber-800' },
  { name: 'Japan licence — Project', detail: 'Project-based partnership framework for collaborative programmes and joint educational initiatives.',          badge: 'Japan',     badgeColor: 'bg-amber-50 text-amber-800' },
  { name: 'Japan licence — SSW',     detail: 'Specified Skilled Worker sending organisation licence. Authorises placement of Nepali SSW candidates.',        badge: 'SSW visa',  badgeColor: 'bg-teal-50 text-teal-800'  },
  { name: 'Japan licence — TITP',    detail: 'Technical Intern Training Programme sending organisation covering all TITP sectors.',                         badge: 'TITP visa', badgeColor: 'bg-red-50 text-red-800'    },
]

// Variants for the staggered grid container
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

// Variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function LicCard({ name, detail, badge, badgeColor }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: '0 6px 24px 0 rgba(0,0,0,0.07)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="border border-gray-100 rounded-xl p-4 flex gap-3 bg-white cursor-default"
    >
      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 fill-blue-700" viewBox="0 0 20 20">
          <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-medium mb-1">{name}</div>
        <div className="text-xs text-gray-500 leading-relaxed">{detail}</div>
        <span className={`inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
    </motion.div>
  )
}

// Reusable animated section
function LicSection({ title, items }) {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <h2 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={gridVariants}
        initial="hidden"
        animate="show"
      >
        {items.map(l => <LicCard key={l.name} {...l} />)}
      </motion.div>
    </motion.div>
  )
}

export default function Licenses() {
  return (
    <AppLayout>
      <Head title="Licences" />

      {/* Hero — fades + slides in */}
      <motion.div
        className="bg-gray-50 border-b border-gray-100 px-6 py-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › Licences</p>
          <h1 className="text-2xl font-medium mb-2">Licences &amp; accreditations</h1>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Fully licensed by Nepal's Ministry of Education and Japanese authorities across all programme tracks.
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <LicSection title="Nepal — Ministry of Education" items={nepal} />
        <LicSection title="Japan — Partner licences"      items={japan} />
      </div>
    </AppLayout>
  )
}