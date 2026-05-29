import SharePicDialog from './SharePicDialog'
import StreakShareDialog from './StreakShareDialog'
import { recordShareAction } from '@/utils'
import { LucideShare2, Share } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconShare2 from '~icons/tabler/share-2'

export default function ShareButton() {
  const [isShowSharePanel, setIsShowSharePanel] = useState(false)
  const { t } = useTranslation()
  // const [isShowStreakShare, setIsShowStreakShare] = useState(false)

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
      {/* <StreakShareDialog  /> */}

      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-sans text-sm font-bold duration-300 hover:bg-emerald-600 hover:text-emerald-200"
        onClick={onClickShare}
        title={t('sharePic.share_title')}
      >
        {/* <IconShare2 /> */}
        {t('sharePic.share_button')}
        <LucideShare2 />
      </button>
      <button
        type="button"
        className="cursor-pointer text-xl text-gray-500 hover:text-indigo-400"
        // onClick={onClickStreakShare}
        title="分享你的连续天数"
      >
        <IconShare2 />
      </button>
    </>
  )
}
