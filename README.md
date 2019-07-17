# ProductItem

**ProductItem** — компонент карточки товара с картинкой, рейтингом и ценой.

## Props:

Компонент принимает следующие props.

| Prop            | Type     | Description                                                                                                                                                                       |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isInStock       | boolean  | статус товара (В наличии / Недоступен)                                                                                                                                            |
| img             | string   | ссылка на картинку                                                                                                                                                                |
| title           | node     | название товара                                                                                                                                                                   |
| price           | node     | цена товара                                                                                                                                                                       |
| subPriceContent | node     | контент справа от цены                                                                                                                                                            |
| maxRating       | number   | максимально возможное значение рейтинга для товара                                                                                                                                |
| rating          | number   | рейтинг товара                                                                                                                                                                    |
| ratingComponent | function | компонент, отвечающий за рендеринг одной единицы рейтинга. Принимает пропс isFilled и в зависимости от его значения (true или false ) рендрит закрашенный/пустой элемент |

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
          maxRating={5}
          rating={4}
          ratingComponent={ratingComponent}
        />

        <ProductItem
          isInStock={true}
          img={imgProduct}
          title="Название второго товара"
          price="2 000"
          subPriceContent="2 500"
          maxRating={5}
          rating={3}
          ratingComponent={ratingComponent}
        />
      </>
    );
  }
}
```
