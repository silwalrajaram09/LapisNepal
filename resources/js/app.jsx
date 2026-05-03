import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import AppLayout from './layouts/AppLayouts'

// Import CSS
import '../css/app.css'

// Import i18n
import './i18n'

// Eager load all pages
const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })

createInertiaApp({
  title: (title) => `${title} - LapisNepal`,
  resolve: (name) => {
    // Try different path variations
    let pagePath = `./Pages/${name}.jsx`
    let page = pages[pagePath]
    
    // If not found, try with .js extension
    if (!page) {
      pagePath = `./Pages/${name}.js`
      page = pages[pagePath]
    }
    
    // If still not found, try with index
    if (!page) {
      pagePath = `./Pages/${name}/index.jsx`
      page = pages[pagePath]
    }
    
    if (!page) {
      // Log available pages for debugging
      console.error('Available pages:', Object.keys(pages))
      throw new Error(`Page not found: ${name}. Tried: ${pagePath}`)
    }
    
    const Page = page.default
    
    // Wrap with layout
    // if (!Page.layout) {
    //   Page.layout = (page) => <AppLayout children={page} />
    // }
    
    return Page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})