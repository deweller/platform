import ActivityFeed from 'components/activity-feed/ActivityFeed';
import React from 'react';
import { useParams } from 'react-router-dom';
import SingleContractData from '../components/single-contract/SingleContractData';
import SingleContractHeading from '../components/single-contract/SingleContractHeading';
import { ISingleContractRouteParams } from '../interfaces/routes/ISingleContractRouteParams';
import { contracts } from '../mocks/contracts';

const SingleContract: React.FC = () => {
  const { id } = useParams<ISingleContractRouteParams>();

  // TODO: Replace mock
  const contract = contracts.find((item) => item.id === id);

  return contract ? (
    <>
      <SingleContractHeading contract={contract} />
      <SingleContractData />
      <ActivityFeed />
    </>
  ) : null;
};

export default SingleContract;
