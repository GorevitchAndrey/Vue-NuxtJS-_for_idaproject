<template>
  <div class="main__container">
    <div class="main__container-nav">
      <div class="main__container-nav-rent">
        <div class="rent">
          Rent
          <span class="whatever">
            {{ selectedtype }}
          </span>
          <select @change="selecttype()" v-model="selectedtype">
            <option v-for="type in types" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>
      <div class="main__container-nav-buttonAdd" @click="addNew">
        <div class="main__container-nav-buttonAdd-text">Add new</div>
        <img src="../assets/img/button_add/Group5.png" alt="" />
      </div>
    </div>
    <div class="main__container-card-aircraft">
      <div class="card-aircraft" v-for="vehicle in vehicles" :key="vehicle.id">
        <img :src="vehicle.preview" :title="vehicle.name" :alt="vehicle.name" />
        <div class="product-description">
          <span
            @click="showVehicle(vehicle)"
            class="product-description-title"
            >{{ vehicle.name }}</span
          >
          <span class="product-description-decription">{{
            vehicle.description
          }}</span>
          <span class="product-description-price">{{ vehicle.rent }} $/h</span>
        </div>
      </div>
    </div>
    <Modal v-if="showModal" @onSend="onSend()"> </Modal>
  </div>
</template>

<script>
import { getVehicles } from "@/request.js";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      types: [],
      selectedtype: null,
      showModal: false,
    };
  },
  methods: {
    showVehicle(vehicle) {
      this.$router.push({
        path: vehicle.id,
      });
    },
    addNew() {
      this.showModal = !this.showModal;
    },
    selecttype() {
      this.$router.push({ query: { type: this.selectedtype } });
      this.fetchVhicles();
    },
    fetchVhicles() {
      getVehicles()
        .then((res) => {
          let vehiclelist = res;
          if (this.$route.query.type) {
            vehiclelist = vehiclelist.filter(
              (v) => v.type === this.$route.query.type
            );
          }
          this.$store.commit("savevechiles", vehiclelist);
          let vehiletypes = res.map((v) => v.type);
          this.types = [...new Set(vehiletypes)];
          console.log(this.types);
        })
        .catch((e) => {
          console.log(e);
          this.$router.push("/occurred");
        });
    },
    onSend() {
      this.showModal = false;
    },
  },
  created() {
    this.fetchVhicles();
  },
  computed: {
    vehicles() {
      return this.$store.getters.getVechicles;
    },
  },
  // call fetch only on client-side
};
</script>

<style>
</style>
