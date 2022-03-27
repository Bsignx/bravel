import { Group, Groups, Profile } from '../domain'

const BASE_URL = 'http://localhost:3000'

const getGroups = (): Promise<Groups> =>
  fetch(`${BASE_URL}/groups`).then((resp) => resp.json())

const getGroup = (id: string): Promise<Group> =>
  fetch(`${BASE_URL}/groups/${id}`).then((resp) => resp.json())

const getProfile = (): Promise<Profile> =>
  fetch(`${BASE_URL}/profile`).then((resp) => resp.json())

const getEvents = (): Promise<Profile> =>
  fetch(`${BASE_URL}/events`).then((resp) => resp.json())

const getCategories = (): Promise<Profile> =>
  fetch(`${BASE_URL}/categories`).then((resp) => resp.json())

export { getGroups, getProfile, getEvents, getCategories, getGroup }
