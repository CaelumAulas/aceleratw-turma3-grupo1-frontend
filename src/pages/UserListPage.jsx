import { Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import { listUser } from 'infraestructure/api/user'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserTable from '../components/UserTable/UserTable'

export default function UserListPage() {
  const [users, setUsers] = useState([])
  const history = useHistory()

  async function callUserList() {
    const response = await listUser()
    setUsers(response.data.content)
  }

  function handleEditing(user) {
    history.push(`/usuario/editar/${user.username}`, { user })
  }

  useEffect(() => {
    callUserList()
  }, [])

  return (
    <Container maxWidth='lg'>
      <PageTitle title='Usuários' />
      <UserTable
        users={users}
        onDeleteHandler={() => {}}
        onEditHandler={handleEditing}
      />
    </Container>
  )
}
