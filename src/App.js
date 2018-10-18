import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import HotTickets from './components/hottickets/HotTickets';
import Categories from './components/categories/Categories';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import '../src/css/bootstrap.css';
import '../src/css/buttons.css';
import '../src/css/custom.css';
import '../src/css/header.css';
import '../src/css/home.css';
import '../src/css/site.css';
import '../src/css/social.css';
import '../src/css/ticket-boxes.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="description" content="Kyazoonga - Buy Tickets for Concerts, Cricket, Events, Movies, Theatre, Sports, Amusement Parks, more." />
        <meta name="keywords" content="sport tickets, buy cricket tickets, concert tickets, cricket world cup tickets, buy movie tickets, movie tickets online, world cup 2015 ticket, cricket world cup hospitality package, event tickets booking, live event tickets, icc cricket tickets for sale, amusement parks tickets, buy cricket bats, cricket store, buy books online, buy sports merchandise, book online tickets, cricket match tickets, cricket world cup tickets, buy concert tickets online, buy tickets online"
        />
        <link rel="shortcut icon" href="images/favicon_green.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <Header />
        <HotTickets />
        <Categories />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
