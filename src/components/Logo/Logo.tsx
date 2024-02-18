import logo from '../../assets/logo.svg'

const Logo = ({...other}) => {
    return (
        <img {...other} src={logo}/>
    )
}

export default Logo