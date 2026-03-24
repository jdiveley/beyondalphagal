import { useState } from 'react'
import { ChefHat, Clock, Users } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './Recipes.module.css'

const recipes = [
  {
    id: 1,
    category: 'Breakfast',
    title: 'Smoked Salmon & Avocado Egg Scramble',
    time: '15 min',
    serves: '2',
    description: 'Creamy scrambled eggs with smoked salmon and fresh avocado — a protein-packed start to the day.',
    ingredients: [
      '4 large eggs',
      '2 oz smoked salmon, torn',
      '1 avocado, diced',
      '1 tbsp olive oil',
      '2 tbsp fresh chives, chopped',
      'Salt and black pepper to taste',
      'Squeeze of lemon juice',
      'Toast or gluten-free bread (optional)',
    ],
    steps: [
      'Whisk eggs in a bowl with a pinch of salt and pepper.',
      'Heat olive oil in a non-stick pan over medium-low heat.',
      'Add eggs and stir gently until just set but still creamy.',
      'Remove from heat; fold in smoked salmon.',
      'Top with avocado, chives, and a squeeze of lemon.',
      'Serve immediately on toast if desired.',
    ],
  },
  {
    id: 2,
    category: 'Breakfast',
    title: 'Tropical Chia Pudding Bowl',
    time: '10 min + overnight',
    serves: '2',
    description: 'Creamy chia pudding made with coconut milk, topped with mango, pineapple, and toasted coconut.',
    ingredients: [
      '1/4 cup chia seeds',
      '1 cup full-fat coconut milk',
      '1 tsp vanilla extract',
      '1 tbsp maple syrup',
      '1/2 mango, diced',
      '1/2 cup pineapple chunks',
      '2 tbsp toasted coconut flakes',
      'Fresh lime zest',
    ],
    steps: [
      'Mix chia seeds, coconut milk, vanilla, and maple syrup in a jar.',
      'Stir well, then refrigerate overnight (or at least 4 hours).',
      'Stir again in the morning — pudding should be thick and creamy.',
      'Divide into bowls and top with mango, pineapple, coconut flakes, and lime zest.',
    ],
  },
  {
    id: 3,
    category: 'Lunch',
    title: 'Mediterranean Grilled Chicken Bowl',
    time: '30 min',
    serves: '4',
    description: 'Juicy grilled chicken over herbed quinoa with roasted vegetables, olives, and lemon tahini drizzle.',
    ingredients: [
      '4 chicken breasts',
      '2 tbsp olive oil',
      '1 tsp smoked paprika',
      '1 tsp cumin',
      '1 tsp garlic powder',
      'Salt and pepper',
      '1 cup quinoa, cooked',
      '1 cup cherry tomatoes, halved',
      '1 cucumber, diced',
      '1/2 cup Kalamata olives',
      '1/4 cup fresh parsley',
      '3 tbsp tahini',
      '2 tbsp lemon juice',
      '1 clove garlic, minced',
      '2–3 tbsp water',
    ],
    steps: [
      'Season chicken with olive oil, paprika, cumin, garlic powder, salt, and pepper.',
      'Grill or pan-sear chicken 6–7 min per side until cooked through. Rest 5 min, then slice.',
      'Whisk tahini, lemon juice, garlic, and water until smooth; season to taste.',
      'Build bowls: quinoa base, sliced chicken, tomatoes, cucumber, olives, and parsley.',
      'Drizzle generously with lemon tahini sauce.',
    ],
  },
  {
    id: 4,
    category: 'Lunch',
    title: 'Spicy Tuna & Avocado Rice Bowls',
    time: '20 min',
    serves: '2',
    description: 'Sushi-inspired bowls with seasoned rice, spicy tuna, cucumber, edamame, and sesame drizzle.',
    ingredients: [
      '2 cans (5 oz) tuna in water, drained',
      '2 tbsp sriracha or chili garlic sauce',
      '1 tbsp mayonnaise (egg-based)',
      '1 tsp sesame oil',
      '2 cups cooked sushi rice or jasmine rice',
      '1 tbsp rice vinegar + 1 tsp sugar (for rice)',
      '1/2 cup shelled edamame',
      '1/2 cucumber, thinly sliced',
      '1 avocado, sliced',
      'Soy sauce or tamari, sesame seeds, nori strips to serve',
    ],
    steps: [
      'Season cooked rice with rice vinegar and sugar; let cool slightly.',
      'Mix tuna with sriracha, mayo, and sesame oil. Adjust heat to taste.',
      'Divide rice between bowls.',
      'Top with spicy tuna, edamame, cucumber, and avocado.',
      'Finish with a drizzle of soy sauce and a sprinkle of sesame seeds and nori.',
    ],
  },
  {
    id: 5,
    category: 'Dinner',
    title: 'Lemon Herb Roasted Chicken Thighs',
    time: '50 min',
    serves: '4',
    description: 'Crispy-skinned chicken thighs roasted with garlic, lemon, rosemary, and thyme over root vegetables.',
    ingredients: [
      '8 bone-in, skin-on chicken thighs',
      '3 tbsp olive oil',
      '1 lemon, zested and juiced',
      '4 cloves garlic, minced',
      '2 sprigs fresh rosemary',
      '4 sprigs fresh thyme',
      '1 tsp salt, 1/2 tsp black pepper',
      '2 carrots, chopped',
      '2 parsnips, chopped',
      '1 lb baby potatoes, halved',
    ],
    steps: [
      'Preheat oven to 425°F (220°C).',
      'Toss vegetables with 1 tbsp olive oil, salt, and pepper; spread in a large roasting pan.',
      'Mix remaining olive oil, lemon zest, juice, garlic, rosemary, thyme, salt, and pepper.',
      'Pat chicken dry; rub all over with herb mixture.',
      'Nestle chicken thighs skin-side up over the vegetables.',
      'Roast 40–45 min until chicken skin is golden and internal temperature reaches 165°F (74°C).',
      'Rest 5 min before serving.',
    ],
  },
  {
    id: 6,
    category: 'Dinner',
    title: 'Thai Coconut Shrimp Curry',
    time: '35 min',
    serves: '4',
    description: 'Fragrant red curry with plump shrimp, tender vegetables, and jasmine rice — warming and dairy-free.',
    ingredients: [
      '1 lb large shrimp, peeled and deveined',
      '2 tbsp coconut oil',
      '3 tbsp red curry paste',
      '2 cans (14 oz each) coconut milk',
      '1 cup chicken broth (or vegetable broth)',
      '1 red bell pepper, sliced',
      '1 cup snap peas',
      '1 zucchini, sliced',
      '2 tbsp fish sauce',
      '1 tbsp lime juice',
      '1 tsp brown sugar',
      'Fresh basil and cilantro to serve',
      'Jasmine rice for serving',
    ],
    steps: [
      'Heat coconut oil in a large pot or wok over medium heat.',
      'Fry curry paste 1–2 min until fragrant.',
      'Add coconut milk and broth; stir to combine and bring to a simmer.',
      'Add bell pepper, snap peas, and zucchini. Cook 5 min.',
      'Add shrimp; cook 3–4 min until pink and just cooked through.',
      'Season with fish sauce, lime juice, and sugar. Adjust to taste.',
      'Serve over jasmine rice with fresh basil and cilantro.',
    ],
  },
  {
    id: 7,
    category: 'Dinner',
    title: 'Vegetable & Chickpea Moroccan Tagine',
    time: '45 min',
    serves: '6',
    description: 'Warmly spiced plant-based tagine with chickpeas, sweet potato, and apricots over fluffy couscous.',
    ingredients: [
      '2 cans chickpeas, drained',
      '1 large sweet potato, cubed',
      '1 can (14 oz) diced tomatoes',
      '1 cup vegetable broth',
      '1 onion, diced',
      '3 cloves garlic, minced',
      '1 tsp cumin, 1 tsp coriander, 1 tsp cinnamon, 1/2 tsp turmeric',
      '1/4 tsp cayenne',
      '1/2 cup dried apricots, halved',
      '2 tbsp olive oil',
      'Salt and pepper',
      'Fresh cilantro and toasted almonds to serve',
      '2 cups couscous, prepared per package directions',
    ],
    steps: [
      'Heat olive oil in a large pot. Sauté onion 5 min; add garlic and spices, cook 1 min.',
      'Add sweet potato, tomatoes, broth, and apricots. Bring to a boil.',
      'Reduce heat, cover, and simmer 20 min until sweet potato is tender.',
      'Add chickpeas; cook 5 more min. Season with salt and pepper.',
      'Serve over couscous topped with cilantro and almonds.',
    ],
  },
  {
    id: 8,
    category: 'Snacks & Sides',
    title: 'Roasted Garlic Hummus',
    time: '40 min',
    serves: '8',
    description: 'Silky smooth hummus with roasted garlic, lemon, and olive oil — perfect with veggies or gluten-free crackers.',
    ingredients: [
      '2 cans (15 oz) chickpeas, drained (reserve liquid)',
      '1 head garlic',
      '3 tbsp tahini',
      '3 tbsp lemon juice',
      '1/4 cup olive oil + extra for drizzling',
      '1/2 tsp cumin',
      'Salt to taste',
      'Paprika and parsley for garnish',
    ],
    steps: [
      'Cut top off garlic head; drizzle with olive oil, wrap in foil, roast at 400°F (200°C) for 35 min. Squeeze out cloves when cool.',
      'Blend chickpeas, roasted garlic, tahini, lemon juice, and olive oil in a food processor.',
      'Add reserved chickpea liquid a tablespoon at a time until very smooth and creamy.',
      'Season with cumin and salt.',
      'Transfer to a bowl, drizzle with olive oil, and garnish with paprika and parsley.',
    ],
  },
  {
    id: 9,
    category: 'Snacks & Sides',
    title: 'Mango Avocado Salsa with Chicken Chips',
    time: '15 min',
    serves: '4',
    description: 'Fresh tropical salsa served with crispy baked chicken skin "chips" — a fun AGS-friendly party snack.',
    ingredients: [
      '1 large mango, diced',
      '1 avocado, diced',
      '1/2 red onion, finely diced',
      '1 jalapeño, seeded and minced',
      '2 tbsp fresh cilantro',
      '2 tbsp lime juice',
      'Salt to taste',
      'Chicken skin from 4 thighs (reserved)',
      '1 tsp olive oil',
      'Salt, pepper, garlic powder',
    ],
    steps: [
      'Preheat oven to 400°F. Lay chicken skins flat on a parchment-lined baking sheet.',
      'Brush with olive oil; season with salt, pepper, and garlic powder.',
      'Bake 20–25 min until golden and crispy. Let cool.',
      'Mix mango, avocado, red onion, jalapeño, cilantro, and lime juice. Season with salt.',
      'Serve salsa alongside chicken skin chips.',
    ],
  },
  {
    id: 10,
    category: 'Desserts',
    title: 'Dark Chocolate Avocado Mousse',
    time: '15 min + 1 hr chilling',
    serves: '4',
    description: 'Rich, dairy-free chocolate mousse made from ripe avocados and dark chocolate — no one will guess the secret!',
    ingredients: [
      '2 ripe avocados',
      '1/4 cup good-quality cocoa powder',
      '3 oz dark chocolate (70%+, dairy-free), melted',
      '1/4 cup maple syrup or agave',
      '1 tsp vanilla extract',
      'Pinch of sea salt',
      '3–4 tbsp almond or oat milk (for consistency)',
      'Fresh berries and mint to serve',
    ],
    steps: [
      'Melt chocolate in a double boiler or microwave in 30-second increments. Cool slightly.',
      'Blend avocado flesh, cocoa powder, maple syrup, vanilla, and salt until smooth.',
      'Stream in melted chocolate while blending. Adjust consistency with plant milk.',
      'Taste and adjust sweetness. Chill at least 1 hour.',
      'Serve in glasses topped with fresh berries and mint.',
    ],
  },
  {
    id: 11,
    category: 'Desserts',
    title: 'Strawberry Nice Cream',
    time: '10 min + freeze time',
    serves: '3',
    description: 'Two-ingredient frozen banana "ice cream" blended with fresh strawberries — naturally sweet and completely safe.',
    ingredients: [
      '4 ripe bananas, peeled, sliced, and frozen',
      '1 cup fresh or frozen strawberries',
      '1 tsp vanilla extract',
      'Pinch of salt',
      'Fresh strawberries and granola to serve (optional)',
    ],
    steps: [
      'Freeze banana slices in a single layer for at least 4 hours or overnight.',
      'Blend frozen bananas and strawberries in a food processor until smooth and creamy.',
      'Add vanilla and salt; blend again.',
      'Serve immediately as soft-serve, or freeze 30 more minutes for scoopable consistency.',
      'Top with fresh strawberries and granola if desired.',
    ],
  },
]

const categories = ['All', ...new Set(recipes.map(r => r.category))]

export default function Recipes() {
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = active === 'All' ? recipes : recipes.filter(r => r.category === active)

  return (
    <div>
      <PageHero
        icon={ChefHat}
        title="AGS-Friendly Recipes"
        subtitle="Delicious meals, snacks, and desserts crafted entirely without mammalian meat or byproducts."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map(recipe => (
              <div key={recipe.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.category}>{recipe.category}</span>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  <p className={styles.desc}>{recipe.description}</p>
                  <div className={styles.meta}>
                    <span><Clock size={14} /> {recipe.time}</span>
                    <span><Users size={14} /> Serves {recipe.serves}</span>
                  </div>
                </div>

                <button
                  className={styles.toggle}
                  onClick={() => setExpanded(expanded === recipe.id ? null : recipe.id)}
                >
                  {expanded === recipe.id ? 'Hide Recipe' : 'View Recipe'}
                </button>

                {expanded === recipe.id && (
                  <div className={styles.details}>
                    <h4>Ingredients</h4>
                    <ul className={styles.ingredients}>
                      {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                    <h4>Instructions</h4>
                    <ol className={styles.steps}>
                      {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
