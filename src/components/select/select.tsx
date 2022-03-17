import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

import { cls } from '@utils/helpers/cls'

export type Option = {
  value: string
  label: string
}

type SelectProps = {
  options: Option[]
  onValueChange: (value: string) => void
} & InputHTMLAttributes<HTMLSelectElement>

export const Select = ({
  options = [],
  onValueChange,
  ...props
}: SelectProps) => {
  const [selected, setSelected] = useState<Option>(options[0])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target

    setSelected(options.find((option) => option.value === value) || options[0])
    onValueChange(value)
  }

  return (
    <select
      name="animals"
      onChange={handleChange}
      value={selected.value}
      {...props}
      className={cls(
        `text-gray-700 border-gray-50 bg-white focus:ring-primary-500 focus:border-primary-500 block w-40 rounded-md border py-2 px-3 shadow focus:outline-none  md:w-52 ${props.className}`
      )}
    >
      {options?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
