"use client"

import React, { useState } from 'react';
import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photolist";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (id:number) => {
    const photoIndex = photoList.findIndex(item => item.id === id);
    if(photoIndex !== -1){
      setCurrentIndex(photoIndex);
      setImageOfModal(photoList[photoIndex].url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const navigateModal = (direction: 'prev' | 'next') => {
    let newIndex = currentIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % photoList.length;
    } else {
      newIndex = (currentIndex - 1 + photoList.length) % photoList.length;
    }
    setCurrentIndex(newIndex);
    setImageOfModal(photoList[newIndex].url);
  }

  return(
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <header className="mb-16 animate-fade-in">
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4">
          Fotos Intergalácticas
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Explore nossa coleção de imagens espaciais
        </p>
      </header>

      <section className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {photoList.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <PhotoItem
                photo={item}
                onClick={() => openModal(item.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {showModal && 
        <Modal 
          image={imageOfModal}
          currentIndex={currentIndex}
          totalImages={photoList.length}
          onClose={closeModal}
          onNavigate={navigateModal}
        />
      }
    </div>
  )
}

export default Page;
