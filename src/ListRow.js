import React from 'react';

const ListRow = (props) => {
  const firstName = props.children.firstName;
  const lastName = props.children.lastName;
  const imgSrc = props.children.headshot.url;

  return (
    <tr key={`${firstName} ${lastName}`}>
      <td key='thumb'>
        <img src={`http:${imgSrc}`} alt='img'/>
      </td>
      <td key='first'>
        {firstName}
      </td>
      <td key='last'>
        {lastName}
      </td>
    </tr>
  );
};

export default ListRow;