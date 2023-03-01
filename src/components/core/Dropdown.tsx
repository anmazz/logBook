import './Dropdown.scss';
import Icon from '@mui/material/Icon';
import { useState } from 'react';
import Select, { components, GroupBase, OptionProps, SingleValueProps } from "react-select";
import * as React from 'react';


function DropdownStyled() {
    const { Option } = components;

    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (e: any) => {
        setSelectedOption(e);
    }
    
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
          </Option>,
        SingleValue: (optionProps) => 
          <components.SingleValue {...optionProps}>
            <Icon fontSize='small'>{optionProps.data.icon}</Icon>
            <span className='ps-1'>{optionProps.data.label}</span>
          </components.SingleValue>
      }}
      options={options}
      defaultValue={options[0]}
      onChange={handleChange}
      styles={{
        singleValue: (base) => ({
          ...base,
          padding: 5,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center'
        }),
        option: (base) => ({
          ...base,
          color: 'black',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center'
        })
      }}
      className="button dropdown dropShadow"
      classNamePrefix="dropdown"/>
  );
}

export default DropdownStyled;