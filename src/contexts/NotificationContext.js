import { createContext } from 'react'

const NotificationContext = createContext({
  severity: 'info',
  message: '',
  open: false,
  update: () => {},
})

export default NotificationContext
