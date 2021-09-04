import { action, createStore } from "easy-peasy";

const store = createStore({
  restaurant: JSON.parse(localStorage.getItem("sn_rest_restaurant") || null),
  setRestaurant: action((state, payload) => {
    state.restaurant = payload;
    localStorage.setItem("sn_rest_restaurant", JSON.stringify(payload));
  }),

  itemCategories: [],
  setItemCategories: action((state, payload) => {
    state.itemCategories = payload;
  }),
  addItemCategory: action((state, payload) => {
    state.itemCategories.push(payload);
  }),
  updateItemCategory: action((state, payload) => {
    const index = state.itemCategories.findIndex(
      (item) => item.id === payload.id
    );
    if (index >= 0) {
      state.itemCategories[index] = payload;
    }
    if (
      state.selectedItemCategory &&
      state.selectedItemCategory.id === payload.id
    ) {
      state.selectedItemCategory = payload;
    }
  }),
  updateItem: action((state, payload) => {
    const index = state.itemCategories.findIndex(
      (item) => item.id === payload.item_category_id
    );
    if (index >= 0) {
      const itemIndex = state.itemCategories[index].items.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.itemCategories[index].items[itemIndex] = payload;
      }
    }
    if (
      state.selectedItemCategory &&
      state.selectedItemCategory.id === payload.item_category_id
    ) {
      const itemIndex = state.selectedItemCategory.items.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.selectedItemCategory.items[itemIndex] = payload;
      }
    }
  }),
  addItem: action((state, payload) => {
    const index = state.itemCategories.findIndex(
      (item) => item.id === payload.item_category_id
    );
    if (index >= 0) {
      state.itemCategories[index].items.push(payload);
    }
    if (
      state.selectedItemCategory &&
      state.selectedItemCategory.id === payload.item_category_id
    ) {
      state.selectedItemCategory.items.push(payload);
    }
  }),

  selectedItemCategory: null,
  setSelectedItemCategory: action((state, payload) => {
    state.selectedItemCategory = payload;
  }),

  openEditCategory: false,
  setOpenEditCategory: action((state, payload) => {
    state.openEditCategory = payload;
    if (payload === false) {
      state.categoryToEdit = null;
    }
  }),
  categoryToEdit: null,
  setCategoryToEdit: action((state, payload) => {
    state.categoryToEdit = payload;
  }),

  openEditItem: false,
  setOpenEditItem: action((state, payload) => {
    state.openEditItem = payload;
    if (payload === false) {
      state.itemToEdit = null;
    }
  }),
  itemToEdit: null,
  setItemToEdit: action((state, payload) => {
    state.itemToEdit = payload;
  }),
});

export default store;
