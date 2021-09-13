import { Tooltip } from "reactstrap";
import { useState } from "react";
type ComponentProps = React.PropsWithChildren<{ target: any; toolTipText: string }>;
const ToolTip = (props: { target: any; toolTipText: string }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Tooltip placement="right" isOpen={tooltipOpen} target={props.target} toggle={toggle}>
        {props.toolTipText}
      </Tooltip>
    </div>
  );
};

export default ToolTip;
