import React from 'react'
import PropTypes from 'prop-types'
import Child from './Child';

const colourName = ['red', 'green', 'blue', 'white'];

function Parent(props) {
    return (
        <div> 
            {colourName.map((color) =>
                // Wrong! The key should have been specified here:
                <Child key={color} color={color} />

            )}
            <Child></Child>
        </div>
    )
}

Parent.propTypes = {

}

export default Parent