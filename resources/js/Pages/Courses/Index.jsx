import { useState } from 'react'
import { Link } from '@inertiajs/react'
import AppLayout from '@/layouts/AppLayouts'
import { Head } from '@inertiajs/react'
const courses = [
  {
    slug: 'japanese',
    cat: 'language',
    title: 'Japanese language curriculum',
    badge: 'Language',
    badgeColor: 'bg-blue-50 text-blue-800',
    iconBg: 'bg-blue-50',
    iconColor: '#185FA5',
    desc: 'From zero to advanced — comprehensive Japanese language training aligned with JLPT levels.',
    chips: ['N5 → N1', 'Morning & evening batches', 'Certificate issued'],
    modules: [
      'Speaking, listening & reading',
      'Kanji & grammar modules',
      'JLPT exam preparation',
      'Business Japanese (advanced)',
    ],
    footerChip: 'Study abroad track',
  },
  {
    slug: 'ssw',
    cat: 'visa',
    title: 'SSW curriculum',
    badge: 'Visa track',
    badgeColor: 'bg-teal-50 text-teal-800',
    iconBg: 'bg-teal-50',
    iconColor: '#0F6E56',
    desc: 'Specified Skilled Worker programme — Japanese language plus industry skills for the SSW visa.',
    chips: ['Visa support included', 'Industry skills', 'Japan placement'],
    modules: [
      'Japanese language (N4 target)',
      'Sector skills: care, food, construction',
      'SSW exam preparation',
      'Pre-departure orientation',
    ],
    footerChip: 'SSW visa',
  },
  {
    slug: 'titp',
    cat: 'visa',
    title: 'TITP curriculum',
    badge: 'Visa track',
    badgeColor: 'bg-amber-50 text-amber-800',
    iconBg: 'bg-amber-50',
    iconColor: '#854F0B',
    desc: 'Technical Intern Training Programme — language plus technical competency for TITP candidates.',
    chips: ['TITP visa', 'Technical skills', '3–5 year track'],
    modules: [
      'Japanese language (N5/N4)',
      'Technical skills by sector',
      'Japanese workplace culture',
      'TITP exam & documentation',
    ],
    footerChip: 'Intern track',
  },
  {
    slug: 'internship',
    cat: 'internship',
    title: 'Internship curriculum',
    badge: 'Internship',
    badgeColor: 'bg-red-50 text-red-800',
    iconBg: 'bg-red-50',
    iconColor: '#993C1D',
    desc: 'Hotel Management, Medical/Healthcare and general internship tracks with language preparation.',
    chips: ['Hotel management', 'Medical / healthcare', 'General track'],
    modules: [
      'Japanese language (course-specific)',
      'Hotel Mgmt: hospitality & service',
      'Medical: terminology & care skills',
      'General: workplace readiness',
    ],
    footerChip: '3 tracks',
  },
]

const filters = [
  { label: 'All programmes', value: 'all' },
  { label: 'Language',       value: 'language' },
  { label: 'Visa tracks',    value: 'visa' },
  { label: 'Internship',     value: 'internship' },
]

export default function CoursesIndex() {
  const [active, setActive] = useState('all')

  const visible = courses.filter(c => active === 'all' || c.cat === active)

  return (
    <AppLayout>
      {/* Page hero */}
      <Head title="Courses" />
      <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-400 mb-2">Home › Courses</p>
          <h1 className="text-2xl font-medium mb-2">Our programmes</h1>
          <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
            All programmes are fully licensed and taught by experienced instructors.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`text-xs font-medium px-4 py-1.5 rounded-full border transition-all ${
                  active === f.value
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'border-gray-200 text-gray-500 bg-white hover:border-gray-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course cards */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-4">
          {visible.map(course => (
            <div key={course.slug} className="border border-gray-100 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${course.iconBg} flex items-center justify-center`}>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill={course.iconColor}>
                      <path d="M3 4h14v2H3zm0 5h9v2H3zm0 5h6v2H3z"/>
                    </svg>
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-base font-medium mb-1.5">{course.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{course.desc}</p>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex gap-1.5 flex-wrap">
                  {course.chips.map(chip => (
                    <span key={chip} className="text-[11px] text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1">
                      {chip}
                    </span>
                  ))}
                </div>
                <ul className="flex flex-col gap-1.5">
                  {course.modules.map(m => (
                    <li key={m} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <Link href={`/courses/${course.slug}`} className="text-xs font-medium text-blue-700 hover:underline">
                    View curriculum →
                  </Link>
                  <span className="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1">
                    {course.footerChip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA band */}
      <div className="border-t border-gray-100 bg-gray-50 px-6 py-8 mt-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
          <div>
            <h3 className="text-base font-medium mb-1">Not sure which programme fits you?</h3>
            <p className="text-sm text-gray-500">Our counsellors will help — WhatsApp available for students only.</p>
          </div>
            <a
            href="https://wa.me/9779805682958"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-5 py-2.5 rounded-lg shrink-0"
            >
            WhatsApp us
          </a>
        </div>
      </div>
    </AppLayout>
  )
}