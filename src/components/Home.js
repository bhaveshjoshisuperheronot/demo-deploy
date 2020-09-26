import React, { Component } from 'react'
import '../css/home.css'
import VideoPlayer from 'react-video-js-player'
import Demo from '../media/demo.mp4'
const videoSrc = Demo;
class Home extends Component {
    render(){
        return(
        <div className="wrapper">
            <div className="banner-video">
            <VideoPlayer
                controls={true}
                src={videoSrc}
                width="720"
                height="420"
                videoWidth="100%"
                videoHeight="100%"
            />
            </div>
            <div className="row clearfix">
                <div className="col-left left">
                    <div className="row-left row-show-list">English Channels</div>
                    <div className="row-main row-left row-left-1 active">
                        <div className="bokoo-genre">Entertainment</div>
                        <div className="bokoo-number">36</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-brand-3.png')} /></div>
                    </div>
                    <div className="row-main row-left row-left-1">
                        <div className="bokoo-genre">Comedy</div>
                        <div className="bokoo-number">23</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-brand-1.png')} /></div>
                    </div>
                    <div className="row-main row-left row-left-1">
                        <div className="bokoo-genre">Action</div>
                        <div className="bokoo-number">73</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-brand-1.png')} /></div>
                    </div>
                    <div className="row-main row-left row-left-1">
                        <div className="bokoo-genre">Sci-fi</div>
                        <div className="bokoo-number">91</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-brand-4.png')} /></div>
                    </div>
                    <div className="row-main row-left row-left-1">
                        <div className="bokoo-genre">Sports</div>
                        <div className="bokoo-number">12</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-brand-5.png')} /></div>
                    </div>
                    <div className="row-main row-left row-left-1">
                        <div className="bokoo-genre">Tragedy</div>
                        <div className="bokoo-number">78</div>
                        <div className="bokoo-brand-img"><img alt='brand-img' src={require('../media/bokoo-logo.png')} /></div>
                    </div>
                </div>
                <div className="col-right left">
                    <div className="row-right row-timings">
                        <div className="row-right-col-1">11:00 AM</div>
                        <div className="row-right-col-1">11:30 AM</div>
                        <div className="row-right-col-1">12:00 AM</div>
                        <div className="row-right-col-1">12:30 AM</div>
                        <div className="row-right-col-1">13:00 AM</div>
                    </div>
                    <div className="row-right row-right-1 active">
                        <div className="row-main row-right-col-1">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                    <div className="row-right row-right-2">
                        <div className="row-main row-right-col-3">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                    <div className="row-right row-right-3">
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-3">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                    <div className="row-right row-right-4">
                        <div className="row-main row-right-col-1">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                    <div className="row-right row-right-5">
                        <div className="row-main row-right-col-3">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                    <div className="row-right row-right-6">
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-2">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                        <div className="row-main row-right-col-1">
                            <h4 className="show-head">Malgudi Days</h4>
                            <p className="show-text">Malgudi Days is a collection of short stories by R. K. Narayan published in 1943 by Indian Thought Publications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Home;