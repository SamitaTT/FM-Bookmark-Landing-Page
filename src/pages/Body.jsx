export function Hero() {
  return (
    <div>
      <div>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
      <div>
        <img
          src="./src/assets/images/illustration-hero.svg"
          alt="preview-browser"
        ></img>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div>
        <p>Simple Bookmark</p>
        <p>Speedy Searching</p>
        <p>Easy Sharing</p>
      </div>
    </div>
  );
}

export function Download() {
  return (
    <div>
      <h1>Download the extension</h1>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div>
        <img src="./src/assets/images/logo-chrome.svg" alt="chrome-logo"></img>
        <h3>Add to Chrome</h3>
        <p>Minimum version 62</p>
        <img src="./src/assets/images/bg-dots.svg" alt="bg-dots"></img>
        <br />
        <button>Add & Install Extension</button>
      </div>
    </div>
  );
}
