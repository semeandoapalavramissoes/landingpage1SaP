import React from 'react'
import { Heart } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-transparent py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/src/assets/logo.png" alt="Semeando a Palavra" className="h-12 w-auto" />
          <span className="text-2xl font-display text-secondary">Semeando a Palavra</span>
        </div>
        <div>
          <button className="btn btn-primary shadow-goldGlow flex items-center gap-2">
            <Heart size={16} /> Doar Agora
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
