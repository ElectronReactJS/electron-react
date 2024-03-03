// src/pages/users/UserPage.Audit.tsx
import UserViewAudit from './UserView.Audit'
import Page from '../../components/wrap/layouts/Page'
import {Attempt} from './User.types'

const UserPageAudit: React.FC<any> = () => {
  const username = 'JohnDoe'
  const attempts: Attempt[] = [
    {label: 'Expired token', attemptedAt: '10:34:02 9 Jan, 2014', color: '#FFF8DC'},
    {label: 'Wrong password', attemptedAt: '10:35:12 9 Jan, 2014', color: '#FFCCCB'},
    {label: 'Wrong password', attemptedAt: '10:35:16 9 Jan, 2014', color: '#FFCCCB'},
    {label: 'Authenticated', attemptedAt: '10:35:57 9 Jan, 2014', color: '#D4EDDA'}
  ]

  return (
    <Page>
      <UserViewAudit username={username} attempts={attempts} />
    </Page>
  )
}

export default UserPageAudit
