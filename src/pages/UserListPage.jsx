import { Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import React, { useState } from 'react'
import UserTable from '../components/UserTable/UserTable'

export default function UserListPage() {
  const [users, setUsers] = useState([])
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
