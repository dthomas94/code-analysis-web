import React from 'react';

const ListRow = (props) => (
  <tr key={`${props.firstName} ${props.lastName}`}>
    <td key='thumb'>
      <img src={`http:${props.headshot.url}`} alt='img'/>
    </td>
    <td key='first'>
      {props.firstName}
    </td>
    <td key='last'>
      {props.lastName}
    </td>
  </tr>
);

export default ListRow;