import React from 'react';

import h from '../helpers';
import autobind from 'autobind-decorator';

/*fish*/
@autobind
class Fish extends React.Component {
  onAddToOrder() {
    this.props.addToOrder(this.props.index);
  }

  render() {
    var d = this.props.details;
    var isAvailable = (d.status === 'available' ? true : false);
    var txtButton = (isAvailable ? 'Add to Order' : 'Sold Out!');

    return (
      <li className="menu-fish">
        <img src={d.image} alt="" />
        <h3 className="fish-name">
          {d.name}
        </h3>
        <span className="price">{h.formatPrice(d.price)}</span>
        <p>{d.desc}</p>
        <button disabled={!isAvailable} onClick={this.onAddToOrder}>{txtButton}</button>
      </li>
    )
  }
};

export default Fish;