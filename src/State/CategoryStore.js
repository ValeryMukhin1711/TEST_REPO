import { makeAutoObservable } from "mobx";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCategories() {
    try {
      const response = await fetch("http://localhost:3333");
      const data = await response.json();
      this.categories = data;
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
    }
  }
}

export const categoryStore = new CategoryStore();
