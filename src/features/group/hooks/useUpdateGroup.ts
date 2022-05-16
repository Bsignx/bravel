import { useMutation } from 'react-query'

import { Group, GroupMember } from '@domain/index'

type UpdateGroupParams = {
  id: string
  groupMembers: GroupMember[]
}

async function updateGroup({
  groupMembers,
  id,
}: UpdateGroupParams): Promise<Group> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groups/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ group_members: groupMembers }),
  })
  return await res.json()
}

export const useUpdateGroup = () => useMutation(updateGroup)
