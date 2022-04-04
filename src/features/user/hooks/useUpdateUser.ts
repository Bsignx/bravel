import { useMutation } from 'react-query'

import { GroupAsMember, Profile } from '@domain/index'

type UpdateUserParams = {
  groupAsMember: GroupAsMember[]
}

function updateUser({ groupAsMember }: UpdateUserParams): Promise<Profile> {
  return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profile`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ groups_as_member: groupAsMember }),
  }).then((res) => res.json())
}

export const useUpdateUser = () => useMutation(updateUser)
