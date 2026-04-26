import { Link } from '@inertiajs/react'
import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
export default function Home({ stats }) {
  return (
    <AppLayout>

      {/* Hero */}
     
        <Head title="Home" />
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
            Nepal's trusted Japan gateway
          </span>
          <h1 className="text-4xl font-medium leading-snug mb-4">
            Your pathway to <span className="text-blue-700">Japan</span> starts here
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Official study abroad consultancy licensed by Nepal's Ministry of Education
            and Japan. Offering Japanese language, SSW, TITP and internship programmes.
          </p>
          <div className="flex gap-3">
            <Link href="/courses" className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium">
              Explore courses
            </Link>
            <Link href="/contact" className="border border-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-sm">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: '500+', label: 'Students placed in Japan' },
              { num: '4',    label: 'Programmes offered' },
              { num: '10+',  label: 'Years of experience' },
              { num: '3',    label: 'Official licenses' },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-lg p-3">
                <div className="text-2xl font-medium text-blue-700">{s.num}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-3 flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-700 rounded-md flex items-center justify-center shrink-0">
              <span className="text-white text-xs">★</span>
            </div>
            <div>
              <div className="text-sm font-medium text-blue-900">MoE licensed — Nepal &amp; Japan</div>
              <div className="text-xs text-blue-600">Sandee branch + Japan branch</div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center">WhatsApp: 9805682958 · Students only</p>
        </div>
      </section>

      {/* Courses */}
      <section className="border-t border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-xl font-medium">Our programmes</h2>
            <Link href="/courses" className="text-sm text-blue-700">View all →</Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: 'Japanese language', desc: 'Foundation to advanced Japanese.', tag: 'N5 → N1', color: 'blue' },
              { name: 'SSW curriculum',    desc: 'Specified skilled worker track.',  tag: 'Visa support', color: 'teal' },
              { name: 'TITP curriculum',   desc: 'Technical intern training.',        tag: 'Internship',   color: 'amber' },
              { name: 'Internship',        desc: 'Hotel, medical & general tracks.', tag: '3 tracks',     color: 'red' },
            ].map(c => (
              <Link key={c.name} href="/courses" className="border border-gray-100 rounded-xl p-4 hover:border-gray-300 transition-colors block">
                <div className="text-sm font-medium mb-1">{c.name}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{c.desc}</div>
                <span className="inline-block mt-3 text-xs font-medium bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full">{c.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 border-y border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-medium mb-8">Why choose us</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n:'01', t:'Dual MoE licensed',    d:'Licensed by MoE in both Nepal and Japan, including the branch-in-Nepal licence.' },
              { n:'02', t:'Japan partnerships',   d:'Direct agreements under Meros, Project, SSW and TITP frameworks.' },
              { n:'03', t:'Experienced staff',    d:'Language instruction, visa counselling and post-arrival support.' },
            ].map(w => (
              <div key={w.n} className="bg-white border border-gray-100 rounded-xl p-5">
                <div className="text-2xl font-medium text-blue-700 mb-1">{w.n}</div>
                <div className="text-sm font-medium mb-2">{w.t}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </AppLayout>
  )
}