import { useState } from 'react'

import { Typography, Select } from '@bsignx/bravel-ui'
import { Groups } from '@domain/index'
import { BookmarkStar } from '@styled-icons/bootstrap/BookmarkStar'
import { Share } from '@styled-icons/fluentui-system-regular/Share'
import Link from 'next/link'

const DAYS_OPTIONS = [
  { value: '', label: 'Select a period' },
  { value: 'all days', label: 'All days' },
  { value: 'weekdays', label: 'Weekdays' },
  { value: 'sunday', label: 'Sunday' },
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' },
]
const DISTANCE_OPTIONS = [
  { value: '', label: 'Select a distance' },
  { value: 'all', label: 'All' },
  { value: '1', label: '1 km' },
  { value: '5', label: '5 km' },
  { value: '10', label: '10 km' },
  { value: '20', label: '20 km' },
  { value: '50', label: '50 km' },
  { value: '100', label: '100 km' },
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
  { value: 'members', label: 'Members' },
  { value: 'created', label: 'Created' },
]
const GROUPS_CONTENT = [
  {
    id: '1',
    name: 'Sport Group',
    description: 'This is a group for sport lovers',
    location: 'Rio de Janeiro, BR',
    category: 'soccer',
    distance: '16 miles',
    membersNumber: 10,
    created: '2020-01-01',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    name: 'Sport Group 2',
    description: 'This is a group for sport lovers',
    location: 'São Paulo, BR',
    category: 'mma',
    distance: '163 miles',
    membersNumber: 12,
    created: '2020-01-01',
    image:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '3',
    name: 'Sport Group 3',
    description: 'This is a group for sport lovers',
    location: 'Barretos, BR',
    category: 'basketball',
    distance: '1 miles',
    membersNumber: 122,
    created: '2021-01-01',
    image:
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]

type GroupsContentProps = {
  groups: Groups
}

export const GroupsContent = ({ groups }: GroupsContentProps) => {
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedDistance, setSelectedDistance] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  return (
    <>
      <Typography variant="body2">
        Suggested Groups near Barretos, BR
      </Typography>

      <div className="mt-6 flex max-w-4xl flex-wrap justify-between">
        <Select
          options={DAYS_OPTIONS}
          onValueChange={(value) => setSelectedDay(value)}
          className="mt-4 lg:mt-0"
        />
        <Select
          options={DISTANCE_OPTIONS}
          onValueChange={(value) => setSelectedDistance(value)}
          className="mt-4 lg:mt-0"
        />
        <Select
          options={CATEGORIES_OPTIONS}
          onValueChange={(value) => setSelectedCategory(value)}
          className="mt-4 lg:mt-0"
        />
        <Select
          options={SORT_OPTIONS}
          onValueChange={(value) => setSelectedSort(value)}
          className="mt-4 lg:mt-0"
        />
      </div>

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
                        className="mt-4 !text-xs !text-rose500  md:!text-base"
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
    </>
  )
}
