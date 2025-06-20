import { IUsersApiResponse } from '@/interfaces/user.interface'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

export const useInfinityUserList = (host: 'faker' | 'tech-test.raintor.com') => {
  //   const queryClient = useQueryClient()
  const fetchUsers = async ({ skip = 0, take = 10 }: { skip: number; take: number }) => {
    const res = await fetch(
      `https://tech-test.raintor.com/user/GetUsersList?take=${take}&skip=${skip}`
    )
    if (!res.ok) {
      throw await res.json()
    }
    return await res.json()
  }

  const fetchFakeUsers = async ({ skip = 0, take = 10 }: { skip: number; take: number }) => {
    const res = await fetch(`/api/fake-users?take=${take}&skip=${skip}`)
    if (!res.ok) {
      throw await res.json()
    }
    return await res.json()
  }

  return useInfiniteQuery<
    IUsersApiResponse,
    unknown,
    InfiniteData<IUsersApiResponse, number>,
    unknown[],
    { skip: number; take: number }
  >({
    queryKey: ['users', host],
    queryFn: ({ pageParam }) =>
      host === 'faker' ? fetchFakeUsers(pageParam) : fetchUsers(pageParam),
    initialPageParam: { skip: 0, take: 10 },
    getNextPageParam: (lastPage, pages) => {
      const nextSkip = pages.length * 10
      return nextSkip < lastPage.total ? { skip: nextSkip, take: 10 } : undefined
    },
    refetchOnWindowFocus: false,
  })
}
