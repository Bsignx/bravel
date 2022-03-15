import Link from 'next/link'
import { useState } from 'react'

export interface DDMItem {
  icon?: JSX.Element
  label: string
  desc?: string
  link?: string
  onClick?: () => void
}

interface DropDownMenuProps {
  forceOpen?: boolean
  label?: string
  withDivider?: boolean
  icon?: JSX.Element
  items: DDMItem[]
  withBackground?: boolean
}

const DropDownMenu = ({
  items,
  forceOpen,
  icon,
  label,
  withBackground,
  withDivider,
}: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={` ${
            withBackground
              ? 'border-gray-300 bg-white dark:bg-gray-800 border shadow-sm'
              : ''
          } text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 flex w-full items-center justify-center rounded-md py-2 text-sm font-medium focus:opacity-50 focus:outline-none focus:ring-2 focus:ring-gray900 focus:ring-offset-2`}
          id="options-menu"
        >
          {label}

          {icon || (
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
            </svg>
          )}
        </button>
      </div>

      {(forceOpen || isOpen) && (
        <div className="bg-white dark:bg-gray-800 absolute -right-20 mt-2 w-56 origin-top-right rounded-md shadow-lg lg:right-0">
          <div
            className={`py-1 ${withDivider ? 'divide-gray-100 divide-y' : ''}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item) => (
              <div key={item.label}>
                {item.link ? (
                  <Link href={item.link || '#'}>
                    <a
                      className={`${
                        item.icon ? 'flex items-center' : 'block'
                      } text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 block px-4 py-2`}
                      role="menuitem"
                    >
                      {item?.icon}

                      <span className="flex flex-col">
                        <span>{item.label}</span>
                        {item.desc && (
                          <span className="text-gray-400 text-xs">
                            {item.desc}
                          </span>
                        )}
                      </span>
                    </a>
                  </Link>
                ) : (
                  <button
                    className={`${
                      item.icon ? 'flex items-center' : 'block'
                    } text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 block px-4 py-2`}
                    role="menuitem"
                    onClick={item?.onClick}
                  >
                    {item?.icon}

                    <span className="flex flex-col">
                      <span>{item.label}</span>
                      {!!item.desc && (
                        <span className="text-gray-400 text-xs">
                          {item.desc}
                        </span>
                      )}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default DropDownMenu
