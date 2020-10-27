import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';
import {Link} from 'react-router-dom';
import Badge from '../components/Badge';


function BadgeDetails(props){
    const badge = props.badge;

    return(
        <div>
                <div className="BadgeDetails__hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <img src={confLogo} alt="Logo de la Conferencia"></img>
                            </div>
                            <div class="col-6 BadgeDetails__hero-attendant-name">
                                <h1>  {badge.firstName} {badge.lastName} </h1>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="container">
                    <div className="row">
                        <div class="col-6">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                        </div>
                        <div class="col-6">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                        Edit
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-danger" to={`/badges/${badge.id}/delete`}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BadgeDetails;