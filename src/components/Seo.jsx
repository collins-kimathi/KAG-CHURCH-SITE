import { useEffect } from 'react'
import socialPreview from '../../Images/KAG-LOGO.webp'

function ensureMeta(selector, attributes) {
  let node = document.head.querySelector(selector)

  if (!node) {
    node = document.createElement('meta')
    document.head.appendChild(node)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value)
  })

  return node
}

function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | KAG Chuka Church`
    const previewImage = new URL(socialPreview, window.location.href).href

    document.title = fullTitle

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle,
    })

    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })

    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: previewImage,
    })

    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: fullTitle,
    })

    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: previewImage,
    })
  }, [description, title])

  return null
}

export default Seo
