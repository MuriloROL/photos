import { Photo } from "@/types/photo"

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({photo, onClick}: Props) => {
    return (
        <div 
            onClick={onClick} 
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-2"
        >
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={`/assets/${photo.url}`} 
                    alt={`Foto ${photo.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                />
                {/* Overlay sutil no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Indicador de hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg 
                            className="w-6 h-6 text-gray-800 dark:text-gray-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}