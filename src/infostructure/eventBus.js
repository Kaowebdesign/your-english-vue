import Vue from 'vue'


export const EventBus = new Vue({
    methods: {
        notify(eventName, eventParam) {
            this.$emit(eventName, eventParam)
        }
    }
})


export function setupBus() {
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function() {
                return EventBus
            }
        }
    })
}