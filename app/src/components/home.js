import React from 'react';

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid mb-0 p-5">
      <div className="container"><h2 className="text-center">Home</h2>
      <p>How to get things working</p>
        <ul>
          <li>Uncomment this.props.history.push('/'); in requireAuth.js to utilize requireAuth HOC</li>
          <li>Edit Header.js, case false:, to include only Home and Sign In for their respective ul tags to only show Notes and More when authenticated</li>
          <li>Example of Note JSON &#123;"category":"category1","name":"Title 1","purpose":"Description or purpose for Title 1","code":"Code"&#125;</li>
          <li>This project is influenced from Stephen Grider courses on Udemy</li>
        </ul>
        <p className="text-left">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
}

export default Home;
