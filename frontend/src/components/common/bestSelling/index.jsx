import React from 'react'
import styles from "./index.module.css"
import RoundCard from '../RoundCard'

const BestSelling = () => {
  const cards = Array.from({length:10}, (_,index) => (<RoundCard key={index} />))
  return (
    <div className={styles.container}>
     {cards}
    
    </div>
  )
}

export default BestSelling