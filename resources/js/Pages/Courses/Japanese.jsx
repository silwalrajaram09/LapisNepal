import { Link, Head } from '@inertiajs/react'
import AppLayout from '@/layouts/AppLayouts'

export default function Japanese() {
  return (
    <AppLayout>
      <Head title="Japanese Language Curriculum" />

      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">
            Home › <Link href="/courses" className="hover:text-gray-600">Courses</Link> › 
            <span className="text-gray-600"> Japanese Language</span>
          </p>

          <h1 className="text-2xl font-medium mb-2">
            Japanese Language Curriculum
          </h1>

          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            From beginner to advanced levels, this course prepares students for daily life, academic success, and professional opportunities in Japan.
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {['N5 → N1', 'JLPT Preparation', 'Certificate included'].map(c => (
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
            <h2 className="text-base font-medium mb-4">Curriculum modules</h2>

            <ul className="flex flex-col gap-3">
              {[
                {
                  title: 'Beginner (N5)',
                  desc: 'Basic conversation, hiragana, katakana, and simple kanji'
                },
                {
                  title: 'Elementary (N4)',
                  desc: 'Daily conversation, grammar, and kanji'
                },
                {
                  title: 'Intermediate (N3)',
                  desc: 'Business communication and reading comprehension'
                },
                {
                  title: 'Advanced (N2-N1)',
                  desc: 'Professional Japanese and academic writing'
                }
              ].map((mod, i) => (
                <li key={i} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-800 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
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
                <div className="text-sm">6 months – 2 years</div>
              </div>

              <div className="mb-2">
                <div className="text-[11px] text-gray-400">Level</div>
                <div className="text-sm">Beginner to Advanced</div>
              </div>

              <div>
                <div className="text-[11px] text-gray-400">Certification</div>
                <div className="text-sm">JLPT Preparation Included</div>
              </div>
            </div>

            {/* Related */}
            <div className="border border-gray-100 rounded-xl p-4">
              <div className="text-xs font-medium text-gray-400 mb-3">
                Related programmes
              </div>

              {['SSW curriculum','TITP curriculum','Internship curriculum'].map(r => (
                <Link key={r} href="/courses" className="block text-xs text-gray-500 hover:text-gray-800 border border-gray-100 rounded-lg px-3 py-2 mb-2 hover:border-gray-300 transition-colors">
                  {r} →
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="text-sm font-medium text-blue-900 mb-1">
                Apply for this programme
              </div>
              <div className="text-xs text-blue-600 mb-3">
                WhatsApp or fill the contact form
              </div>

              <Link href="/contact" className="block text-center bg-blue-700 text-white text-sm font-medium py-2 rounded-lg">
                Apply now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  )
}