import PropTypes from 'prop-types'
import Button from "./Button"


import React from 'react'

const Header = ({ title, onAdd, showAdd }) => {
        return (
        <header className="header">
            <h1 >{title}</h1>
            <Button color={!showAdd ? "Green": "Red"} text={!showAdd ? "Add": "Close"} onClick={onAdd}></Button>
        </header>
    )
}


Header.defaultProps = {
    title:"Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
