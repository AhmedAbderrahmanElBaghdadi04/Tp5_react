import Content from './src11111/Components/Content/Content';
import ThemeContextProvider from './src11111/Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
