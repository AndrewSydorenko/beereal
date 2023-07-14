import { create } from 'zustand';

const useStore = create((set) => ({
    recipes: [],
    currentPage: 1,
    perPage: 15,
    selectedRecipes: new Set(),
    loadRecipes: async () => {
        const { currentPage, perPage } = useStore.getState();
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${perPage}`);
        const recipes = await response.json();
        set({ recipes });
    },
    loadMoreRecipes: async () => {
        const { currentPage, perPage } = useStore.getState();
        const nextPage = currentPage + 1;
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${nextPage}&per_page=${perPage}`);
        const newRecipes = await response.json();
        set((state) => ({ recipes: [...state.recipes, ...newRecipes], currentPage: nextPage }));
    },
    toggleRecipeSelection: (recipeId) => {
        set((state) => {
            const selectedRecipes = new Set(state.selectedRecipes);
            selectedRecipes.has(recipeId) ? selectedRecipes.delete(recipeId) : selectedRecipes.add(recipeId);
            return { selectedRecipes };
        });
    },
    deleteSelectedRecipes: () => {
        set((state) => {
            const recipes = state.recipes.filter((recipe) => !state.selectedRecipes.has(recipe.id));
            return { recipes, selectedRecipes: new Set() };
        });
    },
}));

export default useStore;