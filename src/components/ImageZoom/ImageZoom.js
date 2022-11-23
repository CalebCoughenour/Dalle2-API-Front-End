import 'bootstrap/js/src/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';
import { ImageResult } from './ImageZoom.elements';


function ImageZoom(props) {
  return(
    <>
      <ImageResult src={props.imageResponse} alt="Y00t #9040" data-bs-toggle="modal" data-bs-target="#imageExample" style={{  margin: 'auto', cursor: 'pointer' }} />

      <div className="modal fade" id='imageExample' tabIndex='-1' aria-hidden='true'>
        <div className="modal-dialog">
          <div className="modal-content" style={{ width: '1000px', paddingLeft: '20px', backgroundColor: 'rgba(65,65,65, .9)' }}>
            <div className="modal-body">
              <button type="button" className="bt-close" data-bs-dismiss="modal" arial-label="Close" style={{ float: 'right' }} >X</button>
              <img src={props.imageResponse} alt="Y00t #9040" width={props.imageSize} style={{ margin: 'auto'}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

ImageZoom.propTypes = {
  imageResponse: PropTypes.string,
  imageSize: PropTypes.string
}

export default ImageZoom;