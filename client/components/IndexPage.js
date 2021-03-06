import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
    	<header className="intro">
	        <div className="intro-body">
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12">
	                        <h1 style="margin-top:100px;margin-bottom:80px"className="brand-heading">CoffeeSwap</h1>
	                        <div className="row">
	                            <div className="col-lg-8 col-lg-offset-2">
	                            <p className="intro-text" style="text-align:center;">Connect with new friends over a bag of coffee.
	                            Discover unknown blends, roasts, and people!</p>
                                <div className="row">
                                        <a href="interests.html" className="btn btn-filleddefault btn-lg">Get Started</a><br></br></a>
                                        <a href="#about" className="btn page-scroll">
                                        <h4>Learn More</h4>
                                        <i className="fa fa-angle-double-down animated"></i></a>
                                    </div>
                                </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
    	</header>

	    <!-- About Section -->
	    <section id="about" className="container content-section text-center">
	        <h2 className="intro-text" style="margin-top:45px">co·ffee/swäp/</h2>
            <h3 className="lead text-justify" style="align:left; margin-left:20%;margin-right:20%;color:#7a766f">Over 1600 independent roasters work in the United States: it can be overwhelming to discover which are worth the visit. What better way to explore the many unique blends than to ask the local expert? CoffeeSwap is a mail based coffee exchange that pairs you with that expert who wants to share fresh, local coffee from their city.
	            <br><br>We all know getting packages in the mail is fun, but it can be a hassle - that's why we've simplified the process. All you need to do is provide the coffee and let us take care of the rest.
	            <a style='color:#f0f0f0;margin-left:5px'className="fa fa-coffee aria-hidden="true""></a>
            </h3>
            <a href="the-coffeeswap-method.html" className="btn btn-default2 btn-lg">How it Works</a><br></br>

	        <!---Thumbnails-->
	        <div className="row" style="margin-left:10%;margin-right:10%">
	            <div className="col-md-3">
	                <div className="thumbnail" style="background-color:transparent;border:none">
	                    <h4><a href="the-coffeeswap-method.html"><img className="img-circle image-responsive" style= "width:210px; height:200px; "src="img/letter-coffee-1.jpg"></img>
	                    <div className="caption">
	                        Connect with New People</h4></a>
	                    </div>
	                </div>
	            <div className="col-md-6">
	                <div className="thumbnail" style="background-color:transparent;border:none">
	                    <h4><a href="the-coffeeswap-method.html"><img className="img-circle image-responsive" style= "width:210px; height:200px"src="img/ian-baldwin-cafe.jpg"></img>
	                    <div className="caption">
	                        Discover New Places</h4></a>
	                    </div>
	                </div>
	            <div className="col-md-3">
	                <div className="thumbnail" style="background-color:transparent;border:none">
	                    <h4><a href="the-coffeeswap-method.html"><img className="img-circle image-responsive" style= "width:210px; height:200px"src="img/bo-smith-33504.jpg"></img>
	                    <div className="caption">
	                        Taste New Roasters</h4></a>
	                    </div>
	                </div>
	            </div>
	        </div>
    	</section>

		 <!---discover section 1-->   
		<section id="discover" className="container">
		    <div className="row text-center" style="margin-top:60px;margin-bottom:20px">
		        <h2>The Process</h2>
		    </div>
	        <div className="row container text-center" style="padding:25px">
	            <div className="col-lg-3">
	            <img className="image-responsive" style="height:190px; width:130px;"src="img/Graphic_Step1.png"></img></div>
	            <div className="col-lg-3">
	            <img className="image-responsive" style="height:190px; width:130px;"src="img/Graphic_Step2.png"></img></div>
	            <div className="col-lg-3">
	            <img className="image-responsive" style="height:190px; width:130px;"src="img/Graphic_Step3.png"></img></div>
	            <div className="col-lg-3">
	            <img className="image-responsive" style="height:190px; width:130px;"src="img/Graphic_Step4.png"></img></div>
	        </div>
	         <div className="col-md-4"style="padding:20px;text-align:center;background-color:#e5d8bc;color:#7a766f;margin-top:100px;">
	                <h3 className= "fa fa-2x fa-coffee"></h3>
	                <a className= "fa fa-2x fa-exchange"></a>
	                <p className= "fa fa-2x fa-coffee"></p>
	                <p>It's simple. Discover new roasters, blends, and people across the United States just by swapping coffee.</p>
	                <a href="interests.html" className="btn btn-default2 btn-lg">Get Started ></a><br>
	                <a style="margin-top:5px" href="the-coffeeswap-method.html" className="btn btn-colordefault btn-sm">How does it work? ></a>
	            </div>
	            <div className="col-md-8 "> 
	            <img className="img-responsive" style= "width:100%;height:90%;"src="img/jeff-sheldon-unsplash.jpg"></img>
	            </div>
	        </div>
		 	<!---discover section 2-->   
		    <div className="row" style="padding:10px">
		        <div className="col-md-4" style="padding:20px;text-align:center;background-color:#f0f0f0;color:#7a766f;margin-top:60px">
		            <p className= "fa fa-2x fa-pencil" style="padding:5px"> </p>
		            <a className= "fa fa-1x fa-plus" style="padding:5px"> </a>
		            <p className= "fa fa-2x fa-envelope" style="padding:7px"></p>
		            <a className= "fa fa-1x fa-plus" style="padding:5px"> </a>
		            <p className= "fa fa-2x fa-road" style="padding:7px"></p>
		            <p>Focus on what matters. Include a note to new friends and share coffee from your hometown: we'll handle the shipping and matching while you explore and connect.</p> 
		            <a href="interests.html" className="btn btn-default btn-lg">Find a friend ></a>
		        </div>
		        <div className="col-md-8 img-responsive"> 
		        <img style= "width:100%;height:90%; margin-top:30px"src="img/letters.jpg"></img>
		        </div>        
		    </div>
        	<div className="row" style="padding:30px"></div>
		</section>


	    <!-- Download Section -->
	    <section id="gift" className="content-section text-center">
	        <div className="download-section">
	            <div className="container">
	                <div className="col-lg-6 col-lg-offset-3">
	                    <h2>Keep a warm mug (or two)</h2>
	                    <h4>Surprise someone with a gift subscription: they'll get a personal note from someone new in addition to recieving a 1/2 lb of coffee.</h4>
	                    <a href="interests.html" className="btn btn-default btn-lg">Give the Gift</a>
	                </div>
	            </div>
	        </div>
	    </section>

	    <!-- Contact Section -->
	    <section id="contact" className="container content-section text-center">
	        <div className="row">
	        <div className="row" style="padding:30px"></div>
	            <div className="col-lg-8 col-lg-offset-2">
	                <h2>Contact CoffeeSwap</h2>
	                <p>We are a small operation with big coffee mugs and busy days! All inquiries will be responded to as soon as possible. </p>
	                <p style="color:#7a766f" href="mailto:info@thecoffeeswap.com">info@thecoffeeswap.com
	                </p>
	            </div>
	        </div>
	    </section>
    );
  }
}