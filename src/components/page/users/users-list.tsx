'use client'

import React from 'react'
import { useInfinityUserList } from '@/hooks/api/user.hook'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { IconButton } from '@/components/ui/button'
import { MapPinIcon } from 'lucide-react'

const SIZE = 10

const UsersList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useInfinityUserList()

  const observerRef = React.useRef<HTMLDivElement>(null)

  // Setup intersection observer
  React.useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchNextPage()
        }
      },
      { threshold: 1 }
    )
    const el = observerRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <ul className="flex flex-col gap-2">
      {data?.pages?.map((page, index) => {
        return (
          <React.Fragment key={index}>
            {page.users.map(user => (
              <li
                key={user.id}
                className="border rounded-lg p-4 border-border flex gap-2 justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={user.image}
                    alt={user.firstName}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                <div>
                  <IconButton aria-label="See Location On Map" size="small">
                    <MapPinIcon />
                  </IconButton>
                </div>
              </li>
            ))}
          </React.Fragment>
        )
      })}
      <div ref={observerRef} />
      {isFetching &&
        Array.from({ length: SIZE }).map((_, index) => (
          <div
            key={index}
            className="h-[82px] w-full rounded-lg border border-border p-4 flex items-center gap-4"
          >
            <Skeleton className="h-full w-[48px] aspect-square rounded-full" />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="h-5 w-full max-w-[100px]" />
              <Skeleton className="h-4 w-full max-w-[250px]" />
            </div>
          </div>
        ))}
    </ul>
  )
}

export default UsersList
