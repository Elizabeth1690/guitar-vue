<template>
  <div>
    <header class="py-5 header">
      <div class="container-xl">
        <div class="row justify-content-center justify-content-md-between">
          <div class="col-8 col-md-3">
            <a href="index.html">
              <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <Cart />
        </div>
        <!--.row-->

        <div class="row mt-5">
          <div class="col-md-6 text-center text-md-start pt-5">
            <h1 class="display-2 fw-bold">Modelo VAI</h1>
            <p class="mt-5 fs-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, possimus quibusdam dolor nemo velit quo, fuga omnis,
              iure molestias optio tempore sint at ipsa dolorum odio
              exercitationem eos inventore odit.
            </p>
            <p class="text-primary fs-1 fw-black">$399</p>
            <button
              type="button"
              class="btn fs-4 bg-primary text-white py-2 px-5"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>

      <img
        class="header-guitarra"
        src="/img/header_guitarra.png"
        alt="imagen header"
      />
    </header>

    <main class="container-xl mt-5">
      <h2 class="text-center">Nuestra Colección</h2>
      <Product />
    </main>

    <footer class="bg-dark mt-5 py-5">
      <div class="container-xl">
        <p class="text-white text-center fs-4 mt-4 m-md-0">
          GuitarLA - Todos los derechos Reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Cart from "../components/Cart.vue";
import Product from "../components/Product.vue";
</script>

<style scoped></style>
