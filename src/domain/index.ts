export type Categories = Category[]
export type Groups = Group[]
export type Events = Event[]
export type Profile = {
  id: string
  name: string
  password: string
  email: string
  url_avatar: string
  bio: string
  location: string
  birthday: string
  created_at: string
  groups_as_member: GroupAsMember[]
  groups_as_organizer: GroupAsOrganizer[]
  attended_events: AttendedEvent[]
}

type OrganizedBy = {
  id: string
  name: string
}

export type GroupMember = {
  id: string
  name: string
}

type GroupEvent = {
  id: string
  name: string
}

export type Group = {
  id: string
  name: string
  description: string
  location: string
  category: string
  distance: string
  members_number: number
  created_at: string
  image_url: string
  organized_by: OrganizedBy
  group_members: GroupMember[]
  group_events?: GroupEvent[]
}

type LinkedGroup = {
  id: string
  name: string
}

export type Event = {
  id: string
  name: string
  description: string
  location: string
  category: string
  distance: string
  members_number: number
  created_at: string
  image_url: string
  organized_by: OrganizedBy
  event_attendees: GroupMember[]
  linked_group?: LinkedGroup
}

type Category = {
  id: string
  name: string
}

export type GroupAsMember = {
  id: string
  name: string
}

type GroupAsOrganizer = {
  id: string
  name: string
}

type AttendedEvent = {
  id: string
  name: string
}
