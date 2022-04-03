import { Group, Groups, Profile } from '../domain'

const BASE_URL = 'http://localhost:8080'

const getGroups = ({
  searchText,
  distanceFilter,
  categoryFilter,
  sortFilter,
}: {
  searchText?: string
  distanceFilter?: string
  categoryFilter?: string
  sortFilter?: string
} = {}): Promise<Groups> =>
  fetch(`${BASE_URL}/groups${searchText ? `?q=${searchText}` : ''}${
    distanceFilter ? `?distance=${distanceFilter}` : ''
  }${categoryFilter ? `?category=${categoryFilter}` : ''}${
    sortFilter ? `?_sort=${sortFilter}` : ''
  }
  `).then((resp) => resp.json())

const getGroup = (id: string): Promise<Group> =>
  fetch(`${BASE_URL}/groups/${id}`).then((resp) => resp.json())

export type MyGroups = {
  asOrganizer: Groups
  asMember: Groups
}

const getMyGroups = async (): Promise<MyGroups> => {
  const [groups, profile] = await Promise.all([getGroups(), getProfile()])

  const asOrganizer =
    groups.filter((group) => group.organized_by.id === profile.id) ?? []

  const asMember =
    groups.filter((group) =>
      group.group_members.find((member) => member.id === profile.id)
    ) ?? []

  return { asOrganizer, asMember }
}

const getProfile = (): Promise<Profile> =>
  fetch(`${BASE_URL}/profile`).then((resp) => resp.json())

const getEvents = (): Promise<Profile> =>
  fetch(`${BASE_URL}/events`).then((resp) => resp.json())

const getCategories = (): Promise<Profile> =>
  fetch(`${BASE_URL}/categories`).then((resp) => resp.json())

export {
  getGroups,
  getProfile,
  getEvents,
  getCategories,
  getGroup,
  getMyGroups,
}
