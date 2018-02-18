import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-DOM';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const Title = ( { name } ) => {
    return (
      <div>
        <AppBar
            title="Welcome to Battleship!"
            iconElementLeft={<Link to="/"><IconButton><ActionHome /></IconButton></Link>}
        />
      </div>

    );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
