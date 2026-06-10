import { useState } from 'react';

const mockData = [
  'React',
  'Vue',
  'Angular',
  'Svelte',
  'Next.js',
  'Nuxt.js',
  'Gatsby',
  'Remix',
  'Astro',
  'Solid',
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = mockData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Search Filter</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search frameworks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <ul className="filtered-list">
        {filteredItems.map((item, index) => (
          <li key={index} className="filtered-item">{item}</li>
        ))}
        {filteredItems.length === 0 && <p className="empty-state">No items found.</p>}
      </ul>
    </div>
  );
}
