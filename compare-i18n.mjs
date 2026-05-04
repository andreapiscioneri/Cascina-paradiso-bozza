import fs from 'fs'
const it = JSON.parse(fs.readFileSync('i18n/locales/it.json', 'utf8'))
const en = JSON.parse(fs.readFileSync('i18n/locales/en.json', 'utf8'))

function walk(obj, prefix = '') {
  const out = []
  if (Array.isArray(obj)) return out
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key
    out.push(path)
    if (value && typeof value === 'object' && !Array.isArray(value)) out.push(...walk(value, path))
    if (Array.isArray(value)) out.push(path)
  }
  return out
}
const itKeys = new Set(walk(it))
const enKeys = new Set(walk(en))
const onlyIt = [...itKeys].filter(k => !enKeys.has(k)).sort()
const onlyEn = [...enKeys].filter(k => !itKeys.has(k)).sort()
console.log('Only IT:', onlyIt.length)
console.log(onlyIt.slice(0, 80).join('\n'))
console.log('Only EN:', onlyEn.length)
console.log(onlyEn.slice(0, 80).join('\n'))
