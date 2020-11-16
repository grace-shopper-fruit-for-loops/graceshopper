import React from 'react'
const AdminHome = () => {
  return (
    <div className="jumbotron text-center hoverable p-4">
      <div className="row">
        <div className="col-md-4 offset-md-1 mx-3 my-3">
          <div className="view overlay">
            <img
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
              className="img-fluid"
              alt="Sample image for first version of blog listing"
            />
            <a>
              <div className="mask rgba-white-slight" />
            </a>
          </div>
        </div>

        <div className="col-md-7 text-md-left ml-3 mt-3">
          <a href="#!" className="green-text">
            <h6 className="h6 pb-1">
              <i className="fas fa-desktop pr-1" /> Welcome
            </h6>
          </a>
          <h4 className="h4 mb-4">This is title of the news</h4>
          <p className="font-weight-normal">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
          </p>
          <p className="font-weight-normal">
            <a>
              <strong>Don't forget to create products</strong>
            </a>
            , 19/08/2016
          </p>
          <a className="btn btn-success">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default AdminHome