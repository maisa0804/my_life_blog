export default function Label() {
  const categories = ["Travel", "Lifestyle", "Engineer", "Gadget", "Nomad"];
  return (
    <div
      className="w-full z-50 mt-20 font-playfair text-text-primary flex items-center overflow-hidden py-2 lg:py-4"
    >
      <div className="marquee">
        {[...categories, ...categories, ...categories].map((category, i) => (
          <h2 className="mx-4 lg:mx-6 h2" key={i}>{category}</h2>
        ))}
      </div>
    </div>
  );
}