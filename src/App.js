import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="200px" className="App-logo" alt="logo" />
        <div className="container">
          <h1 className="title">
            Hello World
            <span aria-label="emoji" role="img">
              🔥
            </span>
          </h1>
          <input type="text" className="new-task" />
        </div>
      </header>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    return (
      <input
        onChange={this.handleTaskChange}
        type="text"
        className="new-task"
      />
    );
  }
}

export default App;
