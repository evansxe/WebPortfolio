import type { LocalizedText } from '../types'

export function pickLocalized(text: LocalizedText, lang: string): string {
  return lang.startsWith('es') ? text.es : text.en
}
