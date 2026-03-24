import { AlertTriangle } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'

const primaryAvoid = [
  'Beef (all cuts, ground, organ meats)',
  'Pork (bacon, ham, sausage, lard)',
  'Lamb & mutton',
  'Venison & other game meats',
  'Bison / Buffalo',
  'Veal',
  'Goat',
  'Rabbit',
  'Kangaroo & other marsupials',
  'Squirrel, bear, and other wild game',
]

const hiddenSources = [
  { title: 'Gelatin', body: 'Derived from pork or beef collagen. Found in gummies, marshmallows, Jell-O, some yogurts, capsule medications, and vaccine stabilizers.' },
  { title: 'Dairy Products (variable)', body: 'Cow\'s, goat\'s, sheep\'s milk and their derivatives (cheese, butter, cream, whey) contain alpha-gal in varying amounts. Some AGS patients tolerate dairy; others do not.' },
  { title: 'Lard & Tallow', body: 'Animal fats used in traditional cooking, pie crusts, frying, and some restaurant foods. Often unlabeled.' },
  { title: 'Carmine / Cochineal Extract (E120)', body: 'A red dye made from insects — not a mammal source, but some AGS patients react. Always check with your allergist.' },
  { title: 'Isinglass', body: 'A fining agent made from fish bladders, used in some beers and wines — not a mammal product, but check with your physician.' },
  { title: 'Some Medications & Supplements', body: 'Certain medications use porcine gelatin in capsules, or bovine/porcine-derived excipients. Heparin, some vaccines, and thyroid medications may contain mammalian products. Always inform your pharmacist.' },
  { title: 'Collagen Supplements', body: 'Usually derived from bovine or porcine hide. Marine (fish) collagen is an alternative for AGS patients who tolerate fish.' },
  { title: 'Broth & Stock', body: 'Beef broth, bone broth, veal stock, and pork-based soups. Read restaurant menus carefully — many sauces and soups use meat stocks.' },
  { title: 'Rennet in Cheese', body: 'Traditional animal rennet is derived from calf stomachs. Microbial or vegetable rennet are alternatives.' },
  { title: 'Suet & Drippings', body: 'Beef or mutton kidney fat used in traditional baking (e.g., mincemeat, British puddings).' },
]

const crossContaminationKitchen = [
  {
    title: 'Cutting Boards',
    body: 'Use a dedicated cutting board exclusively for AGS-safe foods. Wood boards are especially hard to fully decontaminate — opt for separate color-coded plastic or glass boards. Never use a board that has touched raw or cooked mammalian meat without thorough washing with hot soapy water first.',
  },
  {
    title: 'Knives & Utensils',
    body: 'Knives, tongs, spatulas, and serving spoons that have touched meat can transfer alpha-gal residue. Wash thoroughly with hot soapy water between uses, or keep a dedicated set of utensils for AGS-safe cooking. Rinse water alone is not sufficient.',
  },
  {
    title: 'Grills & Grill Grates',
    body: 'Grill grates that have been used for burgers, steak, or pork retain fat and protein residue even after burning off. For highly sensitive individuals, a dedicated grill or grill pan for AGS-safe foods (chicken, fish, vegetables) is strongly recommended. At minimum, use heavy-duty foil as a barrier.',
  },
  {
    title: 'Pots, Pans & Baking Dishes',
    body: 'Residual fats from cooking beef, pork, or lamb can linger in cast iron and porous cookware even after washing. Cast iron in particular retains seasoning from previous cooks. Designate separate pots and pans for AGS-safe meals, or use stainless steel and non-stick that can be fully cleaned.',
  },
  {
    title: 'Shared Cooking Oil & Fryers',
    body: 'Oil used to fry or sauté mammalian meat becomes contaminated and should never be reused for AGS-safe cooking. In restaurants, shared fryer oil is a significant hidden risk — always ask whether the fryer is shared with meat products.',
  },
  {
    title: 'Butter & Animal Fats',
    body: 'Butter used to baste meat or cook red meat should not be reused for AGS-safe foods. Even a small amount of pan drippings stirred into vegetables or pasta can trigger a reaction in sensitive individuals. Use fresh, dedicated plant-based oil or butter for AGS-safe dishes.',
  },
  {
    title: 'Marinades & Sauces',
    body: 'Never use a marinade that has been in contact with red meat as a sauce or dip. Even after cooking, the marinade contains alpha-gal proteins. Basting brushes used on meat should be washed before touching AGS-safe foods.',
  },
  {
    title: 'Colanders & Strainers',
    body: 'Draining pasta or vegetables in a colander previously used to drain ground beef is a real contamination risk. Keep a separate colander or wash thoroughly with hot soapy water and rinse well.',
  },
  {
    title: 'Countertops & Prep Surfaces',
    body: 'Raw meat juices can spread across countertops. Wipe down all prep surfaces with hot soapy water — not just a damp cloth — before preparing AGS-safe foods. Pay attention to areas around the sink and stove.',
  },
  {
    title: 'Hands',
    body: 'Wash hands thoroughly with soap and water after handling any mammalian meat before touching AGS-safe ingredients. This is especially important when cooking a mixed meal for both AGS and non-AGS guests.',
  },
]

