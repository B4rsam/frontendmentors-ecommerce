import avatar from '../../assets/image-avatar.png'
import s from './avatar.module.sass'

const Avatar = () => {
    return (
       <img className={s.avatar} src={avatar}/>
    )
}

export default Avatar