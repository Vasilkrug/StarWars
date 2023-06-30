import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import './BreadCrumbs.scss';

const BreadCrumbs = () => {
    const location = useLocation();
    const navigation = useNavigate();

    let activeCrumbs = ''
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            activeCrumbs += `/${crumb}`
            if (crumb === 'StarWars'){
                navigation('/')
            }
            if (index === 0) {
                return (
                    <>
                        <div key={crumb} className={'crumb'}>
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