const Menu = [
    {
        id: 1,
        image: "https://www.pillsbury.in/wp-content/uploads/2021/09/Chocolate-Pancake.jpg",
        name: "Pancakes",
        category: "Breakfast",
        price: 200,
        description: "Pancakes are a popular breakfast dish, known for their soft, fluffy texture and slightly sweet flavor. They are made by cooking a batter of flour, eggs, milk, and baking powder on a hot griddle or frying pan. Pancakes are typically round and golden-brown, with a light, airy interior. They can be served plain or topped with a variety of ingredients such as maple syrup, butter, fresh fruits, whipped cream, or even chocolate chips. Pancakes can also be made with added flavors like vanilla, cinnamon, or blueberries to enhance their taste. In different cultures, pancakes might be thicker or thinner, sweet or savory, but they all share the same basic concept: a delicious, versatile dish perfect for breakfast or brunch."
    },
    {
        id: 2,
        image: "https://mojo.generalmills.com/api/public/content/RmBOM26XfUG7xvDxvoBwsw_webp_base.webp?v=4a8fdfe1&t=3653fe2f5ecd4a47a5a51c97e429947c",
        name: "Waffles",
        category: "Breakfast",
        price: 200,
        description: "Waffles are a beloved breakfast dish known for their crispy, golden exterior and soft, airy interior. They are made from a batter similar to pancakes but are cooked in a waffle iron, which gives them their distinctive grid pattern. This texture allows them to hold toppings like syrup, butter, whipped cream, and fresh fruits in their little pockets. Waffles can vary in thickness and flavor, with some being light and crispy, while others are thicker and more cake-like. They can also be savory, incorporating ingredients like cheese or herbs, but the classic waffle is typically sweet, often served with maple syrup and butter. Waffles are enjoyed worldwide, with variations like Belgian waffles being particularly popular, known for their deep pockets and light, fluffy texture."
    },
    {
        id: 3,
        image: "https://realfood.tesco.com/media/images/1400x919-Tesco-5For15-13273-RainbowOmelette-b3f0c3cc-2f15-40a7-98b1-07af0609f99e-0-1400x919.jpg",
        name: "Omelette",
        category: "Breakfast",
        price: 200,
        description: "An omelette is a classic breakfast dish made from beaten eggs that are cooked in a frying pan until they form a soft, firm texture. Eggs are typically seasoned with salt & pepper, and omelette can be filled with a variety of ingredients, such as cheese, vegetables, herbs, and meats like ham or bacon. Omelettes can be customized in countless ways, making them a versatile dish. Common fillings include sautéed mushrooms, bell peppers, onions, spinach, tomatoes, & various cheeses like cheddar, feta, or mozzarella. Fillings are either folded into omelette as it cooks or added on top just before it is folded in half or rolled up. Whether simple or loaded with ingredients, an omelette is a quick and easy dish that’s packed with protein & flavor."
    },
    {
        id: 4,
        image: "https://madscookhouse.com/wp-content/uploads/2021/12/Grilled-Fried-Chicken-Sandwich-1024x516.jpg",
        name: "Sandwich",
        category: "Lunch",
        price: 200,
        description: "A sandwich is a versatile meal made by placing ingredients between slices of bread or within a roll. The bread options range from whole grain and sourdough to ciabatta and baguettes, serving as a base for a variety of fillings. Common choices include meats like turkey, ham, or chicken; cheeses such as cheddar or Swiss; and vegetables like lettuce, tomato, and cucumber. Condiments like mayonnaise, mustard, or pesto often add extra flavor. Sandwiches can be enjoyed cold or grilled, offering different textures and tastes. They are highly customizable, making them ideal for a quick lunch or a more elaborate meal, often paired with sides like chips, pickles, or a salad."
    },
    {
        id: 5,
        image: "https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg",
        name: "Fish Tacos",
        category: "Lunch",
        price: 200,
        description: "Fish Tacos are a vibrant and delicious dish consisting of grilled or fried fish fillets served in soft or crispy tortillas. The fish is often seasoned with spices like cumin and paprika, then cooked to a crispy or tender texture. They are typically topped with fresh, crunchy ingredients such as shredded cabbage or slaw, diced tomatoes, avocado slices, and a zesty crema or tangy sauce. Garnished with lime wedges, Fish Tacos offer a burst of flavor with every bite, combining savory, tangy, and creamy elements. They are a popular choice for a light, yet satisfying meal with a refreshing twist.  Fish Tacos offer a light yet satisfying meal with a blend of textures and flavors."
    },
    {
        id: 6,
        image: "https://images.getrecipekit.com/20220225134810-recipes-2x1_pizza-2.jpeg?aspect_ratio=16:9&quality=90&",
        name: "Margherita Pizza",
        category: "Lunch",
        price: 200,
        description: "Margherita Pizza is a classic Italian pizza known for its simple yet delicious combination of fresh ingredients. The base is a thin, crispy pizza dough topped with a layer of tangy tomato sauce, often made from ripe tomatoes, garlic, and olive oil. It is then generously covered with slices of creamy mozzarella cheese, which melt beautifully during baking. The pizza is finished with a scattering of fresh basil leaves, adding a fragrant and vibrant touch. A drizzle of extra-virgin olive oil and a sprinkle of sea salt or black pepper complete the dish. Margherita Pizza celebrates the basic yet harmonious flavors of Italy, offering a satisfying balance of rich tomato, gooey cheese, and aromatic basil."
    },
    {
        id: 7,
        image: "https://www.oldelpaso.ie/-/media/project/gmi/oldelpaso/oldelpaso-ie/oepp/ie-recipes/new-fajita-gluten-free-hero.png?h=450&iar=0&w=800&rev=63d0d1e0c17b4d7ca0e473c7bec7417d&hash=EC6AF5E27CB4BE5AEAF65E0B03D56B07",
        name: "Fajitas",
        category: "Evening",
        price: 200,
        description: "Fajitas are a popular Tex-Mex dish featuring grilled strips of meat, typically chicken, beef, or shrimp, served with sautéed bell peppers and onions. The meat and vegetables are seasoned with a blend of spices, including chili powder, cumin, and paprika, giving them a savory and slightly smoky flavor. Fajitas are traditionally served with warm flour or corn tortillas, which are used to wrap the fillings. Accompaniments like guacamole, salsa, sour cream, and shredded cheese are often provided, allowing for customization. The combination of sizzling meat and vibrant vegetables makes fajitas a flavorful, interactive meal that’s perfect for sharing and enjoying with a variety of toppings."
    },
    {
        id: 8,
        image: "https://lede-admin.appetitomagazine.com/wp-content/uploads/sites/53/2023/08/Appetito_DonAngieCookbook_BakedZiti_2695.jpg?w=1280",
        name: "Baked Ziti",
        category: "Evening",
        price: 200,
        description: "The Baked Ziti is a comforting Italian-American dish made with ziti pasta, marinara sauce, and a blend of cheeses. The ziti pasta is cooked until al dente and then mixed with a rich, flavorful tomato sauce, often enriched with ground meat, such as beef or sausage. This mixture is combined with ricotta cheese and layered with mozzarella and Parmesan before being baked. The dish is cooked in the oven until the cheese is bubbly and golden brown. Baked Ziti is known for its hearty, cheesy, and the savory flavors, making it a satisfying and popular choice for family meals and gatherings. Baked Ziti pairs well with a side of garlic bread or a fresh salad. Its tasty to eat."
    },
    {
        id: 9,
        image: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/02/chicken-alfredo-1102w.jpg",
        name: "Chicken Alfredo",
        category: "Evening",
        price: 200,
        description: "Chicken Alfredo is a creamy and indulgent pasta dish made with tender pieces of chicken breast cooked in a rich Alfredo sauce. The sauce is typically made from butter, heavy cream, and Parmesan cheese, creating a smooth, velvety texture that coats the pasta. The dish often features fettuccine noodles, though other pasta shapes can be used. The chicken is usually seasoned and sautéed until golden brown, then combined with the creamy sauce and pasta. Chicken Alfredo is often garnished with additional Parmesan cheese and fresh parsley for added flavor. This dish is known for its comforting, creamy richness and is a favorite for a hearty, satisfying meal."
    },
    {
        id: 10,
        image: "https://recipes.net/wp-content/uploads/2024/01/how-to-roast-a-whole-chicken-in-cuisinart-multi-cooker-1705635455.jpg",
        name: "Roast Chicken",
        category: "Dinner",
        price: 200,
        description: "Roast Chicken is a classic and comforting dish featuring a whole chicken seasoned with herbs, spices, & often garlic and lemon. Chicken is roasted in the oven until the skin is golden brown and crispy, while the meat inside remains tender and juicy. The cavity may be stuffed with aromatics like rosemary, thyme, and lemon slices, enhancing the flavor as it cooks. Basting the chicken with its own juices or butter ensures rich, moist meat. Roast Chicken is often served with roasted vegetables, potatoes, or a side of gravy. It’s a versatile dish, perfect for both weeknight dinners and special occasions, offering a satisfying, home-cooked meal."
    },
    {
        id: 11,
        image: "https://www.briannas.com/wp-content/uploads/2022/11/BRI-Beef-Stew-1-1200x800.png",
        name: "Beef Stew",
        category: "Dinner",
        price: 200,
        description: "Beef Stew is a hearty and comforting dish made by slow-cooking tender chunks of beef in a rich, savory broth. The beef is typically browned first to enhance its flavor, then simmered with vegetables like carrots, potatoes, onions, and celery. The broth, often enriched with beef stock, red wine, and tomato paste, thickens as it cooks, creating a robust, flavorful sauce that coats the meat and vegetables. Herbs like thyme, bay leaves, and rosemary are added to deepen the flavor. Beef Stew is a warm, satisfying meal, perfect for cold weather, and is often served with crusty bread or over mashed potatoes to soak up the delicious gravy."
    },
    {
        id: 12,
        image: "https://popmenucloud.com/cdn-cgi/image/width%3D1920%2Cheight%3D1920%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/goqsxmpn/56269bce-8aa0-421c-b27d-a8dc8b2381af.jpg",
        name: "Chicken Tikka",
        category: "Dinner",
        price: 200,
        description: "Chicken Tikka is a flavorful and popular South Asian dish featuring marinated chicken pieces that are grilled or baked to perfection. The chicken is typically marinated in a mixture of yogurt, lemon juice, and a blend of spices such as cumin, coriander, turmeric, and garam masala. This marinade imparts a deep, tangy, and spicy flavor to the chicken, while the yogurt helps to tenderize the meat. The marinated chicken is skewered and cooked over high heat, giving it a slightly charred, smoky taste. Chicken Tikka is often served with mint chutney, naan, or rice, making it a delicious and aromatic dish that’s perfect for any occasion."
    }
];

export default Menu;