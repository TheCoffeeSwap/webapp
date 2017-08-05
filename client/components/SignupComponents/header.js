import React from 'react';

const Header = ({h1, h2=''}) => {
    return (
        <header className="intro-3">
            <div className="intro-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-1">
                            <h3 className="brand-heading-3">{h1}</h3>
                        </div>
                        <div className="col-lg-4 col-lg-offset-3">
                            <a href="/">
                                <img className="brand-heading-3" src="img/CoffeeSwap_ICON_(black).png" style={{width:'15%',height:'15%'}} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <hr className="hr"></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    {h2}                    
                </div>
            </div>
        </header>
    );
}

export default Header