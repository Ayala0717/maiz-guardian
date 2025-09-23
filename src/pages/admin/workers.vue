<script setup lang="ts">
defineOptions({ name: 'WorkersPage' })
</script>

<template>
  <section class="container">
    <h2>Seleccionar un trabajador</h2>
    <section class="contact-container">
      <ContactInfo
        id="jose-escobar"
        name="Jose Escobar"
        phone="+56 987654321" />
      <ContactInfo
        id="maria-gonzalez"
        name="Maria Gonzalez"
        phone="+56 987654321" />
      <ContactInfo id="jorge-perez" name="Jorge Perez" phone="+56 987654321" />
      <ContactInfo id="kevin" name="Kevin Guerrero" phone="+56 987654321" />
    </section>
  </section>
</template>

<style scoped>
.container {
  padding: 16px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
}
.contact-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 36px;

  .contact-info {
    display: grid;
    grid-template-columns: 60px 1fr 40px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
    background: #f3f4f6;

    img {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      object-fit: cover;
    }
  }
}
</style>
