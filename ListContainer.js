













      /*==================================================

         VIEW (React)

       ***************************************************/





      const ListContainer = (props) => React.DOM.table({ className: 'list-container' }, [
          React.DOM.thead({ key: 'thead' }, React.DOM.tr({}, [
              React.DOM.th({ key: 'thumb-h' }, null, 'Thumbnail'),
              React.DOM.th({ key: 'first-h' }, null, 'First Name'),
              React.DOM.th({ key: 'last-h' }, null, 'Last Name')
          ])),
          React.DOM.tbody({ key: 'tbody' }, props.personList.map((person, i) =>
              React.createElement(ListRow, { key: `person-${i}`, person })))
      ]);