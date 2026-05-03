import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
import { motion } from 'framer-motion'

const staff = [
  { initials:'S', name:'Sandee',         role:'Founder & Director',      bio:'Leads the consultancy with 10+ years of Japan-Nepal educational partnerships.', color:'bg-blue-50 text-blue-800' },
  { initials:'T', name:'Tanaka Sensei',  role:'Head Japanese Instructor', bio:'Native Japanese instructor with JLPT N1 teaching expertise across all levels.', color:'bg-teal-50 text-teal-800' },
  { initials:'R', name:'Ramesh Sharma',  role:'Visa Counsellor',          bio:'Specialist in SSW and TITP documentation, visa processing and pre-departure guidance.', color:'bg-amber-50 text-amber-800' },
  { initials:'P', name:'Priya Adhikari', role:'Student Coordinator',      bio:'Manages student intake, class schedules and post-arrival Japan support.', color:'bg-red-50 text-red-800' },
  { initials:'K', name:'Keiko Yamamoto', role:'Japan Liaison Officer',    bio:'Based in Japan — coordinates with partner organisations for placements and internships.', color:'bg-teal-50 text-teal-800' },
  { initials:'B', name:'Bijay Karki',    role:'Administrative Officer',   bio:'Handles finance, documentation and office operations at the Kathmandu branch.', color:'bg-purple-50 text-purple-800' },
]

const structure = [
  { title:'Director',           name:'Sandee'       },
  { title:'Academic head',      name:'Tanaka Sensei' },
  { title:'Visa & counselling', name:'Ramesh Sharma' },
  { title:'Japan liaison',      name:'Keiko Yamamoto'},
]

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: 'easeOut' } },
}

const staggerGrid = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export default function Staff() {
  return (
    <AppLayout>
      <Head title="About-us" />

      {/* Hero */}
      <motion.div
        className="bg-gray-50 border-b border-gray-100 px-6 py-10"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › About us</p>
          <h1 className="text-2xl font-medium mb-2">About us</h1>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Nepal Japan Consultancy is a licensed study abroad and language institute
            connecting Nepali students with opportunities in Japan.
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Owner message — slides up on mount */}
        <motion.div
          className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex gap-5 items-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <motion.div
            className="w-14 h-14 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center text-lg font-medium shrink-0"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          >
            S
          </motion.div>
          <div>
            <p className="text-sm text-gray-500 italic leading-relaxed">
              "Our mission is to open genuine pathways to Japan for every Nepali student —
              through quality language education, honest counselling and long-term support."
            </p>
            <p className="text-sm font-medium mt-2">
              Sandee <span className="font-normal text-gray-400">— Founder & Director</span>
            </p>
          </div>
        </motion.div>

        {/* Staff grid */}
        <motion.h2
          className="text-base font-medium mb-4"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          Our team
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 gap-4 mb-8"
          variants={staggerGrid(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {staff.map(s => (
            <motion.div
              key={s.name}
              variants={cardVariant}
              whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.07)', borderColor: '#d1d5db' }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="border border-gray-100 rounded-xl p-5"
            >
              <motion.div
                className={`w-11 h-11 rounded-full ${s.color} flex items-center justify-center font-medium text-sm mb-3`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {s.initials}
              </motion.div>
              <div className="text-sm font-medium">{s.name}</div>
              <div className="text-xs text-gray-400 mb-2">{s.role}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.bio}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Admin structure */}
        <motion.h2
          className="text-base font-medium mb-4"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          Administrative structure
        </motion.h2>

        <motion.div
          className="grid grid-cols-4 gap-3"
          variants={staggerGrid(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {structure.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              whileHover={{ y: -2, boxShadow: '0 4px 14px rgba(0,0,0,0.06)', borderColor: '#d1d5db' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="border border-gray-100 rounded-lg p-3 text-center"
            >
              {/* Connector line between cards (all except last) */}
              <div className="relative">
                {i < structure.length - 1 && (
                  <span className="absolute top-1/2 -right-4 w-3 border-t border-dashed border-gray-200" />
                )}
              </div>
              <div className="text-xs font-medium">{s.title}</div>
              <div className="text-xs text-gray-400 mt-1">{s.name}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AppLayout>
  )
}