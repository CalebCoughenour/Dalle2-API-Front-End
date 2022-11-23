import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerRendererProp() {
  return (
    <>
      <OverlayTrigger
      placement="top"
       overlay={<Tooltip id="button-tooltip-2">Response takes 5-10 seconds, please do not spam requests</Tooltip>}
    >
      {({ ...triggerHandler }) => (
        <div
          {...triggerHandler}
          className="d-inline-flex tooltip-wrap"
        >
          <span className="material-icons tooltip-icon">info</span>
        </div>
      )}
    </OverlayTrigger>
    </>
  );
}

export default TriggerRendererProp;