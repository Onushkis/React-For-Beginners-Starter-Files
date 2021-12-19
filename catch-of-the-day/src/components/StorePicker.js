import React, { Fragment } from "react";
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form action="" className="store-selector">
          {/*comment */}
          <h2> Please Enter A Store </h2>
          <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
          <button type="submit">Visit Store &#8594;</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
