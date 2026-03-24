import { CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'

const categories = [
  {
    title: 'Poultry',
    items: ['Chicken (all cuts)', 'Turkey', 'Duck', 'Goose', 'Quail', 'Pheasant', 'Cornish hen', 'Chicken eggs', 'Duck eggs'],
  },
  {
    title: 'Seafood & Fish',
    items: ['Salmon', 'Tuna', 'Cod', 'Tilapia', 'Halibut', 'Trout', 'Sardines', 'Anchovies', 'Shrimp', 'Lobster', 'Crab', 'Scallops', 'Clams', 'Oysters', 'Mussels', 'Squid / Calamari', 'Octopus'],
  },
  {
    title: 'Vegetables',
    items: ['Leafy greens (spinach, kale, arugula)', 'Broccoli', 'Cauliflower', 'Carrots', 'Bell peppers', 'Tomatoes', 'Cucumbers', 'Zucchini', 'Eggplant', 'Mushrooms', 'Onions', 'Garlic', 'Sweet potatoes', 'Potatoes', 'Beets', 'Asparagus', 'Brussels sprouts', 'Celery'],
  },
  {
    title: 'Fruits',
    items: ['Apples', 'Bananas', 'Berries (all)', 'Oranges & citrus', 'Grapes', 'Mangoes', 'Pineapple', 'Watermelon', 'Peaches', 'Plums', 'Cherries', 'Pears', 'Avocado', 'Kiwi', 'Pomegranate'],
  },
  {
    title: 'Grains & Legumes',
    items: ['Rice (all varieties)', 'Oats', 'Quinoa', 'Wheat / Bread (no lard)', 'Pasta', 'Lentils', 'Chickpeas', 'Black beans', 'Kidney beans', 'Soybeans / Edamame', 'Peas', 'Corn / Maize'],
  },
  {
    title: 'Nuts & Seeds',
    items: ['Almonds', 'Walnuts', 'Pecans', 'Cashews', 'Pistachios', 'Macadamia nuts', 'Sunflower seeds', 'Pumpkin seeds', 'Chia seeds', 'Flaxseeds', 'Hemp seeds', 'Peanuts (technically a legume)'],
  },
  {
    title: 'Oils & Fats (Plant-Based)',
    items: ['Olive oil', 'Avocado oil', 'Coconut oil', 'Sunflower oil', 'Canola oil', 'Sesame oil', 'Flaxseed oil', 'Peanut oil', 'Plant-based butter alternatives'],
  },
  {
    title: 'Dairy Alternatives',
    items: ['Oat milk', 'Almond milk', 'Soy milk', 'Coconut milk', 'Rice milk', 'Cashew milk', 'Oat-based yogurt', 'Coconut yogurt', 'Soy-based cheese', 'Coconut cream'],
  },
  {
    title: 'Meat Substitutes',
    items: [
      'Tofu (firm, extra-firm, silken)',
      'Tempeh',
      'Seitan (wheat gluten — check for animal additives)',
      'Jackfruit (pulled "meat" texture)',
      'Portobello mushroom (steaks, burgers)',
      'King trumpet / oyster mushrooms',
      'Textured vegetable protein (TVP)',
      'Lentils (ground meat replacement)',
      'Chickpea-based products',
      'Cauliflower (steaks, "wings")',
      'Eggplant (cutlets, meatballs)',
      'Plant-based burgers / sausages (verify no mammalian-derived ingredients)',
    ],
  },
  {
    title: 'Herbs, Spices & Condiments',
    items: ['All fresh herbs', 'All dried spices (pure)', 'Soy sauce / Tamari', 'Mustard', 'Hot sauce', 'Vinegars', 'Ketchup (check gelatin)', 'Olive tapenade', 'Hummus', 'Salsa', 'Guacamole'],
  },
]

export default function SafeFoods() {
  return (
    <div>
      <PageHero
        icon={CheckCircle}
        title="Safe Foods for AGS"
        subtitle="A wide and delicious world of food remains open. Poultry, seafood, plant foods, and eggs are your AGS-friendly foundation."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.callout} style={{ marginTop: 0, marginBottom: '2rem' }}>
            <h3>Verify with Your Allergist</h3>
            <p>
              While the foods below are free of mammalian alpha-gal, individual tolerances differ.
              Some AGS patients react to dairy; others do not. Cross-contamination during processing
              or cooking can introduce alpha-gal. Always verify a food's source when eating out, and
              confirm your personal tolerance with testing and medical guidance.
            </p>
          </div>

          {categories.map(({ title, items }) => (
            <div key={title}>
              <h2 className={styles.sectionTitle}>{title}</h2>
              <div className={styles.tagGrid}>
                {items.map(item => (
                  <span key={item} className={`${styles.tag} ${styles.safe}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.callout}>
            <h3>Tips for Eating Out</h3>
            <p>
              Always inform your server about your allergy. Ask about shared cooking surfaces, stocks
              used in sauces, and whether any lard or animal fat is used in preparation. Many restaurants
              are happy to accommodate when given clear information. Consider calling ahead for fine dining,
              or bringing a laminated "allergy card" listing your restrictions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
