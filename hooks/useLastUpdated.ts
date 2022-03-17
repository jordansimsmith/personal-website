import React from 'react';

export const useLastUpdated = () => {
  const [lastUpdated, setLastUpdated] = React.useState<Date>();

  // fetch last commit to master branch
  React.useEffect(() => {
    const url =
      'https://api.github.com/repos/jordansimsmith/personal-website/branches/master';

    fetch(url)
      .then((data) => data.json())
      .then((json) =>
        setLastUpdated(new Date(json.commit.commit.committer.date)),
      )
      .catch((err) => console.error(err));
  }, []);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  if (!lastUpdated) {
    return null;
  }

  return `${monthNames[lastUpdated.getMonth()]} ${lastUpdated.getFullYear()}`;
};
