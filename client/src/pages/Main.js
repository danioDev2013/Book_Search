import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Book from "../components/Book";
import Card from "../components/Card";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";



class Main extends Component {
  state = {
    books: [],
    q: "",
    message: "No results yet. Have you searched for a title?"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => {
        console.log(err)
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      }
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <Jumbotron />
          </Col>
          <Col size="12">
            <Search
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Col>
              
          <Row>
            <Col size="12">
              <Card title="Results">
                {this.state.books.length ? (
                  <ul>
                    {this.state.books.map(book => (
                      <Book
                        key={book.id}
                        title={book.volumeInfo.title}
                        subtitle={book.volumeInfo.subtitle}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors.join(", ")}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        Button={() => (
                          <button
                            onClick={() => this.handleBookSave(book.id)}
                            className="btn btn-primary ml-2"
                          >
                            Save
                          </button>
                        )}
                      />
                    ))}
                  </ul>
                ) : (
                  <h2 className="text-center">{this.state.message}</h2>
                )}
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Main;