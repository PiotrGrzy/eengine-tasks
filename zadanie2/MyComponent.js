import React from 'react';

// Błędy :

// - literówka React.Component nie React.component

// - jezeli inicjujemy state w constructorze, nalezy przekazac propsy z tzw klasy nadrzędnej poprzez super(props)

// - metoda increase ma nieprawidłowy i niepotrzebny parametr this

// - obie metody (increase oraz addItem) w sposób niewłaściwy probują modyfikować stan, nie wykorzystują medoty setState(), zdefiniowe w ten sposób mają również niewłaściwe wiązanie this, można to rozwiązać poprzez zamiane metod na funkcje strzałkowe lub zastosowanie  metody bind() ('bind(this)')

// - metoda addItem mutuje stan, zamiast przekazywac jego nowa wartość do setState()

// - w JSX nie używamy class tylko className

// - metoda render() powinna coś zwracać i powinno być to owrappowane w pojedynczy element, można użyć React.Fragment

// - eventy w JSX piszemy camelCasem onclick => onClick

// Komponent po poprawkach:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      items: [1, 2],
    };
  }

  increase = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  addItem = () => {
    const newItems = [...this.state.items, this.state.items.length + 1];
    this.setState({ items: newItems });
  };

  render() {
    return (
      <main>
        <div className='data'>
          <div>{this.state.counter}</div>
          <ul>
            {this.state.items.map((item) => (
              <li key={item}>element {item}</li>
            ))}
          </ul>
        </div>
        <div className='actions'>
          <button type='button' onClick={this.increase}>
            zwiększ
          </button>
          <button type='button' onClick={this.addItem}>
            dodaj
          </button>
        </div>
      </main>
    );
  }
}

export default MyComponent;
