import Search  from './Search';
import ListContainer from './ListContainer';
import React, { PureComponent } from 'react';
import getPersonList  from './api';

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            personList: [],
            visiblePersonList: [],
        };
        this._sortByFirstName = this._sortObjListByProp('firstName');
        this._sortByLastName = (personList) => this._sortByFirstName(personList).reverse();
        this._filterByName = this._filterByName.bind(this);
        this._sortObjListByProp = this._sortObjListByProp.bind(this);
        this._shuffleList = this._shuffleList.bind(this);
        this._sortByFirst = this._sortByFirst.bind(this);
        this._sortByLast = this._sortByLast.bind(this);
        this._onSearch = this._onSearch.bind(this);
    }

    componentDidMount() {
        getPersonList().then((personList) => {
            console.log(personList)
                this.setState({
                    personList,
                    visiblePersonList: personList
                });
            }
        );
    }

    _filterByName(searchForName, personList) {
        return personList.filter((person) => {
            return person.firstName === searchForName || person.lastName === searchForName;
        });
    }

    _sortObjListByProp(prop) {
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

    _shuffleList() {
        let result = this.state.personList.slice(1);

        let tmp, j, i = result.length - 1

        for (; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }

        this.setState({
            visiblePersonList: result
        });
    }

    _sortByFirst() {
        this.setState({
            visiblePersonList: this._sortByFirstName(this.state.personList)
        });
    }

    _sortByLast() {
        this.setState({
            visiblePersonList: this._sortByLastName(this.state.personList)
        });
    }

    _onSearch(e) {
        this.setState({
            visiblePersonList: this._filterByName(e.target.value, this.state.personList)
        });
    }

    render() {
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
                personList={this.state.visiblePersonList}
            />
        </div>
        );
    }
}

export default App;