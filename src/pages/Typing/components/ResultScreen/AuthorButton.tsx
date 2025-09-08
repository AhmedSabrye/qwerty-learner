import sabry from '@/assets/sabry.webp'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useTranslation } from 'react-i18next'

export const AuthorButton = () => {
  const { t } = useTranslation()
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <Avatar className="h-8 w-8 shadow-lg" onClick={() => window.open('https://portok.pages.dev', '_blank')}>
            <AvatarImage src={sabry} alt="Sabry Homepage" />
            <AvatarFallback>Sabry</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent className="cursor-pointer" onClick={() => window.open('https://portok.pages.dev', '_blank')}>
          <p>{t('resultScreen.author')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
