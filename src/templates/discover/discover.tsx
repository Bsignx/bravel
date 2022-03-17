import { useState } from 'react'

import { Typography } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { Select } from '@components/select'

import { DiscoverTabs } from './discover-tabs'

const TABS_TITLE = ['Groups', 'Events']
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

export const DiscoverTemplate = () => {
  const [openTab, setOpenTab] = useState(1)
  const [selectedDay, setSelectedDay] = useState('')
  const [selectedDistance, setSelectedDistance] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  return (
    <Layout>
      <Container>
        <DiscoverTabs
          tabsTitle={TABS_TITLE}
          activeTab={{
            openTab,
            setOpenTab,
          }}
        >
          <div>
            <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
              <Typography variant="body2">
                Suggested Groups near Barretos, BR
              </Typography>

              <div className="mt-6 flex flex-wrap justify-between">
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
            </div>
            <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
              <p>todo</p>
            </div>
          </div>
        </DiscoverTabs>
      </Container>
    </Layout>
  )
}
