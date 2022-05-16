import Link from 'next/link'
import { useRouter } from 'next/router'

import { Typography, Select } from '@bsignx/bravel-ui'
import { Groups } from '@domain/index'
import { BookmarkStar } from '@styled-icons/bootstrap/BookmarkStar'
import { Share } from '@styled-icons/fluentui-system-regular/Share'

const DISTANCE_OPTIONS = [
  { value: '', label: 'Select a distance' },
  { value: 'all', label: 'All' },
  { value: '1 km', label: '1 km' },
  { value: '5 km', label: '5 km' },
  { value: '10 km', label: '10 km' },
  { value: '20 km', label: '20 km' },
  { value: '50 km', label: '50 km' },
  { value: '100 km', label: '100 km' },
]
const CATEGORIES_OPTIONS = [
  { value: '', label: 'Select a category' },
  { value: 'all', label: 'All' },
  { value: 'basketball', label: 'Basketball' },
  { value: 'soccer', label: 'Soccer' },
  { value: 'volleyball', label: 'Volleyball' },
  { value: 'rugby', label: 'Rugby' },
  { value: 'esports', label: 'Esports' },
  { value: 'mma', label: 'MMA' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'running', label: 'Running' },
  { value: 'golf', label: 'Golf' },
  { value: 'bike', label: 'Bike' },
  { value: 'yoga', label: 'Yoga' },
  { value: 'skateboard', label: 'Skateboard' },
]
const SORT_OPTIONS = [
  { value: '', label: 'Select a type sort' },
  { value: 'distance', label: 'Distance' },
  { value: 'name', label: 'Name' },
  { value: 'members_number', label: 'Members' },
  { value: 'created_at', label: 'Created' },
]

type GroupsContentProps = {
  groups: Groups
}

export const GroupsContent = ({ groups }: GroupsContentProps) => {
  const { push } = useRouter()

  const handleChangeCategory = (category: string) => {
    push(`/discover?category=${category}`)
  }

  const handleChangeDistance = (distance: string) => {
    push(`/discover?distance=${distance}`)
  }

  const handleChangeSort = (sort: string) => {
    push(`/discover?sort=${sort}`)
  }

  return (
    <>
      <Typography variant="body2">
        Suggested Groups near Barretos, BR
      </Typography>

      <div className="mt-6 flex flex-wrap">
        <Select
          options={DISTANCE_OPTIONS}
          onValueChange={handleChangeDistance}
          className="mt-4 mr-6 lg:mt-0"
        />
        <Select
          options={CATEGORIES_OPTIONS}
          onValueChange={handleChangeCategory}
          className="mt-4 md:mr-6 lg:mt-0"
        />
        <Select
          options={SORT_OPTIONS}
          onValueChange={handleChangeSort}
          className="mt-4 lg:mt-0"
        />
      </div>
      {groups.length > 0 ? (
        <ul className="mt-12">
          {groups.map(
            ({
              category,
              image_url,
              description,
              distance,
              id,
              name,
              members_number,
              location,
            }) => (
              <li key={id} className="mb-6">
                <div className="mb-6 flex items-end justify-between">
                  <Link href={`/group/${id}`}>
                    <a className="flex">
                      <div className="h-20 max-w-[120px] overflow-hidden rounded md:h-40 md:max-w-[256px]">
                        <img src={image_url} alt={name} />
                      </div>

                      <div className="ml-4">
                        <Typography
                          variant="subheading"
                          className="!text-base font-medium text-gray700 md:!text-2xl"
                        >
                          {name}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="mt-2 !text-xs !text-gray500 md:!text-base"
                        >
                          <span className="capitalize">{category}</span>
                          {' - '}
                          {location}
                          {' - '}
                          {distance}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="mt-2 !text-xs !text-gray500 md:!text-base"
                        >
                          {members_number} members
                        </Typography>
                        <Typography
                          variant="body2"
                          className="mt-4 break-all !text-xs !text-rose500 md:!text-base"
                        >
                          {description}
                        </Typography>
                      </div>
                    </a>
                  </Link>
                  <div className="flex items-center">
                    <Share className="mr-2 w-6 md:w-8" />
                    <BookmarkStar className="w-5 md:w-7" color="#F43F5E" />
                  </div>
                </div>
                <div className="h-px w-full bg-stroke" aria-hidden />
              </li>
            )
          )}
        </ul>
      ) : (
        <p className="mt-6">No groups found</p>
      )}
    </>
  )
}
