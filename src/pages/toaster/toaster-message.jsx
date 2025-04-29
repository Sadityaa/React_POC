import { Container } from "react-bootstrap";
import Button from '../../shared/Button';

function Toaster() {
  return (
    <>
      {/* <div>Toaster works..!</div> */}
      <Container className="mt-5">
        <h1 className="text-center">Hello, React</h1>
        <Button
          className='btn-lg d-flex align-items-center gap-1 text-white pt_2'
          size="md"
          variant="primary"
          icon='check'
          iconClass='text-white'
          iconPlacement = 'left'
        >
          Submit
        </Button>
        <div class="d_flex flex_row flex_md_column justify_content_center align_items_stretch">
          <div class="col_sm_4 col_xs_12">Item 1</div>
          <div class="col_sm_4 col_xs_12">Item 2</div>
        </div>
      </Container>
    </>
  );
}

export default Toaster;
