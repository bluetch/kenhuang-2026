import Link from "next/link"

interface GalleryPhoto {
  url: string;
  name: string;
  img: string;
}

interface GalleryProps {
  photos: GalleryPhoto[];
  className?: string;
}

export const Gallery = ({ photos, className }: GalleryProps) => {
  return (
    <div className={`grid grid-cols-6 gap-4 ${className}`}>
      {photos.map((photo) => {
        return (
          <Link href={photo.url} key={`gallery-${photo.name}`} className="shadow-md p-2">
            <img src={photo.img} alt={photo.name} className="object-cover aspect-[4/3]" />
          </Link>
        )
      })}
    </div>
  )
}
