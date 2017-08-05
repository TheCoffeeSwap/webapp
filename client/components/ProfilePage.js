import React from 'react';
import Header from './SignupComponents/header';

const Profile = () => {
    return (
    <div>
        <div className="row rowStyle">
            <Header h1="Profile & Settings" />
            <div className="row">
                <div className="col-lg-2 col-lg-offset-2"><a><h4>Address</h4></a></div>
                <div className="col-lg-6 col-lg-offset-1 getStartedColor">
                    Dynamic Info Goes here - Allow user to edit address
                    <a href="#Edit" className="btn btn-xs btn-filleddefault">Edit</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2 col-lg-offset-2"><a><h4>Subscription Plan</h4></a></div>
                <div className="col-lg-6 col-lg-offset-1 getStartedColor">
                    change plan between Monthly/Yearly/Cancel
                    <a href="#Edit" className="btn btn-xs btn-filleddefault" >Edit</a>
                </div>
            </div>
        </div>

        <hr />
        <h3 className="text-center getStartedColor">Plan Change Option</h3>
        <div className="row">
            <div className="col-lg-3 col-lg-offset-2">
                <div className="thumbnail thumbnailStyle">
                    <label>
                        <h4 className="getStartedColor">Monthly Plan ($22/Month)</h4>
                    <div className="radio text-center">
                        <input type="radio" name="optradio" />
                    </div>
                    </label>
                </div>  
            </div> 
            <div className="col-lg-3">
                <div className="thumbnail thumbnailStyle">
                        <label>
                        <h4 className="getStartedColor">Yearly Plan ($20/Month - $240 Annual)</h4>
                        <div className="radio text-center">
                            <input type="radio" name="optradio" />
                        </div>
                        </label>
                </div>  
            </div>
            <div className="col-lg-3">
                <div className="thumbnail thumbnailStyle">
                    <label>
                    <h5 className="getStartedColor">Cancel Plan</h5>
                    <div className="radio text-center">
                        <input type="radio" name="optradio" />
                    </div>
                    </label>
                </div>
            </div>
        </div>
        <div className="col-lg-10 col-lg-offset-5 getStartedColor" style={{padding:'30px'}}>
            <a href="#SAVE_CHANGES" className="btn btn-default2 btn-lg" >Save Changes</a>
        </div>
    </div>
    )
}

export default Profile;