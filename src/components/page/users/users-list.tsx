'use client'
import React from 'react'
import { useInfinityUserList } from '@/hooks/api/user.hook'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FrownIcon, RefreshCwIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SIZE = 10

const UsersList = () => {
  const [host, setHost] = React.useState<'faker' | 'tech-test.raintor.com'>('faker')
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isPending,
    error,
    refetch,
  } = useInfinityUserList(host)
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

  console.log({ error, isLoading, isPending, isFetching })

  return (
    <div className="space-px">
      <div className="flex gap-3 mb-4">
        <button
          data-selected={host === 'faker'}
          className="border border-border cursor-pointer rounded-full px-4 pt-2 pb-1.5 hover:bg-primary hover:text-black hover:border-black transition-colors data-[selected=true]:bg-primary data-[selected=true]:text-black data-[selected=true]:border-black"
          onClick={() => setHost('faker')}
        >
          Faker
        </button>
        <button
          data-selected={host === 'tech-test.raintor.com'}
          className="border border-border cursor-pointer rounded-full px-4 pt-2 pb-1.5 hover:bg-primary hover:text-black hover:border-black transition-colors data-[selected=true]:bg-primary data-[selected=true]:text-black data-[selected=true]:border-black"
          onClick={() => setHost('tech-test.raintor.com')}
        >
          tech-test.raintor.com
        </button>
      </div>
      {error ? (
        <div className="border border-red-500/30 rounded-[52px] p-4 lg:p-8 xl:p-10 flex flex-col gap-8 justify-between items-center">
          <FrownIcon size={100} className="text-red-500" />
          <p className="text-red-500 heading-2 font-bold">{'Something went wrong!'}</p>
          <Button startIcon={RefreshCwIcon} onClick={() => refetch()}>
            Retry
          </Button>
        </div>
      ) : (
        <ul className="flex flex-col gap-2 ">
          {data?.pages?.map((page, index) => {
            return (
              <React.Fragment key={index}>
                {page.users.map((user, j) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: j * 0.1 }}
                    exit={{ opacity: 0 }}
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

                    {/* <div>
                  <IconButton
                    aria-label="See Location On Map"
                    size="small"
                    onClick={() =>
                      setLocation?.({
                        lat: Number(user.location.lat),
                        lon: Number(user.location.lon),
                        userName: user.email,
                      })
                    }
                  >
                    <MapPinIcon />
                  </IconButton>
                </div> */}
                  </motion.li>
                ))}
              </React.Fragment>
            )
          })}
          <div ref={observerRef} />
        </ul>
      )}
      <ul className="flex flex-col gap-2 ">
        {(isFetching || isLoading || isPending) &&
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
    </div>
  )
}

export default UsersList
