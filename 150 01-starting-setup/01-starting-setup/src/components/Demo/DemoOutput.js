import React from 'react'
import PropTypes from 'prop-types'
import MyParagraph from './MyParagraph'

function DemoOutput(props) {
    return (
        <div>
            <MyParagraph> {props.show ? "this is in demo output" : ""}</MyParagraph>
        </div>
    )
}

DemoOutput.propTypes = {

}

export default React.memo(DemoOutput);

