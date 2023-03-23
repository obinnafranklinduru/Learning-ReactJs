import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/obinnafranklinduru';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const resp = await fetch(url);
        if (!resp.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        const user = await resp.json();
        setUser(user);
        // console.log(user);
      } catch (error) {
        setError(true)
        console.error(error);
      }
      setLoading(false)
      setError(false)
    }
    fetchUser();
  },[]);

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>There was an error...</h2>
  }

  const { avatar_url, name, location, bio } = user;
  return (
    <div>
      <img style={{ width: '150px', borderRadius: '25px' }} src={avatar_url} alt="avatar_url" />
      <h2>{name}</h2>
      <h4>lives in: {location}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
