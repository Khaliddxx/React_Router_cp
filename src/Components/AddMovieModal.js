import React from "react";
import { Form, Modal, Button, Container } from "react-bootstrap";
import { movies } from "../movies";
import { useState } from "react";

const AddMovieModal = ({ onAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    name: "",
    description: "",
    poster: "",
    rating: 0,
  });

  return (
    <div>
      <div className="col-12">
        <Button
          style={{
            position: "relative",
            marginTop: "20px",
            marginBottom: "50px",
          }}
          onClick={handleShow}
        >
          Add Movie
        </Button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter the details of the movie you want to add.</Modal.Body>

        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                placeholder="Enter Movie Name"
                value={newMovie.name}
                onChange={(e) =>
                  setNewMovie((prev) => {
                    prev.name = e.target.value;
                    return { ...prev };
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Movie's Description"
                value={newMovie.description}
                onChange={(e) =>
                  setNewMovie((prev) => {
                    prev.description = e.target.value;
                    return { ...prev };
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                placeholder="URL of Movie Poster"
                value={newMovie.poster}
                onChange={(e) =>
                  setNewMovie((prev) => {
                    prev.poster = e.target.value;
                    return { ...prev };
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                placeholder="Movie's Rating (out of 10)"
                value={newMovie.rating}
                onChange={(e) =>
                  setNewMovie((prev) => {
                    prev.rating = Number(e.target.value);
                    return { ...prev };
                  })
                }
              />
            </Form.Group>
          </Form>
        </Container>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="add-movie-btn"
            variant="primary"
            onClick={() => {
              onAdd((prev) => {
                prev.push({
                  title: newMovie.name,
                  description: newMovie.description,
                  posterURL: newMovie.poster,
                  rating: newMovie.rating,
                });
                return [...prev];
              });
              handleClose();
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovieModal;
