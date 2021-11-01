import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>
    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        label="E-mail"
        initialValue="johndoe@gmail.com"
        disabled
      />
      <TextField
        name="password"
        placeholder="Type your password"
        type="password"
        label="Password"
      />
      <TextField
        name="new_password"
        placeholder="New password"
        type="password"
        label="New Password"
      />
      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
