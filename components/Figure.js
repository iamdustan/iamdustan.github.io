import React, {Component, PropTypes} from 'react'

class Figure extends Component {
  render() {
    return (
      <figure>
        <img {...this.props} style={{margin: 0}}/>
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    )
  }
}

Figure.propTypes = {
  img: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

export default Figure
