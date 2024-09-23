<script setup>
import { useCart } from "../composables/useCart";

const { addToCart } = useCart();

const handleClick = (product) => {
  addToCart(product);
};


const products = [
  { id: 1, name: "Lukather", price: 299, image: "/img/guitarra_01.jpg" },
  { id: 2, name: "SRV", price: 299, image: "/img/guitarra_02.jpg" },
  { id: 3, name: "Borland", price: 299, image: "/img/guitarra_03.jpg" },
  { id: 4, name: "Vai", price: 299, image: "/img/guitarra_04.jpg" },
  { id: 5, name: "Thompson", price: 299, image: "/img/guitarra_05.jpg" },
  { id: 6, name: "White", price: 299, image: "/img/guitarra_06.jpg" },
  { id: 7, name: "Cobain", price: 299, image: "/img/guitarra_07.jpg" },
];
</script>

<template>
  <div class="row mt-5">
    <div
      v-for="product in products"
      :key="product.id"
      class="col-md-6 col-lg-4 my-4 row align-items-center"
    >
      <div class="col-4">
        <img
          class="img-fluid"
          :src="product.image"
          :alt="`imagen ${product.name}`"
        />
      </div>
      <div class="col-8">
        <h3 class="text-black fs-4 fw-bold text-uppercase">
          {{ product.name }}
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
          labore odit magnam in autem nesciunt, amet deserunt
        </p>
        <p class="fw-black text-primary fs-3">${{ product.price }}</p>
        <button
          type="button"
          @click="handleClick(product)"
          class="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>
</template>
