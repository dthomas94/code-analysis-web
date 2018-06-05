class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      personList: [],
      visiblePersonList: [],
    }
  }

  componentDidMount() {
    getPersonList().then((personList) =>
      this.setState({
          personList,
          visiblePersonList: personList
      })
    );
  }

  function filterByName(searchForName, personList) {
    return personList.filter((person) => {
        return person.firstName === searchForName || person.lastName === searchForName;
    });
  }

            /**
       * Takes in a property of an object list, e.g. "name" below
       *
       *    people = [{ name: 'Sam' }, { name: 'Jon' }, { name: 'Kevin' }]
       *
       * And returns a function that will sort that list, e.g.
       *
       *    const sortPeopleByName = sortObjListByProp('name');
       *    const sortedPeople = sortPeopleByName(people);
       *
       *  We now have:
       *
       *    console.log(sortedPeople)
       *    > [{ name: 'Jon' }, { name: 'Kevin' }, { name: 'Sam' }]
       *
       */
      function sortObjListByProp(prop) {
        return function(objList) {
            // Make a copy & don't mutate the passed in list
            let result = objList.slice(1);

            result.sort((a, b) => {
                if (a[prop] < b[prop]) {
                    return -1;
                }

                if (a[prop] > b[prop]) {
                    return 1;
                }

                return 1;
            });

            return result;
        };
    }

    const sortByFirstName = sortObjListByProp('firstName');

    const sortByLastName = (personList) => sortByFirstName(personList).reverse();

            /**
       * Fisher-Yates shuffle
       */
      shuffleList(list) {
        // Make a copy & don't mutate the passed in list
        let result = list.slice(1);

        let tmp, j, i = list.length - 1

        for (; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = list[i];
            list[i] = list[j];
            list[j] = tmp;
        }

        return result;
    }

  _shuffleList() {
      this.setState({
          visiblePersonList: shuffleList(this.state.personList)
      });
  },

  _sortByFirst() {
      this.setState({
          visiblePersonList: sortByFirstName(this.state.personList)
      });
  },

  _sortByLast() {
      this.setState({
          visiblePersonList: sortByLastName(this.state.personList)
      });
  },

  _onSearch(e) {
      this.setState({
          visiblePersonList: filterByName(e.target.value, this.state.personList)
      });
  },

  render() {
    const { visiblePersonList } = this.state;
    return (
      <div className='app-container'>
        <Search
          key='search'
          onChange={this._onSearch}
        />
        <button key='shuffle' onClick={this._shuffleList}>Shuffle</button>
        <button key='sort-first' onClick={this._sortByFirst}>Sort (First Name)</button>
        <button key='sort-last' onClick={this._sortByLast}>Sort (Last Name)</button>
        <ListContainer
          key='list'
          personList={visiblePersonList}
        />
      </div>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);