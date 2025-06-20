import { IUsersApiResponse } from '@/interfaces/user.interface'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

export const useInfinityUserList = () => {
  //   const queryClient = useQueryClient()
  //   const fetchUsers = async ({ pageParam = 0 }) => {
  //     const res = await fetch(
  //       `https://tech-test.raintor.com/user/GetUsersList?take=10&skip=${pageParam}`
  //     )
  //     if (!res.ok) {
  //       throw res.json()
  //     }
  //     return res.json()
  //   }

  const fetchFakeUsers = async ({ skip = 0, take = 10 }: { skip: number; take: number }) => {
    const res = await fetch(`/api/fake-users?take=${take}&skip=${skip}`)
    if (!res.ok) {
      throw res.json()
    }
    return res.json()
  }

  return useInfiniteQuery<
    IUsersApiResponse,
    unknown,
    InfiniteData<IUsersApiResponse, number>,
    unknown[],
    { skip: number; take: number }
  >({
    queryKey: ['users'],
    queryFn: ({ pageParam }) =>
      fetchFakeUsers({ skip: pageParam?.skip || 0, take: pageParam?.take || 10 }),
    initialPageParam: { skip: 0, take: 10 },
    getNextPageParam: (lastPage, pages) => {
      const nextSkip = pages.length * 10
      return nextSkip < lastPage.total ? { skip: nextSkip, take: 10 } : undefined
    },
    refetchOnWindowFocus: false,
  })
}
