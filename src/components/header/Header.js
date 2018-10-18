import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {

  componentDidMount(){
    $(document).ready(function() {
      $('#txtSearchBox').blur(function() {
        $("#loading").hide()
      }).focus(function() {
        $("#loading").show()
      });
      $("#dvYoutube").html("<iframe style='width: 100%; height: 400px' src='https://www.youtube.com/embed/IyucJZev9wM' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>");
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse site-nav" style={{position:'absolute'}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="site-logo" href="#"><img src={require("../../images/kyazoonga.png")} alt="The Big Ticket" title="The Big Ticket" /></a>
          </div>
          <div className="collapse navbar-collapse navbar-right " id="myNavbar">
            <ul className="nav navbar-nav top-nav hide-on-mobile">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
            </ul>
            <ul className="nav navbar-nav top-nav hide-on-desktop">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li><a href="#"><span className="label label-primary">Ticket Your Event</span></a></li>
              <li><a href="#">Concerts</a></li>
              <li><a href="#" className="blue-bg">Cricket</a></li>
              <li><a href="#" className="orange-bg">Events</a></li>
              <li><a href="#" className="green-bg">Sports</a></li>
              <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
              <li><a href="#" className="purple-bg">Restaurants</a></li>
              <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
              <li><a href="#">Parties</a></li>
            </ul>
          </div>
        </nav>
        <div id="myCarousel" className="carousel slide carousel-fade home-slider" data-ride="carousel">
          <h1>Tickets made simple for everyone, everywhere</h1>
          <div className="site-manu container">
            <div className="collapse navbar-collapse hide-on-mobile">
              <ul className="nav navbar-nav sub-main-nav">
                <li><a href="#">Concerts</a></li>
                <li><a href="#" className="blue-bg">Cricket</a></li>
                <li><a href="#" className="orange-bg">Events</a></li>
                <li><a href="#" className="green-bg">Sports</a></li>
                <li><a href="#" className="pink-lt-bg">Amusement Parks</a></li>
                <li><a href="#" className="purple-bg">Restaurants</a></li>
                <li><a href="#" className="yellow-bg">Theatre & Arts</a></li>
                <li><a href="#">Parties</a></li>
              </ul>
            </div>
            <div className="banner-serch-box"><input id="txtSearchBox" className="" name="q"  placeholder="Search for an event, venue or city" type="text" /><a href="javascript:void(0);" onclick="searchfor();"><i className="fa fa-search" aria-hidden="true"></i></a></div>
          </div>
          <div className="carousel-inner">
            <div data-slide="0" className="item active">
              <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
              <div className="hide-on-mobile">
                <video title="0" id="bgvid0" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                  <source src="http://content.kyazoonga.com/videos/video9.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
            <div data-slide="1" className="item">
              <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
              <div className="hide-on-mobile">
                <video title="1" id="bgvid1" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                  <source src="http://content.kyazoonga.com/videos/video1.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
            <div data-slide="2" className="item">
              <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
              <div className="hide-on-mobile">
                <video title="2" id="bgvid2" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                  <source src="http://content.kyazoonga.com/videos/video2.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
            <div data-slide="3" className="item">
              <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
              <div className="hide-on-mobile">
                <video title="3" id="bgvid3" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                  <source src="http://content.kyazoonga.com/videos/video3.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>
            <div data-slide="4" className="item">
              <img src="http://content.kyazoonga.com/Footer/slider-1.jpg" alt="" className="hide-on-desktop" />
              <div className="hide-on-mobile">
                <video title="4" id="bgvid4" autoplay loop muted poster="http://content.kyazoonga.com/Footer/slider-1.jpg">
                  <source src="http://content.kyazoonga.com/videos/video8.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Header;
