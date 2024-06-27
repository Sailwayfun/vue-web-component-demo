import { defineCustomElement } from 'vue';
import Header from "./components/Header.ce.vue";

const mHeader = defineCustomElement(Header);

// 將組件導出 (但是還沒有使用 customElements 註冊)
export { mHeader };

// 註冊組件的函式
export function register() {
    customElements.define('m-header', mHeader);
}