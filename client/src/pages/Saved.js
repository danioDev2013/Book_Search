import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Book from "../components/Book";
import Card from "../components/Card";
import API from "../utils/API";
import Footer from "../components/Footer";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <ul>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                          id="text"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </ul>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Saved;