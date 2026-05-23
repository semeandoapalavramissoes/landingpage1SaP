import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display leading-tight mb-6" style={{ color: 'var(--color-primary)' }}>
            Semeando a Palavra
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8">
            Levando esperança, ensino bíblico e ações missionárias para comunidades ao redor do mundo.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="btn btn-primary"><Play size={16}/> Assistir Ao Vivo</a>
            <a href="#" className="btn btn-outline">Conhecer os Projetos</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
