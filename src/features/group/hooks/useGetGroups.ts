import { useQuery } from 'react-query'

import { Groups } from '@domain/index'
import { getGroups } from '@services/http-resources'

type UseGetGroups = {
  searchText?: string
}

export const useGetGroups = ({ searchText = '' }: UseGetGroups = {}) =>
  useQuery<Groups>('groups', () => getGroups({ searchText }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
