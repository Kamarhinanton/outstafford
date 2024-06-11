import React, { FC } from 'react'
import { PopupModal } from 'react-calendly'

const rootElement = document.getElementById('calendly')

type CalendlyComponentType = {
  handleClose: () => void
  isOpen: boolean
}

const CalendlyComponent: FC<CalendlyComponentType> = ({
  isOpen,
  handleClose,
}) => {
  return (
    <>
      {rootElement && (
        <PopupModal
          url={'https://calendly.com/outstafford/30-min-intro-meeting'}
          rootElement={rootElement}
          open={isOpen}
          onModalClose={handleClose}
        ></PopupModal>
      )}
    </>
  )
}

export default CalendlyComponent
