import React from 'react'
const Home = () => {
  return (
    <div className="jumbotron text-center">
      {/* <h4 className="card-title h4 pb-2">
        <strong> Welcome to Juicery</strong>
      </h4> */}
      <h2 className="card-title h2 text-primary">Welcome to Juicery</h2>
      <div className="view overlay my-4">
        <img
          src="https://images.unsplash.com/photo-1496318447583-f524534e9ce1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1705&q=80"
          className="img-fluid"
          alt=""
        />
        <a href="#">
          <div className="mask rgba-white-slight" />
        </a>
      </div>
      <h5 className="indigo-text h5 mb-4">Our History</h5>
      <p className="card-text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
      </p>
      <p>you can find us on: </p>
      <a className="fa-lg p-2 m-2 tw-ic">
        Facebook <i className="fab fa-twitter grey-text" />
      </a>
      <a className="fa-lg p-2 m-2 fb-ic">
        Instagram
        <i className="fab fa-facebook-f grey-text" />
      </a>
    </div>
  )
}

export default Home
