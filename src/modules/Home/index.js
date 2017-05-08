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

      <Commentable objectId="3">
        <img src="http://lorempixel.com/400/200/sports/" width={400} height={200} alt="placeholder"/>
      </Commentable>

      <Comments/>
    </div>
  );
}

export default Home;
