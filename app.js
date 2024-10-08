// app.js
function RecipeFinderApp() {
    return (
      <div className="container">
        <h1 className="text-center">Recipe Finder Web</h1>
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a recipe..."
          />
          <button className="btn btn-primary mt-3">Find Recipe</button>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<RecipeFinderApp />, document.getElementById('root'));