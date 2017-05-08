import React from 'react';
import Commentable from '../Commentable';
import Comments from '../Comments';

function Home() {
  return (
    <div>
      <Commentable objectId="1">
        Simple text
      </Commentable>

      <Commentable objectId="2">
        Simple text
      </Commentable>

      <Comments/>
    </div>
  );
}

export default Home;
