import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import SearchPrompts from "./components/SearchPrompts";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
function App() {
	const persistor = persistStore(store);
	// persistor.purge();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div className="Container">
					{/* <AddPrompt /> */}
					<SearchPrompts />
				</div>
			</PersistGate>
		</Provider>
	);
}

export default App;
