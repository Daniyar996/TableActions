import React from 'react';
import {IconContext} from 'react-icons';
import {Space} from "antd";

const TableActions = ({children}) => {
  return (
    <IconContext.Provider value={{size: "1.3em"}}>
      <Space>
        {children}
      </Space>
    </IconContext.Provider>
  );
};

export default TableActions;
