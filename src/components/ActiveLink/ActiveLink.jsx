import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'bg-gray-500 py-1 px-2 underline rounded-md text-white' : ''}>
                {children}</NavLink>
        </div>
    );
};
ActiveLink.propTypes = {
    to: PropTypes.shape({

    }).isRequired,
    children: PropTypes.shape({

    }).isRequired,

};
export default ActiveLink;