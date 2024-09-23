<template>
  <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
    <div class="carrito">
      <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
      <div id="carrito" class="bg-white p-3">
        <p class="text-center">
          El carrito
          {{ cartItems.length === 0 ? "está vacío" : "tiene productos" }}
        </p>
        <table class="w-100 table" v-if="cartItems.length > 0">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <img
                  class="img-fluid"
                  :src="item.image"
                  :alt="`imagen ${item.name}`"
                />
              </td>
              <td>{{ item.name }}</td>
              <td class="fw-bold">${{ item.price }}</td>
              <td class="flex align-items-start gap-4">
                <button
                  type="button"
                  class="btn btn-dark"
                  @click="removeFromCart(item.id)"
                >
                  -
                </button>
                {{ item.quantity }}
                <button
                  type="button"
                  class="btn btn-dark"
                  @click="addToCart(item)"
                >
                  +
                </button>
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  type="button"
                  @click="removeFromCart(item.id)"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-end">
          Total pagar:
          <span class="fw-bold"
            >${{
              cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            }}</span
          >
        </p>
        <button
          class="btn w-100 mt-3 p-2"
          :class="cartItems.length > 0 ? 'bg-orange text-black' : 'btn-dark'"
          @click="cartItems.length > 0 ? openModal() : emptyCart()"
        >
          {{ cartItems.length > 0 ? "Pagar" : "Vaciar Carrito" }}
        </button>
      </div>
    </div>


    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>¡Gracias por tu compra!</h2>
        <p>
          Apreciamos tu preferencia. Esperamos verte de nuevo pronto para
          disfrutar de nuestros productos y servicios. Si tienes alguna
          pregunta, no dudes en contactarnos.
        </p>
        <button class="btn btn-dark" @click="closeModal">Cerrar</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCart } from "../composables/useCart";

const { getCartItems, addToCart, removeFromCart, emptyCart } = useCart();
const cartItems = computed(() => getCartItems());

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handlePayment = () => {
  openModal();
};
</script>

<style scoped>
.bg-orange {
  background-color: #ffa500; 
}
.text-black {
  color: black;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 90%; 
  max-width: 500px; 
  margin: 0 auto;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
