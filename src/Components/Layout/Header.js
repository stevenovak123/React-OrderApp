import React, { Fragment } from 'react'
import styles from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>FoodWorld</h1>
             <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg} alt="meals on a table"></img>
            </div>
        </Fragment>
    )
}

export default Header
