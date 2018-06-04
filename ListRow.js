/*==================================================

           DATA TRANSFORMS

         ***************************************************/


        function getLastName(person) {
          return person.lastName;
      }

      const getFirstName = (person) => {
          return person.firstName;
      };

      // headshot URLs are scheme relative //
      // prepend http: to prevent invalid schemes like file:// or uri://
      const getImageUrl = (person) => {
          return `http:${person.headshot.url}`;
      };

const Thumbnail = (props) => React.DOM.img({
  className: 'image',
  src: props.src
});

const ListRow = (props) => React.DOM.tr({ key: `${props.person.firstName} ${props.person.lastName}` }, [
  React.DOM.td({ key: 'thumb' }, React.createElement(Thumbnail, { src: getImageUrl(props.person) })),
  React.DOM.td({ key: 'first' }, null, getFirstName(props.person)),
  React.DOM.td({ key: 'last' }, null, getLastName(props.person)),
]);