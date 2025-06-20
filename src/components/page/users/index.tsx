import React from 'react'
import UsersList from './users-list'

const UsersPage = () => {
  return (
    <main>
      <section className="mx-mw p-8">
        <h1 className="text-2xl font-bold text-center mb-8">User List</h1>
        <UsersList />
      </section>
    </main>
  )
}

export default UsersPage
