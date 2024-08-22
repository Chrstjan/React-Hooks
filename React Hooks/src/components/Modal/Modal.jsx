import style from "./Modal.module.scss"

export const Modal = ({children}) => {
    return (
        <>
            <div className={style.modalStyling}>
                {children}
            </div>
        </>
    )
}