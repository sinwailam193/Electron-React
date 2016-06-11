import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  _handleRenderItem = (item, isHighlighted) => {
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },
      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };
    return (
      <div key={item.id} style={isHighlighted ? listStyles.highlightedItem : listStyles.item} id={item.id}>{item.title}</div>
    );
  };

  render() {
    return (
      <div className="search">
        <Autocomplete
          ref="autocomplete"
          inputProps={{title: "Title"}}
          value={this.props.autoCompleteValue}
          items={this.props.tracks}
          getItemValue={(item) => item.title}
          onSelect={this.props.handleSelect}
          onChange={this.props.handleChange}
          renderItem={this._handleRenderItem}
        />
      </div>
    );
  }
}
