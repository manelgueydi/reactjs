import './App.css';
import{Form ,Button} from"react-bootstrap"
function App() {
  return (
    <div className="App">
      <h1 className='f'>formulaire</h1>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="bt" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
