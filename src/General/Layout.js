import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';
import { ViewList, Dashboard } from '@material-ui/icons';
import { Layout } from 'react-admin';

const MyLayout = (props) => {
    return (
        <Layout {...props} menu={Menu} />
    );
};

const Menu = ({hasDashboard}) => {
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);

    return (
        <div>
            {hasDashboard &&
                <MenuItemLink
                    to="/"
                    primaryText="Dashboard"
                    leftIcon={<Dashboard />}
                    sidebarIsOpen={open}
                />
            }
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={resource.options && resource.options.label || resource.name}
                    leftIcon={<ViewList />}
                    sidebarIsOpen={open}
                />
            ))}
            {/* <MenuItemLink
                to="/custom-route"
                primaryText="Miscellaneous"
                leftIcon={<Label />}
                sidebarIsOpen={open}
            /> */}
        </div>
    );
}

export default MyLayout;