import { Link, Head } from '@inertiajs/react'
import AppLayout from '@/layouts/AppLayouts'

export default function Internship() {
  return (
    <AppLayout>
      <Head title="Internship Programme" />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">
            Home › <Link href="/courses" className="hover:text-gray-600">Courses</Link> › 
            <span className="text-gray-600"> Internship Programme</span>
          </p>

          <h1 className="text-2xl font-medium mb-2">
            Internship Programme
          </h1>

          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            Gain real-world experience in Japanese companies through structured internship opportunities across multiple industries.
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {['1–12 Months', 'Real Experience', 'Career Growth'].map(c => (
              <span key={c} className="text-xs text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[1fr_280px] gap-6">

          {/* Left */}
          <div>
            <h2 className="text-base font-medium mb-4">Programme modules</h2>

            <ul className="flex flex-col gap-3">
              {[
                {
                  title: 'Short-term Internship',
                  desc: '1–3 months programme ideal for students during academic breaks'
                },
                {
                  title: 'Long-term Internship',
                  desc: '6–12 months immersive work experience in Japanese companies'
                },
                {
                  title: 'Corporate Training',
                  desc: 'Customized internship programmes for organizations and groups'
                },
                {
                  title: 'Workplace Experience',
                  desc: 'Hands-on training in real Japanese corporate environments'
                },
                {
                  title: 'Language & Culture',
                  desc: 'Improve Japanese communication and understand work culture'
                }
              ].map((mod, i) => (
                <li key={i} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                  <span className="w-6 h-6 rounded-full bg-red-50 text-red-800 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{mod.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{mod.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-3">

            {/* Details */}
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs font-medium text-gray-400 mb-3">
                Programme details
              </div>

              <div className="mb-2">
                <div className="text-[11px] text-gray-400">Duration</div>
                <div className="text-sm">1–12 months</div>
              </div>

              <div className="mb-2">
                <div className="text-[11px] text-gray-400">Eligibility</div>
                <div className="text-sm">Students & Graduates</div>
              </div>

              <div>
                <div className="text-[11px] text-gray-400">Outcome</div>
                <div className="text-sm">Work Experience in Japan</div>
              </div>
            </div>

            {/* Industries */}
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs font-medium text-gray-400 mb-3">
                Industry sectors
              </div>

              {[
                'Information Technology',
                'Hospitality & Tourism',
                'Business & Marketing',
                'Engineering',
                'Healthcare',
                'Education'
              ].map(ind => (
                <div key={ind} className="text-xs text-gray-500 border border-gray-100 rounded-lg px-3 py-2 mb-2">
                  {ind}
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs font-medium text-gray-400 mb-3">
                Programme benefits
              </div>

              {[
                'Hands-on experience',
                'Japanese language practice',
                'Networking opportunities',
                'Stipend (selected roles)',
                'Housing support',
                'Completion certificate'
              ].map(b => (
                <div key={b} className="text-xs text-gray-500 mb-1">
                  • {b}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <div className="text-sm font-medium text-red-900 mb-1">
                Kickstart your career in Japan
              </div>
              <div className="text-xs text-red-600 mb-3">
                Apply now or contact us for guidance
              </div>

              <Link href="/contact" className="block text-center bg-red-700 text-white text-sm font-medium py-2 rounded-lg">
                Apply now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  )
}