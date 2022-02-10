import { FunctionComponent } from "react";

const DottedSeperator: FunctionComponent<{ dotNumber?: number }> = ({
  dotNumber = 3,
}) => {
  const spanArray = [];
  for (let i = 0; i < dotNumber; i++) {
    spanArray.push(<span>.</span>);
  }

  return (
    <div className="flex justify-center text-2xl space-x-3" role="separator">
      {spanArray}
    </div>
  );
};

export default DottedSeperator;
