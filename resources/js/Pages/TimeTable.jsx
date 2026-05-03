import { useState } from 'react'
import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
import { motion, AnimatePresence } from 'framer-motion'
const classes = [
  { programme:'Japanese language', level:'N5 foundation', days:'Sun–Fri', time:'7:00–9:00 am',    batch:'Morning A', batchColor:'bg-blue-50 text-blue-800',   instructor:'Tanaka Sensei',  status:'Open',   statusColor:'bg-green-50 text-green-800', cat:['morning','japanese'] },
  { programme:'Japanese language', level:'N4 elementary', days:'Sun–Fri', time:'5:00–7:00 pm',    batch:'Evening A', batchColor:'bg-blue-50 text-blue-800',   instructor:'Tanaka Sensei',  status:'Open',   statusColor:'bg-green-50 text-green-800', cat:['evening','japanese'] },
  { programme:'Japanese language', level:'N3 intermediate',days:'Sun–Fri', time:'9:00–11:00 am',   batch:'Morning B', batchColor:'bg-blue-50 text-blue-800',   instructor:'Tanaka Sensei',  status:'Filling',statusColor:'bg-amber-50 text-amber-800',cat:['morning','japanese'] },
  { programme:'SSW curriculum',    level:'N4 + skills',   days:'Sun–Fri', time:'7:00–10:00 am',   batch:'Morning',   batchColor:'bg-teal-50 text-teal-800',   instructor:'Ramesh Sharma',  status:'Open',   statusColor:'bg-green-50 text-green-800', cat:['morning','ssw'] },
  { programme:'SSW curriculum',    level:'N4 + skills',   days:'Sun–Fri', time:'4:00–7:00 pm',    batch:'Evening',   batchColor:'bg-teal-50 text-teal-800',   instructor:'Ramesh Sharma',  status:'Full',   statusColor:'bg-red-50 text-red-800',    cat:['evening','ssw'] },
  { programme:'TITP curriculum',   level:'N5 + technical',days:'Sun–Fri', time:'8:00–11:00 am',   batch:'Morning',   batchColor:'bg-amber-50 text-amber-800', instructor:'Priya Adhikari', status:'Open',   statusColor:'bg-green-50 text-green-800', cat:['morning','titp'] },
  { programme:'Internship',        level:'Hotel Mgmt',    days:'Sat–Sun', time:'10:00 am–1:00 pm',batch:'Weekend',   batchColor:'bg-red-50 text-red-800',     instructor:'Priya Adhikari', status:'Filling',statusColor:'bg-amber-50 text-amber-800',cat:['titp'] },
]

const filters = [
  { label:'All batches', value:'all' },
  { label:'Morning',     value:'morning' },
  { label:'Evening',     value:'evening' },
  { label:'Japanese',    value:'japanese' },
  { label:'SSW',         value:'ssw' },
  { label:'TITP',        value:'titp' },
]

export default function Timetable() {
  const [active, setActive] = useState('all')
  const visible = classes.filter(c => active === 'all' || c.cat.includes(active))

  return (
    <AppLayout>
      <Head title="Timetable" />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 border-b border-gray-100 px-6 py-10"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › Timetable</p>
          <h1 className="text-2xl font-medium mb-2">Classes timetable</h1>
          <p className="text-sm text-gray-500 leading-relaxed">Current batch schedules. New batches start every month.</p>
        </div>
      </motion.div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-5 flex-wrap">
          {filters.map(f => (
            <button key={f.value} onClick={() => setActive(f.value)}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all ${
                active === f.value ? 'bg-blue-700 text-white border-blue-700' : 'border-gray-200 text-gray-500 bg-white hover:border-gray-400'
              }`}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['Programme','Level','Days','Time','Batch','Instructor','Status'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-[11px] font-medium text-gray-400">{h}</th>
                ))}
              </tr>
            </thead>
            <motion.tbody layout>
              <AnimatePresence>
                {visible.map((c, i) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={c.programme + c.time + i}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">{c.programme}</td>
                    <td className="px-4 py-3 text-gray-500">{c.level}</td>
                    <td className="px-4 py-3 text-gray-500">{c.days}</td>
                    <td className="px-4 py-3 text-gray-500">{c.time}</td>
                    <td className="px-4 py-3"><span className={`text-[10px] font-medium px-2 py-1 rounded-full ${c.batchColor}`}>{c.batch}</span></td>
                    <td className="px-4 py-3 text-gray-500">{c.instructor}</td>
                    <td className="px-4 py-3"><span className={`text-[10px] font-medium px-2 py-1 rounded-full ${c.statusColor}`}>{c.status}</span></td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </motion.tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">New batches start every month. Contact us to reserve your seat.</p>
      </div>
    </AppLayout>
  )
}