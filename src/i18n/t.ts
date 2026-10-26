import en from './en.json';
import ms from './ms.json';
import site from '../data/site.json';

export type Locale = 'en' | 'ms';
export type Strings = typeof en;

const dict: Record<Locale, Strings> = { en, ms };

export const t = (locale: Locale): Strings => dict[locale];
export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'ms' : 'en');

/** localePath('ms', '/about') -> '/ms/about/'; localePath('en', '/') -> '/' */
export function localePath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

export const hasCredentials = site.credentials.length > 0 || site.partners.length > 0;
export { site };
export const hasProof = hasCredentials || site.milestones.length > 0;
