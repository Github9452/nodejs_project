import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Profile.module.css'
import styles2 from '../../styles/Answers.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

// tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';

// form
import Form from 'react-bootstrap/Form';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function Chat() {

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);


    return (
        
            <div className={styles2.answers}>
                <Container>
                    <Row>
                        <Col md={9} sm={12} xs={12}>
                            <div className={styles2.answers_left}>
                                <div className={styles2.up}>
                                    <p>Baleno  (2015-2022)</p>
                                    <p>Safety</p>
                                </div>
                                <div className={styles.tab_box}>
                                    <h3>Q. How safe is Baleno Zeta on highways?</h3>
                                    <p className={styles.follow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg>
                                            2.1K Views 
                                        <span>|</span> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/></svg>
                                              Add Answer
                                    </p>
                                </div>
                              
                                <div className={styles2.answers_box}>
                                    <p>7 Answers</p>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/img13.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h6 className={styles.prs}><span>Rohith </span> | 3 years ago</h6>
                                                <div class={styles.trapezoid}></div>
                                                <div className={styles.ans_details1}>
                                                    <p><span></span></p>
                                                    <h6>All the variants of baleno comes with standard safety equipments like front dual aisbags abs etc.If you serach on internet there are some videos showing alot of damage on baleno in minor accidents, this is beacause every manufactureer have different approaches to provide safety, in maruti case they gave alot of crumbles zone gets damaged tp absorbs any hits. If you open hood and see engine ba there is alot of space btw radiator and engine in petrol its huge. This crumbles zone gets damaged in small acccidents also but cost of repair in not repair. My bimper got hit once preety bad.</h6>
                                                </div>
                                                <div className={styles.reply}>
                                                    <p><Button onClick={() => setCount(count + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>  {count} <span> | </span> Reply</p>
                                                    
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                                <Form>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    
        <Form.Control as="textarea" rows={3} placeholder="Add your reply" />
      </Form.Group>
    <div className={styles.vns}>
      <Button className={styles.vns1} variant="outline">Cancel</Button>
      <Button className={styles.vns2} variant="outline">Submit</Button>
      </div>
    </Form>
    
      
                                                                    
                                                            
                                                
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/img13.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h6 className={styles.prs}><span>Ayush </span> | 3 years ago</h6>
                                                <h6>its preety safe, 2 air bags are not enough th0ught but ABS is intutive and drivinh  dynamics (ride and handling are 
                                                    very stable . But still drive slow n safely)</h6>
                                                <div className={styles.reply}>
                                                    <p><Button onClick={() => setCount(count + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg></Button>   {count}<span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                              
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={styles2.answers_box2}>
                                    <Row>
                                        <Col sm={1} md={1} xs={2}>
                                            <div className={styles.ans_box}>
                                                <img src="/img13.png" />
                                            </div>
                                        </Col>
                                        <Col sm={11} md={11} xs={10}>
                                            <div className={styles.ans_box}>
                                                <h6 className={styles.prs}><span>jashon </span> | 3 years ago</h6>
                                                <h6>Very safe,even at high speed car maintain its stability.ABS works well </h6>
                                                <div className={styles.reply}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>  0 <span> | </span> Reply</p>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-flag-fill" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/></svg></p>
                                                </div>
                                               
    
      
                                               
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className={styles.prs}><span>View More Answers <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></span></p>
                                </div>

                            </div>
                            <div className={styles.vns5}>
                            <h6><img src="/message.jpg" />Add your Answer</h6> 
                            </div> 
                            <Form>
     
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   
       <Form.Control as="textarea" rows={3} placeholder="Have something to say..." />
     </Form.Group>
   <div className={styles.vns3}>
     
     <Button className={styles.vns4} variant="outline">Submit Answer </Button>
     </div>
   </Form>
   <h4>From The Community </h4>
   <Carousel responsive={responsive}>
  <div className={styles.vns6}>
   <h6>Q.what is the difference between 2018 petrol baleno..s</h6>
   <div className={styles.vns9}>
   <img src="/img13.png" />
   <p>Asked by Hanumantappa Budihal 4 Answers</p>
   </div>
   </div>
  
  <div className={styles.vns6}><h6>Q. Is there any change in Maruti Baleno 2019 in inter...</h6>
  <div className={styles.vns9}>

  <img src="/img13.png" />
  <p>Asked by Hanumantappa Budihal 4 Answers</p>
  </div>
  </div>
  <div  className={styles.vns6}><h6>Q.Are there going to be any changes to the steering..  </h6>
  <div className={styles.vns9}>
  <img src="/img13.png" />
  <p>Asked by Hanumantappa Budihal 4 Answers</p>
  </div>
  </div>
  <div className={styles.vns6}><h6>Q.what is the difference between 2018 petrol baleno..s</h6>
  <div className={styles.vns9}>
  <img src="/img13.png" />
  <p>Asked by Hanumantappa Budihal 4 Answers</p>
  </div>
  </div>
</Carousel>
                        </Col>
                        <Col md={3} sm={12} xs={12}>
                            <div className={styles2.answers_right}>
                                <div className={styles2.trending}>
                                    <h3>Trending Maruti Suzuki Cars</h3>
                                    <h3><a href="#">View All</a></h3>
                                </div>
                                <div className={styles2.trending_box}>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/brezza.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Brezza </h4>
                                                    <p>Rs. 7.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/swift.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Swift </h4>
                                                    <p>Rs. 5.91 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/alto k10.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Alto k10</h4>
                                                    <p>Rs. 3.99 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/baleno.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Baleno</h4>
                                                    <p>Rs. 6.49 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/ertiga.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Ertiga</h4>
                                                    <p>Rs. 8.35 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/nexon.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Tata Nexon</h4>
                                                    <p>Rs. 9.47 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/kia_seltos.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Kia seltos</h4>
                                                    <p>Rs. 12.88 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className={styles2.trending_box2}>
                                        <Row>
                                            <Col md={5} sm={5} xs={5}>
                                                <div className={styles2.tre_box}>
                                                    <img src="/dezire.jpg" />
                                                </div>
                                            </Col>
                                            <Col md={7} sm={7} xs={7}>
                                                <div className={styles2.tre_box}>
                                                    <h4>Swift Dezire</h4>
                                                    <p>Rs. 9.05 Lakh</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>


    )
}