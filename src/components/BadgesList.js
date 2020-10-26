import React from 'react';

import './styles/BadgesList.css';
import {library } from  '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee } from '@fortawesome/free-solid-svg-icons';

import avatarUrl from '../images/profile.jpg';
import { Link } from 'react-router-dom';

library.add( faCoffee);


class BadgesListItem extends React.Component{
  render(){

    if(this.props.badges.length===0){
      return(
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="badges/new/">Create new badge</Link>
        </div>
      )
    }
    return(
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge =>{
          return(
            <li className="BadgesListItem" key={badge.id}>
              <div className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="logo"
              />

              <div>
                <strong>
                  {badge.firstName} {badge.lastName}
                </strong>
                <br />@{badge.twitter}
                <br />
                {badge.jobTitle}
              </div>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}
export default BadgesListItem;

// class BadgesListItem extends React.Component {
//   render() {
//     return (
//       <div className="BadgesListItem">
//         <img
//           className="BadgesListItem__avatar"
//           src={this.props.badge.avatarUrl}
//           alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
//         />

//         <div>
//           <strong>
//             {this.props.badge.firstName} {this.props.badge.lastName}
//           </strong>
//           <br />@{this.props.badge.twitter}
//           <br />
//           {this.props.badge.jobTitle}
//         </div>
//       </div>
//     );
//   }
// }

// class BadgesList extends React.Component {
//   render() {
//     return (
//       <div className="BadgesList">
//         <ul className="list-unstyled">
//           {this.props.badges.map(badge => {
//             return (
//               <li key={badge.id}>
//                 <BadgesListItem badge={badge} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default BadgesList;
