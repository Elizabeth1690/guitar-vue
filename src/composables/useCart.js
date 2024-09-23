import { ref } from 'vue';

const cart = ref([]);

export function useCart() {
  const addToCart = (product) => {
    const existingProduct = cart.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId) => {
    const index = cart.value.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.value[index].quantity--;
      if (cart.value[index].quantity === 0) {
        cart.value.splice(index, 1);
      }
    }
  };

  const getCartItems = () => {
    return cart.value;
  };

  const emptyCart = () => {
    cart.value = [];
  };

  return { addToCart, removeFromCart, getCartItems, emptyCart };
}
