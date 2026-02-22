// src/components/ProductCard.jsx
export default function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="card bg-dark text-light border-secondary h-100 shadow-sm">
      <img 
        src={producto.imagen} 
        className="card-img-top p-2" 
        alt={producto.altText} 
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title text-info">{producto.titulo}</h5>
        <p className="fw-bold fs-5">${producto.precio.toLocaleString()}</p>
        <button 
          className="btn btn-primary mt-auto"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}