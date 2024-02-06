import s from './content.module.sass'

const ContentSection = () => {
    return (
        <div className={s.contentSection}>
            <h4 className={s.brandText}>SNEAKER COMPANY</h4>
            <h1 className={s.label}>Fall Limited Edition Sneakers</h1>
            <p className={s.desc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        </div>
    )
}

export default ContentSection