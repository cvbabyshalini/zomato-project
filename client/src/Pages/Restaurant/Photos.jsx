import React, {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';

// components
import PhotoCollection from '../../Components/Restaurant/PhotosCollection';

const Photos = () => {
    const [photos, setPhotos] = useState(["https://b.zmtcdn.com/data/pictures/5/19667425/b955834a8b225850059110523337d27d.jpg",
    "https://b.zmtcdn.com/data/pictures/5/19667425/eabe6744286fb002e60cce8724f4cbee.jpg", 
    "https://b.zmtcdn.com/data/pictures/5/19667425/e2ba9b7f4ea92834afaaa2409e6ada64.jpg"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={photos}
                    currentIndex={CurrentImg}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeViewer}
                />
            )}

            <div className="flex flex-wrap gap-2">
            {
                photos.map((photo) => 
                <PhotoCollection
                    image={photo}
                    openViewer={openViewer}
                />
                )
            }
            </div>
        </>
    )
}

export default Photos
