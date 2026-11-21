export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: 'board' | 'expansion'
  description: string
  features: string[]
}

export type ScentCollection = {
  id: string
  name: string
  price: number
  image: string
  description: string
  notes: string[]
}

export const BOARD: Product = {
  id: 'board-1',
  name: 'SniffTrail Puzzle Board',
  price: 5900,
  image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80&auto=format&fit=crop',
  category: 'board',
  description:
    'A reusable scent-puzzle board with movable compartments, sliders, flip lids, and latches. Keeps your dog mentally stimulated for weeks, not days.',
  features: [
    'Multiple movable compartments',
    'Scented pouch slots',
    'Sliders, flip lids & latches',
    'Reconfigurable layout',
    'Weather-resistant bamboo',
  ],
}

export const EXPANSION_PACKS: Product[] = [
  {
    id: 'expansion-1',
    name: 'Trail Extender Pack',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1596620537861-1d4d5b92e04f?w=600&q=80&auto=format&fit=crop',
    category: 'expansion',
    description: 'Add four extra compartments and a rotating dial for dogs who have mastered the base board.',
    features: ['4 extra compartments', 'Rotating scent dial', 'Snap-in installation'],
  },
  {
    id: 'expansion-2',
    name: 'Challenge Climber Pack',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1602665693980-789a6f8a9c18?w=600&q=80&auto=format&fit=crop',
    category: 'expansion',
    description: 'Sliding bridges and lift-up flaps that raise the difficulty for advanced sniffers.',
    features: ['Sliding bridges', 'Lift-up flaps', 'Advanced mechanism'],
  },
]

export const SCENT_COLLECTIONS: ScentCollection[] = [
  {
    id: 'forest',
    name: 'Forest Trail',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80&auto=format&fit=crop',
    description:
      'Earthy pine, damp moss, and cedarwood — a walk through the woods in every pouch.',
    notes: ['Pine', 'Moss', 'Cedarwood'],
  },
  {
    id: 'herb',
    name: 'Herb Trail',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1591706810935-466319864f0e?w=600&q=80&auto=format&fit=crop',
    description:
      'Fresh lavender, rosemary, and mint — a garden breeze your dog will love to track.',
    notes: ['Lavender', 'Rosemary', 'Mint'],
  },
  {
    id: 'animal',
    name: 'Other-Animal Trail',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1552053832-13006d9d150b?w=600&q=80&auto=format&fit=crop',
    description:
      'Subtle wildlife scents that awaken your dog\'s natural tracking instincts.',
    notes: ['Deer', 'Rabbit', 'Squirrel'],
  },
]

export const SUBSCRIPTION_TIERS = [
  {
    id: 'monthly',
    label: 'Monthly',
    price: 1800,
    saving: 'Cancel anytime',
  },
  {
    id: 'quarterly',
    label: 'Every 3 Months',
    price: 4800,
    saving: 'Save 11%',
  },
  {
    id: 'biannual',
    label: 'Every 6 Months',
    price: 9000,
    saving: 'Save 16%',
  },
] as const
