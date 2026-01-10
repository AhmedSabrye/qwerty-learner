import Layout from '../../components/Layout'
import ezbdc from '@/assets/friendlinks/ezbdc.jpg'
import kk from '@/assets/friendlinks/kk.jpg'
import web_worker from '@/assets/friendlinks/web-worker.png'
import type React from 'react'
import { useTranslation } from 'react-i18next'

export const FriendLinks: React.FC = () => {
  const { t } = useTranslation()

  const links = [
    {
      id: 'ezbdc',
      href: 'https://ezbdc.dashu.ai',
      imgSrc: ezbdc,
    },
    {
      id: 'kai',
      href: 'https://kaiyi.cool/',
      imgSrc: kk,
    },
    {
      id: 'webworker',
      href: 'https://www.xiaoyuzhoufm.com/podcast/613753ef23c82a9a1ccfdf35',
      imgSrc: web_worker,
    },
  ]

  return (
    <Layout>
      <div className="flex w-full flex-1 flex-col items-center px-4 pt-20">
        <div className="flex w-full max-w-md flex-grow flex-col items-center">
          <div className="mt-5 text-center text-lg font-bold dark:text-gray-50">{t('friendLinks.title')}</div>
          <div className="links flex w-full flex-col items-center gap-y-8 py-5">
            {links.map((link) => (
              <a
                key={link.id}
                title={t(`friendLinks.links.${link.id}.title`)}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="linkItem flex w-full items-center overflow-hidden dark:text-gray-50"
              >
                <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-gray-200">
                  <img src={link.imgSrc} alt={t(`friendLinks.links.${link.id}.title`)} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="pb-1 text-sm font-bold">{t(`friendLinks.links.${link.id}.title`)}</div>
                  <div className="text-xs text-gray-500">{t(`friendLinks.links.${link.id}.description`)}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-auto pb-5 text-center text-sm text-gray-500">
          {t('friendLinks.contact_text')}
          <a href="mailto:me@kaiyi.cool" className="text-blue-500">
            me@kaiyi.cool
          </a>
        </div>
      </div>
    </Layout>
  )
}
