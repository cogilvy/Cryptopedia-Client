import React, { Component } from 'react';

class InstructionsContainer extends Component {

  render() {
    return (
      <div className="trading-tips">
        <h3>The Cryptopedia simulator is designed for beginners to be able to practice buying and selling cryptocurrencies while mananging a budget, without the risk of losing your own money! The simulator is setup as a competition based system, where you can create a comptetion for you and your friends to join. Enter a start and end date for the competition, and once the competition starts, buy and sell your way to victory!</h3>
        <hr></hr>
        <h2 style={{textDecoration: "underline"}}>Instructions:</h2>
        <ol>
          <li>Register for an account or login to an existing one. While the simulator is free, only registered users are able to use it.</li>
          <li>Create or join an active competition to get started. Make sure to tell your friends to join as well!</li>
          <li>Once you have joined a competition and it has started, select 'View Portfolio'.</li>
          <li>Since you just started the competition, you will not have any cryptocurrencies in your portfolio yet, so buy some!</li>
          <li>You will see a button in the upper right hand corner that says 'Buy Cryptos', click that to bring up a table of all of the cryptocurrencies available for purchase.</li>
          <li>Once you see the table, click on one of the cryptocurrencies to bring up the purchasing form.</li>
          <li>On the purchase form, simply enter either the quantity you would like to purchase, or the dollar amout you would like to spend, and click buy.</li>
          <li>If you had enough money in your budget for the purchase, you will see the cryptocurrency you purchased appear in your portfolio.</li>
          <li>If you want to sell a cryptocurrency, go to your portfolio and click the red sell button next to the one you want to sell.</li>
        </ol>
        <h2>You're ready to go! Have fun, and try to get your portfolio value as high as you can!</h2>
        <p>If you would like more information, head over to the 'News' or 'Cryptos' page to read current news articles, or to see more detailed information about a specific cryptocurrency. You can also click any of the links on the side to visit outside sources for even more information.</p>
        <p>For any questions or concerns, feel free to contact us at <a href="">information@cryptopedia.com</a>.</p>
      </div>
    );
  }

}

export default InstructionsContainer;
