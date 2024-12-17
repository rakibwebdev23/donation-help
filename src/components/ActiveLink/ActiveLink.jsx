import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'underline underline-offset-2 text-[#fff] w-full' : ''}>
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