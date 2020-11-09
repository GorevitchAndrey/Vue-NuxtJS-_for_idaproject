<template>
  <div class="modal">
    <p class="text">Add new vehicle</p>
    <div class="addPost">
      <input type="file" id="image_uploads" @change="onFileChange" />
    </div>

    <input type="text" class="nameInp" v-model="name" />
    <input type="text" class="descriptionInp" v-model="description" />
    <input type="text" class="priceInp" v-model="rent" />
    <button class="btn" @click.prevent="send">Complete</button>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "", description: null, rent: 0, image: null, preview: null };
  },
  methods: {
    send() {
      this.$store.commit("pushVehicle", {
        id: this.generateId(),
        name: this.name,
        description: this.description,
        rent: this.rent,
        preview: this.preview,
        image: this.image,
      });
      this.$emit("onSend");
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.preview = URL.createObjectURL(file);
      console.log(this.preview, file);
      this.image = this.preview;
    },
    generateId() {
      return Math.random().toString(20).substr(2, 6);
    },
  },
};
</script>
