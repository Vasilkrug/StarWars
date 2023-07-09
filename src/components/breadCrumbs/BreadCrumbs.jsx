import React from 'react';
import {Link} from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <>
            {breadcrumbs.length < 2 ? null :
                <div className="breadcrumbs">
                    {breadcrumbs.map(({breadcrumb, match, location}, index) => {
                        return (
                            <div className="crumb" key={match.pathname}>
                                {index < breadcrumbs.length - 1 ?
                                    <Link to={match.pathname || ""}>{breadcrumb}</Link>
                                    : <p>{location.state?.name ?? breadcrumb.props.children}</p>}
                            </div>
                        )
                    })}
                </div>}
        </>
    );
};

export default BreadCrumbs;