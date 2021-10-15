
function App() {

	const createButtons = () => {
		var numbers = []
		for (let i = 1; i < 10; i++) {
			numbers.push(
				<button key={i}>{i}</button>
			)
		}

		return numbers
	}


  return (
    <div className="App">
      <div className="calculator">
			<div className="display">
				<span>(0)</span>0
			</div>

			<div className="operators">
				<button>/</button>
				<button>*</button>
				<button>+</button>
				<button>-</button>
			</div>

			<div className="digits">
				{createButtons()}
				<button>0</button>
				<button>.</button>
				<button>=</button>
			</div>
	  </div>
    </div>
  );
}

export default App;
