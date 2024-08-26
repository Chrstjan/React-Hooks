import style from "./Modal.module.scss"

export const Modal = ({children, action}) => {

    const handleInnerClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div onClick={action} className={style.overlay}></div>
            <div onClick={handleInnerClick} className={style.modalStyling}>
                {children}
            </div>
        </>
    )
}