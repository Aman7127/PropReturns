import React from 'react';
import stories from "./storydata";
import Stories from 'react-insta-stories'
import Header from "./components/Header"
import "../src/App.css";



function App() {
  return (
    <>
    <Header />
    <div className="App">
      <div className="stories">
				<Stories   //npm package (react-insta-stories)
					keyboardNavigation
					//defaultInterval={8000}
					stories={stories}
					onStoryEnd={(s, st) => console.log('story ended', s, st)}
					onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)}
					onStoryStart={(s, st) => console.log('story started', s, st)}
					storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
				/>
			</div>
    </div>
    </>
  );
}

export default App;
