// Global
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// Components
import Card from 'components/Card';
// Actions
import { open } from 'redux/actions/delete-modal.action';
// Stylesheet
import './index.scss';

function Grid({ as, data }) {
  const dispatch = useDispatch();

  const onClickRemove = repository => {
    dispatch(open(repository));
  }

  return (
    <div className={as}>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            onClickRemove={() => onClickRemove(item)}
            name={item.full_name}
            age={item.created_at}
            forksCount={item.forks_count}
            language={item.language}
            lastCommit={item.updated_at}
            license={item.license}
            openIssues={item.open_issues}
            startsCount={item.stargazers_count}
            urlAvatar={item.owner.avatar_url}
          />
        )
      })}
    </div>
  );
}

Grid.propTypes = {
  as: PropTypes.string,
  data: PropTypes.instanceOf(Array),
}

export default Grid;
