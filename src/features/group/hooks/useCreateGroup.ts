import { useMutation } from 'react-query'

import { Group } from '@domain/index'
import { v4 as uuidv4 } from 'uuid'

type CreateGroupParams = {
  group: Pick<
    Group,
    'name' | 'description' | 'category' | 'location' | 'image_url'
  >
}

async function createGroup({ group }: CreateGroupParams): Promise<Group> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: uuidv4(),
      distance: '0 km',
      members_number: 1,
      created_at: new Date().toISOString(),
      organized_by: {
        id: '5',
        name: 'João Mariano',
      },
      group_members: [],
      group_events: [],
      ...group,
    }),
  })
  return await res.json()
}

export const useCreateGroup = () => useMutation(createGroup)
