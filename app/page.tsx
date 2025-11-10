
export default function Home() {
  return (
      <main>
          <div className="window" style={{marginTop: '120px'}}>
              <div className="title-bar">
                  <div className="title-bar-text">A Window With A Status Bar</div>
              </div>
              <div className="window-body">
                  <p> There are just so many possibilities:</p>
                  <ul>
                      <li>A Task Manager</li>
                      <li>A Notepad</li>
                      <li>Or even a File Explorer!</li>
                  </ul>
              </div>
              <div className="status-bar">
                  <p className="status-bar-field">Press F1 for help</p>
                  <p className="status-bar-field">Slide 1</p>
                  <p className="status-bar-field">CPU Usage: 14%</p>
              </div>
          </div>
      </main>
  );
}
