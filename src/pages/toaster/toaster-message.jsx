import { Container } from "react-bootstrap";
import Button from '../../shared/Button';

function Toaster() {
  return (
    <>
      {/* <div>Toaster works..!</div> */}
      <Container className="mt-5">
        <h1 className="text-center">Hello, React</h1>
        <Button
          className='btn-lg d-flex align-items-center gap-1 text-white'
          size="lg"
          variant="success"
          icon='check'
          iconClass='text-white'
        >
          Submit
        </Button>

      </Container>
    </>
  );
}

export default Toaster;
