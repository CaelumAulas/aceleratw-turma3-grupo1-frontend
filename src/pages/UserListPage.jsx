import { Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import { listUser } from 'infraestructure/api/user'
import React, { useEffect, useState } from 'react'
import UserTable from '../components/UserTable/UserTable'

export default function UserListPage() {
  const [users, setUsers] = useState([])

  async function callUserList() {
    const response = await listUser()
    setUsers(response.data)
  }

  useEffect(() => {
    callUserList()
  }, [])

  return (
    <Container maxWidth='lg'>
      <PageTitle title='Usuários disponíveis' />
      <UserTable
        users={users}
        onDeleteHandler={() => {}}
        onEditHandler={() => {}}
      />
    </Container>
  )
}
