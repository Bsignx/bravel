import { useMutation } from 'react-query'

import { Group, GroupMember } from '@domain/index'

type UpdateGroupParams = {
  id: string
  groupMembers: GroupMember[]
}

function updateGroup({ groupMembers, id }: UpdateGroupParams): Promise<Group> {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groups/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ group_members: groupMembers }),
  }).then((res) => res.json())
}

export const useUpdateGroup = () => useMutation(updateGroup)
