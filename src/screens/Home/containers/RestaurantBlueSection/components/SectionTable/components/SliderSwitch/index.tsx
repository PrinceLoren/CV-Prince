import React, { FC, useState } from 'react'
import {
  Backdrop,
  ClickableContainer,
  OptionText,
  SliderContent,
  SlidingBackground,
} from './styled'

interface IOption {
  label: string
  callback: (index: number) => void
}

interface ISlider {
  options: IOption[]
}

export const SliderSwitch: FC<ISlider> = ({ options, ...props }) => {
  const [isSelected, setIsSelected] = useState<IOption>(options[0])
  const [slideTo, setSlideTo] = useState<number>(0)
  return (
    <Backdrop>
      <SliderContent {...props}>
        {options.map((item, index) => (
          <ClickableContainer
            key={item.label}
            onClick={() => {
              setSlideTo(index * 100)
              setIsSelected(item)
              item.callback(index)
            }}
          >
            <OptionText selected={isSelected.label === item.label}>
              {item.label}
            </OptionText>
          </ClickableContainer>
        ))}
        <SlidingBackground slideTo={slideTo} columns={100 / options.length} />
      </SliderContent>
    </Backdrop>
  )
}
