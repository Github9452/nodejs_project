
 import Head from 'next/head'
 import Image from 'next/image'
 import styles from '../../styles/Home.module.css'
 import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

 import 'bootstrap/dist/css/bootstrap.min.css'
 
 export default function Home() {
   return (

          




     <div className={styles.container}>
       <Head>
         <title>Create Next App</title>
         <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/favicon.ico" />
       </Head>


       <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled">disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>


    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/img7.avif" layout="responsive" width="100" height="50" 
          alt="First slide"
        />
        <Carousel.Caption>
        <div className={styles.cards}>
        <h3></h3>
             <p></p>
             <h4></h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="/img8.avif" layout="responsive" width="100" height="50" 
          alt="First slide"
        />

        <Carousel.Caption>
        <div className={styles.cards}>
        <h3></h3>
             <p></p>
             <h4></h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="/img3.webp" layout="responsive" width="100" height="50" 
          alt="First slide"
        />

        <Carousel.Caption>
        <div className={styles.cards}>
        <h3></h3>
             <p></p>
             <h4></h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src="/img6.avif" layout="responsive" width="100" height="50" 
          alt="First slide"
        />

        <Carousel.Caption>
        <div className={styles.cards}>
        <h3></h3>
             <p></p>
             <h4></h4>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
       <main className={styles.main}>
         <h1 className={styles.title}>
           WELCOME TO CAR BIKE COMPANY
         </h1>
 
         
         <div className={styles.grid}>
           <div className={styles.s}>
             <Image src="/img9.jpg" width="200" height="180px" />
             <h2>Scorpio</h2>
             <p>Automatic</p>
             <h4>RS 20.00 lakhs onwards</h4>
             <div className={styles.details}>
               <a href="/details">View details</a>
             </div>
             </div>
             <div className={styles.s}>
             <Image src="/img10.jpg" width="200" height="180px" />
             <h2>Forturner</h2>
             <p>Manual</p>
             <h4>RS 25.00 lakhs onwards</h4>
             <div className={styles.details}>
               <a href="#">View details</a>
             </div>
             </div>
             <div className={styles.s}>
             <Image src="/img12.webp"  width="200" height="180px" />
             <h2>xuv700</h2>
             <p>Automatic</p>
             <h4>RS 8.00 lakhs onwards</h4>
             <div className={styles.details}>
               <a href="#">View details</a>
             </div>
             </div>
             <div className={styles.s}>
             <Image src="/img3.webp" width="200" height="180px" />
             <h2>Tata Curvv</h2>
             <p>Automatic</p>
             <h4>RS 20.00 lakhs onwards</h4>
             <div className={styles.details}>
               <a href="#">View details</a>
             </div>
             </div>
             </div>
             </main>
             </div>
   )
 } 