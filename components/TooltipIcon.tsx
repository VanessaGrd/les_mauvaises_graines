import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import Alert from "../public/Alert"
interface TooltipIconProps {
  tooltip: string;
  top: string;
  left: string;
  color: string,
}
const TooltipIcon = ({ tooltip, top, left, color }: TooltipIconProps) => {


  return (
    <div style={{ position: "relative", display: "flex" }}>
      <div style={{paddingRight: "5px"}} >{tooltip}</div>
      {tooltip && (
        <div>
          <Alert />
        </div>
      )}
    </div>
  );
};

TooltipIcon.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TooltipIcon;
