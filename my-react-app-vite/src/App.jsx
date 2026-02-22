import { useState } from 'react';
import productosData from './components/ventas.json';
import ProductCard from './components/ProductCard.jsx'; 
import './App.css';

function App() {
  // es la memoria a coto plazo por asi decirlo
  const [carrito, setCarrito] = useState([]);

  // agregar al carrito
  const agregarAlCarrito = (prod) => {
    // Usamos Date.now() para que cada item sea único aunque sea el mismo producto
    setCarrito([...carrito, { ...prod, idCarrito: Date.now() }]);
  };

  // eliminar del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.idCarrito !== id));
  };

  // Calculamos el total (Lógica reflexiva)
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="layout-sekhmet bg-dark text-white min-vh-100"> 
      <header className="p-4 border-bottom border-secondary">
        <h1 className="text-info text-center">Sekhmet Store - Coleccionables</h1>
      </header>

      <main className="container mt-4">
        <div className="row">
          {/* Listado de Productos */}
          <section className="col-md-8">
            <div className="row g-3">
              {productosData.map(prod => (
                <div key={prod.id} className="col-md-6 col-lg-4">
                  <ProductCard producto={prod} agregarAlCarrito={agregarAlCarrito} />
                </div>
              ))}
            </div>
          </section>

          <aside className="col-md-4 border-start border-secondary px-4">
            <h3 className="text-info">🛒 Mi Carrito</h3>
            <hr className="border-secondary" />
            
            {carrito.length === 0 ? (
              <div className="alert alert-dark border-secondary text-muted">
                Tu carrito está vacío.
              </div>
            ) : (
              <>
                <ul className="list-group list-group-flush mb-3">
                  {carrito.map(item => (
                    <li key={item.idCarrito} className="list-group-item bg-dark text-white border-secondary d-flex justify-content-between align-items-center">
                      <div>
                        <small className="d-block">{item.titulo}</small>
                        <span className="text-info">${item.precio.toLocaleString()}</span>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-danger" 
                        onClick={() => eliminarDelCarrito(item.idCarrito)}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-secondary rounded shadow">
                  <h5>Total: ${total.toLocaleString()}</h5>
                  <button className="btn btn-warning w-100 mt-2" onClick={() => setCarrito([])}>
                    Vaciar Carrito
                  </button>
                  <button 
                    className="btn btn-success w-100 mt-2" 
                    onClick={() => alert("¡Gracias por comprar en Sekhmet!")}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;