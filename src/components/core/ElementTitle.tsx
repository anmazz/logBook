import * as React from 'react';
import '../../sass/base/_typography.scss';

const ElementTitle = (props: {title: string}) => {
    return (
        <h2 className='medium-bold'>{props.title}</h2>
    )
};

export default ElementTitle;