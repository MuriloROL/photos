"use client"

import { useEffect } from 'react';

type Props = {
    image: string;
    currentIndex: number;
    totalImages: number;
    onClose: () => void;
    onNavigate: (direction: 'prev' | 'next') => void;
}

export const Modal = ({ image, currentIndex, totalImages, onClose, onNavigate }: Props) => {
    // Fechar modal com ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        // Prevenir scroll do body quando modal está aberto
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
            onClick={handleBackdropClick}
        >
            {/* Backdrop com blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
            
            {/* Conteúdo do modal */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8">
                {/* Botão fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 dark:bg-gray-900/30 backdrop-blur-md hover:bg-white/20 dark:hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Fechar"
                >
                    <svg 
                        className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:rotate-90 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>

                {/* Imagem */}
                <div className="relative max-w-[95vw] max-h-[95vh] animate-fade-in-scale">
                    <img 
                        src={`/assets/${image}`} 
                        alt={`Imagem ${currentIndex + 1}`}
                        className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl"
                    />
                </div>

                {/* Controles de navegação */}
                {totalImages > 1 && (
                    <>
                        {/* Botão anterior */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNavigate('prev');
                            }}
                            className="absolute left-4 sm:left-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 dark:bg-gray-900/30 backdrop-blur-md hover:bg-white/20 dark:hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center group"
                            aria-label="Imagem anterior"
                        >
                            <svg 
                                className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:-translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M15 19l-7-7 7-7" 
                                />
                            </svg>
                        </button>

                        {/* Botão próximo */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onNavigate('next');
                            }}
                            className="absolute right-4 sm:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 dark:bg-gray-900/30 backdrop-blur-md hover:bg-white/20 dark:hover:bg-gray-900/50 transition-all duration-300 flex items-center justify-center group"
                            aria-label="Próxima imagem"
                        >
                            <svg 
                                className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M9 5l7 7-7 7" 
                                />
                            </svg>
                        </button>
                    </>
                )}

                {/* Indicador de imagem atual */}
                {totalImages > 1 && (
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-full px-4 py-2">
                        <span className="text-white text-sm sm:text-base font-medium">
                            {currentIndex + 1} / {totalImages}
                        </span>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}