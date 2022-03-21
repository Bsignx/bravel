import Link from 'next/link'
import { useState } from 'react'

import { Button, TextField, Typography } from '@bsignx/bravel-ui'
import { Search } from '@styled-icons/bootstrap'
import { ChevronDown } from '@styled-icons/bootstrap/ChevronDown'
import { Menu as MenuIcon } from '@styled-icons/heroicons-outline/Menu'

import DropDownMenu from './drop-down-menu'

import { BravelLogo, Container } from '..'

const DROP_DOWN_MENU_ITENS = [
  {
    label: 'Your groups',
    link: '/my-groups',
  },
  {
    label: 'Your events',
    link: '/my-events',
  },
  {
    label: 'View profile',
    link: '/profile',
  },
  {
    label: 'Log out',
    onClick: () => {
      console.log('logout')
    },
  },
]

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container as="header" className="mb-16 pt-4">
      <nav className="flex w-full flex-wrap items-center justify-between py-3 lg:flex-nowrap">
        <div className="relative flex w-full items-center justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link href="/landing">
            <a>
              <BravelLogo variant="dark" />
            </a>
          </Link>
          <button
            className="text-white border-transparent bg-transparent cursor-pointer py-1 text-xl leading-none outline-none hover:opacity-50 hover:transition-opacity focus:outline-none lg:hidden"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon size={36} color="#111827" />
          </button>
        </div>

        <div
          className={
            'w-full items-center lg:flex' + (menuOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="mt-6 flex w-full list-none flex-col place-items-center items-center lg:mt-0 lg:!flex-row lg:place-items-end">
            <li className="lg:mr-14">
              <div className="flex w-80 items-center">
                <TextField
                  placeholder="Search for keywords"
                  inputClassName="!rounded-r-none !leading-5"
                />
                <Button
                  variant="primary"
                  className="!rounded-l-none !bg-gray700 "
                  icon={<Search size={20} color="#F9FAFB" />}
                />
              </div>
            </li>
            <li className="mb-4 mt-4 w-56 lg:mr-28 lg:mt-0 lg:mb-0">
              <Link href="/">
                <a>
                  <Typography
                    variant="body2"
                    className="font-medium hover:opacity-50 hover:transition-opacity"
                    color="dark"
                  >
                    Start a new group - free!
                  </Typography>
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <img
                src="https://avatars.githubusercontent.com/u/52089507?v=4"
                className="mr-4 w-9 rounded-full"
                alt="Avatar"
              />
              <DropDownMenu
                icon={
                  <ChevronDown
                    size={24}
                    color="#374151"
                    className="hover:opacity-50 hover:transition-opacity"
                  />
                }
                items={DROP_DOWN_MENU_ITENS}
              />
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  )
}