const crossContaminationDining = [
  {
    title: 'Restaurant Fryers',
    body: 'Shared fryer oil is one of the most common hidden risks when dining out. French fries cooked in the same oil as chicken-fried steak or fried pork rinds can carry alpha-gal. Always ask your server explicitly.',
  },
  {
    title: 'Deli Slicers',
    body: 'Deli slicers used for both meat and cheeses or vegetables are rarely fully cleaned between uses. Request that your items be cut with a freshly cleaned slicer, or choose pre-packaged options.',
  },
  {
    title: 'Shared Serving Utensils',
    body: 'At buffets or family-style meals, serving spoons from meat dishes are frequently placed in vegetable or side dishes. Opt for untouched items or bring your own serving utensil.',
  },
  {
    title: 'Restaurant Pans & Flat-Top Grills',
    body: 'Commercial flat-top grills are cooked on by dozens of items simultaneously. Chicken or fish placed on the same surface as burgers picks up drippings. Ask whether a clean section or separate pan can be used.',
  },
  {
    title: 'Sauces, Gravies & Stocks',
    body: 'Many restaurant sauces, soups, and side dishes are built on meat-based stocks — even when they don\'t appear to be "meat dishes." Mashed potatoes with butter, green beans with bacon drippings, and risotto with bone broth are common examples. Always ask about the base.',
  },
  {
    title: 'Shared Pasta Water & Cooking Liquid',
    body: 'In some restaurant kitchens, pasta is boiled in water shared with meat-based additions, or vegetables are blanched in the same stock used for meat. Ask about preparation methods when in doubt.',
  },
]

export default function FoodsToAvoid() {
  return (
    <div>
      <PageHero
        icon={AlertTriangle}
        title="Foods to Avoid"
        subtitle="Alpha-gal is found in mammalian tissues. Avoiding it requires vigilance beyond just skipping steak — hidden sources are everywhere."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.callout} style={{ marginTop: 0, marginBottom: '2rem', borderColor: '#fca5a5', background: 'var(--red-50)' }}>
            <h3 style={{ color: 'var(--red-600)' }}>Individual Sensitivity Varies</h3>
            <p>
              Not all AGS patients react to all mammalian products equally. Some tolerate dairy;
              others react severely to trace amounts. Always identify your personal triggers with
              the help of a board-certified allergist and IgE testing. The lists below reflect
              <strong> known alpha-gal-containing products</strong> — consult your doctor before
              determining what is safe for you specifically.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>Primary Foods to Avoid</h2>
          <div className={styles.tagGrid}>
            {primaryAvoid.map(food => (
              <span key={food} className={`${styles.tag} ${styles.avoid}`}>{food}</span>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Hidden & Unexpected Sources</h2>
          <div className={styles.cards}>
            {hiddenSources.map(({ title, body }) => (
              <div key={title} className={`${styles.card} ${styles.danger}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Cross-Contamination — In Your Kitchen</h2>
          <div className={styles.callout} style={{ marginBottom: '1.25rem', borderColor: '#fcd34d', background: 'var(--amber-100)' }}>
            <h3 style={{ color: 'var(--amber-600)' }}>Cooking for Someone with AGS?</h3>
            <p>
              Alpha-gal proteins can transfer from meat to safe foods through shared surfaces,
              cookware, oils, and utensils. For highly sensitive individuals, even small residual
              amounts can trigger a reaction. If you are cooking a mixed meal, prepare AGS-safe
              dishes <strong>first</strong>, before handling any mammalian meat, and use dedicated
              equipment wherever possible.
            </p>
          </div>
          <div className={styles.cards}>
            {crossContaminationKitchen.map(({ title, body }) => (
              <div key={title} className={`${styles.card} ${styles.warning}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Cross-Contamination — Dining Out</h2>
          <div className={styles.cards}>
            {crossContaminationDining.map(({ title, body }) => (
              <div key={title} className={`${styles.card} ${styles.warning}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className={styles.callout}>
            <h3>Reading Labels</h3>
            <p>
              Look for: beef, pork, veal, lamb, venison, game meat, lard, tallow, gelatin, suet,
              carmine, cochineal, natural flavor (may be animal-derived), rennet, whey, casein, and
              "contains: milk." When in doubt about a product, contact the manufacturer directly to
              confirm the source of ingredients.
            </p>
            <p>
              <strong>Watch for hidden mammalian fats and proteins in the macro nutrients:</strong> The
              nutrition label may show fat or protein totals without revealing their source. Ingredients
              to flag include <strong>mono and diglycerides</strong> (emulsifiers commonly derived from
              animal fat, found in bread, peanut butter, margarine, and coffee creamers),{' '}
              <strong>stearic acid</strong> and <strong>sodium stearoyl lactylate</strong> (animal fat
              derivatives in baked goods and candy), <strong>glycerin / glycerol</strong> (can be
              animal-derived, appears in many processed foods and medications), and{' '}
              <strong>hydrolyzed beef or pork protein</strong> (listed as "flavor" or "flavor enhancer"
              in soups, chips, and seasonings).
            </p>
            <p>
              Pay special attention to the <strong>"contains less than 2% of..."</strong> line at the
              end of ingredient lists — this is where lard, tallow, and other animal fats are commonly
              tucked away in crackers, chips, biscuits, and refried beans. Also watch for{' '}
              <strong>collagen peptides</strong> and <strong>hydrolyzed collagen</strong>, increasingly
              common in protein powders and "wellness" drinks, which are derived from mammalian
              connective tissue.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
