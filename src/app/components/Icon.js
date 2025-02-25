import Image from "next/image";
const Icon = ({size=4,src,alt}) => {
    const className = `w-${size} h-${size} relative`;
    return (
        <div className={className}>
        <Image
        src={src}
        alt={alt}
        fill
        objectFit="cover"
        />
        </div>
    );
}

export const getStaticProps = async (ctx) => {


    return {
        props:{
            data:null
        }
    }
}

export default Icon;