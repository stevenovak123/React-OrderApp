import React,{useContext, useState} from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'
import Checkout from './Checkout'

function Cart(props) {
    const cartCtx=useContext(CartContext)
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit]=useState(false)
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems=cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
        }
    const cartItemAddHandler=item=>{
    cartCtx.addItem({...item ,amount:1})
    }
    const submitOrderHandler = async(userData) => {
        setIsSubmitting(true)
        await fetch('https://food-order-e49ac-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items  
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart();
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }
    const modalActions= <div className={styles.actions}>
                <button onClick={props.onClose} className={styles['button--alt']}>
                    Close
                </button>
                {hasItems && <button className={styles.button} onClick={orderHandler }>Order</button>}
            </div>
    
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    const cartModalContent = <React.Fragment>
           {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler }onCancel={props.onClose }/>}
            {!isCheckout && modalActions}
           
    </React.Fragment>
    const IsSubmittingModal=<p>Sending order Data...</p>
    const didSubmitModal =<React.Fragment>
        <p>Recieved your order and will send soon</p>
 <div className={styles.actions}>
                <button onClick={props.onClose} className={styles.button}>
                Close
                </button>
            </div>
    </React.Fragment>
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
         
            {isSubmitting && IsSubmittingModal}
            { !isSubmitting && didSubmit&& didSubmitModal}
            
        </Modal>
    )
}

export default Cart


