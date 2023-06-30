import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
    const location = useLocation();
    let activeCrumbs = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '' && crumb !== 'StarWars')
        .map((crumb, index, array) => {
            activeCrumbs += `/${crumb}`
            if (index === 0) {
                return (
                    <>
                        <div key={index} className={'crumb'}>
                            <Link to={'/'}>home</Link>
                        </div>
                        <div className={'crumb'} key={crumb}>
                            {index === array.length - 1 ?
                                <p>{crumb}</p>
                                :
                                <Link to={activeCrumbs}>{crumb}</Link>
                            }
                        </div>
                    </>
                )
            }
            return (
                <div className={'crumb'} key={crumb}>
                    {index === array.length - 1 ?
                        <p>{crumb}</p>
                        :
                        <Link to={activeCrumbs}>{crumb}</Link>
                    }
                </div>
            )
        })

    return (
        <>
            {crumbs.length ?
                <div className={'breadcrumbs'}>
                    {crumbs}
                </div>
                : null
            }
        </>
    );
};

export default BreadCrumbs;