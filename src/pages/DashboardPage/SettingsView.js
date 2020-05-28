import React from "react";
import { Button } from "antd";

const SettingsView = props => {
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <h2>Settings View</h2>
      <Button onClick={goBack}>Go back</Button>
    </div>
  );
};

export default SettingsView;
