import Head from 'next/head'
 import Image from 'next/image'
 import styles from '../../styles/Home.module.css'

export default function Forturner() {
    return (

        <div className={styles.grid}>
           <div className={styles.card}>
             <Image src="/img10.jpg" width="400" height="380px" />
             <h2>Fortuner</h2>
             <p>Mannul</p>
             <h4>RS 20.00 lakhs onwards</h4>
             </div>
             </div>

    )

}