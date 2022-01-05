import React from 'react'
import PropTypes from 'prop-types'

function Child(props) {
    return (
        <div>
            <h1 style={{ color: props.color == 'white' ? 'black' : props.color }}>

                {props.color}
            </h1>
            

        </div>
    )
}

Child.propTypes = {

}

export default Child

