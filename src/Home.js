import React from 'react';
import style from "./home.module.css";
 


// const counter = 8; this is just like a variable that doesnt change

//this below is our component that returns JSX to index.html 
function Home(){

    return(
        <div >
            <header className={style.header}>

            </header>

            <section className={style.sect}>
                <div className="container">
                <h1>Section Heading</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
                </div>
            </section>

            <section className={style.img_section}>
                <div>                      
                    <div className={style.musoro}>
                        <h1> Top Booked</h1>
                    </div>`
                    <div className={style.topsells}>

                            <div className="col-lg-3 col-md-4 mb-6">
                     
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Item One</a>
                                    </h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-lg-3 col-md-4 mb-6">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Item Two</a>
                                    </h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 mb-6">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Item Three</a>
                                    </h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 mb-6">
                                <div className="card h-100">
                                    <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                    <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Item Four</a>
                                    </h4>
                                    <h5>$24.99</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>

        <section className={style.sect}>
            <div className="container">
            <h1>Section Heading</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
            </div>
        </section>

        <section className={style.last_sect}>
         
        </section>

                     
    </div>           


    );
};



export default Home;
