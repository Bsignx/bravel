import { Groups, Profile } from '../domain'

const getGroups = (): Promise<Groups> =>
  fetch('http://localhost:3000/groups').then((resp) => resp.json())

const getProfile = (): Promise<Profile> =>
  fetch('http://localhost:3000/profile').then((resp) => resp.json())

const getEvents = (): Promise<Profile> =>
  fetch('http://localhost:3000/events').then((resp) => resp.json())

const getCategories = (): Promise<Profile> =>
  fetch('http://localhost:3000/events').then((resp) => resp.json())

export { getGroups, getProfile, getEvents, getCategories }
