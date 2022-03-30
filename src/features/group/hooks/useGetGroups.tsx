import { useQuery } from 'react-query'

import { Groups } from '@domain/index'
import { getGroups } from '@services/http-resources'

export const useGetGroups = () =>
  useQuery<Groups>('groups', () => getGroups(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
