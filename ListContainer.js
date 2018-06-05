import ListRow from './ListRow';

const ListContainer = (props) => {
    <table className='list-container'>
        <thead>
            <tr>
                <th>Thumbnail</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            {
                props.personList.map((person, i) => (
                    <ListRow key={`person-${i}`}>{person}</ListRow>
                ))
            }
        </tbody>
    </table>
}

export default ListContainer;