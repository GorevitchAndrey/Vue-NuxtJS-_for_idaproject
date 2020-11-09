import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
    new Vuex.Store({
        state: {
            vehicles: []
        },
        mutations: {
            savevechiles(state, vehicles) {
                state.vehicles = vehicles;
            },
            pushVehicle(state, vehicle) {
                state.vehicles.unshift(vehicle);
            }
        },
        getters: {
            getVechicles: state => {
                return state.vehicles;
            }
        },
    })

export default store