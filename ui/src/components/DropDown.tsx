import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon'
import { useState, useEffect } from 'react'

interface Option {
  value: string
  label: string
}
interface DropDownProps {
  placeHolder: string
  options: Option[]
  onSortChange: (option: string) => void
}

const DropDown: React.FC<DropDownProps> = ({
  placeHolder,
  options,
  onSortChange,
}) => {
  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState<Option | null>(null)

  useEffect(() => {
    const handler = () => setShowMenu(false)

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })
  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label
    }
    return placeHolder
  }

  const onItemClick = (option: Option) => {
    setSelectedValue(option)
    onSortChange(option.value)
  }

  const isSelected = (option: Option) => {
    if (!selectedValue) {
      return false
    }

    return selectedValue.value === option.value
  }
  return (
    <div className="dropDown__container">
      <div onClick={handleInputClick} className="dropDown__input">
        {showMenu && (
          <div className="dropDown__menu">
            {options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={`dropDown__menu--item ${
                  isSelected(option) && 'selected'
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        <div className="dropDown__selectedValue">{getDisplay()}</div>
        <div className="dropDown__tools">
          <div className="dropDown__tool">
            <ArrowDownSLineIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown
