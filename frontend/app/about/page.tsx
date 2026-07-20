import React from 'react';

export default function AboutPage() {
  const features = [
    { 
      title: 'Aman & Terpercaya', 
      description: 'Transaksi dilindungi dengan enkripsi data dan sistem verifikasi otomatis untuk keamanan akun pengguna.', 
      tag: 'Keamanan'
    },
    { 
      title: 'Proses Cepat', 
      description: 'Layanan pemrosesan otomatis yang memastikan item game milikmu dikirim dengan instan tanpa menunggu lama.', 
      tag: 'Performa'
    },
    { 
      title: 'Dukungan Responsif', 
      description: 'Tim bantuan yang siap membantu menyelesaikan masalah transaksi kapan saja dalam 24/7.', 
      tag: 'Layanan'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-web3-bg-primary to-web3-bg-secondary py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Tentang Fishit Marketplace</span>
          </h1>
          <p className="text-xl text-web3-text-secondary max-w-2xl mx-auto">
            Platform perdagangan item digital dan layanan game yang dirancang untuk kenyamanan pengguna
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-web3-accent-cyan to-web3-accent-purple mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="group glass-card rounded-2xl p-8 border border-white/10 hover:border-web3-accent-cyan/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-web3-accent-purple/20 text-web3-accent-purple border border-web3-accent-purple/30">
                    {feature.tag}
                  </span>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-web3-accent-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-web3-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 glass-card rounded-2xl p-10 border border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Misi Kami</h2>
          <p className="text-lg text-web3-text-secondary max-w-3xl mx-auto leading-relaxed">
            Kami berfokus menyediakan pengalaman marketplace terbaik bagi para gamer. 
            Platform ini menggabungkan teknologi modern dan infrastruktur yang andal 
            untuk menghadirkan transaksi yang cepat, aman, dan efisien.
          </p>
        </div>
      </div>
    </div>
  );
}
