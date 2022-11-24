import 'bootstrap/js/src/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';
import { ImageResult } from './ImageZoom.elements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../css/style.css';

function ImageZoom(props) {
  return(
    <>
      <ImageResult src={props.imageResponse} alt="Y00t #9040" data-bs-toggle="modal" data-bs-target="#imageExample" width={props.imageSize} style={{  margin: 'auto', cursor: 'pointer' }} />

      <Container>
        <Row>
          <Col md>
            <div className="modal fade" id='imageExample' tabIndex='-1' aria-hidden='true'>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" style={{ width: '1300px', padding: '20px', backgroundColor: 'rgba(65,65,65, .9)' }}>
                  <div className="modal-body">
                    <button type="button" className="bt-close modalEscapeButton" data-bs-dismiss="modal" arial-label="Close" style={{ float: 'right', position: 'absolute', zIndex: '9999' }} >X</button>
                    <img src={props.imageResponse} alt="Y00t #9040" width={props.imageSize} style={{ margin: 'auto'}}/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
};

ImageZoom.propTypes = {
  imageResponse: PropTypes.string,
  imageSize: PropTypes.string
}

export default ImageZoom;