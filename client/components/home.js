import React from 'react'
const Home = () => {
  return (
    <div className="jumbotron text-center">
      <h2 className="card-title h2 text-success">
        Welcome to Fruitify Juicery
      </h2>
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
      <h4 className="card-title h2 text-success">About Us:</h4>
      <p className="card-text">
        Fruitify Juicery offers an amazing variety of organic, unpasteurized,
        cold-pressed fruit and vegetable juices and smoothies. We pride
        ourselves on fresh Non-GMO cold-pressed juices and made-to-order
        smoothies packed with superfoods. Our juices and smoothies are a perfect
        way to start your day.
      </p>
      <br />
      <p>Follow us on: </p>
      <p className="card-title h6 text-success">Facebook</p>
      <p className="card-title h6 text-success">Instagram</p>
    </div>
  )
}

export default Home
