import styles from "./Input.module.scss"

const Input = () =>  {
    return (
        <div className={styles.input}>
            <div>
                <img src="/search.svg" alt="search icon" />
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Input