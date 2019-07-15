# ProductItem

**ProductItem** - компонент карточки товара с (картинкой, рейтингом и ценой)

## Props:

Компонент принимает следующие props.

| Prop            | Type     | Description                            |
| --------------- | -------- | -------------------------------------- |
| isInStock       | boolean  | статус товара (В наличии / Недоступен) |
| img             | string   | ссылка на картинку                     |
| title           | node     | название товара                        |
| price           | node     | цена товара                            |
| subPriceContent | node     | старая цена товара                     |
| maxRating       | number   | максимальный рейтинг                   |
| rating          | number   | рейтинг товара                         |
| ratingComponent | function | компонент для определения рейтинга     |

_Все props являются обязательными!_

### Пример использования:

```jsx
const ratingComponent = ({ isFilled }) => {
  return <div className={isFilled && "starFill"} />;
};

class ProductPage extends React.Component {
  render() {
    return (
      <>
        <ProductItem
          isInStock={true}
          img={imgProduct}
          title="Название первого товара"
          price="3 000"
          subPriceContent="4 000"
          maxRating="5"
          rating="4"
          ratingComponent={ratingComponent}
        />

        <ProductItem
          isInStock={true}
          img={imgProduct}
          title="Название второго товара"
          price="2 000"
          subPriceContent="2 500"
          maxRating="5"
          rating="3"
          ratingComponent={ratingComponent}
        />
      </>
    );
  }
}
```
