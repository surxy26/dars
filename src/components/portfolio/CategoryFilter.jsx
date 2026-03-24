function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm transition ${
            activeCategory === category
              ? "bg-white text-black"
              : "border border-white/10 bg-white/5 text-neutral-300 hover:border-white/30 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;