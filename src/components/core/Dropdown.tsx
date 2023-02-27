import './Dropdown.scss';
import Icon from '@mui/material/Icon';
import { useState } from 'react';
import Select, { components, GroupBase, OptionProps } from "react-select";
import * as React from 'react';


function DropdownStyled() {
    const { Option } = components;

    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (e: any) => {
        setSelectedOption(e);
    }
    // const IconOption = (props: {data : {icon: string, label: string}}) => (
    //     <Option {...props}>
    //         <Icon fontSize='small'>{props.data.icon}</Icon>
    //         <span className='ps-1'>{props.data.label}</span>
    //     </Option>
    // );
    const options = [
        {value: "public", label: "public", icon: "public" },
        {value: "friends", label: "friends", icon: "group" },
        {value: "private", label: "private", icon: "lock" }
    ];
  return (
    <Select components={{
        IndicatorSeparator: () => null,
        Option: (optionProps) => 
          <Option {...optionProps}>
            <Icon fontSize='small'>{optionProps.data.icon}</Icon>
            <span className='ps-1'>{optionProps.data.label}</span>
          </Option>
      }}
      options={options}
      defaultValue={options[0]}
      onChange={handleChange}
      // getOptionLabel={option => (
      //   <div style={{ display: 'flex', alignItems: 'center' }}>
      //     <Icon fontSize='small'>{option.icon}</Icon>
      //     <span style={{ marginLeft: 5 }}>{option.label}</span>
      //   </div>
      // )}
      className="button"
      classNamePrefix="dropdown"/>
  );
}

export default DropdownStyled;