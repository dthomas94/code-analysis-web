const ListRow = ({firstName, lastName, headshot}) => (
  <tr key={`${props.person.firstName} ${props.person.lastName}`}>
    <td key='thumb'>
      <img src={`http:${headshot.url}`}/>
    </td>
    <td key='first'>
      {firstName}
    </td>
    <td key='last'>
      {lastName}
    </td>
  </tr>
);

export default ListRow;