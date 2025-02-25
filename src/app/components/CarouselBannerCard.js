import Image from "next/image";
const CarouselBannerCard = ({ imgSrc, alt }) => {
    return (
        <div className="relative card-image h-[158px] w-[340px] shrink-0 rounded-[15px] overflow-hidden snap-center">
           <div className=" h-[158px] w-[340px] rounded-[15px]">
            <Image
                src={imgSrc}
                alt={alt}
                fill
                objectFit="cover"
            />
           </div>
        </div>
    );
}

export default CarouselBannerCard;