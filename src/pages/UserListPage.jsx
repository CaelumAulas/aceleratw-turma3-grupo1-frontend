import { Container } from '@material-ui/core'
import PageTitle from 'components/PageTitle/PageTitle'
import useLocalStorage from 'hooks/useLocalStorage'
import { deleteUser, listUser } from 'infraestructure/api/user'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import UserTable from '../components/UserTable/UserTable'

export default function UserListPage() {
  const [users, setUsers] = useState([])
  const history = useHistory()
  const [currentUser] = useLocalStorage('user')

  async function callUserList() {
    const response = await listUser()
    setUsers(response.data.content)
  }

  async function callDeleteUser({ username }) {
    await deleteUser(username)
    history.push('/usuarios')
  }

  function handleEditing(user) {
    history.push(`/usuario/editar/${user.username}`, { user })
  }
  function handleDeleting(username) {
    if (currentUser.username === username) {
      alert(
        'Você não pode excluir o usuário que está atualmente logado no sistema.',
      )
      return
    }
    if (
      window.confirm(`Tem certeza que deseja apagar o usuário ${username}?`)
    ) {
      callDeleteUser(username)
    }
  }

  useEffect(() => {
    callUserList()
  }, [])

  return (
    <Container maxWidth='lg'>
      <PageTitle title='Usuários' />
      <UserTable
        users={users}
        onDeleteHandler={handleDeleting}
        onEditHandler={handleEditing}
      />
    </Container>
  )
}
