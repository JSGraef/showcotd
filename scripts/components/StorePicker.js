import React from 'react';

/*
  StorePicker
  This will let us make a Store Picker
*/

import {Navigation} from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind  
class StorePicker extends React.Component {
  
  goToStore(event) {
    event.preventDefault();
    // get data from input
    var storeId = this.refs.storeId.value
    // transition from storePicker to App
    this.history.pushState(null, '/store/'+storeId); 
  }
    
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="submit" />
      </form>
    )
  }
};

reactMixin.onClass(StorePicker, Navigation);

export default StorePicker;