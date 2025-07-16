import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create()(
	persist(
		(set, get) => ({
			products: [],
			addToCart: (product, quantity) => {
				set((state) => {
					const existingProduct = state.products.find((p) => p.id == product.id)
					if (existingProduct) {
						return {
							products: state.products.map(p => p.id === product.id
								? { ...p, quantity: (p.quantity || 1) + quantity } : p
							),
						};
					}
					return { products: [...state.products, { ...product, quantity: quantity }] }
				})
			},

			removeFromCart: (productIds) => {
				
				set((state) => ({
					products: Array.isArray(productIds)
						? state.products.filter((product) => !productIds.includes(product.id))
						: state.products.filter((product) => product.id !== productIds)
				}));
			},

			updateQuantity: (productId, quantity) => {
				set((state) => ({
					products: state.products.map((product) => product.id === productId
						? { ...product, quantity } : product
					),
				}))
			},

			clearCart: () => {
				set({ products: [] })
			},

			totalItems: () => {
				return get().products.reduce((total, product) => total + (product.quantity || 1), 0);
			},

			totalPrice: () => {
				return get().products.reduce((total, product) => total + product.price * (product.quantity || 1), 0).toFixed(2)
			},

			totalDiscountPrice: () => {
				console.log(get().products)
				return get().products.reduce((total, product) => total + product.price * product.quantity / 100 * product.discount || 0, 0).toFixed(2)
			},
			highlightItems: () => {

			}
		}),
		{
			name: 'cart-storage',
		}
	)
);