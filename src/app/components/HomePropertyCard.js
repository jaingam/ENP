import Image from "next/image";
import Icon from "./Icon";
import Link from "next/link";
const HomePropertyCard = ({ id, imageSrc, name, category, distance, location, accommodities, rating, monthlyRent }) => {

    return (
        <Link href={`/property/${id}`}>
            <div className="p-[7px] flex flex-col h-[248px] w-[300px] border border-[#d9d9d9] rounded-[20px] bg-white gap-y-[13px]">

                <div className="relative h-[159px] w-[286px]">

                    <div className="card-image absolute h-[159px] w-[286px] rounded-[20px] overflow-hidden z-0">
                        <Image
                            src={imageSrc}
                            alt={name}
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className="z-10 absolute inline-block bg-white fill-white m-0 px-2 py-1 top-2 left-[10px] h-6 rounded-[20px]">
                        <div className="flex flex-row gap-x-1 flex-">
                            <div className="w-4 h-4">
                                <Icon size={4}
                                    src={category.imgSrc}
                                    alt={category.name}
                                />
                            </div>
                            <div className="z-10 text-[10px] text-[#333333]">{category.name}</div>
                        </div>
                    </div>
                    <div className="z-10 absolute inline-block bg-white fill-white px-2 py-1 top-2 right-[10px] h-6 rounded-[20px]">

                        <div className="z-10 text-[10px] text-[#333333]">{distance}</div>

                    </div>
                </div>
                <div className="card-info flex flex-row max-w-full content-between justify-between">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-sm  font-bold text-[#333333]">
                            {name}
                        </div>
                        <div className=" text-xs font-medium text-[#777777]">
                            {location}
                        </div>
                        <div className="h-4 flex flex-row gap-x-1">
                            {/* <div className="w-[55px] h-[55px] border border-custom-blue"> */}
                            {accommodities.map((icon, i) =>
                            (
                                <Icon
                                    key={i}
                                    src={icon.imgSrc}
                                    alt={icon.alt}
                                    // size={8}
                                    size={4}
                                />
                            ))}



                            {/* </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 items-end justify-between">
                        <div className="flex flex-row items-center">
                            <div className="h-3 w-3">
                                <Icon src="https://img.icons8.com/?size=100&id=tf9WJOzzs4Wo&format=png&color=FCC419"
                                 size={3}
                                 alt={"rating"}/>
                            </div>

                            <div className="text-center text-xs text-[#777777]">
                                {rating}

                            </div>
                        </div>
                        <div className="text-center text-xl font-bold text-[#333333]">
                            ฿ {monthlyRent} / Month
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
}

export default HomePropertyCard;

