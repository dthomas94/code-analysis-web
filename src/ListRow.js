import React from 'react';

const ListRow = ({children}) => {
  const firstName = children.firstName;
  const lastName = children.lastName;
  const imgSrc = children.headshot.url;

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