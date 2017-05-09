import React from 'react';
import AppBar from 'material-ui/AppBar';
import Commentable from '../Commentable';
import Comments from '../Comments';
import Users from '../Users';

function Home() {
  return (
    <div>
      <AppBar showMenuIconButton={false} titleStyle={{ display: 'none' }}>
        <Users />
      </AppBar>

      <section className="commentable-objects">
        <Commentable objectId="1">
          Simple text
        </Commentable>

        <Commentable objectId="2">
          Simple text
        </Commentable>

        <Commentable objectId="3">
          <img src="http://lorempixel.com/400/200/sports/" width={400} height={200} alt="placeholder"/>
        </Commentable></section>
      <Comments/>
    </div>
  );
}

export default Home;
