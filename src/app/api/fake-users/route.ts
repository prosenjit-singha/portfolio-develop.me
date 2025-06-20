import { faker } from '@faker-js/faker'
import { NextRequest, NextResponse } from 'next/server'
import { wait } from '@/libs/utils'

const TOTAL_USERS = 250

export async function GET(req: NextRequest) {
  await wait(2000)
  const { searchParams } = new URL(req.url)
  const take = parseInt(searchParams.get('take') || '10')
  const skip = parseInt(searchParams.get('skip') || '0')

  const users = Array.from({ length: take })
    .map((_, i) => {
      const id = skip + i + 1
      if (id > TOTAL_USERS) return null

      return {
        id,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        university: `${faker.location.city()} ${faker.word.adjective()} University`,
        company: {
          title: faker.person.jobTitle(),
        },
        location: {
          lat: faker.location.latitude(),
          lon: faker.location.longitude(),
        },
      }
    })
    .filter(Boolean)

  return NextResponse.json({
    users,
    total: TOTAL_USERS,
    skip,
    limit: take,
  })
}
