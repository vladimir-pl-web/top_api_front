import Auth from '../components/Auth/Auth'
import { IAuthVariant } from '../components/Auth/AuthTypes'
import classes from './Login.module.scss'
import cn from 'classnames'

const LoginPage: React.FC = () => {

 return (

  <div className={cn(classes.page)}>
    <Auth variant={IAuthVariant.Login}/>
  </div>

 )
}
export default LoginPage