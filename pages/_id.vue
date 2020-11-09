<template>
  <div v-if="vehicle" class="main">
    <div class="image__lot">
      <img class="image__lot-main" :src="vehicle.image" :alt="vehicle.name" />
    </div>
    <div class="all-discription">
      <div class="info__lot">
        <div class="info__lot-title">{{ vehicle.name }}</div>
        <ul class="info__lot-links">
          <li v-for="tab in tabs">
            <NuxtLink :to="'/tabs/' + tab.title">
              {{ tab.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="">
        <NuxtChild :key="$route.params.title" />
      </div>
      <div class="info__lot-description">
        {{ vehicle.specifications_text }}
      </div>
      <div class="container__description">
        <div class="info__lot-features">Features:</div>
        <div class="info__lot-features-one">
          <div class="info__lot-first-img">
            <img
              class="info__lot-first-image"
              src="../assets/img/icon_card_mini/Frame1.png"
              alt=""
            />
          </div>
          <div class="features__discription-one">
            <p class="features__discription-one-title">
              A challenge for a true champion
            </p>
            <p class="features__discription-one-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
        <div class="info__lot-features-two">
          <div class="info__lot-two-img">
            <img
              class="info__lot-two-image"
              src="../assets/img/icon_card_mini/Frame2.png"
              alt=""
            />
          </div>
          <div class="features__discription-two">
            <p class="features__discription-two-title">Pilot's sweaty hands</p>
            <p class="features__discription-two-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
      <div class="info__lot-buy">
        <div class="info__lot-buy-price">Rent for <span>164 $/h</span></div>
        <div class="info__lot-buy-btn">
          <p class="info__lot-buy-p">Rent now</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getVehicles } from "@/request.js";
export default {
  async created() {
    await getVehicles()
      .then((res) => {
        this.vehicle = res.find(
          (vehicle) => vehicle.id === this.$route.params.id
        );
        console.log(this.vehicle);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  data() {
    return {
      vehicle: null,
      tabs: [
        { title: "Specifications" },
        { title: "Team" },
        { title: "Rent terms" },
      ],
    };
  },
};
</script>

