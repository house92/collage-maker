import React from 'react';
import Image from './Image';

var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number") {
                return new Error("the count must be a number")
            }

            if (props[propName] > 100) {
                return new Error('Creating ' + props[propName] + ' notes is ridiculous')
            }
        }
    },

    getInitialState() {
        return {
            images: [
              '../public/images/20019_anime_scenery.jpg',
              '../public/images/20036_anime_scenery.jpg',
              '../public/images/20036_anime_scenery.jpg'
            ]
        };
    },

    render() {
        return (
            <div className='board'>
                {this.state.images.map((image, i) => {
                    return <Image key={i}>{image}</Image>
                })}
            </div>
        );
    }
});

export default Board;
