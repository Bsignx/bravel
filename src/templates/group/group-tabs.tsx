import { ReactNode } from 'react'

type GroupTabsProps = {
  activeTab: {
    openTab: number
    setOpenTab: (openTab: number) => void
  }
  tabsTitle: string[]
  children: ReactNode
}

export const GroupTabs = ({
  activeTab: { openTab, setOpenTab },
  tabsTitle = [],
  children,
}: GroupTabsProps) => (
  <>
    <div className="flex w-full max-w-2xl flex-wrap">
      <div className="w-full">
        <ul
          className="mb-0 flex list-none flex-row flex-wrap pb-8"
          role="tablist"
        >
          {tabsTitle.map((title, index) => (
            <li
              key={title}
              className="relative -mb-px mr-4 flex-auto grow-0 text-left last:mr-0"
            >
              {openTab === index + 1 ? (
                <div
                  className="absolute bottom-0 h-0.5 w-full rounded-sm bg-rose500"
                  aria-label="actived tab"
                />
              ) : null}
              <a
                className={'block rounded p-0 text-xl leading-none'}
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(index + 1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative mb-6 flex w-full min-w-0 flex-col break-words">
          <div className="flex-auto">{children}</div>
        </div>
      </div>
    </div>
  </>
)
