import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="logo192.png" alt="the logo" />
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Setting</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://images3.alphacoders.com/102/102727.jpg"
            alt="background"
          />
        </div>
        <div>ava + descritions</div>
        <div>My posts</div>
        <div>New post</div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
};

export default App;
