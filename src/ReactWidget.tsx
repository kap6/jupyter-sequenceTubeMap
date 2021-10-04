import React from 'react';
import { WidgetModel } from '@jupyter-widgets/base';
import { useModelState, WidgetModelContext } from './hooks/widget-model';
//import FirstComponent from './components/FirstComponent'
import App from './js/App';


interface WidgetProps {
  model: WidgetModel;
}

function ReactWidget(props: WidgetProps) {
  const [name, setName] = useModelState('value');
  const inputStyle = {
    padding: '7px',
    background: 'whitesmoke',
    border: '1px solid gray',
    borderRadius: '4px',
  }

  return (
    <div className="Widget">
      <App />
     
   
      
      <h1>Hello, {name} Welcome to React and TypeScript. {name}, How is your Day going?</h1>
      <input
        style={inputStyle}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

function withModelContext(Component: (props: WidgetProps) => JSX.Element) {
  return (props: WidgetProps) => (
    <WidgetModelContext.Provider value={props.model}>
      <Component {...props} />
    </WidgetModelContext.Provider>
  );
}

export default withModelContext(ReactWidget);
