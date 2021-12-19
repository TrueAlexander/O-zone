import getData from "./getData";
import renderGoods from "./renderGoods";
import { minPriceFilter } from "./filters";
import { maxPriceFilter } from "./filters";

const price = () => {
  const minPriceInput = document.querySelector('#min');
  const maxPriceInput = document.querySelector('#max');

  minPriceInput.addEventListener('input', (event) => {
    const minValue = event.target.value;
    getData().then((data) => {
      renderGoods(minPriceFilter(data, minValue));
    })
  })

  maxPriceInput.addEventListener('input', (event) => {
    const maxValue = event.target.value;
    getData().then((data) => {
      renderGoods(maxPriceFilter(data, maxValue));
    })
  })
};

export default price;