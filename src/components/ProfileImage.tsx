import { useState, useEffect } from "react";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

interface ProfileImageProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

const ProfileImage = ({ imageSrc, alt, className = "" }: ProfileImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);

        // Fetch the image
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        
        // Load image
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
        
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
        // Fallback to original image
        setProcessedImageUrl(imageSrc);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup URL when component unmounts
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [imageSrc]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted rounded-lg`}>
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <span className="text-sm text-muted-foreground">Processing image...</span>
        </div>
      </div>
    );
  }

  if (error && !processedImageUrl) {
    return (
      <div className={`${className} flex items-center justify-center bg-muted rounded-lg`}>
        <span className="text-sm text-muted-foreground">Failed to load image</span>
      </div>
    );
  }

  return (
    <img
      src={processedImageUrl || imageSrc}
      alt={alt}
      className={`${className} object-cover`}
    />
  );
};

export default ProfileImage;