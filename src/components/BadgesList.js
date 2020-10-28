import React from 'react';

import './styles/BadgesList.css';
import {library } from  '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee } from '@fortawesome/free-solid-svg-icons';

import avatarUrl from '../images/profile.jpg';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
library.add( faCoffee);

function useSearchBadges(badges) {
  const [query, setQuery]= React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(()=>{ 
    const result = badges.filter(badge=>{
    return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  });
  setFilteredBadges(result);
  },[badges,query]);

  return {setQuery, filteredBadges}
}

function BadgesListItem(props){

    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges);


    if(filteredBadges.length===0){
      return(
        <div>
          <div className="form-group">
            <label>Filter Badges</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={e => {
                // console.log(e.target.value);
                setQuery(e.target.value);
              }}
            />
          </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="badges/new/">Create new badge</Link>
        </div>
      );
    }
    return(
      <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            // console.log(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </div>

      
      <ul className="list-unstyled">
        {filteredBadges.map(badge =>{
          return(
            <li className="BadgesListItem" key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <div className="BadgesListItem">
                  <Gravatar className="Badge__avatar" email={badge.email} alt="Avatar"/>

                  <div>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                    <br />@{badge.twitter}
                    <br />
                    {badge.jobTitle}
                  </div>
                  </div>
              </Link>
            </li>
          )
        })}
      </ul>
      </div>
    );
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
