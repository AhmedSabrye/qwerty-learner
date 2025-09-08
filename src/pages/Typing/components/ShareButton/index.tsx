import { LucideShare2, Share } from 'lucide-react'
import SharePicDialog from './SharePicDialog'
import { recordShareAction } from '@/utils'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconShare2 from '~icons/tabler/share-2'

export default function ShareButton() {
  const [isShowSharePanel, setIsShowSharePanel] = useState(false)
  const { t } = useTranslation()

  const randomChoose = useMemo(
    () => ({
      picRandom: Math.random(),
      promoteRandom: Math.random(),
    }),
    [],
  )

  const onClickShare = useCallback(() => {
    recordShareAction('open')
    setIsShowSharePanel(true)
  }, [])

  return (
    <>
      {isShowSharePanel && <SharePicDialog showState={isShowSharePanel} setShowState={setIsShowSharePanel} randomChoose={randomChoose} />}

      <button
        type="button"
        className="cursor-pointer py-2 px-4 font-bold font-sans hover:text-emerald-200 hover:bg-emerald-600 bg-emerald-500 duration-300 rounded-lg text-sm inline-flex items-center gap-2"
        onClick={onClickShare}
        title={t('sharePic.share_title')}
      >
        {/* <IconShare2 /> */}
        {t('sharePic.share_button')}
        <LucideShare2/>
      </button>
    </>
  )
}
