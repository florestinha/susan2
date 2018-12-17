import React from 'react';
import PropTypes from 'prop-types';
import noUserIcon from '../../../../../images/no-user-icon.png';
import RecipesIcon from '../../../../../components/Icons/RecipesIcon';
import GardensIcon from '../../../../../components/Icons/GardensIcon';

const PlantItem = ({ plant }) => {
  return (
    <div className="p-2 border">

      <div className="media">

        <img
          className="rounded m-1"
          style={{
            height: '55px',
          }}
          src={plant.picture || noUserIcon}
          alt="plant profile"
        />

        <div className="media-body text-truncate">

          <div className="text-uppercase">
            <h5><strong>{plant.name}</strong></h5>
          </div>

          <div className="d-flex justify-content-between">

            <div>
              <div className="text-secondary">
                COMESTÍVEIS:
              </div>

              <div className="text-truncate">
                {plant.edibleParts}
              </div>
            </div>

            <div className="d-flex">
              <RecipesIcon count={0} />
              <GardensIcon count={1} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

PlantItem.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default PlantItem;
