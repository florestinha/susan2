import React from 'react';
import PropTypes from 'prop-types';

import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

import noUserIcon from '../../../../images/no-user-icon.png';

const GardenerDetails = ({
  name,
  picture,
  description,
}) => (
  <div>
    {/* <img
      style={{
        height: '180px',
      }}
      src={picture || noUserIcon}
      alt="user profile"
    /> */}
    <Image
      cloudName="guidodutra"
      publicId="onestack/bpryc1e91gcgljg9g1v3"
    />

    <div className="px-3">

      <div className="my-4">
        <h4>{name}</h4>
      </div>

      <div className="text-primary mb-1">
        Breve descrição:
      </div>
      {description}

      <div className="mt-4 text-primary">
        Seus jardins:
      </div>

      <div className="row">
        <div className="col">Jardim 1</div>
        <div className="col">Jardim 2</div>
        <div className="col">Jardim 3</div>
        <div className="col">Jardim 4</div>
        <div className="col">Jardim 5</div>
        <div className="col">Jardim 6</div>
        <div className="col">Jardim 7</div>
        <div className="col">Jardim 8</div>
      </div>

      <div className="mt-4 text-primary">
        Receitas:
      </div>

      <div>Receita1</div>
      <div>Receita2</div>
      <div>Receita3</div>

    </div>

    <div style={{ height: '50px' }} />

  </div>
);

GardenerDetails.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  description: PropTypes.string,
};

GardenerDetails.defaultProps = {
  picture: '',
  description: '',
};

export default GardenerDetails;
